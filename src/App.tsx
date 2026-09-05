import { useEffect, useRef, useState } from 'react'
import { ContactPanel } from './components/ContactPanel'
import { ExperiencePanel } from './components/ExperiencePanel'
import { Header } from './components/Header'
import { ProfileSection } from './components/ProfileSection'
import { ProjectsPanel } from './components/ProjectsPanel'
import { Sidebar } from './components/Sidebar'
import { SkillsPanel } from './components/SkillsPanel'
import { fallbackData, getCommandOutput, navItems } from './data'

function App() {
  const [portfolio] = useState(fallbackData)
  const [theme, setTheme] = useState<'mono' | 'green'>('green')
  const [activeSection, setActiveSection] = useState('home')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [command, setCommand] = useState('')
  const [commandOutput, setCommandOutput] = useState<string[]>([])
  const commandInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
    if (favicon) favicon.href = theme === 'mono' ? '/terminal-favicon-mono.svg' : '/terminal-favicon.svg'
  }, [theme])

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsSidebarOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleCommand = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextCommand = command.trim().toLowerCase()
    if (!nextCommand) return

    if (nextCommand === 'clear') {
      setCommandOutput([])
      setCommand('')
      return
    }

    const requestedTheme = nextCommand === 'green' || nextCommand === 'mono'
      ? nextCommand
      : nextCommand.startsWith('theme ')
        ? nextCommand.slice(6).trim()
        : ''

    if (requestedTheme === 'green' || requestedTheme === 'mono') {
      setTheme(requestedTheme)
      setCommandOutput((current) => [...current, `$ ${nextCommand}`, `theme switched to ${requestedTheme}`])
      setCommand('')
      return
    }

    if (nextCommand === 'theme') {
      setCommandOutput((current) => [...current, '$ theme', `current theme: ${theme}. usage: theme green | theme mono`])
      setCommand('')
      return
    }

    const commands = getCommandOutput(portfolio)
    const section = nextCommand === 'about' ? 'home' : nextCommand
    const output = commands[nextCommand] ?? `command not found: ${nextCommand}. Try 'help'.`

    setCommandOutput((current) => [...current, `$ ${nextCommand}`, output])
    setCommand('')
    if (['home', 'skills', 'work', 'projects', 'contact'].includes(section)) {
      handleNavigate(section)
    }
  }

  return (
    <div className="min-h-screen w-full bg-[var(--bg)] font-mono text-[var(--text)]" data-theme={theme}>
      <Header theme={theme} onThemeChange={setTheme} onMenuToggle={() => setIsSidebarOpen((isOpen) => !isOpen)} />

      <main className="mt-4 grid min-h-[calc(100vh-79px)] grid-cols-[240px_minmax(0,1fr)] bg-white/[0.01] max-lg:block">
        <Sidebar items={navItems} activeId={activeSection} onNavigate={handleNavigate} isOpen={isSidebarOpen} />
        {isSidebarOpen && <button className="fixed inset-x-0 bottom-0 top-[95px] z-[19] block border-0 bg-black/60 max-lg:block" type="button" aria-label="Close navigation" onClick={() => setIsSidebarOpen(false)} />}

        <section className=" pb-7 max-[820px]:p-4 min-[821px]:px-7">
          <section className="relative mb-6 overflow-hidden rounded-[10px] border border-[var(--border)] bg-[#050505] shadow-[0_18px_50px_rgba(0,0,0,0.24)]" aria-label="Portfolio terminal">
            <div className="relative flex items-center gap-[7px] border-b border-[var(--border)] bg-white/[0.04] px-3.5 py-2.5">
              <span className="h-[9px] w-[9px] rounded-full bg-[#ff5f57]" />
              <span className="h-[9px] w-[9px] rounded-full bg-[#febc2e]" />
              <span className="h-[9px] w-[9px] rounded-full bg-[#28c840]" />
              <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.72rem] text-[var(--muted)]">abhishek@portfolio — bash</span>
            </div>
            <div className="grid min-h-[142px] cursor-text gap-2 p-[18px] text-[0.82rem] text-[var(--muted)]" onClick={() => commandInputRef.current?.focus()}>
              <div>Last login: today on portfolio.local</div>
              <div>Type <span className="font-bold text-[var(--accent)]">help</span> to explore.</div>
              {commandOutput.map((line, index) => (
                <div key={`${line}-${index}`} className={line.startsWith('$') ? 'text-[var(--text)]' : 'pl-[18px] text-[var(--accent)]'}>{line}</div>
              ))}
              <form className="mt-1 flex items-center gap-2.5" onSubmit={handleCommand}>
                <label className="font-bold text-[var(--accent)]" htmlFor="terminal-command">abhishek@portfolio:~$</label>
                <input
                  id="terminal-command"
                  ref={commandInputRef}
                  value={command}
                  onChange={(event) => setCommand(event.target.value)}
                  aria-label="Terminal command"
                  autoComplete="off"
                  spellCheck={false}
                  autoFocus
                  size={Math.max(command.length, 1)}
                  className="w-auto min-w-[1ch] flex-none border-0 bg-transparent p-0 text-[var(--text)] outline-none caret-[var(--accent)]"
                />
              </form>
            </div>
          </section>

          <ProfileSection portfolio={portfolio} />

          <div className="mt-5 grid grid-cols-1 gap-5">
            <SkillsPanel skills={portfolio.skills} />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5">
            <ExperiencePanel experience={portfolio.experience} />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5">
            <ProjectsPanel projects={portfolio.projects} />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5">
            <ContactPanel />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

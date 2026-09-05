import { Menu } from 'lucide-react'

type HeaderProps = {
  theme: 'mono' | 'green'
  onThemeChange: (theme: 'mono' | 'green') => void
  onMenuToggle: () => void
}

export function Header({ theme, onThemeChange, onMenuToggle }: HeaderProps) {
  return (
    <header className="relative mx-7 mt-[14px] flex min-h-[52px] items-center justify-between gap-4 rounded-[10px] border border-[var(--border)] bg-[#050505] px-3.5 py-2.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] shadow-[inset_0_0_20px_rgba(255,255,255,0.015)] max-[820px]:mx-2">
      <div className="flex items-center gap-2.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="font-bold text-[var(--accent)]">abhishek@portfolio</span>
        <span className="inline-block h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]" />
        <span>ONLINE</span>
      </div>
      {/* <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.72rem] normal-case text-[var(--muted)]">abhishek@portfolio — bash</span> */}
      <button className="order-2 ml-auto hidden border border-[var(--border)] bg-transparent p-1.5 text-[var(--text)] max-lg:inline-grid max-lg:place-items-center" type="button" aria-label="Toggle navigation" onClick={onMenuToggle}>
        <Menu aria-hidden="true" />
      </button>
      {/* <div className="order-3 flex items-center gap-2.5" aria-label="Theme switcher">
        {(['green', 'mono'] as const).map((option) => (
          <button
            key={option}
            type="button"
            className={`rounded-full border border-[var(--border)] bg-white/[0.01] px-2.5 py-1.5 font-inherit text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:border-[var(--accent)] focus-visible:text-[var(--accent)] ${theme === option ? 'border-[var(--accent)] text-[var(--accent)] shadow-[0_0_12px_var(--accent)]' : ''}`}
            onClick={() => onThemeChange(option)}
          >
            {option.toUpperCase()}
          </button>
        ))}
      </div> */}
    </header>
  )
}

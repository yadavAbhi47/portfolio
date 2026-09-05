import type { ProjectItem } from './types'

export function ProjectsPanel({ projects }: { projects: ProjectItem[] }) {
  return (
    <section id="projects" className="relative overflow-hidden rounded-[10px] border border-[var(--border)] bg-white/[0.012] p-[54px_20px_20px] shadow-[inset_0_0_20px_rgba(255,255,255,0.015)]">
      <div className="absolute inset-x-0 top-0 flex h-[34px] items-center gap-1.5 border-b border-[var(--border)] bg-white/[0.035] px-[14px]"><span className="h-2 w-2 rounded-full bg-[#ff5f57]" /><span className="h-2 w-2 rounded-full bg-[#febc2e]" /><span className="h-2 w-2 rounded-full bg-[#28c840]" /><span className="absolute left-1/2 -translate-x-1/2 text-[0.68rem] text-[var(--muted)]">abhishek@portfolio — bash</span></div>
      <h2 className="mb-3.5 text-[1.1rem] uppercase tracking-[0.08em] text-[var(--accent)] before:mr-1 before:text-[var(--muted)] before:content-['>_']">Projects</h2>
      <div className="mb-[18px] flex items-start gap-3 border-b border-dashed border-[var(--border)] pb-4 text-[0.78rem]"><span className="font-bold text-[var(--accent)]">abhishek@portfolio:~$</span><span className="text-[var(--text)]">ls projects/</span>
      </div>
      <ul className="grid gap-2.5 text-[0.92rem] text-[var(--muted)]">
        {projects.map((project) => (
          <li key={project.name} className="flex flex-col gap-1.5 border-b border-dashed border-[var(--border)] pb-2.5 last:border-0 last:pb-0">
            <strong className="text-[var(--text)] before:text-[var(--accent)] before:content-['./']">{project.name}</strong>
            <span>{project.summary}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

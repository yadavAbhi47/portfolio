import type { SkillGroup } from './types'

export function SkillsPanel({ skills }: { skills: SkillGroup[] }) {
  return (
    <section id="skills" className="relative overflow-hidden rounded-[10px] border border-[var(--border)] bg-white/[0.012] p-[54px_20px_20px] shadow-[inset_0_0_20px_rgba(255,255,255,0.015)]">
      <div className="absolute inset-x-0 top-0 flex h-[34px] items-center gap-1.5 border-b border-[var(--border)] bg-white/[0.035] px-[14px]"><span className="h-2 w-2 rounded-full bg-[#ff5f57]" /><span className="h-2 w-2 rounded-full bg-[#febc2e]" /><span className="h-2 w-2 rounded-full bg-[#28c840]" /><span className="absolute left-1/2 -translate-x-1/2 text-[0.68rem] text-[var(--muted)]">abhishek@portfolio — bash</span></div>
      <h2 className="mb-3.5 text-[1.1rem] uppercase tracking-[0.08em] text-[var(--accent)] before:mr-1 before:text-[var(--muted)] before:content-['>_']">Skills</h2>
      <div className="mb-[18px] flex items-start gap-3 border-b border-dashed border-[var(--border)] pb-4 text-[0.78rem]">
        <span className="font-bold text-[var(--accent)]">abhishek@portfolio:~$</span>
        <span className="text-[var(--text)]">ls skills/</span>
      </div>
      <div className="grid grid-cols-3 gap-4 max-[1100px]:grid-cols-2 max-[820px]:grid-cols-1">
        {skills.map((group) => (
          <div key={group.title} className="border border-white/[0.05] bg-white/[0.01] p-[14px_12px]">
            <h3 className="mb-3 text-[0.9rem] uppercase tracking-[0.08em] text-[var(--text)] before:text-[var(--accent)] before:content-['$_']">{group.title}</h3>
            <ul className="grid gap-2.5 text-[0.92rem] text-[var(--muted)]">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  )
}

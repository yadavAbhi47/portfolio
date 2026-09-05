import type { ExperienceItem } from './types'

export function ExperiencePanel({ experience }: { experience: ExperienceItem[] }) {
  return (
    <section id="work" className="relative overflow-hidden rounded-[10px] border border-[var(--border)] bg-white/[0.012] p-[54px_20px_20px] shadow-[inset_0_0_20px_rgba(255,255,255,0.015)]">
      <div className="absolute inset-x-0 top-0 flex h-[34px] items-center gap-1.5 border-b border-[var(--border)] bg-white/[0.035] px-[14px]"><span className="h-2 w-2 rounded-full bg-[#ff5f57]" /><span className="h-2 w-2 rounded-full bg-[#febc2e]" /><span className="h-2 w-2 rounded-full bg-[#28c840]" /><span className="absolute left-1/2 -translate-x-1/2 text-[0.68rem] text-[var(--muted)]">abhishek@portfolio — bash</span></div>
      <h2 className="mb-3.5 text-[1.1rem] uppercase tracking-[0.08em] text-[var(--accent)] before:mr-1 before:text-[var(--muted)] before:content-['>_']">Experience</h2>
      <div className="mb-[18px] flex items-start gap-3 border-b border-dashed border-[var(--border)] pb-4 text-[0.78rem]"><span className="font-bold text-[var(--accent)]">abhishek@portfolio:~$</span><span className="text-[var(--text)]">cat work.log</span>
      </div>
      {experience.map((job) => (
        <div key={`${job.company}-${job.title}`} className={`mt-3 border-t border-dashed border-[var(--border)] pt-3 first:mt-0 first:border-t-0 first:pt-0`}>
          <div className="mb-1 flex justify-between gap-3 max-[820px]:flex-col max-[820px]:items-start">
            <strong className="text-[var(--text)] before:text-[var(--accent)] before:content-['commit_']">{job.title}</strong>
            <span>{job.period}</span>
          </div>
          <em className="text-[var(--accent)] before:text-[var(--muted)] before:content-['@_']">{job.company}</em>
          <ul className="mt-2 list-disc space-y-1 pl-5 leading-[1.7] text-[var(--muted)]">
            {(Array.isArray(job.details) ? job.details : [job.details]).map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        </div>
      ))}
    </section>
  )
}

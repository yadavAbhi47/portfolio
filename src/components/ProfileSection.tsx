import type { ReactNode } from 'react'
import portraitPhoto from '../assets/profile-photo.png'
import type { Portfolio } from './types'

function TerminalLine({ command, children }: { command?: string; children?: ReactNode }) {
  return (
    <div className={`flex min-h-7 items-start gap-2.5 font-mono text-[0.8rem] ${command ? 'text-[var(--accent)]' : 'pl-1 text-[var(--muted)]'}`}>
      {command ? (
        <>
          <span className="font-bold text-[var(--accent)]">abhishek@portfolio:~$</span>
          <span className="text-[var(--text)]">{command}</span>
        </>
      ) : children}
    </div>
  )
}

export function ProfileSection({ portfolio }: { portfolio: Portfolio }) {
  return (
    <div id="about" className="relative mb-6 grid grid-cols-[1.4fr_0.7fr] items-center gap-6 overflow-hidden rounded-[10px] border border-[var(--border)] bg-white/[0.01] p-[56px_22px_22px] shadow-[inset_0_0_20px_rgba(255,255,255,0.015)] max-[820px]:grid-cols-1">
      <div className="absolute inset-x-0 top-0 flex h-[34px] items-center gap-1.5 border-b border-[var(--border)] bg-white/[0.035] px-[14px]">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" /><span className="h-2 w-2 rounded-full bg-[#febc2e]" /><span className="h-2 w-2 rounded-full bg-[#28c840]" /><span className="absolute left-1/2 -translate-x-1/2 text-[0.68rem] text-[var(--muted)]">abhishek@portfolio — bash</span>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <TerminalLine command="whoami" />
          <TerminalLine><span className="flex-[0_0_108px] text-[var(--accent)]">name</span><span className="min-w-0 break-words">{portfolio.name}</span></TerminalLine>
          <TerminalLine><span className="flex-[0_0_108px] text-[var(--accent)]">role</span><span className="min-w-0 break-words">{portfolio.role}</span></TerminalLine>
          <TerminalLine><span className="flex-[0_0_108px] text-[var(--accent)]">focus</span><span className="min-w-0 break-words">{portfolio.focus}</span></TerminalLine>
          <TerminalLine command="./build_profile --status" />
          <p className="my-[10px] mb-3 text-[0.86rem] leading-[1.7] text-[var(--muted)]">
            Full-stack software engineer with hands-on experience building, integrating, testing, and troubleshooting production web applications. Skilled in React, TypeScript, Java, Spring Boot, Django, FastAPI, REST APIs, microservices, PostgreSQL, MongoDB, authentication, and API state management. Experienced in database migrations, performance optimization, release support, and working closely with product, design, engineering, and QA teams to deliver reliable user-facing solutions.
          </p>
          <div className="mt-2 grid gap-0.5 border-t border-dashed border-[var(--border)] pt-2">
            <TerminalLine><span className="flex-[0_0_108px] text-[var(--accent)]">name</span><strong className="min-w-0 break-words font-normal text-[var(--text)]">{portfolio.name}</strong></TerminalLine>
            <TerminalLine><span className="flex-[0_0_108px] text-[var(--accent)]">role</span><strong className="min-w-0 break-words font-normal text-[var(--text)]">{portfolio.role}</strong></TerminalLine>
            <TerminalLine><span className="flex-[0_0_108px] text-[var(--accent)]">focus</span><strong className="min-w-0 break-words font-normal text-[var(--text)]">{portfolio.focus}</strong></TerminalLine>
            <TerminalLine><span className="flex-[0_0_108px] text-[var(--accent)]">interests</span><strong className="min-w-0 break-words font-normal text-[var(--text)]">{portfolio.interests.join(', ')}</strong></TerminalLine>
            <TerminalLine><span className="flex-[0_0_108px] text-[var(--accent)]">qualification</span><strong className="min-w-0 break-words font-normal text-[var(--text)]">{portfolio.qualification}</strong></TerminalLine>
            <TerminalLine><span className="flex-[0_0_108px] text-[var(--accent)]">status</span><strong className="min-w-0 break-words font-normal text-[var(--text)]">{portfolio.status}</strong></TerminalLine>
          </div>
        </div>
      </div>

      <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden border border-white/[0.06] bg-[var(--bg)] p-3.5 max-[820px]:min-h-[280px]" aria-label="Profile portrait">
        <div className="relative z-[1] flex aspect-square w-full max-w-[420px] items-center justify-center overflow-hidden border border-white/[0.04] bg-[var(--bg)]">
          <img className="block h-[150%] w-[150%] object-cover grayscale contrast-[var(--portrait-contrast)] brightness-90" src={portraitPhoto} alt="Abhishek Yadav portrait" />
        </div>
      </div>
    </div>
  )
}

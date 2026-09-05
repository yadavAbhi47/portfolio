import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa6'
import { SiGithub, SiLeetcode, SiWhatsapp } from 'react-icons/si'

const contactLinks = [
  { label: 'Call me', value: '+91 7234908495', icon: FiPhone, href: 'tel:+917234908495' },
  { label: 'WhatsApp', value: '+91 7234908495', icon: SiWhatsapp, href: 'https://wa.me/917234908495' },
  { label: 'Email', value: 'abhi.yadavh2o@gmail.com', icon: FiMail, href: 'mailto:abhi.yadavh2o@gmail.com' },
  { label: 'LinkedIn', value: 'Send a message on LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/abhishek-yadav-b48377256/' },
]

const socialLinks = [
  { label: 'GitHub', icon: SiGithub, href: 'https://github.com/yadavAbhi47' },
  { label: 'LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/abhishek-yadav-b48377256/' },
  { label: 'LeetCode', icon: SiLeetcode, href: 'https://leetcode.com/u/Abhishek_Yadav_leetcode/' },
  { label: 'Email', icon: FiMail, href: 'mailto:abhi.yadavh2o@gmail.com' },
]

export function ContactPanel() {
  return (
    <section id="contact" className="relative overflow-hidden rounded-[10px] border border-[var(--border)] bg-white/[0.012] p-[54px_20px_20px] shadow-[inset_0_0_20px_rgba(255,255,255,0.015)]">
      <div className="absolute inset-x-0 top-0 flex h-[34px] items-center gap-1.5 border-b border-[var(--border)] bg-white/[0.035] px-[14px]"><span className="h-2 w-2 rounded-full bg-[#ff5f57]" /><span className="h-2 w-2 rounded-full bg-[#febc2e]" /><span className="h-2 w-2 rounded-full bg-[#28c840]" /><span className="absolute left-1/2 -translate-x-1/2 text-[0.68rem] text-[var(--muted)]">abhishek@portfolio — bash</span></div>
      <h2 className="mb-3.5 text-[1.1rem] uppercase tracking-[0.08em] text-[var(--accent)] before:mr-1 before:text-[var(--muted)] before:content-['>_']">Contact</h2>
      <div className="mb-[18px] flex items-start gap-3 border-b border-dashed border-[var(--border)] pb-4 text-[0.78rem]"><span className="font-bold text-[var(--accent)]">abhishek@portfolio:~$</span><span className="text-[var(--text)]">cat contact.txt</span></div>
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-[34px] max-[1100px]:grid-cols-1">
        <div className="w-full">
          <p className="text-[1.15rem] font-bold leading-[1.5] text-[var(--text)]">Let&apos;s build something that lasts.</p>
          <p className="mt-2.5 leading-[1.7] text-[var(--muted)]">
            Currently seeking Full-Stack & AI Engineering opportunities. Interested in backend systems, AI integrations, and scalable web platforms. Feel free to reach out for collaborations or full-time roles.
          </p>
          <p className="mt-2.5 flex flex-wrap items-center gap-1.5 leading-[1.7] text-[var(--muted)]"><FiMapPin className="h-[18px] w-[18px] text-[var(--accent)]" aria-hidden="true" /> Noida, Uttar Pradesh <span className="px-1.5 text-[var(--accent)]" aria-hidden="true">•</span> Open to Remote &amp; On-site</p>
          <div className="mt-[18px] flex gap-3.5" aria-label="Social links">
            {socialLinks.map((social) => (
              <a key={social.label} className="grid h-14 w-14 place-items-center rounded-xl border border-[var(--border)] bg-[#080a12b3] text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]" href={social.href} target="_blank" rel="noreferrer" title={social.label} aria-label={social.label}>
                <social.icon className="h-[26px] w-[26px] text-[var(--accent)]" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid w-full gap-[26px] rounded-[18px] border border-[var(--border)] bg-black/[0.16] p-10 max-[600px]:p-5">
          <p className="leading-[1.7] text-[var(--muted)]">Prefer a direct conversation? Choose the channel that works best for you.</p>
          <div className="grid grid-cols-2 gap-5 max-[600px]:grid-cols-1">
            {contactLinks.map((contact) => (
              <a key={contact.label} className="flex min-h-[154px] flex-col items-start justify-between gap-3 rounded-[14px] border border-[var(--border)] bg-[#080a12b3] p-6 text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]" href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}>
                <contact.icon className="h-[26px] w-[26px] text-[var(--accent)]" aria-hidden="true" />
                <span className="text-[0.9rem] text-[var(--muted)]">{contact.label}</span>
                <strong className="text-base leading-[1.35] text-[var(--text)]">{contact.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

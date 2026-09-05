import type { NavItem } from './types'

type SidebarProps = {
  items: NavItem[]
  activeId: string
  onNavigate: (id: string) => void
  isOpen: boolean
}

export function Sidebar({ items, activeId, onNavigate, isOpen }: SidebarProps) {
  return (
    <aside className={`sticky top-5 ml-7 h-[calc(100vh-48px)] overflow-hidden rounded-[10px] border border-[var(--border)] bg-[#050505] shadow-[inset_0_0_20px_rgba(255,255,255,0.015)] max-lg:fixed max-lg:bottom-0 max-lg:left-0 max-lg:top-[95px] max-lg:z-20 max-lg:ml-0 max-lg:h-auto max-lg:w-[min(280px,82vw)] max-lg:transform max-lg:transition-transform max-lg:duration-200 ${isOpen ? 'max-lg:translate-x-0 max-lg:shadow-[18px_0_40px_rgba(0,0,0,0.35)]' : 'max-lg:-translate-x-[105%]'}`}>
      <div className="relative flex h-[34px] items-center gap-1.5 border-b border-[var(--border)] bg-white/[0.035] px-[14px]">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="absolute inset-x-0 truncate px-16 text-center text-[0.6rem] text-[var(--muted)]">abhishek@portfolio — bash</span>
      </div>
      <div className="p-[18px_12px]">
        <div className="px-2.5 pb-3.5 pt-1.5 text-[0.78rem] text-[var(--muted)]">/home/abhishek</div>
        <nav className="flex flex-col gap-2">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`flex w-full cursor-pointer items-center gap-2.5 border border-transparent bg-transparent px-3 py-2.5 text-left font-inherit text-[var(--text)] transition hover:translate-x-0.5 hover:border-[var(--border)] hover:text-[var(--accent)] ${item.id === activeId ? 'translate-x-0.5 border-[var(--border)] text-[var(--accent)]' : ''}`}
            onClick={() => onNavigate(item.id)}
            aria-current={item.id === activeId ? 'page' : undefined}
          >
            <span className="text-[0.72rem] text-[var(--muted)]">[{String(index + 1).padStart(2, '0')} ]</span>
            <span>{item.label}</span>
          </button>
        ))}
        </nav>
      </div>
    </aside>
  )
}

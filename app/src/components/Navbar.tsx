import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export const NAV_ITEMS = [
  { id: 'hero', label: 'Index', code: '00' },
  { id: 'mission', label: 'Mission', code: '01' },
  { id: 'capabilities', label: 'Capabilities', code: '02' },
  { id: 'services', label: 'Services', code: '03' },
  { id: 'careers', label: 'Careers', code: '04' },
  { id: 'contact', label: 'Contact', code: '05' },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight - 120)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-ink/10 bg-paper/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-4">
        {/* document-id wordmark */}
        <a
          href="#hero"
          className={cn(
            'meta flex items-center gap-2 transition-colors',
            scrolled ? 'text-ink' : 'text-paper'
          )}
        >
          <span
            className="inline-block h-2 w-2 animate-blink bg-data"
            aria-hidden
          />
          ALS<span className="text-data">/</span>TECH&nbsp;RECORDS
        </a>

        {/* right-aligned mono tabs — transparent header.
            On small screens the strip scrolls horizontally rather than
            collapsing into a menu, so every section stays one tap away. */}
        <nav className="-mr-2 ml-4 min-w-0 overflow-x-auto md:mr-0 md:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex items-center gap-0.5 md:gap-1">
            {NAV_ITEMS.slice(1).map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    'group flex items-baseline gap-1.5 whitespace-nowrap px-2.5 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-colors md:px-3',
                    scrolled
                      ? 'text-ink/70 hover:text-ink'
                      : 'text-paper/70 hover:text-paper'
                  )}
                >
                  <span className="text-data">{item.code}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

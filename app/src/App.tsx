import {
  ScanLine,
  FileCheck2,
  GitBranch,
  Layers,
  Lock,
  PlaneTakeoff,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react'

import { Navbar } from '@/components/Navbar'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ *
 * Placeholder copy — grounded in the records-digitisation subject.
 * Swap for delivered content; structure stays.
 * ------------------------------------------------------------------ */

type Entry = { code: string; title: string; body: string; icon: LucideIcon }

const CAPABILITIES: Entry[] = [
  {
    code: 'CAP·01',
    title: 'Records Digitisation',
    body: 'Logbooks, work packs and certificates scanned, classified and turned into structured records.',
    icon: ScanLine,
  },
  {
    code: 'CAP·02',
    title: 'Compliance & Traceability',
    body: 'AD and Service Bulletin status reconstructed with a full, defensible audit trail.',
    icon: FileCheck2,
  },
  {
    code: 'CAP·03',
    title: 'Back-to-Birth Trace',
    body: 'Life-limited parts traced to origin, gaps flagged before they become findings.',
    icon: GitBranch,
  },
  {
    code: 'CAP·04',
    title: 'Data Structuring',
    body: 'Every record indexed by ATA chapter, tail and date — searchable in seconds, not days.',
    icon: Layers,
  },
  {
    code: 'CAP·05',
    title: 'Secure Custody',
    body: 'Controlled storage with versioning and redundant backups. Your records, never lost.',
    icon: Lock,
  },
  {
    code: 'CAP·06',
    title: 'Lease Returns',
    body: 'Redelivery-ready record sets bridged and verified against the contract spec.',
    icon: PlaneTakeoff,
  },
]

const SERVICES: Entry[] = [
  {
    code: 'SVC·01',
    title: 'Scanning Bureau',
    body: 'High-volume capture of paper records to archival standard, on-site or at our facility.',
    icon: ScanLine,
  },
  {
    code: 'SVC·02',
    title: 'Dirty-Fingerprint Resolution',
    body: 'Discrepancies, duplicates and missing pages run to ground and reconciled.',
    icon: FileCheck2,
  },
  {
    code: 'SVC·03',
    title: 'Records Platform',
    body: 'A single source of truth for the fleet, accessible to ops, CAMO and the regulator.',
    icon: Layers,
  },
  {
    code: 'SVC·04',
    title: 'Audit & Gap Analysis',
    body: 'A pre-event sweep that surfaces the gaps an auditor would, while there is still time.',
    icon: GitBranch,
  },
  {
    code: 'SVC·05',
    title: 'Transition Support',
    body: 'Records-side support through induction, transition and redelivery milestones.',
    icon: PlaneTakeoff,
  },
  {
    code: 'SVC·06',
    title: 'Onboarding & Training',
    body: 'Your team brought up to speed on the platform and the digital records workflow.',
    icon: Lock,
  },
]

/* Real ATA chapters — numbering used only where it carries meaning. */
const LOG_ROWS = [
  { ata: '05', desc: 'Time limits / maintenance checks' },
  { ata: '27', desc: 'Flight controls' },
  { ata: '32', desc: 'Landing gear' },
  { ata: '49', desc: 'Auxiliary power unit' },
  { ata: '71', desc: 'Power plant' },
  { ata: '79', desc: 'Oil system' },
]

/* ------------------------------------------------------------------ */

function MetaRule({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="meta whitespace-nowrap text-data-deep">{children}</span>
      <span className="h-px flex-1 bg-ink/15" />
    </div>
  )
}

function Cta({
  href,
  children,
  variant = 'solid',
}: {
  href: string
  children: React.ReactNode
  variant?: 'solid' | 'ghost'
}) {
  return (
    <a
      href={href}
      className={cn(
        'group inline-flex items-center gap-2 px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] transition-colors',
        variant === 'solid'
          ? 'bg-data text-white hover:bg-data-deep'
          : 'border border-current text-current hover:bg-current/5'
      )}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}

/* Signature element: a maintenance log being digitised, scanline and all. */
function RecordLog() {
  return (
    <div className="relative w-full max-w-md overflow-hidden border border-data/30 bg-ink-2/80 shadow-2xl">
      {/* log header */}
      <div className="flex items-center justify-between border-b border-data/20 px-5 py-3">
        <span className="meta text-data">Technical Log</span>
        <span className="font-mono text-[0.7rem] text-paper/50">
          TAIL EI-ALS · REV 04
        </span>
      </div>

      {/* column heads */}
      <div className="grid grid-cols-[3rem_1fr_5rem] gap-3 border-b border-paper/10 px-5 py-2">
        {['ATA', 'Description', 'Status'].map((h) => (
          <span key={h} className="meta text-paper/40">
            {h}
          </span>
        ))}
      </div>

      {/* rows */}
      <div className="relative">
        {LOG_ROWS.map((row, i) => (
          <div
            key={row.ata}
            className="grid grid-cols-[3rem_1fr_5rem] items-center gap-3 border-b border-paper/5 px-5 py-3"
          >
            <span className="font-mono text-sm font-medium text-data">
              {row.ata}
            </span>
            <span className="truncate font-sans text-sm text-paper/80">
              {row.desc}
            </span>
            <span
              className={cn(
                'font-mono text-[0.65rem] uppercase tracking-wider',
                i % 2 === 0 ? 'text-data' : 'text-paper/40'
              )}
            >
              {i % 2 === 0 ? '✓ Indexed' : 'Scanned'}
            </span>
          </div>
        ))}

        {/* the scanning beam */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-12 animate-scan bg-gradient-to-b from-transparent via-data/25 to-transparent">
          <div className="h-px w-full bg-data shadow-[0_0_12px_2px] shadow-data/60" />
        </div>
      </div>

      {/* footer + the one stamp */}
      <div className="flex items-center justify-between border-t border-data/20 px-5 py-3">
        <span className="font-mono text-[0.7rem] text-paper/40">
          DOC 00-ALS-2026
        </span>
        <span className="rotate-[-4deg] border border-stamp/70 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-stamp">
          Records Verified
        </span>
      </div>
    </div>
  )
}

function EntryCard({ entry }: { entry: Entry }) {
  const { icon: Icon } = entry
  return (
    <article className="group relative border border-ink/12 bg-paper-2 p-6 transition-colors hover:border-data">
      {/* top accent on hover */}
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-data transition-transform duration-300 group-hover:scale-x-100" />
      <div className="mb-5 flex items-center justify-between">
        <span className="meta text-data-deep">{entry.code}</span>
        <Icon className="h-4 w-4 text-steel transition-colors group-hover:text-data" />
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-ink">
        {entry.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-steel">{entry.body}</p>
    </article>
  )
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <Navbar />

      {/* 00 — Hero / Index */}
      <section
        id="hero"
        className="relative flex min-h-screen items-center overflow-hidden bg-ink text-paper"
      >
        <div className="absolute inset-0 bg-blueprint bg-[length:42px_42px] opacity-60" />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              'radial-gradient(120% 80% at 80% 0%, rgba(0,169,216,0.18), transparent 55%)',
          }}
        />
        <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-16 px-6 py-32 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-w-0">
            <div className="meta mb-6 text-data">
              <span className="mr-3 inline-block h-px w-8 -translate-y-1 bg-data align-middle" />
              Aircraft Technical Records · Digitisation
            </div>
            <h1 className="font-display text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[0.98] tracking-tight">
              Every page of an aircraft's history,
              <span className="text-data"> turned into data.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/70">
              We take the paper — logbooks, work packs, dirty fingerprints — and
              hand back a structured, traceable, audit-ready record of the whole
              airframe.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Cta href="#contact">Request a records audit</Cta>
              <Cta href="#capabilities" variant="ghost">
                See capabilities
              </Cta>
            </div>

            {/* spec strip */}
            <dl className="mt-14 grid max-w-lg grid-cols-3 border-t border-paper/15 pt-6">
              {[
                ['100%', 'ATA-indexed'],
                ['1:1', 'Page traceability'],
                ['24/7', 'Records access'],
              ].map(([v, k]) => (
                <div key={k}>
                  <dt className="font-display text-2xl font-semibold text-paper">
                    {v}
                  </dt>
                  <dd className="meta mt-1 text-paper/45">{k}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex justify-center lg:justify-end">
            <RecordLog />
          </div>
        </div>

        <span className="meta absolute bottom-6 left-6 text-paper/35">
          Shannon · Ireland
        </span>
      </section>

      {/* 01 — Mission */}
      <section id="mission" className="scroll-mt-20 bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 py-28">
          <MetaRule>01 — Mission</MetaRule>
          <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
            <p className="meta text-steel">
              Why
              <br />
              we exist
            </p>
            <p className="font-display text-[clamp(1.6rem,3vw,2.6rem)] font-medium leading-[1.18] tracking-tight text-ink">
              An aircraft is only as valuable as the records that prove it.
              We exist to make those records{' '}
              <span className="text-data-deep">complete, trusted and instant</span>{' '}
              — so operators, lessors and auditors are all reading from the same
              page.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Capabilities */}
      <section id="capabilities" className="scroll-mt-20 bg-paper-2/60">
        <div className="mx-auto max-w-[1320px] px-6 py-28">
          <MetaRule>02 — Capabilities</MetaRule>
          <h2 className="mb-12 max-w-2xl text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight">
            What we do with your records
          </h2>
          <div className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((e) => (
              <EntryCard key={e.code} entry={e} />
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Services (data world / dark) */}
      <section
        id="services"
        className="relative scroll-mt-20 overflow-hidden bg-ink text-paper"
      >
        <div className="absolute inset-0 bg-blueprint bg-[length:42px_42px] opacity-40" />
        <div className="relative mx-auto max-w-[1320px] px-6 py-28">
          <div className="mb-10 flex items-center gap-4">
            <span className="meta whitespace-nowrap text-data">
              03 — Technical Support Services
            </span>
            <span className="h-px flex-1 bg-paper/15" />
          </div>
          <h2 className="mb-12 max-w-2xl text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight text-paper">
            Support that keeps the data current
          </h2>
          <div className="grid gap-px bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((e) => {
              const { icon: Icon } = e
              return (
                <article
                  key={e.code}
                  className="group relative bg-ink-2 p-6 transition-colors hover:bg-ink-2/60"
                >
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-data transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="mb-5 flex items-center justify-between">
                    <span className="meta text-data">{e.code}</span>
                    <Icon className="h-4 w-4 text-paper/40 transition-colors group-hover:text-data" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-paper">
                    {e.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-paper/60">
                    {e.body}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* 04 — Careers */}
      <section id="careers" className="scroll-mt-20 bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 py-28">
          <MetaRule>04 — Careers</MetaRule>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight">
                Join the crew in Shannon
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-steel">
                We are records specialists, aviation engineers and software
                people working on the same problem from different angles. If you
                are precise about detail and impatient with paper, we should
                talk.
              </p>
              <div className="mt-8">
                <Cta href="#contact">View open roles</Cta>
              </div>
            </div>

            {/* open roles as a manifest */}
            <div className="border border-ink/12">
              {[
                ['ENG·11', 'Records Engineer', 'Shannon · Full-time'],
                ['DAT·07', 'Data Analyst', 'Shannon · Full-time'],
                ['SWE·03', 'Frontend Engineer', 'Hybrid · Full-time'],
                ['OPS·02', 'Project Coordinator', 'Shannon · Contract'],
              ].map(([code, role, meta]) => (
                <a
                  key={code}
                  href="#contact"
                  className="group flex items-center justify-between border-b border-ink/10 px-5 py-4 last:border-b-0 transition-colors hover:bg-paper-2"
                >
                  <div className="flex items-center gap-4">
                    <span className="meta text-data-deep">{code}</span>
                    <span className="font-display font-medium text-ink">
                      {role}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="hidden font-mono text-xs text-steel sm:inline">
                      {meta}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-steel transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-data" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Contact (dispatch) */}
      <section id="contact" className="scroll-mt-20 bg-ink text-paper">
        <div className="mx-auto max-w-[1320px] px-6 py-28">
          <div className="mb-10 flex items-center gap-4">
            <span className="meta whitespace-nowrap text-data">
              05 — Contact
            </span>
            <span className="h-px flex-1 bg-paper/15" />
          </div>
          <div className="grid gap-12 lg:grid-cols-[0.6fr_0.4fr]">
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1.05] tracking-tight">
              Send us a tail number.
              <br />
              <span className="text-data">We'll take it from there.</span>
            </h2>
            <dl className="space-y-6">
              {[
                ['Email', 'records@example.com'],
                ['Phone', '+353 00 000 0000'],
                ['Address', 'Shannon, Co. Clare, Ireland'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between border-b border-paper/15 pb-3"
                >
                  <dt className="meta text-paper/45">{k}</dt>
                  <dd className="font-mono text-sm text-paper">{v}</dd>
                </div>
              ))}
              <Cta href="mailto:records@example.com">Start a conversation</Cta>
            </dl>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-paper/40">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-2 border-t border-paper/10 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="meta">© 2026 ALS Technical Services</span>
          <span className="font-mono text-[0.7rem]">
            DOC 00-ALS-2026 · REV 04 · placeholder content
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App

interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-3xl text-sm text-slate-300 sm:text-base">{subtitle}</p> : null}
    </div>
  )
}

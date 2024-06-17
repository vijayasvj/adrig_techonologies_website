export default function ServicesLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <div className="prose prose-base max-w-[80%] container py-10">
      {children}
    </div>
  )
}

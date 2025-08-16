export function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="pt-16 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </main>
  )
}
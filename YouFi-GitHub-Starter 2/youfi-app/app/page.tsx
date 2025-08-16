export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-semibold">YouFi • Base L2</h1>
      <p>Transforme metas financeiras em patrimônio on-chain. Conecte, crie uma meta e pague em USDC.</p>
      <div className="text-sm opacity-70">
        Ambiente: {process.env.NEXT_PUBLIC_URL?.includes('youfi.finance') ? 'Production' : 'Staging / Local'}
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-400">
        YouFi Protocol 🚀
      </h1>
      <p className="text-lg max-w-2xl text-center mb-6">
        Plataforma DeFi brasileira que transforma metas financeiras em
        patrimônio on-chain. Usamos <span className="text-blue-300">Base L2</span>,
        identidade ZK e UX gasless para criar reputação financeira com
        transparência e inteligência.
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/YouFiProtocol"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md font-semibold"
        >
          GitHub
        </a>
        <a
          href="#"
          className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md font-semibold"
        >
          Saiba mais
        </a>
      </div>
    </main>
  );
}

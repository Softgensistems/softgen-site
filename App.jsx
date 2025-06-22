
import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-[#1A2E40] text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-400">Softgen Systems</h1>
        <p className="text-lg md:text-xl mt-4 max-w-xl">
          Sistemas sob medida para empresas que buscam automação, performance e soluções digitais modernas.
        </p>
        <a
          href="https://wa.me/5583998453753"
          target="_blank"
          className="mt-6 px-6 py-3 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition"
        >
          Fale pelo WhatsApp
        </a>
      </section>

      {/* Sobre */}
      <section className="bg-[#162635] py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold text-cyan-400">Quem somos</h2>
        <p className="mt-4 max-w-3xl mx-auto">
          A Softgen Systems desenvolve sistemas web, APIs e automações para empresas que querem evoluir digitalmente com soluções sob medida. Trabalhamos com tecnologias modernas, foco em resultados e atendimento ágil.
        </p>
      </section>

      {/* Serviços */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold text-cyan-400">Serviços</h2>
        <ul className="mt-6 space-y-2 max-w-2xl mx-auto">
          <li>- Desenvolvimento de sistemas web personalizados</li>
          <li>- Criação e integração de APIs</li>
          <li>- Painéis administrativos e CRMs</li>
          <li>- Automação de tarefas e fluxos de trabalho</li>
          <li>- Sites institucionais com funcionalidades avançadas</li>
        </ul>
      </section>

      {/* Portfólio */}
      <section className="bg-[#162635] py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold text-cyan-400">Portfólio</h2>
        <p className="mt-4">Confira em breve alguns dos nossos projetos desenvolvidos.</p>
      </section>

      {/* Contato */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold text-cyan-400">Contato</h2>
        <div className="mt-6 space-y-4">
          <p className="flex justify-center items-center gap-2"><Phone size={20} /> +55 83 99845-3753</p>
          <p className="flex justify-center items-center gap-2"><Mail size={20} /> systemssoftgen@gmail.com</p>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-[#0D1826] py-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Softgen Systems. Todos os direitos reservados.
      </footer>
    </main>
  );
}

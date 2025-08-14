import React, { useState } from 'react'

function App() {
  const [selectedServices, setSelectedServices] = useState([]);
  return (
    <div className="min-h-screen bg-white font-[Inter]">
      <header className="flex justify-between items-center px-6 py-4">
        <div className="text-lg font-medium tracking-tight">COCOTA®</div>
        <div className="flex items-center gap-12">
          <nav className="flex gap-8">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors text-sm">
              Let's talk!
            </button>
            <div className="flex items-center gap-2 text-sm">
              <button>En</button>
              <span className="text-gray-400">|</span>
              <button>Es</button>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-6 bg-black text-white mt-8 rounded-[32px]">
        <main className="px-12 pt-8 pb-20 relative">
          <div className="flex justify-between items-start mb-12">
            <div className="text-sm font-medium">NEW PROJECT</div>
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-end text-sm">
                <div className="font-medium">JUST WANT TO CHAT?</div>
                <a href="mailto:hola@cocotastudio.com" className="text-gray-500 hover:text-white">hola@cocotastudio.com</a>
              </div>
              <button className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-full hover:border-white">
                <span className="text-lg">×</span>
              </button>
            </div>
          </div>
          <section className="mb-24" id="">
            <h1 className="text-[72px] leading-none font-light mb-4">How can we help?</h1>
            <p className="text-lg text-gray-500">You can select multiple services</p>
            
            <div className="flex gap-4 mt-12">
              {[
                { letter: 'A', text: 'Branding', activeColor: 'bg-red-600' },
                { letter: 'B', text: 'Web design', activeColor: 'bg-blue-600' },
                { letter: 'C', text: 'Campaigns', activeColor: 'bg-violet-600' },
                { letter: 'D', text: 'Content', activeColor: 'bg-emerald-600' },
                { letter: 'E', text: 'Impact', activeColor: 'bg-amber-500' },
                { letter: 'F', text: 'Other', activeColor: 'bg-pink-600' }
              ].map(({ letter, text, activeColor }) => {
                const isSelected = selectedServices.includes(text);
                return (
                  <button
                    key={text}
                    onClick={() => {
                      setSelectedServices(prev => 
                        prev.includes(text) 
                          ? prev.filter(service => service !== text)
                          : [...prev, text]
                      );
                    }}
                    className={`p-8 rounded-2xl transition-all group flex-1 relative ${
                      isSelected ? activeColor : 'bg-zinc-900 hover:bg-zinc-800'
                    }`}
                  >
                    <div className="w-8 h-8 border border-white/20 rounded-full mb-4 flex items-center justify-center text-sm group-hover:border-white">
                      {letter}
                    </div>
                    <h3 className="text-xl text-left font-light">{text}</h3>
                  </button>
                );
              })}
            </div>
          </section>
          
          <section className="mb-24">
            <h2 className="text-[56px] leading-none font-light mb-12">Which language do you prefer to speak?</h2>
            <div className="flex gap-4">
              <button className="p-8 bg-zinc-900 rounded-2xl hover:bg-zinc-800 transition-colors group w-80">
                <div className="w-8 h-8 border border-white/20 rounded-full mb-4 flex items-center justify-center text-sm group-hover:border-white">
                  A
                </div>
                <h3 className="text-xl text-left font-light">Spanished</h3>
              </button>
              <button className="p-8 bg-zinc-900 rounded-2xl hover:bg-zinc-800 transition-colors group w-80">
                <div className="w-8 h-8 border border-white/20 rounded-full mb-4 flex items-center justify-center text-sm group-hover:border-white">
                  B
                </div>
                <h3 className="text-xl text-left font-light">English</h3>
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { Sparkles, DoorOpen, BookOpen, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#111827] via-[#0a0a0a] to-black text-slate-300 font-sans selection:bg-gold-500/30 selection:text-gold-100 overflow-x-hidden">
      
      {/* Decorative background glow (Top) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Main Content Wrapper */}
      <main className="relative z-10 w-full max-w-2xl mx-auto px-6 flex flex-col items-center pb-24">
        
        {/* --- HEADER --- */}
        <header className="pt-20 pb-12 w-full text-center animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <h1 className="font-serif text-4xl md:text-5xl text-gold-100 tracking-wider mb-6">
            THE NARROW DOOR
          </h1>
          <p className="text-gold-200/80 text-lg font-light tracking-wide font-serif italic">
            A place for guided prayer and spiritual clarity.
          </p>
          <div className="w-24 h-px bg-gold-300/30 mx-auto mt-8" />
        </header>

        {/* --- SECTION 1: TODAY'S PRAYER --- */}
        <section className="w-full mt-10 mb-20 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <div className="relative group">
            {/* Glow effect behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-b from-gold-500/10 to-transparent rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            
            <div className="relative bg-[#0f1219]/60 backdrop-blur-sm border border-gold-300/10 p-8 md:p-12 rounded-lg text-center shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0f1219] p-2 rounded-full border border-gold-300/10">
                <Sparkles className="w-5 h-5 text-gold-300/60" />
              </div>

              <h2 className="font-serif text-2xl text-gold-200 mb-8 tracking-wide">
                Today’s Prayer: Family Protection
              </h2>

              <div className="space-y-4 text-base md:text-lg leading-relaxed text-slate-200 font-light">
                <p>Heavenly Father,</p>
                <p>I lift this person into Your light today.</p>
                <p>Place Your hand over their home,</p>
                <p>their family,</p>
                <p>and every path they walk.</p>
                <p>Let no darkness stand near them.</p>
                <p>Fill their nights with peace,</p>
                <p>their days with favor,</p>
                <p>and their steps with wisdom.</p>
                <p>Cover the people they love.</p>
                <p>Strengthen the walls of their home.</p>
                <p>And let Your presence remain with them.</p>
                <p className="pt-4 font-medium text-gold-300">Amen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- TRANSITION SEPARATOR --- */}
        <div className="w-full flex flex-col items-center gap-6 my-12 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
          <div className="w-full max-w-[200px] h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
          <DoorOpen className="w-6 h-6 text-gold-400/60" strokeWidth={1} />
          <div className="w-full max-w-[200px] h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
        </div>

        {/* --- SECTION 2: WELCOME MESSAGE --- */}
        <section className="w-full max-w-lg mx-auto text-center my-16 animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
          <h2 className="font-serif text-3xl text-gold-100 mb-8">
            A Message For Your Heart
          </h2>
          
          <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
            <p>
              If you are here, it is not an accident.
            </p>
            <p>
              People don’t arrive at The Narrow Door randomly.
              They come because something inside is waking up —
              a need for direction, clarity, and a deeper touch from God.
            </p>
            <p>
              And if this prayer moved you,
              I want to offer you something I created from a very real place:
            </p>
          </div>
        </section>

        {/* --- SECTION 3: PRODUCT PRESENTATION --- */}
        <section className="w-full my-16 animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
          <div className="border border-gold-300/30 bg-[#0c0e14] p-10 md:p-14 rounded-sm text-center relative overflow-hidden">
            
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold-400/30"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold-400/30"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold-400/30"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold-400/30"></div>

            <div className="flex justify-center mb-6">
              <BookOpen className="w-8 h-8 text-gold-300" strokeWidth={1} />
            </div>

            <h3 className="font-serif text-2xl md:text-3xl text-gold-100 mb-6 leading-tight">
              “Entering The Narrow Door: <br className="hidden md:block"/> A Short Journey Back to God”
            </h3>

            <div className="w-12 h-px bg-gold-500/30 mx-auto mb-6" />

            <div className="text-slate-300 font-light text-lg italic leading-relaxed">
              <p className="mb-2">It is not long.</p>
              <p className="mb-2">It is not complicated.</p>
              <p className="mb-2">It is not dramatic.</p>
              <p className="text-white/90">
                It is simply the story of how a heart returns to the light —
                and how you can do the same.
              </p>
            </div>
          </div>
        </section>

        {/* --- CTA BUTTON --- */}
        <section className="w-full flex justify-center mb-24 animate-fade-in opacity-0" style={{ animationDelay: '1.4s' }}>
          <a 
            href="https://pay.hotmart.com/E103167454N" 
            className="group relative px-10 py-5 bg-gradient-to-r from-gold-400 to-gold-300 rounded-sm shadow-[0_0_25px_rgba(212,196,168,0.15)] hover:shadow-[0_0_40px_rgba(212,196,168,0.3)] transition-all duration-500 transform hover:-translate-y-0.5"
          >
            <span className="relative z-10 font-serif text-lg font-semibold text-navy-950 tracking-wide">
              Enter the Journey — $4.99
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>
          </a>
        </section>

        {/* --- FOOTER --- */}
        <footer className="text-center space-y-4 opacity-60 animate-fade-in" style={{ animationDelay: '1.6s' }}>
          <p className="font-serif text-gold-200 text-lg italic">
            “May this place bring clarity to your walk.”
          </p>
          <div className="flex flex-col items-center gap-3">
             <div className="w-1 h-8 bg-gradient-to-b from-transparent via-gold-500/30 to-transparent"></div>
             <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              The Narrow Door • Guided Prayer & Spiritual Direction
            </p>
            {/* Subtle light flare at the very bottom */}
            <div className="w-32 h-32 bg-gold-500/10 blur-[60px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"></div>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;

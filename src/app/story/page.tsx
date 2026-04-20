"use client";

import Link from "next/link";

export default function StoryPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12 px-6 relative overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-variant/20 via-background to-background opacity-60"></div>

        {/* Floating Memory Images */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          className="absolute top-[45%] left-[-15%] md:left-[2%] w-64 md:w-80 h-auto blur-[3px] rotate-[-12deg] rounded-3xl object-cover opacity-40 animate-[float_12s_infinite_ease-in-out]"
          src="/decos/mem1.webp"
          style={{ animationDelay: "-2s" }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          className="absolute top-[0%] right-[-30%] md:top-[0%] md:right-[8%] w-72 md:w-96 h-auto blur-[2px] rotate-[-90deg] rounded-3xl object-cover opacity-40 animate-[float_12s_infinite_ease-in-out]"
          src="/decos/mem2.webp"
          style={{ animationDelay: "-5s" }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          className="absolute bottom-[20%] left-[-15%] md:left-[5%] w-56 md:w-72 h-auto blur-[2px] rotate-[-6deg] rounded-3xl object-cover opacity-40 animate-[float_12s_infinite_ease-in-out]"
          src="/decos/mem3.webp"
          style={{ animationDelay: "-8s" }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          className="absolute bottom-[0%] right-[-35%] md:right-[8%] w-80 md:w-[26rem] h-auto blur-[3px] rotate-[14deg] rounded-3xl object-cover opacity-40 animate-[float_12s_infinite_ease-in-out]"
          src="/decos/mem4.webp"
          style={{ animationDelay: "-1s" }}
        />

        {/* Glow Orbs */}
        <div className="absolute top-[-15%] left-[-10%] w-[50vw] h-[50vw] bg-primary-container/20 rounded-full blur-[100px] animate-[pulse-slow_10s_infinite_ease-in-out]"></div>
        <div
          className="absolute bottom-[-20%] right-[-15%] w-[60vw] h-[60vw] bg-inverse-primary/20 rounded-full blur-[120px] animate-[pulse-slow_10s_infinite_ease-in-out]"
          style={{ animationDelay: "-4s" }}
        ></div>
        <div
          className="absolute top-[40%] left-[80%] w-[30vw] h-[30vw] bg-primary/10 rounded-full blur-[80px] animate-[pulse-slow_10s_infinite_ease-in-out]"
          style={{ animationDelay: "-7s" }}
        ></div>

        {/* Dust/Star Particles */}
        <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-primary/40 rounded-full blur-[1px] animate-[float_12s_infinite_ease-in-out]"></div>
        <div
          className="absolute top-[60%] left-[80%] w-2 h-2 bg-primary-container/30 rounded-full blur-[1px] animate-[float_14s_infinite_ease-in-out]"
          style={{ animationDelay: "-2s" }}
        ></div>
        <div
          className="absolute top-[80%] left-[20%] w-1 h-1 bg-white/30 rounded-full blur-[0.5px] animate-[float_9s_infinite_ease-in-out]"
          style={{ animationDelay: "-5s" }}
        ></div>
        <div
          className="absolute top-[30%] right-[25%] w-2.5 h-2.5 bg-primary/20 rounded-full blur-[2px] animate-[float_16s_infinite_ease-in-out]"
          style={{ animationDelay: "-8s" }}
        ></div>
        <div
          className="absolute top-[10%] right-[45%] w-1 h-1 bg-white/20 rounded-full blur-[0.5px] animate-[float_11s_infinite_ease-in-out]"
          style={{ animationDelay: "-3s" }}
        ></div>
        <div
          className="absolute bottom-[15%] right-[60%] w-1.5 h-1.5 bg-primary-container/40 rounded-full blur-[1px] animate-[float_13s_infinite_ease-in-out]"
          style={{ animationDelay: "-6s" }}
        ></div>
      </div>

      <div className="max-w-2xl w-full relative z-10">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="font-pinyon text-5xl md:text-6xl text-primary glow-text tracking-wide mb-4 select-none">
            How i fell for you
          </h1>
          <p className="text-on-surface-variant text-lg font-light max-w-md mx-auto">
            A short timeline and stories abt how goofy i am xixi
          </p>
        </header>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-0">
          {/* Central Line for Desktop, Left Line for Mobile */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary-container to-transparent opacity-30 -translate-x-1/2"></div>

          <div className="space-y-16">
            {/* Item 1 */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full group">
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary-container -translate-x-1/2 shadow-[0_0_10px_#A78BFA] z-10"></div>
              {/* Content */}
              <div className="ml-8 md:ml-0 md:w-[45%] md:text-right md:pr-12">
                <div className="glass-card rounded-2xl p-6 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(167,139,250,0.08)]">
                  <h2 className="font-headline text-xl text-primary mb-2">
                    How it started
                  </h2>
                  <p className="text-on-surface-variant font-light leading-relaxed">
                    Back then at mpls, i was new to the school and suddenly i
                    saw you for the first time. Kamu ada di kelompok sebelah
                    akuu. Disitu aku langsung ngefans sama kamu entah kenapaa
                  </p>
                </div>
              </div>
              <div className="hidden md:block md:w-[45%]"></div>
            </div>

            {/* Item 2 */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full group">
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary-container -translate-x-1/2 shadow-[0_0_10px_#A78BFA] z-10"></div>
              <div className="hidden md:block md:w-[45%]"></div>
              <div className="ml-8 md:ml-0 md:w-[45%] md:pl-12">
                <div className="glass-card rounded-2xl p-6 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(167,139,250,0.08)]">
                  <h2 className="font-headline text-xl text-primary mb-2">
                    at 11th class
                  </h2>
                  <p className="text-on-surface-variant font-light leading-relaxed">
                    Aku mulai beraniin diri ngefollow ig kamu, sampe suruh audry
                    buat bilang follback aku WKWKWKWKW (mff)
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full group">
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary-container -translate-x-1/2 shadow-[0_0_10px_#A78BFA] z-10"></div>
              <div className="ml-8 md:ml-0 md:w-[45%] md:text-right md:pr-12">
                <div className="glass-card rounded-2xl p-6 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(167,139,250,0.08)]">
                  <h2 className="font-headline text-xl text-primary mb-2">
                    First chat
                  </h2>
                  <p className="text-on-surface-variant font-light leading-relaxed">
                    pas PKL aku reply sg kamu dan bilang hbd ITU AKU TKUT BGTTT
                    ga di respon, dan ternyataa kamu respon andd that was our
                    first chat , i then introduced myself. SNENGG BGTT AKHIRNYA
                    KAMU KENAL AKU
                  </p>
                </div>
              </div>
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
            {/* Item 2 */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full group">
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary-container -translate-x-1/2 shadow-[0_0_10px_#A78BFA] z-10"></div>
              <div className="hidden md:block md:w-[45%]"></div>
              <div className="ml-8 md:ml-0 md:w-[45%] md:pl-12">
                <div className="glass-card rounded-2xl p-6 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(167,139,250,0.08)]">
                  <h2 className="font-headline text-xl text-primary mb-2">
                    And Finally
                  </h2>
                  <p className="text-on-surface-variant font-light leading-relaxed">
                    sekarang kita sudah mau lulus.... And kayaknya aku bakal
                    nyesel kalo ngga diungkapin deh.. so i decided to confess it
                    all to you.. And this is how i express my feelings IM SO
                    SORRY FOR BOTHERING YOU...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Area */}
        <div className="mt-24 text-center">
          <Link
            href="/wrapped"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_25px_rgba(167,139,250,0.5)] group relative overflow-hidden"
          >
            <span className="relative z-10 group-hover:glow-text transition-all duration-300">
              Next
            </span>
            <span className="material-symbols-outlined relative z-10 ml-2 group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
            <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

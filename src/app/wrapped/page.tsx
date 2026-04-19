"use client";

import Link from "next/link";
import Image from "next/image";
import ss_1 from "@/assets/ss-1.png";
import ss_2 from "@/assets/ss-2.png";
import ss_3 from "@/assets/ss-3.png";

export default function WrappedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative selection:bg-primary-container selection:text-on-primary-container">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-inverse-primary/20 blur-[120px]"></div>
        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-primary-container/10 blur-[80px]"></div>

        {/* Animated Star Particles / Dust Motes */}
        <div
          className="absolute rounded-full bg-[#cdbff0] animate-[float_6s_infinite_ease-in-out] pointer-events-none w-1.5 h-1.5 top-[20%] left-[15%]"
          style={{ animationDuration: "7s", animationDelay: "0s" }}
        ></div>
        <div
          className="absolute rounded-full bg-[#cdbff0] animate-[float_6s_infinite_ease-in-out] pointer-events-none w-2 h-2 top-[60%] left-[8%]"
          style={{ animationDuration: "9s", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute rounded-full bg-[#cdbff0] animate-[float_6s_infinite_ease-in-out] pointer-events-none w-1 h-1 top-[15%] left-[80%]"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute rounded-full bg-[#cdbff0] animate-[float_6s_infinite_ease-in-out] pointer-events-none w-2.5 h-2.5 top-[75%] left-[85%]"
          style={{ animationDuration: "8s", animationDelay: "3s" }}
        ></div>
        <div
          className="absolute rounded-full bg-[#cdbff0] animate-[float_6s_infinite_ease-in-out] pointer-events-none w-1.5 h-1.5 top-[40%] left-[50%]"
          style={{ animationDuration: "10s", animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute rounded-full bg-[#cdbff0] animate-[float_6s_infinite_ease-in-out] pointer-events-none w-2 h-2 top-[85%] left-[30%]"
          style={{ animationDuration: "7.5s", animationDelay: "4s" }}
        ></div>
        <div
          className="absolute rounded-full bg-[#cdbff0] animate-[float_6s_infinite_ease-in-out] pointer-events-none w-1 h-1 top-[30%] left-[70%]"
          style={{ animationDuration: "8.5s", animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute rounded-full bg-[#cdbff0] animate-[float_6s_infinite_ease-in-out] pointer-events-none w-1.5 h-1.5 top-[10%] left-[40%]"
          style={{ animationDuration: "6.5s", animationDelay: "2.5s" }}
        ></div>

        {/* Ethereal Mesh Gradient Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container/5 via-transparent to-transparent opacity-50"></div>
      </div>

      <div className="w-full max-w-6xl flex flex-col items-center gap-12 relative z-10 px-4 md:px-0">
        {/* Header */}
        <header className="text-center mb-4">
          <h1 className="font-script text-5xl md:text-7xl text-primary-container text-glow tracking-wide select-none">
            Core memories for me..
          </h1>
          <p className="text-on-surface-variant text-lg font-light max-w-md mx-auto">
            walaupun mostly by chat because we never interact IRL
          </p>
        </header>

        {/* Wrapped Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full place-items-center">
          {/* Card 1 */}
          <div className="glass-card rounded-2xl overflow-hidden flex flex-col w-full max-w-[400px] aspect-[4/5] relative group hover:bg-surface-container-highest transition-colors duration-500">
            <div className="w-full h-3/5 overflow-hidden">
              <img
                alt="Abstract background"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={ss_1.src}
              />
            </div>
            <div className="relative z-10 flex flex-col items-start justify-center text-left gap-1 p-6 md:p-8 h-2/5 w-full bg-surface-container-lowest/20 backdrop-blur-sm border-t border-white/5">
              <span className="font-headline font-bold text-xl lg:text-xl text-primary text-glow tracking-tighter">
                Chats till 12
              </span>
              <p className="font-body text-sm md:text-base text-on-surface-variant font-medium">
                prolly the longest talk with you, and you suddenly ask if you
                can greet me. I WAS SO HAPPY BECAUSE I THINK WE COULD
                INTERACT...
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card rounded-2xl overflow-hidden flex flex-col w-full max-w-[400px] aspect-[4/5] relative group hover:bg-surface-container-highest transition-colors duration-500">
            <div className="w-full h-3/5 overflow-hidden">
              <img
                alt="Abstract geometric"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={ss_2.src}
              />
            </div>
            <div className="relative z-10 flex flex-col items-start justify-center text-left gap-1 p-6 md:p-8 h-2/5 w-full bg-surface-container-lowest/20 backdrop-blur-sm border-t border-white/5">
              <span className="font-headline font-bold text-xl lg:text-xl text-primary text-glow tracking-tighter">
                playing ML together
              </span>
              <p className="font-body text-sm md:text-base text-on-surface-variant font-medium">
                this maybe weird,, but yeah i'm happy playing with you no matter
                whats the result of the game. And this caused the long talk btw
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card rounded-2xl overflow-hidden flex flex-col w-full max-w-[400px] aspect-[4/5] relative group hover:bg-surface-container-highest transition-colors duration-500">
            <div className="w-full h-3/5 overflow-hidden">
              <img
                alt="Starry night"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={ss_3.src}
              />
            </div>
            <div className="relative z-10 flex flex-col items-start justify-center text-left gap-1 p-6 md:p-8 h-2/5 w-full bg-surface-container-lowest/20 backdrop-blur-sm border-t border-white/5">
              <span className="font-headline font-bold text-xl lg:text-xl text-primary text-glow tracking-tighter">
                Bootcamp session w u & ur friends
              </span>
              <p className="font-body text-sm md:text-base text-on-surface-variant font-medium">
                NGL this got into my core memories because i never expected that
                u'll promote my bootcamp session to ur friends. I was sooo
                HAPPPYY
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <Link
            href="/confession"
            className="btn-gradient rounded-full px-8 py-4 text-on-primary font-label font-semibold text-lg flex items-center gap-2 hover:opacity-90 transition-opacity hover:shadow-[0_0_20px_rgba(167,139,250,0.4)]"
          >
            Next
            <span
              className="material-symbols-outlined text-on-primary"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

export default function ConfessionPage() {
  const [reply, setReply] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reply.trim() || isSending) return;

    setIsSending(true);
    try {
      const res = await fetch("/api/send-reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reply }),
      });

      if (res.ok) {
        alert("Pesan berhasil dikirim!");
        setReply("");
      } else {
        const errorData = await res.json();
        alert("Gagal ngirim pesan: " + (errorData.error || "Unknown error"));
      }
    } catch (err) {
      alert("Terjadi kesalahan sistem, coba lagi.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="text-on-surface font-body antialiased min-h-screen flex flex-col items-center justify-center relative overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* Ambient Glow / Negative Space Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle Gradient Mesh / Smoke Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-40 mix-blend-screen"></div>
        {/* Existing Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-30 mix-blend-screen translate-y-1/4"></div>
        {/* Corner Orbs */}
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[120px] opacity-40 mix-blend-screen"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[700px] h-[700px] bg-secondary/10 rounded-full blur-[140px] opacity-30 mix-blend-screen"></div>

        {/* Animated Star Particles / Dust Motes */}
        <div className="absolute top-[15%] left-[25%] w-1 h-1 bg-white/30 rounded-full blur-[1px] animate-[float_7s_ease-in-out_infinite]"></div>
        <div
          className="absolute top-[65%] left-[15%] w-1.5 h-1.5 bg-primary/30 rounded-full blur-[1px] animate-[float_11s_ease-in-out_infinite]"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-[25%] left-[75%] w-0.5 h-0.5 bg-white/40 rounded-full blur-[0.5px] animate-[float_9s_ease-in-out_infinite]"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-[80%] left-[80%] w-2 h-2 bg-secondary/20 rounded-full blur-[2px] animate-[float_13s_ease-in-out_infinite]"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-[45%] left-[85%] w-1 h-1 bg-white/20 rounded-full blur-[1px] animate-[float_8s_ease-in-out_infinite]"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-[75%] left-[45%] w-1.5 h-1.5 bg-primary-container/30 rounded-full blur-[1px] animate-[float_10s_ease-in-out_infinite]"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-[35%] left-[10%] w-1 h-1 bg-white/25 rounded-full blur-[1px] animate-[float_12s_ease-in-out_infinite]"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      {/* Main Content Container: Absolute Minimalism */}
      <main className="w-full max-w-2xl px-8 py-16 z-10 flex flex-col items-center text-center space-y-16">
        {/* Header */}
        <div className="space-y-6">
          <h1 className="font-display text-5xl md:text-6xl text-primary-container [text-shadow:0_0_8px_#A78BFA,0_0_20px_#A78BFA] leading-tight tracking-wider select-none">
            To Tia...
          </h1>
        </div>

        {/* The Message / Confession Canvas */}
        <div className="relative w-full p-8 md:p-12 rounded-3xl bg-surface-container-low/40 backdrop-blur-[12px] border border-white/5 shadow-[0_10px_40px_rgba(167,139,250,0.03)]">
          <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed font-light tracking-wide">
            I've tried not to overthink it, but I like you. Cuma mau jujur aja.
          </p>
        </div>

        {/* Input Area */}
        <form
          onSubmit={handleSend}
          className="w-full max-w-md space-y-4 flex flex-col items-center mt-8"
        >
          <label
            className="font-label text-sm text-outline-variant uppercase tracking-widest"
            htmlFor="confession-reply"
          >
            Your turn to write something back:
          </label>
          <div className="w-full relative group">
            <textarea
              id="confession-reply"
              className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:border-primary-container focus:ring-0 text-[#E0E0E6] placeholder-on-surface-variant/30 resize-none font-body text-center text-base py-3 transition-colors duration-300"
              placeholder="Whisper back..."
              rows={3}
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            />
            {/* Focus Glow Underline */}
            <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary-container to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-center opacity-70"></div>
          </div>

          {/* Action / The Beacon */}
          <div className="pt-8 w-full flex flex-col justify-center items-center gap-6">
            <button
              type="submit"
              disabled={isSending || !reply.trim()}
              className="relative group overflow-hidden rounded-full px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-label font-medium tracking-wide shadow-[0_0_20px_rgba(167,139,250,0.15)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(167,139,250,0.3)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_0_20px_rgba(167,139,250,0.15)]"
            >
              <span className="relative z-10 flex items-center gap-2 [text-shadow:0_0_4px_rgba(255,255,255,0.4)]">
                {isSending ? "Sending it..." : "Send it to me"}
                {!isSending && (
                  <span className="material-symbols-outlined text-sm font-light">
                    send
                  </span>
                )}
              </span>
              {/* Inner hover shimmer */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </button>
            <Link href="/wrapped" className="text-sm font-label text-outline-variant hover:text-primary transition-colors flex items-center gap-2 group">
              <span className="material-symbols-outlined text-xs group-hover:-translate-x-1 transition-transform">
                arrow_back
              </span>
              Return to the void
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GatePage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/unlock-gate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/story");
      } else {
        setError("Invalid code, try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* Decorative Background Elements */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          background: `radial-gradient(at 80% 0%, rgba(103, 75, 181, 0.05) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(103, 75, 181, 0.05) 0px, transparent 50%)`,
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 animate-[drift_40s_linear_infinite]"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10% 20%, rgba(255, 255, 255, 0.2) 100%, transparent),
            radial-gradient(1px 1px at 30% 80%, rgba(255, 255, 255, 0.1) 100%, transparent),
            radial-gradient(2px 2px at 80% 50%, rgba(167, 139, 250, 0.15) 100%, transparent),
            radial-gradient(1px 1px at 60% 10%, rgba(255, 255, 255, 0.15) 100%, transparent),
            radial-gradient(1.5px 1.5px at 90% 90%, rgba(167, 139, 250, 0.1) 100%, transparent)`,
          backgroundSize: "200px 200px",
        }}
      />
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none z-0 opacity-10 -top-[150px] -left-[150px] bg-primary" />
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none z-0 opacity-10 -bottom-[150px] -right-[150px] bg-inverse-primary" />

      {/* Ambient Lighting Element */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle, rgba(167, 139, 250, 0.05) 0%, rgba(19, 19, 23, 0) 70%)`,
        }}
      />

      {/* Main Content Canvas */}
      <main className="relative z-10 w-full max-w-lg px-6 flex flex-col items-center">
        {/* Header */}
        <h1 className="font-pinyon text-6xl md:text-7xl text-primary-container [text-shadow:0_0_8px_#A78BFA,0_0_20px_#A78BFA] leading-relaxed mb-4 text-center select-none">
          Only for...
        </h1>
        {/* Hint Text */}
        <p className="font-body text-on-surface-variant text-sm tracking-wide text-center mb-16 opacity-80">
          Clue: I usually called you
        </p>

        {/* Input Form Area */}
        <form
          onSubmit={handleUnlock}
          className="w-full flex flex-col items-center group"
        >
          <div className="relative w-full max-w-sm">
            <input
              autoComplete="off"
              className="w-full bg-transparent border-0 border-b-2 border-primary-container/50 text-center text-2xl text-on-surface py-4 px-2 focus:ring-0 focus:border-primary-container focus:outline-none transition-colors duration-300 placeholder:text-surface-variant font-body placeholder:font-light"
              placeholder="Enter the code..."
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Subtle glow line that appears on focus */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary-container shadow-[0_0_10px_#A78BFA] transition-all duration-500 ease-out group-focus-within:w-full"></div>
          </div>
          {error && <p className="mt-4 text-error text-sm">{error}</p>}

          {/* Glowing Action Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="mt-16 px-12 py-4 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-label font-bold tracking-widest uppercase shadow-[0_4px_20px_rgba(167,139,250,0.15)] hover:shadow-[0_10px_40px_rgba(167,139,250,0.4)] transition-all duration-500 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background backdrop-blur-xl disabled:opacity-50"
          >
            {isLoading ? "Unlocking..." : "Unlock"}
          </button>
        </form>
      </main>
    </div>
  );
}

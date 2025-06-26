'use client';
import React from 'react';
import Link from 'next/link';
import LoginStyleButton from '@/components/LoginStyleButton';
import Image from 'next/image';

export default function Handleiding() {
  return (
    <div className="relative min-h-screen bg-[#220028] overflow-hidden flex flex-col">
      {/* Neon pink SVG background (curl.png) with slight rotation */}
      <Image src="/images/curl.png" alt="curl" fill priority className="fixed inset-0 w-full h-full z-0 pointer-events-none select-none rotate-130" />
      {/* Close icon */}
      <Link href="/" aria-label="Terug naar home" className="fixed right-6 top-6 z-10 text-white text-5xl font-['Press_Start_2P'] select-none hover:scale-110 transition-transform" tabIndex={0}>
        ×
      </Link>
      {/* Main content */}
      <div className="relative flex flex-col items-start justify-start min-h-screen max-w-2xl ml-[20%] pr-4 pt-24">
        {/* Logo */}
        <div className="flex items-end  mb-12">
          <span className="text-7xl sm:text-8xl text-white font-['Press_Start_2P'] tracking-widest select-none leading-none">ISO</span>
          <span className="text-3xl sm:text-4xl text-white font-sans mb-2 select-none">wise</span>
        </div>
        {/* Welkom */}
        <h1 className="text-3xl sm:text-4xl text-white font-['Press_Start_2P'] mb-6">Welkom!</h1>
        {/* Description */}
        <p className="text-white text sm:text-lg font-sans mb-10 max-w-xl">
          Dit is de handleiding van ISOwise. Als je ISOwise nog niet eerder hebt gespeeld raden we je aan om eerste een keer alle onderdelen te doorlopen.<br /><br />
          De volgende onderdelen worden uitgelegd in de handleiding:
        </p>
        {/* Buttons */}
        <div className="flex flex-col gap-7 items-start w-[320px] sm:w-[360px]">
          <LoginStyleButton label="quiz" />
          <LoginStyleButton label="score" />
          <LoginStyleButton label="prijs" />
        </div>
      </div>
    </div>
  );
} 
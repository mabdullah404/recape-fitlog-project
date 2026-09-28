import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <h1 className="text-lg font-bold text-white tracking-wide">FITLOG</h1>

        <p className="text-xs text-neutral-500">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-gray-800 text-white p-4">
      <div className="text-xl font-bold">GlobalSalaryTax</div>
      <nav className="space-x-4">
        <Link href="/"><span>Salary Calculators</span></Link>
        <Link href="/compare"><span>Compare</span></Link>
        <Link href="/tax-guides"><span>Tax Guides</span></Link>
        <Link href="/blog"><span>Blog</span></Link>
      </nav>
      <div className="flex items-center gap-2">
        <select className="text-black rounded px-2 py-1">
          <option>🇬🇧 English</option>
          <option>🇨🇳 中文</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          className="p-1 rounded-md text-black"
        />
      </div>
    </header>
  );
} 
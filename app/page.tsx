import React from "react";
import Link from "next/link";

const countries = [
  { name: "United States", code: "us", flag: "🇺🇸" },
  { name: "Canada", code: "canada", flag: "🇨🇦" },
  { name: "Australia", code: "australia", flag: "🇦🇺" },
  { name: "New Zealand", code: "new-zealand", flag: "🇳🇿" },
  { name: "Singapore", code: "singapore", flag: "🇸🇬" },
  { name: "Japan", code: "japan", flag: "🇯🇵" },
  { name: "China", code: "china", flag: "🇨🇳" },
];

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow">
        <div className="text-2xl font-bold tracking-tight">GlobalSalaryTax</div>
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <Link href="/" className="hover:text-blue-400">Salary Calculators</Link>
          <Link href="/compare" className="hover:text-blue-400">Compare</Link>
          <Link href="/tax-guides" className="hover:text-blue-400">Tax Guides</Link>
          <Link href="/blog" className="hover:text-blue-400">Blog</Link>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span className="absolute right-2 top-1.5 text-gray-500">🔍</span>
          </div>
          <select className="bg-gray-800 border border-white px-2 py-1 rounded text-white">
            <option>🇬🇧 English</option>
            <option>🇨🇳 中文</option>
          </select>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Your one-stop GlobalSalaryTax calculator</h1>
        <p className="text-gray-600 text-center mb-10 text-lg">
          Compare pre-tax and after-tax salaries across countries and Plan your finances effectively
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {countries.map((c) => (
            <Link
              key={c.code}
              href={`/calculator/${c.code}`}
              className="bg-white text-black px-6 py-6 rounded-lg shadow hover:shadow-xl flex flex-col items-center transition-all border border-gray-200 hover:border-blue-400"
            >
              <span className="text-4xl mb-2">{c.flag}</span>
              <span className="text-lg font-semibold">{c.name}</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
} 
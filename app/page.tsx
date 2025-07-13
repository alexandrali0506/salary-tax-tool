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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-16 md:py-24 mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 to-pink-200/30 pointer-events-none" />
        <h1 className="relative text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">Your one-stop <span className="text-blue-600">GlobalSalaryTax</span> calculator</h1>
        <p className="relative text-lg md:text-2xl text-gray-700 mb-6 max-w-2xl mx-auto drop-shadow">Compare pre-tax and after-tax salaries across countries and plan your finances effectively.</p>
        <Link href="#countries" className="relative inline-block px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition text-lg font-semibold">Get Started</Link>
      </section>

      {/* Country Grid */}
      <section id="countries" className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Choose a Country</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {countries.map((c) => (
            <Link
              key={c.code}
              href={`/calculator/${c.code}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-400 p-8 flex flex-col items-center transition-all duration-200 cursor-pointer hover:-translate-y-1"
            >
              <span className="text-5xl mb-3 drop-shadow-sm">{c.flag}</span>
              <span className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-1">{c.name}</span>
              <span className="text-xs text-gray-400 group-hover:text-blue-400">View Calculator</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
} 
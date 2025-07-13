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
    <div className="min-h-screen bg-[#f7f9fb]">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Helping you plan your finances effectively</h1>
        <div className="text-2xl md:text-3xl font-bold mb-4">
          <span>Global</span><span className="text-blue-400">Salary</span><span className="text-orange-400">Tax</span>
        </div>
        <div className="flex justify-center gap-4 mt-2">
          {/* 可加 logo/icon，这里留空 */}
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Find what is your salary after tax</h2>
        <p className="text-gray-600 text-center mb-8 text-base md:text-lg">
          Calculate your take-home pay effortlessly with our accurate and up-to-date salary calculators
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {countries.map((c) => (
            <Link
              key={c.code}
              href={`/calculator/${c.code}`}
              className="flex flex-col items-center justify-center bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 hover:border-blue-400 py-6 px-2 transition-all duration-150 cursor-pointer group"
            >
              <span className="text-4xl mb-2 drop-shadow-sm">{c.flag}</span>
              <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-1">{c.name}</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
} 
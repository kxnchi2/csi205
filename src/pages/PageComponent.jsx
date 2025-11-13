import React from "react";
import Adder from "../components/Adder";
import Counter from "../components/Counter";
import Timer from "../components/Timer";
import Temperatures from "../components/Temperatures";

export default function PageComponent() {
  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-inner">
      {/* Header */}
      <h1 className="text-3xl font-semibold text-center text-gray-700 mb-10 flex items-center justify-center gap-2">
        <span className="text-indigo-500 text-4xl">⚙️</span>
        React Interactive Components Dashboard
      </h1>

      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mb-10">
        {/* Adder */}
        <div className="bg-white p-6 rounded-2xl shadow-md w-72 h-72 flex items-center justify-center hover:shadow-xl transition-all duration-300">
          <Adder />
        </div>

        {/* Timer */}
        <div className="bg-white p-6 rounded-2xl shadow-md w-72 h-72 flex items-center justify-center hover:shadow-xl transition-all duration-300">
          <Timer />
        </div>

        {/* Counter */}
        <div className="bg-white p-6 rounded-2xl shadow-md w-72 h-72 flex items-center justify-center hover:shadow-xl transition-all duration-300">
          <Counter />
        </div>
      </div>

      {/* Temperature Section */}
      <div className="flex justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full md:w-[75%] hover:shadow-xl transition-all duration-300">
          <Temperatures />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-10 text-gray-500 text-sm tracking-wide">
        © 2025 SPU | Front-End Development Lab
      </footer>
    </div>
  );
}

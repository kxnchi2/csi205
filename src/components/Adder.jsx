import React, { useState } from "react";
import Value from "./Value";

export default function Adder() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const sum = parseFloat(a) + parseFloat(b);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-5 text-center w-[300px] hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold text-indigo-600 flex items-center justify-center gap-2 mb-3">
        ➕ Add Calculator
      </h3>

      <div className="text-sm text-gray-700 mb-4">
        <span className="inline-block bg-gray-200 px-2 py-1 rounded-md mr-2">
          A = <Value value={a} type="integer" />
        </span>
        <span className="inline-block bg-indigo-500 text-white px-2 py-1 rounded-md mr-2">
          A + B = <Value value={sum} />
        </span>
        <span className="inline-block bg-gray-200 px-2 py-1 rounded-md">
          B = <Value value={b} type="integer" />
        </span>
      </div>

      {/* ปุ่มควบคุม A / B */}
      <div className="flex justify-around mt-3">
        {/* ตัว A */}
        <div>
          <p className="font-semibold text-indigo-600 mb-2">A</p>
          <div className="flex items-center justify-center gap-2">
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold w-8 h-8 rounded-full shadow-sm transition"
              onClick={() => setA(a - 1)}
            >
              –
            </button>
            <span className="text-lg font-bold text-gray-800 w-6">
              <Value value={a} type="integer" />
            </span>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold w-8 h-8 rounded-full shadow-sm transition"
              onClick={() => setA(a + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* ตัว B */}
        <div>
          <p className="font-semibold text-indigo-600 mb-2">B</p>
          <div className="flex items-center justify-center gap-2">
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold w-8 h-8 rounded-full shadow-sm transition"
              onClick={() => setB(b - 1)}
            >
              –
            </button>
            <span className="text-lg font-bold text-gray-800 w-6">
              <Value value={b} type="integer" />
            </span>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold w-8 h-8 rounded-full shadow-sm transition"
              onClick={() => setB(b + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

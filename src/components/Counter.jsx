import React, { useState } from "react";
import Value from "./Value";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 text-center w-[260px] hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold text-indigo-600 mb-4 flex items-center justify-center gap-2">
        🔢 Counter
      </h3>

      <div className="flex items-center justify-center gap-4">
        {/* ปุ่มลด */}
        <button
          className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 active:scale-95 text-white font-bold text-lg shadow-md transition-all duration-200"
          onClick={() => setCount(count - 1)}
        >
          –
        </button>

        {/* ค่ากลาง */}
        <span className="text-2xl font-bold text-gray-800 border border-gray-300 rounded-lg px-6 py-2 bg-gray-50 shadow-inner">
          <Value value={count} type="integer" />
        </span>

        {/* ปุ่มเพิ่ม */}
        <button
          className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 active:scale-95 text-white font-bold text-lg shadow-md transition-all duration-200"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

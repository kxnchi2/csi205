import React, { useState, useEffect } from "react";
import Value from "./Value";

export default function Temperatures() {
  const [celsius, setCelsius] = useState(25);
  const [fahrenheit, setFahrenheit] = useState((25 * 9) / 5 + 32);
  const [kelvin, setKelvin] = useState(25 + 273.15);
  const [active, setActive] = useState("celsius");

  // ✅ อัปเดตค่าตามหน่วยที่ active
  useEffect(() => {
    if (active === "celsius") {
      const c = parseFloat(celsius);
      if (!isNaN(c)) {
        setFahrenheit((c * 9) / 5 + 32);
        setKelvin(c + 273.15);
      }
    }
  }, [celsius, active]);

  useEffect(() => {
    if (active === "fahrenheit") {
      const f = parseFloat(fahrenheit);
      if (!isNaN(f)) {
        setCelsius(((f - 32) * 5) / 9);
        setKelvin(((f - 32) * 5) / 9 + 273.15);
      }
    }
  }, [fahrenheit, active]);

  useEffect(() => {
    if (active === "kelvin") {
      const k = parseFloat(kelvin);
      if (!isNaN(k)) {
        setCelsius(k - 273.15);
        setFahrenheit(((k - 273.15) * 9) / 5 + 32);
      }
    }
  }, [kelvin, active]);

  // ✅ ฟังก์ชันปรับค่าพร้อมตั้ง active
  const handleCelsius = (val) => {
    setActive("celsius");
    setCelsius(val);
  };

  const handleFahrenheit = (val) => {
    setActive("fahrenheit");
    setFahrenheit(val);
  };

  const handleKelvin = (val) => {
    setActive("kelvin");
    setKelvin(val);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 text-center w-full max-w-[700px] mx-auto hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <h4 className="text-lg font-semibold text-indigo-600 mb-6 flex justify-center items-center gap-2">
        🌡️ Temperatures Converter
      </h4>

      {/* Temperature blocks */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Celsius */}
        <div className="flex flex-col items-center">
          <div className="bg-indigo-500 text-white text-sm font-medium rounded-md px-3 py-1 mb-2 shadow-sm">
            <Value value={celsius} /> °C
          </div>
          <p className="font-semibold text-indigo-600 mb-2">Celsius</p>
          <div className="flex items-center gap-2">
            <button
              className="bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex justify-center items-center shadow-sm"
              onClick={() => handleCelsius(parseFloat(celsius) - 1)}
            >
              –
            </button>
            <input
              type="number"
              className="border border-gray-300 rounded-md text-center px-2 py-1 w-[80px] focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={celsius}
              onChange={(e) => handleCelsius(e.target.value)}
            />
            <button
              className="bg-green-500 hover:bg-green-600 text-white rounded-full w-8 h-8 flex justify-center items-center shadow-sm"
              onClick={() => handleCelsius(parseFloat(celsius) + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Fahrenheit */}
        <div className="flex flex-col items-center">
          <div className="bg-indigo-500 text-white text-sm font-medium rounded-md px-3 py-1 mb-2 shadow-sm">
            <Value value={fahrenheit} /> °F
          </div>
          <p className="font-semibold text-indigo-600 mb-2">Fahrenheit</p>
          <div className="flex items-center gap-2">
            <button
              className="bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex justify-center items-center shadow-sm"
              onClick={() => handleFahrenheit(parseFloat(fahrenheit) - 1)}
            >
              –
            </button>
            <input
              type="number"
              className="border border-gray-300 rounded-md text-center px-2 py-1 w-[80px] focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={fahrenheit}
              onChange={(e) => handleFahrenheit(e.target.value)}
            />
            <button
              className="bg-green-500 hover:bg-green-600 text-white rounded-full w-8 h-8 flex justify-center items-center shadow-sm"
              onClick={() => handleFahrenheit(parseFloat(fahrenheit) + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Kelvin */}
        <div className="flex flex-col items-center">
          <div className="bg-indigo-500 text-white text-sm font-medium rounded-md px-3 py-1 mb-2 shadow-sm">
            <Value value={kelvin} /> °K
          </div>
          <p className="font-semibold text-indigo-600 mb-2">Kelvin</p>
          <div className="flex items-center gap-2">
            <button
              className="bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex justify-center items-center shadow-sm"
              onClick={() => handleKelvin(parseFloat(kelvin) - 1)}
            >
              –
            </button>
            <input
              type="number"
              className="border border-gray-300 rounded-md text-center px-2 py-1 w-[80px] focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={kelvin}
              onChange={(e) => handleKelvin(e.target.value)}
            />
            <button
              className="bg-green-500 hover:bg-green-600 text-white rounded-full w-8 h-8 flex justify-center items-center shadow-sm"
              onClick={() => handleKelvin(parseFloat(kelvin) + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

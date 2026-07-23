import React from "react";

function StatCard({
  title,
  value,
  icon,
  color,
  subtitle,
}) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6">

      <div className="flex justify-between items-center">

        <div>
          <p className="text-gray-500 text-sm">
            {subtitle}
          </p>

          <h3 className="text-gray-700 font-semibold mt-2">
            {title}
          </h3>

          <h2 className="text-4xl font-bold mt-3">
            {value}
          </h2>
        </div>

        <div
          className={`w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl ${color}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatCard;
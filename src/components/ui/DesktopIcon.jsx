import React from "react";

const DesktopIcon = ({ icon, label, onClick }) => {
  return (
    <div
      onDoubleClick={onClick}
      className="flex flex-col items-center cursor-pointer group w-20"
    >
      <div className="text-3xl group-hover:scale-110 transition">
        {icon}
      </div>
      <span className="text-xs text-white mt-1 text-center group-hover:text-blue-400">
        {label}
      </span>
    </div>
  );
};

export default DesktopIcon;
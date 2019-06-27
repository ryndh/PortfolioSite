import React from "react";

export default function Footer() {
  const currentTime = new Date();
  return (
    <div className="footer-wrapper">
      <div className="footer">
        &copy; {currentTime.getFullYear()} &#124; Ryan
      </div>
    </div>
  );
}

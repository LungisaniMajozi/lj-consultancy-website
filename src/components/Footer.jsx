import React from "react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8 sm:py-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="J Consultancy Services"
              className="h-8 w-auto"
            />
            <div>
              <p className="text-silver/40 text-xs">
                © {new Date().getFullYear()} J Consultancy Services. All rights
                reserved.
              </p>
            </div>
          </div>

          <p className="text-silver/30 text-xs text-center sm:text-right italic">
            "Your Trusted Partner for South African Immigration and Visa
            Solutions."
          </p>
        </div>
      </div>
    </footer>
  );
}

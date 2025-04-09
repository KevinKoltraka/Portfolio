"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

// Added 'hidden' to initial class - CRITICAL HYDRATION FIX
const DEFAULT_BTN_CLS = 
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out hidden";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS);

  useEffect(() => {
    const handleScroll = () => {
      // Optimized class toggle - prevents unnecessary state updates
      if (window.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(prev => prev.includes("hidden") ? DEFAULT_BTN_CLS.replace(" hidden", "") : prev);
      } else {
        setBtnCls(prev => prev.includes("hidden") ? prev : DEFAULT_BTN_CLS);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check to sync state with actual scroll position
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button className={btnCls} onClick={onClickBtn}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
import { useEffect, useState } from "react";
import { LuShare } from "react-icons/lu";
import { useLocation } from "react-router-dom";

const CopyUrlButton = () => {
  const [success, setIsSuccess] = useState(false);
  const location = useLocation();

  const handleCopy = async () => {
    const fullUrl =
      window.location.origin +
      location.pathname +
      location.search +
      location.hash;

    try {
      await navigator.clipboard.writeText(fullUrl);
      setIsSuccess(true);
    } catch (error) {
      console.error("Failed to copy URL", error);
    }
  };

  useEffect(() => {
    if (success) {
      const id = setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
      return () => clearTimeout(id);
    }
  }, [success]);

  return (
    <div className="relative inline-block">
      <button
        onClick={handleCopy}
        className="flex gap-2 items-center justify-center p-2 md:p-1 cursor-pointer hover:bg-theme-secondary rounded-md"
      >
        <LuShare aria-label="share icon" />
        <span className="hidden md:flex uppercase">Share</span>
      </button>

      <div
        className={`
      absolute top-full right-0 mt-1 w-max px-2 py-1 bg-black text-white text-xs rounded shadow-2xl transition-all transition-discrete delay-100 duration-300 ease-in-out
          ${
            success
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-1 pointer-events-none"
          }
      `}
      >
        Link copied
      </div>
    </div>
  );
};

export default CopyUrlButton;

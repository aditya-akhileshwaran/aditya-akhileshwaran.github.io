import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "../lib/utils"

export const ThemeToggle = () => {
    // default is dark mode on
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");

            // save that it is in dark mode
            localStorage.setItem("theme", "light");

            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");

            // save that it is in dark mode
            localStorage.setItem("theme", "dark");

            setIsDarkMode(true);
        }
    };

    return (
      <div className="fixed max-sm:hidden top-5 right-5 z-50">

        {/* Toggle Switch Container */}
        <div
          onClick={toggleTheme}
          className={cn(
            "relative w-16 h-8 rounded-full p-1 cursor-pointer transition-colors duration-300",
            isDarkMode ? "bg-slate-700" : "bg-sky-200"
          )}
        >

          {/* Sliding Circle */}
          <div
            className={cn(
              "w-6 h-6 rounded-full transition-transform duration-300 flex items-center justify-center",
              isDarkMode ? "translate-x-8 bg-slate-800" : "translate-x-0 bg-yellow-300"
            )}
          >

            {/* Icon inside the circle */}
            {isDarkMode ? (
              // <Moon className="h-4 w-4 text-white" />
              <Moon className="h-5 w-5 text-yellow-300"/>
            ) : (
              // <Sun className="h-4 w-4 text-yellow-600" />
              <Sun className="h-5 w-5 text-blue-900"/>
            )}
          </div>
        </div>
      </div>
    );
};
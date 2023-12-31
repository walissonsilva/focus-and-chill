import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const Header = () => {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [theme]);

  return (
    <header className="flex justify-between align-center">
      <h1 className="text-2xl font-normal mt-[6px]">
        Focus<span className="text-primary font-semibold mx-[1px]">&</span>
        Chill
      </h1>
      <div className="flex gap-2">
        <Button
          className="not-draggable"
          variant="outline"
          size="icon"
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
      </div>
    </header>
  );
};

import React from "react";
import { useEffect } from "react";

interface ThemeProviderProps {
  children: React.ReactNode[];
  themeName: string;
}

export const ThemeProvider = ({ children, themeName }: ThemeProviderProps) => {
  useEffect(() => {
    if (themeName) {
      document.documentElement.classList.add(themeName);
    }
    return () => {
      if (themeName) {
        document.documentElement.classList.remove(themeName);
      }
    };
  }, [themeName]);

  return <React.Fragment>{children}</React.Fragment>;
};

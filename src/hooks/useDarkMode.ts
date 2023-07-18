import { useTheme } from "next-themes";

export default function useDarkMode() {
  const { resolvedTheme, setTheme } = useTheme();

  const isThemeDark = resolvedTheme === "dark";
  const setThemeDark = () => setTheme("dark");
  const setThemeLight = () => setTheme("light");

  const toggleTheme = () => {
    if (isThemeDark) {
      setThemeLight();
    } else {
      setThemeDark();
    }
  };

  return {
    theme: resolvedTheme,
    isThemeDark,
    setThemeDark,
    setThemeLight,
    toggleTheme,
  };
}

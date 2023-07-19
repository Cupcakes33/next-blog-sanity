import useDarkMode from "@/hooks/useDarkMode";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import useIsMounted from "@/hooks/useIsMounted";

export default function DarkModeBtn() {
  const { isThemeDark, toggleTheme } = useDarkMode();
  const { isMounted } = useIsMounted();

  return (
    <button onClick={toggleTheme} className="w-6 h-6 text-orange-400">
      {isMounted ? isThemeDark ? <MoonIcon /> : <SunIcon /> : null}
    </button>
  );
}

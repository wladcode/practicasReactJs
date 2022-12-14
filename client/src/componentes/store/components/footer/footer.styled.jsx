import React, { useContext } from "react";
import ThemeContext from "../../utils/context/context";

function Footer() {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={handleChangeTheme}
      style={{ background: theme.background, color: theme.foreground }}
    >
      Change Theme
    </button>
  );
}

export default Footer;

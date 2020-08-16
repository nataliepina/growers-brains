import React from "react";
import "./DarkModeToggler.scss";

import Toggler from "./Toggler";
import useDarkMode from "use-dark-mode";

const DarkModeToggler = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Toggler
        checked={darkMode.value}
        onChange={darkMode.toggle}
      />
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggler;

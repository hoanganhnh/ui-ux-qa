import React, { useEffect } from "react";

const DisableContextMenu = (): JSX.Element => {
  useEffect(() => {
    const handleContextmenu = (e: { preventDefault: () => void }) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextmenu);

    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  return <></>;
};

export default DisableContextMenu;

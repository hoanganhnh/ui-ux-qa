import React, { useEffect } from "react";
import tinykeys from "tinykeys";

const WebInspectElement = (): JSX.Element => {
  useEffect(() => {
    const unsubscribe = tinykeys(window, {
      "$mod+Shift+C": (e) => {
        e.preventDefault();

        alert(
          "Không sử dụng được tổ hợp phím ⌘ + Shift + C để truy cập vào Inspect Element trên website UI/UX Quest"
        );
      },
    });

    return () => {
      unsubscribe();
    };
  });

  return <></>;
};

export default WebInspectElement;

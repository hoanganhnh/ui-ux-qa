import React, { useEffect } from "react";
import tinykeys from "tinykeys";

const WebSavePage = (): JSX.Element => {
  useEffect(() => {
    const unsubscribe = tinykeys(window, {
      "$mod+S": (e) => {
        e.preventDefault();

        alert(
          "Không sử dụng được tổ hợp phím ⌘ + S để truy cập vào Save As... trên website UI/UX Quest"
        );
      },
    });

    return () => {
      unsubscribe();
    };
  });

  return <></>;
};

export default WebSavePage;

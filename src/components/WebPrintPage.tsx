import React, { useEffect } from "react";
import tinykeys from "tinykeys";

const WebPrintPage = (): JSX.Element => {
  useEffect(() => {
    const unsubscribe = tinykeys(window, {
      "$mod+P": (e) => {
        e.preventDefault();

        alert(
          "Không sử dụng được tổ hợp phím ⌘ + P để truy cập vào Print... trên website UI/UX Quest"
        );
      },
    });

    return () => {
      unsubscribe();
    };
  });

  return <></>;
};

export default WebPrintPage;

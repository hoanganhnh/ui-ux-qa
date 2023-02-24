import { FC, ReactElement, useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import QuizCore from "./core/QuizCore";
import {
  allowedActions,
  QuizContext,
  QuizProvider,
} from "./contexts/QuizContext";
import DisableContextMenu from "./components/DisableContextMenu";
import WebInspectElement from "./components/WebInspectElement";
import WebPrintPage from "./components/WebPrintPage";
import WebSavePage from "./components/WebSavePage";
import { languages } from "./helpers/i18n";
import NotFound from "./pages/NotFound";

const App: FC = (): ReactElement => {
  const locale = navigator.language.split("-")[0];
  const quizContext = useContext(QuizContext);
  const dispatch = quizContext?.dispatch;
  useEffect(() => {
    if (
      locale &&
      languages.indexOf(locale) !== -1 &&
      !localStorage.getItem("quiz-state")
    ) {
      console.log("Default Locale:", locale);
      dispatch &&
        quizContext?.dispatch({
          type: allowedActions.CHANGE_LANGUAGE,
          payload: locale,
        });
    }
    const handleContextmenu = (e: { preventDefault: () => void }) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, [locale, dispatch, quizContext]);

  return (
    <>
      <QuizProvider>
        <DisableContextMenu />
        <WebInspectElement />
        <WebPrintPage />
        <WebSavePage />

        <Routes>
          <Route path="/" element={<QuizCore />}></Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </QuizProvider>
    </>
  );
};

export default App;

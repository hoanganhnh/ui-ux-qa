import { FC, ReactElement, useContext, useEffect, useState } from "react";
import { QuizContext, allowedActions } from "../../contexts/QuizContext";
import { getLifeIcons } from "../../helpers/getIcons";
import FlipNumbers from "react-flip-numbers";
import i18n, { languages } from "../../helpers/i18n";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const Header: FC = (): ReactElement => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const quizContext = useContext(QuizContext);
  const dispatch = quizContext?.dispatch;
  const langMenu = quizContext?.state.langMenu;
  const score = quizContext?.state.score;
  const totalQuestions = quizContext?.state.questions.length;
  const currentQuestionIndex = quizContext?.state.currentQuestionIndex;
  const currentQuestionIndexShow = currentQuestionIndex! + 1;
  const life = quizContext!.state.life;

  // To add more images add a new language to languages array in helpers/i18n.ts and use the language code as the image name

  // Preload images
  useEffect(() => {
    languages.forEach((lang) => {
      new Image().src = `header/${lang}.svg`;
    });
  }, []);

  return (
    <>
      <div className="header">
        {langMenu ? (
          <div className="up-arrow arrow-wrap">
            <img
              src="header/up_arrow.svg"
              alt="Toggle Language"
              onClick={() => {
                dispatch &&
                  dispatch({
                    type: allowedActions.LANG_MENU,
                    payload: "false",
                  });
                if (swiper) swiper.slideTo(0);
              }}
            />
          </div>
        ) : (
          <div className="down-arrow arrow-wrap">
            <img
              src="header/up_arrow.svg"
              alt="Toggle Language"
              onClick={() => {
                dispatch &&
                  dispatch({ type: allowedActions.LANG_MENU, payload: "true" });
                if (swiper) swiper.slideTo(1);
              }}
            />
          </div>
        )}

        <Swiper
          slidesPerView={1}
          direction={"vertical"}
          allowTouchMove={false}
          initialSlide={langMenu ? 1 : 0}
          onSwiper={setSwiper}
          className="header-swiper container"
        >
          <SwiperSlide className="header-wrap">
            <div className="col">
              <div className="score-index">
                <span className="score">
                  <FlipNumbers
                    height={20}
                    width={14}
                    color="#0f172a"
                    background="#f8fafc"
                    play
                    numbers={score ? score.toString() : "0"}
                  />
                </span>
                <span className="index">
                  {currentQuestionIndexShow}/{totalQuestions}
                </span>
              </div>
            </div>
            <div className="lifes">
              <span className="score">{getLifeIcons(life)}</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="header-wrap">
            <div className="lang-wrap">
              {languages.map((lang) => {
                return (
                  <div
                    key={lang}
                    onClick={() => {
                      dispatch &&
                        quizContext?.dispatch({
                          type: allowedActions.CHANGE_LANGUAGE,
                          payload: lang,
                        });
                    }}
                  >
                    <img
                      className={` ${
                        i18n.language === lang ? `lang-active` : `lang`
                      }`}
                      src={`header/${lang}.svg`}
                      alt={lang}
                    />
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Header;

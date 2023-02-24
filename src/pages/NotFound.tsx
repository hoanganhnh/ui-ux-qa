import { FC, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import i18n from "../helpers/i18n";

const NotFound: FC = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <>
      <div className="not-found-wrap">
        <div className="not-found-body container">
          <h1>{i18n.t("areYouGoingAstray")}</h1>
        </div>

        <div className="bottom">
          <div className="container">
            <button className="reset-btn" onClick={() => navigate("/")}>
              {i18n.t("comeBackHome")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;

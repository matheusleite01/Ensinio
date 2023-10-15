import RocketIcon from "../../../public/assets/icons/Rocket-icon";
import ArrowIcon from "../../../public/assets/icons/Arrow-icon";
import * as S from "./styled";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <S.Container>
      <S.Rocket>
        <RocketIcon />
        {t("Veja todos os outros recursos disponíveis para te ajudar")}
      </S.Rocket>
      <S.SeeMore>
        {t("Ver mais")} <ArrowIcon />
      </S.SeeMore>
    </S.Container>
  );
};

export default Footer;

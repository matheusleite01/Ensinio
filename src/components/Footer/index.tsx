import RocketIcon from "../../../public/assets/icons/Rocket-icon";
import ArrowIcon from "../../../public/assets/icons/Arrow-icon";
import * as S from "./styled";

const Footer = () => {
  return (
    <S.Container>
      <S.Rocket>
        <RocketIcon />
        Veja todos os outros recursos disponíveis para te ajudar{" "}
      </S.Rocket>
      <S.SeeMore>
        Ver Mais <ArrowIcon />
      </S.SeeMore>
    </S.Container>
  );
};

export default Footer;

import LogoIcon from "../../../public/assets/icons/logo-icon";
import Navigation from "../Navigation";
import UserIcon from "../../../public/assets/icons/User-icon";
import * as S from "./styled";
import Button from "../Button";
import LanguageDropdown from "../LanguageDropdown";
import Link from "next/link";

const links = [
  { name: "Preços", path: "/preco" },
  { name: "Academy", path: "/Academy" },
  { name: "Blog", path: "/Blog" },
  { name: "Contato", path: "/Contato" },
];

const Header = () => {
  return (
    <S.Container>
      <S.ItensContainer className="container">
        <Link href="/">
          <LogoIcon />
        </Link>
        <S.ItensContainer>
          <Navigation links={links} />
          <S.Line></S.Line>
          <S.ItensContainer>
            <S.ButtonEnter>
              <UserIcon /> Entrar
            </S.ButtonEnter>
            <Button
              color="white"
              backgroundColor="none"
              border="1px solid rgb(255,255,255, 0.5)"
            >
              Começar Agora
            </Button>
            <LanguageDropdown />
          </S.ItensContainer>
        </S.ItensContainer>
      </S.ItensContainer>
    </S.Container>
  );
};

export default Header;

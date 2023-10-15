import LogoIcon from "../../../public/assets/icons/logo-icon";
import Navigation from "../Navigation";
import UserIcon from "../../../public/assets/icons/User-icon";
import * as S from "./styled";
import Button from "../Button";
import LanguageDropdown from "../LanguageDropdown";
import Link from "next/link";
import useHeader from "./hooks/useHeader";

const links = [
  { name: "Preços", path: "/preco" },
  { name: "Academy", path: "/Academy" },
  { name: "Blog", path: "/Blog" },
  { name: "Contato", path: "/Contato" },
];

const Header = () => {
  const { isOpenMenuHamburger, setIsopenMenuHamburger, t } = useHeader();

  return (
    <S.Container>
      <S.ItensContainer className="container">
        <Link href="/">
          <LogoIcon />
        </Link>
        <S.MenuHamburger
          className={isOpenMenuHamburger ? "active" : ""}
          onClick={() => setIsopenMenuHamburger(!isOpenMenuHamburger)}
        ></S.MenuHamburger>
        <S.NavContainer className={isOpenMenuHamburger ? "openMenu" : ""}>
          <Navigation links={links} />
          <S.Line></S.Line>
          <S.ItensContainer>
            <S.ButtonEnter>
              <UserIcon /> {t("Entrar")}
            </S.ButtonEnter>
            <Button
              color={isOpenMenuHamburger ? "#130C25" : "white"}
              backgroundColor={isOpenMenuHamburger ? "#00E1E7" : "none"}
              border={
                isOpenMenuHamburger ? "none" : "1px solid rgb(255,255,255, 0.5)"
              }
            >
              {t("Começar agora")}
            </Button>
            <LanguageDropdown />
          </S.ItensContainer>
        </S.NavContainer>
      </S.ItensContainer>
    </S.Container>
  );
};

export default Header;

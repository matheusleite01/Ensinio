import Navigation from "../Navigation";
import * as S from "./styled";
import Button from "../Button";
import LanguageDropdown from "../LanguageDropdown";
import Link from "next/link";
import useHeader from "./hooks/useHeader";
import Logowhite from "../../../public/img/logoWhite.png";
import Logo from "../../../public/img/logo.png";
import Image from "next/image";
import LoginButton from "../LoginButton";

const links = [
  { name: "Preços", path: "/preco" },
  { name: "Academy", path: "/Academy" },
  { name: "Blog", path: "/Blog" },
  { name: "Contato", path: "/Contato" },
];

const Header = () => {
  const {
    isOpenMenuHamburger,
    setIsopenMenuHamburger,
    t,
    isFixedHeaderScroll,
  } = useHeader();

  return (
    <S.Container
      className={`${isOpenMenuHamburger ? "active" : ""} ${
        isFixedHeaderScroll ? "scroll" : ""
      }`}
    >
      <S.ItensContainer className="container">
        <S.Logo>
          <Link href="/">
            <Image
              src={isFixedHeaderScroll ? Logowhite : Logo}
              width={159}
              height={40}
              alt="logo"
            />
          </Link>
        </S.Logo>
        <S.MenuHamburger
          className={`${isOpenMenuHamburger ? "active" : ""} ${
            isFixedHeaderScroll ? "scroll" : ""
          }`}
          onClick={() => setIsopenMenuHamburger(!isOpenMenuHamburger)}
        ></S.MenuHamburger>
        <S.NavContainer className={isOpenMenuHamburger ? "openMenu" : ""}>
          <Navigation links={links} />
          <S.Line></S.Line>
          <S.ItensContainer>
            <LoginButton>{t("Entrar")}</LoginButton>
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

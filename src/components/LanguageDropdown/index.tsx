import * as S from "./styled";
import Polygon from "../../../public/assets/icons/Polygon-icon";
import BrazilIcon from "../../../public/assets/icons/Brazil-icon";
import UsaIcon from "../../../public/assets/icons/usa-icon";
import SpainIcon from "../../../public/assets/icons/spain-icon";
import CheckIcon from "../../../public/assets/icons/Check-icon";
import useLanguageDropdown from "./hooks/useLanguageDropdown";
import useOutsideClick from "../../hooks/useOutsideClick";

const languages = [
  { name: "PT", icon: <BrazilIcon /> },
  { name: "EN", icon: <UsaIcon /> },
  { name: "ES", icon: <SpainIcon /> },
];

const LanguageDropdown = () => {
  const { isOpenDropDown, setIsOpenDropDown, handleChangeLanguage, language, ref } = useLanguageDropdown();

  return (
    <S.Container ref={ref}>
      <S.LanguageDefault role={`default${language}`} onClick={() => setIsOpenDropDown(!isOpenDropDown)}>
        <span>{language.toUpperCase()}</span> <Polygon />
      </S.LanguageDefault>
        {isOpenDropDown && <S.BgLanguage role="languageDropdown">
          {languages.map(({ name, icon }) => (
            <S.ButtonLanguage className={language.toUpperCase() === name ? 'active' : ''} key={name} onClick={handleChangeLanguage}>
              <S.Info>
                {icon}
                <span>{name}</span>
              </S.Info>
              {language.toUpperCase() === name && <CheckIcon />}
            </S.ButtonLanguage>
          ))} </S.BgLanguage>}
    </S.Container>
  );
};

export default LanguageDropdown;

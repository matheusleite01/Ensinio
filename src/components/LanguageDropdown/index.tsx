import * as S from "./styled";
import Polygon from "../../../public/assets/icons/Polygon-icon";
import BrazilIcon from "../../../public/assets/icons/Brazil-icon";
import UsaIcon from "../../../public/assets/icons/usa-icon";
import SpainIcon from "../../../public/assets/icons/spain-icon";
import CheckIcon from "../../../public/assets/icons/Check-icon";
import useLanguageDropdown from "./hooks/useLanguageDropdown";

const languages = [
  { name: "PT", icon: <BrazilIcon /> },
  { name: "EN", icon: <UsaIcon /> },
  { name: "ES", icon: <SpainIcon /> },
];

const LanguageDropdown = () => {
  const { isOpenDropDown, setIsOpenDropDown } = useLanguageDropdown();

  return (
    <S.Container>
      <S.LanguageDefault onClick={() => setIsOpenDropDown(!isOpenDropDown)}>
        <span>PT</span> <Polygon />
      </S.LanguageDefault>
      <S.BgLanguage>
        {isOpenDropDown &&
          languages.map(({ name, icon }) => (
            <S.ButtonLanguage key={name}>
              <S.Info>
                {icon}
                <span>{name}</span>
              </S.Info>
              <CheckIcon />
            </S.ButtonLanguage>
          ))}
      </S.BgLanguage>
    </S.Container>
  );
};

export default LanguageDropdown;

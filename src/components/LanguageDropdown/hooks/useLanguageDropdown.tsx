import { useAppDispatch, useAppSelector } from "@/redux/configureStore";
import { changeLanguage } from "@/redux/reducers/language";
import { MouseEventHandler, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useLanguageDropdown = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const { language } = useAppSelector((state) => state.language);
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();

  const handleChangeLanguage: MouseEventHandler<HTMLButtonElement> = ({
    currentTarget,
  }) => {
    dispatch(changeLanguage(currentTarget.innerText.toLowerCase()));
    setIsOpenDropDown(false);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return {
    isOpenDropDown,
    setIsOpenDropDown,
    handleChangeLanguage,
    language
  };
};

export default useLanguageDropdown;

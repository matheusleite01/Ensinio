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
    const initial = window.localStorage.getItem("language");
    dispatch(changeLanguage(initial ? initial : language));
    i18n.changeLanguage(language);
  }, [i18n, language, dispatch]);

  return {
    isOpenDropDown,
    setIsOpenDropDown,
    handleChangeLanguage,
    language
  };
};

export default useLanguageDropdown;

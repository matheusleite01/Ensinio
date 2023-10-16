import useOutsideClick from "@/hooks/useOutsideClick";
import { useAppDispatch, useAppSelector } from "@/redux/configureStore";
import { changeLanguage } from "@/redux/reducers/language";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const useLanguageDropdown = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { language } = useAppSelector((state) => state.language);
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  useOutsideClick(ref, setIsOpenDropDown);

  const handleChangeLanguage: MouseEventHandler<HTMLButtonElement> = ({
    currentTarget,
  }) => {
    dispatch(changeLanguage(currentTarget.innerText.toLowerCase()));
    setIsOpenDropDown(false);
  };

  useEffect(() => {
    const initial = window.localStorage.getItem("language");
    if (initial) {
      dispatch(changeLanguage(initial));
    }
  }, [dispatch]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return {
    isOpenDropDown,
    setIsOpenDropDown,
    handleChangeLanguage,
    language,
    ref,
  };
};

export default useLanguageDropdown;

import {useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next';

const useHeader = () => {
  const [isOpenMenuHamburger, setIsopenMenuHamburger] = useState(false);
  const [isFixedHeaderScroll, setisFixedHeaderScroll] = useState(false);

  const {t} = useTranslation();

  useEffect(() => {
    const handleResizeWindow = () => {
      const screenWidth = window.innerWidth;
      if(screenWidth > 1200){
        setIsopenMenuHamburger(false);
      }
    }

    const handleScrollWindown = () => {
      const screenScroll = window.scrollY;
      if(screenScroll > 720){
        setisFixedHeaderScroll(true);
      }else {
        setisFixedHeaderScroll(false);
      }
    }

    window.addEventListener("resize", handleResizeWindow);
    window.addEventListener("scroll", handleScrollWindown);

    return () => {
      window.removeEventListener("resize", handleResizeWindow),
      window.removeEventListener("scrool", handleScrollWindown)
    }

  },[])
  
  return{
    isOpenMenuHamburger,
    setIsopenMenuHamburger,
    t,
    isFixedHeaderScroll
  }
}

export default useHeader
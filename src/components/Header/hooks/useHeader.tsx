import {useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next';

const useHeader = () => {
  const [isOpenMenuHamburger, setIsopenMenuHamburger] = useState(false);
  const {t} = useTranslation();

  useEffect(() => {
    const handleResizeWindow = () => {
      const screenWidth = window.innerWidth;
      if(screenWidth > 1200){
        setIsopenMenuHamburger(false);
      }
    }
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    }
  },[])
  
  return{
    isOpenMenuHamburger,
    setIsopenMenuHamburger,
    t
  }
}

export default useHeader
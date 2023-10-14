import {useState, useEffect} from 'react'

const useHeader = () => {
  const [isOpenMenuHamburger, setIsopenMenuHamburger] = useState(false);

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
    setIsopenMenuHamburger
  }
}

export default useHeader
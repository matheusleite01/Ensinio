import {useState} from 'react'

const useLanguageDropdown = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  return {
    isOpenDropDown, 
    setIsOpenDropDown
  }
}

export default useLanguageDropdown
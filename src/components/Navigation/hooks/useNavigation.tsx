import {useState} from 'react'
import { useTranslation } from 'react-i18next';

const useNavigation = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const {t} = useTranslation();

  return {
    isOpenDropdown,
    setIsOpenDropdown,
    t
  }
}

export default useNavigation
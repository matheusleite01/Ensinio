import {useState} from 'react'

const useNavigation = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  return {
    isOpenDropdown,
    setIsOpenDropdown
  }
}

export default useNavigation
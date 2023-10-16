import { useEffect } from "react";

const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  set: React.Dispatch<React.SetStateAction<boolean>> | undefined,
) => {
  const handleClickOutside = ({ target }: MouseEvent) => {
    if (ref.current && !ref.current.contains(target as Node) && set) {
      set(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return ref;
};

export default useOutsideClick;

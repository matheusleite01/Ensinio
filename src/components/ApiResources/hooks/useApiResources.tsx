import { useAppDispatch, useAppSelector } from "@/redux/configureStore"
import { featchResources } from "@/redux/reducers/apiResources";
import { useEffect } from "react";

type LanguagesModal = {
  pt: string,
  en: string,
  es: string
}

export type DataReourcesModal = {
  id: number;
  title: LanguagesModal
  description: LanguagesModal;
}

const useApiResources = () => {
  const {data, loading, error} = useAppSelector(state => state.resources);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(featchResources())
  },[dispatch])

  return {
    data, 
    loading, 
    error
  }
}

export default useApiResources
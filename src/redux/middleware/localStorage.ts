import { Middleware } from "redux";
import { RootState } from "../configureStore";

const localStorage: Middleware<{}, RootState> =
  (state) => (next) => (action) => {
    const response = next(action);
    if (action.type === "language/changeLanguage" && typeof window !== "undefined") {
      const language = action.payload;
      window.localStorage.setItem("language", language);
    }

    return response;
  };

export default localStorage;

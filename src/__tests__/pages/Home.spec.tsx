import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import Home from "@/app/page";
import { Provider } from "react-redux";
import store from "@/redux/configureStore";
import { renderWithTheme } from "@/lib/renderWithTheme";

jest.mock("react-i18next", () => ({
  useTranslation: jest.fn().mockReturnValue({
    t: (str: string) => str,
  }),
}));

describe("Home page", () => {
  it("Should render home page", () => {
    renderWithTheme(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    const home = screen.getByRole('heading', {
      name: /sua escola online poderosa e lucrativa/i
    })

    expect(home).toBeInTheDocument();
  });


  it("Should calls useTranslation", () => {
    const spy = jest.spyOn(require("react-i18next"), "useTranslation");

    renderWithTheme(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    expect(spy).not.toHaveBeenCalled();

    spy.mockRestore();
  });
});

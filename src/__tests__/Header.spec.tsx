import "@testing-library/jest-dom";
import "@/utils/i18n";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header/index";
import { Provider } from "react-redux";
import UserEvent from "@testing-library/user-event";
import store from "@/redux/configureStore";

describe("Header component", () => {
  it("Sould render Header", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    const link = screen.getByRole("link", {
      name: /preços/i,
    });
    expect(link).toBeInTheDocument();
  });

  it("Should CustomDropdown start cloused", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );

    const customDropdown = screen.queryByRole("customDropdown");

    expect(customDropdown).not.toBeInTheDocument();
  }),
    it("Should CustomDropdown opens when solution was clicked", async () => {
      const user = UserEvent.setup();
      render(
        <Provider store={store}>
          <Header />
        </Provider>,
      );
      const solutions = screen.getByText(/soluções/i);
      user.click(solutions);

      const customDropdown = await screen.findByRole("customDropdown");
      expect(customDropdown).toBeInTheDocument();
    });

  it("Should LanguageDropdown start cloused", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );

    const languageDropdown = screen.queryByRole("languageDropdown");

    expect(languageDropdown).not.toBeInTheDocument();
  });

  it("Should LanguageDropdown opens when language was clicked", async () => {
    const user = UserEvent.setup();
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );

    const language = screen.getByText(/pt/i);
    user.click(language);

    const LanguageDropdown = await screen.findByRole("languageDropdown");
    expect(LanguageDropdown).toBeInTheDocument();
  });
});

import "@testing-library/jest-dom";
import "@/utils/i18n";
import { render, screen, within } from "@testing-library/react";
import LanguageDropdown from "@/components/LanguageDropdown";
import { renderWithTheme } from "@/lib/renderWithTheme";
import { Provider } from "react-redux";
import store from "@/redux/configureStore";
import userEvent from "@testing-library/user-event";

describe("LanguageDropdown component", () => {
  it("Should render LanguageDropdown", () => {
    renderWithTheme(
      <Provider store={store}>
        <LanguageDropdown />
      </Provider>,
    );

    const language = screen.getByText(/pt/i);

    expect(language).toBeInTheDocument();
  });

  it("Should LanguageDropdown start cloused", () => {
    renderWithTheme(
      <Provider store={store}>
        <LanguageDropdown />
      </Provider>,
    );

    const languageDropdown = screen.queryByRole("languageDropdown");

    expect(languageDropdown).not.toBeInTheDocument();
  });

  it("Should LanguageDropdown opens when language was clicked", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <Provider store={store}>
        <LanguageDropdown />
      </Provider>,
    );

    const language = screen.getByText(/pt/i);
    user.click(language);

    const dropdown = await screen.findByRole("languageDropdown");
    expect(dropdown).toBeInTheDocument();
  });

  it("Should button pt have a active class by default", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <Provider store={store}>
        <LanguageDropdown />
      </Provider>,
    );

    const language = screen.getByText(/pt/i);
    user.click(language);

    const dropdown = await screen.findByRole('button', {  name: /pt/i})

    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toHaveClass('active');
  });

});

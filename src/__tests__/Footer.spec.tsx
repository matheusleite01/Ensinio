import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import Footer from "@/components/Footer";
import { renderWithTheme } from "@/lib/renderWithTheme";

jest.mock("react-i18next", () => ({
  useTranslation: jest.fn().mockReturnValue({
    t: (str: string) => str,
  }),
}));

describe('Footer component', () => {
  it("should render footer component", () => {
    renderWithTheme(<Footer/>);
    
    const text = screen.getByText(/Veja todos os outros recursos disponíveis para te ajudar/i);

    expect(text).toBeInTheDocument();
  });

  it("Should calls useTranslation", () => {
    const spy = jest.spyOn(require("react-i18next"), "useTranslation");

    renderWithTheme(<Footer/>);

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });


})
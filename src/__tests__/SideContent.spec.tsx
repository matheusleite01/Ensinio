import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import SideContent from "@/components/SideContent";
import { renderWithTheme } from "@/lib/renderWithTheme";

jest.mock("react-i18next", () => ({
  useTranslation: jest.fn().mockReturnValue({
    t: (str: string) => str,
  }),
}));

describe("SideContent Component", () => {
  it("Should render SideContent", () => {
    renderWithTheme(
      <SideContent
        text={"pensamos em cada detalhe"}
        title={"Queremos que o aluno se sinta confortável enquanto aprende"}
      />,
    );

    const text = screen.getByText(/pensamos em cada detalhe/i);
    const title = screen.getByRole("heading", {
      name: /queremos que o aluno se sinta confortável enquanto aprende/i,
    });

    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it("Should calls useTranslation", () => {
    const spy = jest.spyOn(require("react-i18next"), "useTranslation");

    renderWithTheme(
      <SideContent
        text={"pensamos em cada detalhe"}
        title={"Queremos que o aluno se sinta confortável enquanto aprende"}
      />,
    );

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});

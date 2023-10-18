import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import HeroTitle from "@/components/HeroTitle";
import { renderWithTheme } from "@/lib/renderWithTheme";
import DevicesMobileIcon from "../../public/assets/icons/DevicesMobile-icon";

jest.mock("react-i18next", () => ({
  useTranslation: jest.fn().mockReturnValue({
    t: (str: string) => str,
  }),
}));

describe("HeroTitle component", () => {
  it("Should render HeroTitle", () => {
    const HeroOptions = {
      subText: "plataforma all in one",
      title: "Sua escola online poderosa e lucrativa",
      text: "Tenha sua própria escola online 100% white label com rede social, gamificação, clube de assinaturas, ecommerce e sistema EAD completo.",
      icon: <DevicesMobileIcon />,
    };
    renderWithTheme(<HeroTitle HeroOptions={HeroOptions} />);

    const subText = screen.getByText(/plataforma all in one/i);
    const title = screen.getByRole("heading", {
      name: /sua escola online poderosa e lucrativa/i,
    });
    const text = screen.getByText(
      /tenha sua própria escola online 100% white label com rede social, gamificação, clube de assinaturas, ecommerce e sistema ead completo\./i,
    );

    expect(subText).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  it("Should calls useTranslation", () => {
    const spy = jest.spyOn(require("react-i18next"), "useTranslation");

    const HeroOptions = {
      subText: "plataforma all in one",
      title: "Sua escola online poderosa e lucrativa",
      text: "Tenha sua própria escola online 100% white label com rede social, gamificação, clube de assinaturas, ecommerce e sistema EAD completo.",
      icon: <DevicesMobileIcon />,
    };

    renderWithTheme(<HeroTitle HeroOptions={HeroOptions} />);

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});

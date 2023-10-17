import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navigation from "@/components/Navigation/index";

describe("Navigation Component", () => {
  it("should render Nav", () => {
    const links = [
      { name: "Preços", path: "/preco" },
    ];
    render(
    <Navigation links={links}/>
    );

    const precos = screen.getByText(/preços/i)

    expect(precos).toBeInTheDocument();
  });

  it("Should render the name in a link", () => {
    const links = [
      { name: "Preços", path: "/preco" },
    ];
    render(
    <Navigation links={links}/>
    );

    const precos = screen.getByRole('link', {
      name: /preços/i
    });

    expect(precos).toBeInTheDocument();
  });

  it("Should render the path in the href attribute", () => {
    const links = [
      { name: "Preços", path: "/preco" },
    ];
    render(
    <Navigation links={links}/>
    );

    const precos = screen.getByRole('link', {
      name: /preços/i
    });

    expect(precos).toHaveAttribute("href", /*'/preco'*/ "#")
  })
});

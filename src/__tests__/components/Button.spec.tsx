import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "@/components/Button/index";


describe("Button Component", () => {
  it("Should render Button", () => {
    render(<Button>button</Button>);

    const button = screen.getByRole("button", {
      name: /button/i,
    });

    expect(button).toBeInTheDocument();
  });

  it("Should render background color #00E1E7 by default", () => {
    render(<Button>button</Button>);

    const button = screen.getByRole("button", {
      name: /button/i,
    });

    expect(button).toHaveAttribute("backgroundColor", "#00E1E7");
  });

  it("Should render background color red when was passed", () => {
    render(<Button backgroundColor="red">button</Button>);

    const button = screen.getByRole("button", {
      name: /button/i,
    });

    expect(button).toHaveAttribute("backgroundColor", "red");
  });

  it("Should render border none by default", () => {
    render(<Button>button</Button>);

    const button = screen.getByRole("button", {
      name: /button/i,
    });

    expect(button).toHaveAttribute("border", "none");
  });

  it("Should render border=1px solid rgb(255,255,255, 0.5) when was passed", () => {
    render(<Button border="1px solid rgb(255,255,255, 0.5)">button</Button>);

    const button = screen.getByRole("button", {
      name: /button/i,
    });

    expect(button).toHaveAttribute("border", "1px solid rgb(255,255,255, 0.5)");
  });

  it("Should render color black by default", () => {
    render(<Button>button</Button>);

    const button = screen.getByRole("button", {
      name: /button/i,
    });

    expect(button).toHaveAttribute("color", "black");
  });

  it("Should render color white when was passed", () => {
    render(<Button color="white">button</Button>);

    const button = screen.getByRole("button", {
      name: /button/i,
    });

    expect(button).toHaveAttribute("color", "white");
  });
});

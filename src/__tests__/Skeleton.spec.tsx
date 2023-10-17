import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Skeleton from "@/components/Skeleton/index";
import { renderWithTheme } from "@/lib/renderWithTheme";

describe("Skeleton Component", () => {
  it("should render Skeleton", () => {
    render(<Skeleton />);

    const containerElement = screen.getByRole("main");
    const contentElement = screen.getAllByRole("list");

    expect(contentElement).toHaveLength(5);
    expect(containerElement).toBeInTheDocument();
  });

  it("should render spacings", () => {
    renderWithTheme(<Skeleton spacings={10} lines={10} />);

    const containerElement = screen.getByRole("main");
    const contentElement = screen.getAllByRole("list");

    expect(contentElement).toHaveLength(10);
    expect(containerElement).toBeInTheDocument();

    expect(containerElement).toHaveStyle({
      gap: "10px",
    });
  });

  it("should render height", () => {
    renderWithTheme(<Skeleton spacings={10} lines={10} height={40} />);

    const containerElement = screen.getByRole("main");
    const contentElement = screen.getAllByRole("list");

    expect(contentElement).toHaveLength(10);
    expect(containerElement).toBeInTheDocument();

    expect(contentElement[0]).toHaveStyle({
      height: "10px",
    });
  });
});

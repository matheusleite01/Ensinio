import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoginButton from "@/components/LoginButton/index";

describe("LoginButton component", () => {
  it("Should render LoginButton", () => {
    render(<LoginButton>Entrar</LoginButton>)

    const login = screen.getByRole("button", {
      name: /entrar/i,
    });

    expect(login).toBeInTheDocument();
  })
})

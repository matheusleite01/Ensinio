import "@testing-library/jest-dom";
import {screen } from "@testing-library/react";
import CustomDropdown from "@/components/CustomDropdown";
import { renderWithTheme } from "@/lib/renderWithTheme";
import Eadicon from "../../public/assets/icons/ead-icon";

describe("CustomDropdown component", () => {
  it("Should render CustomDropdown", () => {
    const options = [
      {
        text: "Crie uma Escola Online",
        subText: "Lorem ipsum dolor sit amet",
        icon: <Eadicon />,
      },
     ]
    renderWithTheme(<CustomDropdown title="titulo" options={options}/>)

    const title = screen.getByRole('heading', {
      name: /titulo/i
    })

    const text = screen.getByText(/crie uma escola online/i);

    const subText = screen.getByText(/lorem ipsum dolor sit amet/i);

    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(subText).toBeInTheDocument();
    
  })
})
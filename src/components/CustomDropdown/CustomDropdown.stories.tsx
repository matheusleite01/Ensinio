import { Meta, StoryObj } from "@storybook/react";
import CustomDropDown from ".";

const meta: Meta<typeof CustomDropDown> = {
  component: CustomDropDown,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CustomDropDown>;

const options = [
  {
    text: "Crie uma Escola Online",
    subText: "Lorem ipsum dolor sit amet",
  },
  {
    text: "Comunidade e rede social",
    subText: "Lorem ipsum dolor sit amet",
  },
  {
    text: "Gamificação",
    subText: "Lorem ipsum dolor sit amet",
  },
  {
    text: "Aplicativo mobile",
    subText: "Lorem ipsum dolor sit amet",
  },
];

export const Primary: Story = {
  args: {
    title: "sua escola",
    options: options,
  },
  parameters: {
    backgrounds: {
      default: "Bg",
      values: [
        {
          name: "Bg",
          value: "linear-gradient(85deg, #5f41d9 2.25%, #41b5d9 100.27%)",
        },
      ],
    },
  },
};

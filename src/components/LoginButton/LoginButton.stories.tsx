import { Meta, StoryObj } from "@storybook/react";
import LoginButton from ".";

const meta: Meta<typeof LoginButton> = {
  component: LoginButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LoginButton>;

export const Primary: Story = {
  args: {
    children: "Entrar",
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

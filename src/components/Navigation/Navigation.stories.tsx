import { Meta, StoryObj } from "@storybook/react";
import Navigation from ".";

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Navigation>;

const links = [
  { name: "Preços", path: "/preco" },
  { name: "Academy", path: "/Academy" },
  { name: "Blog", path: "/Blog" },
  { name: "Contato", path: "/Contato" },
];

export const Primary: Story = {
  args: {
    links: links,
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

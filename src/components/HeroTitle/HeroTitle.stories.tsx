import { Meta, StoryObj } from "@storybook/react";
import HeroTitle from ".";

const meta: Meta<typeof HeroTitle> = {
  component: HeroTitle,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HeroTitle>;

const HeroOptions = {
  subText: "plataforma all in one",
  title: "Sua escola online poderosa e lucrativa",
  text: "Tenha sua própria escola online 100% white label com rede social, gamificação, clube de assinaturas, ecommerce e sistema EAD completo.",
};

export const Primary: Story = {
  args: {
    HeroOptions: HeroOptions,
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

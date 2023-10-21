import { Meta,StoryObj} from "@storybook/react"
import SideContent from ".";

const meta: Meta<typeof SideContent> = {
  component: SideContent,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof SideContent>;

export const Primary: Story = {
  args: {
    text: "PENSAMOS EM CADA DETALHE",
    title: "Queremos que o aluno se sinta confortável enquanto aprende"
  }
};
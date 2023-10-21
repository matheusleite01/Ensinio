import { Meta,StoryObj} from "@storybook/react"
import Skeleton from ".";


const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
  args: {
    lines: 5,
    height: 20,
    spacings: 6
}
};
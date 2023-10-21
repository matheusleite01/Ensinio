import { Meta,StoryObj} from "@storybook/react"
import Button from ".";


const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
 args: {
  children: "Primary"
 },
 parameters: {
  backgrounds: {
    default: "light"
  }
},
};

export const Secondary: Story = {
  args: {
   children: "Secondary",
   color: "white",
   backgroundColor: "none",
   border: "1px solid rgb(255,255,255, 0.5)"
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
 };
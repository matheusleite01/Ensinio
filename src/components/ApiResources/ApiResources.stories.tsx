import { Meta, StoryObj } from "@storybook/react";
import ApiResources from ".";
import { Provider } from "react-redux";
import store from "../../redux/configureStore";

const meta: Meta<typeof ApiResources> = {
  component: ApiResources,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <ApiResources />
      </Provider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ApiResources>;

export const Primary: Story = {};

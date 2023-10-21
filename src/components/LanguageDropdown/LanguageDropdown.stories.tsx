import "../../utils/i18n";
import { Meta,StoryObj} from "@storybook/react"
import LanguageDropdown from ".";
import { Provider } from "react-redux";
import store from "../../redux/configureStore";


const meta: Meta<typeof LanguageDropdown> = {
  component: LanguageDropdown,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof LanguageDropdown>;

export const Primary: Story = {
  parameters: {
    backgrounds: {
      default: 'Bg',
      values: [
        { name: 'Bg', value: 'linear-gradient(85deg, #5f41d9 2.25%, #41b5d9 100.27%)' },
      ],
    },
  },
};

import { Meta, StoryObj } from "@storybook/react";
import { CardPlaceholder } from "./card-placeholder/card-placeholder";

const meta: Meta<typeof CardPlaceholder> = {
  component: CardPlaceholder,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CardPlaceholder>;

export const CardPlaceHolderSample: Story = {
  render: () => (
    <>
      <CardPlaceholder />
    </>
  ),
};

export const MultiCardPlaceholders: Story = {
  render: () => (
    <>
      <CardPlaceholder count={3} />
    </>
  ),
};

export const TestCardPlaceholder: Story = {
  render: (args) => (
    <>
      <CardPlaceholder {...args} />
    </>
  ),
};

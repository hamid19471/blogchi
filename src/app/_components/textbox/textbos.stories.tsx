import { Meta, StoryObj } from "@storybook/react";
import { Textbox } from "./textbox";

const meta: Meta<typeof Textbox> = {
  component: Textbox,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Textbox>;

export const TextboxBrandColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-2/3">
      <Textbox variant="primary" placeholder="primary" />
      <Textbox variant="secondary" placeholder="secondary" />
      <Textbox variant="accent" placeholder="accent" />
      <Textbox variant="ghost" placeholder="ghost" />
      <Textbox variant="info" placeholder="info" />
      <Textbox variant="success" placeholder="success" />
      <Textbox variant="warning" placeholder="warning" />
      <Textbox variant="error" placeholder="error" />
      <Textbox variant="neutral" placeholder="neutral" />
    </div>
  ),
};

export const TextboxSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-2/3">
      <Textbox size="tiny" placeholder="tiny" />
      <Textbox size="small" placeholder="small" />
      <Textbox size="normal" placeholder="normal" />
      <Textbox size="large" placeholder="large" />
    </div>
  ),
};

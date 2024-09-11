import { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";

const meta: Meta<typeof Progress> = {
  component: Progress,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const ProgressBrandColors: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-1/2">
      <Progress variant="primary" value={50} />
      <Progress variant="secondary" value={50} />
      <Progress variant="neutral" value={50} />
      <Progress variant="accent" value={50} />
      <Progress variant="info" value={50} />
      <Progress variant="success" value={50} />
      <Progress variant="warning" value={50} />
      <Progress variant="error" value={50} />
    </div>
  ),
};

export const ProgressSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-1/2">
      <Progress size="tiny" value={50} />
      <Progress size="small" value={50} />
      <Progress size="normal" value={50} />
      <Progress size="large" value={50} />
    </div>
  ),
};

export const ProgressTest: Story = {
  render: (args) => <Progress {...args} />,
};

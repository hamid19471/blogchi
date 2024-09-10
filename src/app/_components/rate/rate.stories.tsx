import { Meta, StoryObj } from "@storybook/react";
import { Rate } from "./rate";
import { Rat } from "lucide-react";

const meta: Meta<typeof Rate> = {
  component: Rate,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Rate>;

export const RateBrandColors: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Rate rate={5} />
      <Rate rate={5} variant="primary" />
      <Rate rate={5} variant="secondary" />
      <Rate rate={5} variant="accent" />
      <Rate rate={5} variant="neutral" />
      <Rate rate={5} variant="success" />
      <Rate rate={5} variant="warning" />
      <Rate rate={5} variant="error" />
      <Rate rate={5} variant="info" />
    </div>
  ),
};

export const RateSize: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Rate rate={5} size="tiny" />
      <Rate rate={5} size="small" />
      <Rate rate={5} size="normal" />
      <Rate rate={5} size="large" />
    </div>
  ),
};

export const RateWithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Rate rate={1} />
      <Rate rate={2} />
      <Rate rate={3} />
      <Rate rate={4} />
      <Rate rate={5} />
    </div>
  ),
};

export const RateTest: Story = {
  render: (args) => {
    return <Rate {...args} />;
  },
};

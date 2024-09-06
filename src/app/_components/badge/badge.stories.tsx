import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const BadgeBrandColors: Story = {
  render: () => (
    <>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </>
  ),
};

export const BadgeSizes: Story = {
  render: () => (
    <>
      <Badge size="tiny" variant="warning">
        Tiny
      </Badge>
      <Badge size="small" variant="warning">
        Small
      </Badge>
      <Badge size="normal" variant="warning">
        Normal
      </Badge>
      <Badge size="large" variant="warning">
        Large
      </Badge>
    </>
  ),
};

export const BadgeTest: Story = {
  render: (args) => <Badge {...args}>Test</Badge>,
};

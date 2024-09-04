import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonBrandColors: Story = {
  render: () => (
    <>
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="neutral">Neutral</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="info">Info</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="error">Error</Button>
    </>
  ),
};

export const ButtonSizes: Story = {
  render: () => (
    <>
      <Button size="tiny">Tiny</Button>
      <Button size="small">Small</Button>
      <Button size="normal">Normal</Button>
      <Button size="large">Large</Button>
    </>
  ),
};
export const ButtonShapes: Story = {
  render: () => (
    <>
      <Button shape="default">Default</Button>
      <Button shape="square">Square</Button>
      <Button shape="full">Full</Button>
      <Button shape="wide">Wide</Button>
    </>
  ),
};

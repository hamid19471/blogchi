import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

import results from "../../../../.jest-results.json";

import { withTests } from "@storybook/addon-jest";

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

export const ButtonStateColors: Story = {
  render: () => (
    <>
      <Button variant="success">Success</Button>
      <Button variant="info">Info</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="error">Error</Button>
      <Button variant="success" isOutline={true}>
        Success
      </Button>
      <Button variant="info" isOutline={true}>
        Info
      </Button>
      <Button variant="warning" isOutline={true}>
        Warning
      </Button>
      <Button variant="error" isOutline={true}>
        Error
      </Button>
    </>
  ),
};

export const ButtonOutline: Story = {
  render: () => (
    <>
      <Button variant="primary" isOutline={true}>
        Primary
      </Button>
      <Button variant="secondary" isOutline={true}>
        Secondary
      </Button>
      <Button variant="neutral" isOutline={true}>
        Neutral
      </Button>
      <Button variant="ghost" isOutline={true}>
        Ghost
      </Button>
      <Button variant="accent" isOutline={true}>
        Accent
      </Button>
      <Button variant="info" isOutline={true}>
        Info
      </Button>
      <Button variant="success" isOutline={true}>
        Success
      </Button>
      <Button variant="warning" isOutline={true}>
        Warning
      </Button>
      <Button variant="error" isOutline={true}>
        Error
      </Button>
    </>
  ),
};

export const ButtonWide: Story = {
  render: () => (
    <>
      <Button shape="wide">Wide</Button>
    </>
  ),
};

export const ButtonFull: Story = {
  render: () => (
    <>
      <Button shape="full">Full</Button>
    </>
  ),
};

export const ButtonSquare: Story = {
  render: () => (
    <>
      <Button shape="square" size="tiny">
        X
      </Button>
      <Button shape="square" size="small">
        X
      </Button>
      <Button shape="square" size="normal">
        X
      </Button>
      <Button shape="square" size="large">
        X
      </Button>
    </>
  ),
};

export const ButtonWithLoading: Story = {
  render: () => (
    <>
      <Button
        variant="neutral"
        isLoading={true}
        loadingText="Loading"
        isDisabled={true}
      ></Button>
      <Button
        variant="neutral"
        isLoading={true}
        loadingType="ring"
        loadingText="Loading"
        isDisabled={true}
      ></Button>
      <Button
        variant="neutral"
        isLoading={true}
        isOutline={true}
        loadingType="ring"
        loadingText="Loading"
        isDisabled={true}
      ></Button>
      <Button
        variant="neutral"
        isLoading={true}
        isOutline={true}
        loadingText="Loading"
        isDisabled={true}
      ></Button>
    </>
  ),
};

export const TestButton: Story = {
  render: (args) => <Button {...args}>Click Here</Button>,
};

TestButton.decorators = [withTests({ results })];

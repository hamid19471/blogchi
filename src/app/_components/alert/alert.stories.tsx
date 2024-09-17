import { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./alert";

const meta: Meta<typeof Alert> = {
  component: Alert,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const AlertBrandColorWithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-5 w-full">
      <Alert variant="primary" showIcon={true}>
        Alert Primary
      </Alert>
      <Alert variant="secondary" showIcon={true}>
        Alert Secondary
      </Alert>
      <Alert variant="neutral" showIcon={true}>
        Alert Secondary
      </Alert>
      <Alert variant="accent" showIcon={true}>
        Alert Secondary
      </Alert>
      <Alert variant="info" showIcon={true}>
        Alert Secondary
      </Alert>
      <Alert variant="success" showIcon={true}>
        Alert Secondary
      </Alert>
      <Alert variant="warning" showIcon={true}>
        Alert Secondary
      </Alert>
      <Alert variant="error" showIcon={true}>
        Alert Secondary
      </Alert>
    </div>
  ),
};

export const AlertBrandColorWithoutIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-5 w-full">
      <Alert variant="primary" showIcon={false}>
        Alert Primary
      </Alert>
      <Alert variant="secondary" showIcon={false}>
        Alert Secondary
      </Alert>
      <Alert variant="neutral" showIcon={false}>
        Alert Secondary
      </Alert>
      <Alert variant="accent" showIcon={false}>
        Alert Secondary
      </Alert>
      <Alert variant="info" showIcon={false}>
        Alert Secondary
      </Alert>
      <Alert variant="success" showIcon={false}>
        Alert Secondary
      </Alert>
      <Alert variant="warning" showIcon={false}>
        Alert Secondary
      </Alert>
      <Alert variant="error" showIcon={false}>
        Alert Secondary
      </Alert>
    </div>
  ),
};

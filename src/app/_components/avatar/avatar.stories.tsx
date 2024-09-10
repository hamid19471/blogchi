import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./avarat";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const BadgeBrandColors: Story = {
  render: () => (
    <>
      <Avatar variant="primary" />
      <Avatar variant="secondary" />
      <Avatar variant="accent" />
      <Avatar variant="info" />
      <Avatar variant="success" />
      <Avatar variant="warning" />
      <Avatar variant="error" />
    </>
  ),
};

export const AvatarSize: Story = {
  render: () => (
    <>
      <Avatar size="tiny" />
      <Avatar size="small" />
      <Avatar size="normal" />
      <Avatar size="large" />
    </>
  ),
};

export const AvatarWithImage: Story = {
  render: () => (
    <>
      <Avatar src="/images/hamid.webp" alt="avatar" />
    </>
  ),
};

export const AvatarTesting: Story = {
  render: (args) => (
    <>
      <Avatar {...args} />
    </>
  ),
};

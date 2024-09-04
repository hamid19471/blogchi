import { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./loading";

const meta: Meta<typeof Loading> = {
  component: Loading,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const SpinnerLoadingColors: Story = {
  render: () => (
    <>
      <Loading variant="primary" />
      <Loading variant="secondary" />
      <Loading variant="neutral" />
      <Loading variant="info" />
      <Loading variant="success" />
      <Loading variant="warning" />
      <Loading variant="error" />
    </>
  ),
};

export const SpinnerLoadingSizes: Story = {
  render: () => (
    <>
      <Loading size="tiny" />
      <Loading size="small" />
      <Loading size="normal" />
      <Loading size="large" />
    </>
  ),
};

export const RingLoadingColors: Story = {
  render: () => (
    <>
      <Loading variant="primary" loadingType="ring" />
      <Loading variant="secondary" loadingType="ring" />
      <Loading variant="neutral" loadingType="ring" />
      <Loading variant="info" loadingType="ring" />
      <Loading variant="success" loadingType="ring" />
      <Loading variant="warning" loadingType="ring" />
      <Loading variant="error" loadingType="ring" />
    </>
  ),
};

export const RingLoadingSizes: Story = {
  render: () => (
    <>
      <Loading size="tiny" loadingType="ring" />
      <Loading size="small" loadingType="ring" />
      <Loading size="normal" loadingType="ring" />
      <Loading size="large" loadingType="ring" />
    </>
  ),
};

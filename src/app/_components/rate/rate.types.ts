import { ComponentBase } from "../types/component-base.type";

export type RateProps = Omit<ComponentBase, "isDisabled"> & {
  rate: number;
};

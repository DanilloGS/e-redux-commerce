import { StatusBarProps, ViewProps } from "react-native";

export interface IContainer extends ViewProps {
  noSafeArea?: boolean;
  statusBarProps?: StatusBarProps;
}

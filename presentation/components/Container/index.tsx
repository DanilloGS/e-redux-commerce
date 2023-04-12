import React from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  View,
} from "react-native";

import { styles } from "./Container.styles";
import { COLORS } from "_/presentation/constants";
import { IContainer } from "./Container.types";

const Container = ({
  statusBarProps,
  noSafeArea,
  children,
  style,
  ...rest
}: IContainer) => {
  const _style = StyleSheet.flatten([style, styles.flexContainer]);

  const statusBarColor = statusBarProps?.backgroundColor ?? COLORS.NO_COLOR;
  const isTranslucent = noSafeArea ?? statusBarProps?.translucent;

  const renderStatusbar = () => (
    <>
      <StatusBar
        {...statusBarProps}
        backgroundColor={isTranslucent ? COLORS.NO_COLOR : statusBarColor}
        translucent={isTranslucent}
      />
      {!isTranslucent && (
        <SafeAreaView style={{ backgroundColor: statusBarColor }} />
      )}
    </>
  );

  return (
    <KeyboardAvoidingView
      style={styles.flexContainer}
      behavior={Platform.OS === "ios" ? "height" : undefined}
    >
      {renderStatusbar()}
      <View {...rest} style={_style}>
        {children}
      </View>
      {!noSafeArea && (
        <SafeAreaView style={{ backgroundColor: COLORS.NO_COLOR }} />
      )}
    </KeyboardAvoidingView>
  );
};

export default Container;

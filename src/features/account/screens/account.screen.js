import React from "react";
import { colors } from "../../../infrastructure/theme/colors";
import { Spacer } from "../../restaurants/components/spacer/spacer.components";
import { useNavigation } from "@react-navigation/native";
import { Text } from "../../restaurants/components/typography/text.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AnimationWrapper,
  stylesWatermelonAnimation,
} from "../components/account.styles";
import LottieView from "lottie-react-native";

import { View, StyleSheet } from "react-native";

export const TestAnimation = () => {
  return (
    <LottieView
      style={stylesWatermelonAnimation.animation}
      key="animation"
      source={require("../../../../assets/watermelon.json")}
      autoPlay
      loop
      resizeMode="contain"
    />
  );
};

export const AccountScreen = () => {
  const navigation = useNavigation();
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <TestAnimation />
      </AnimationWrapper>
      <Text>Meals To Go</Text>
      <AccountContainer>
        <AuthButton
          icon={"lock-open-outline"}
          buttonColor={colors.brand.primary}
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon={"email"}
            buttonColor={colors.brand.primary}
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};

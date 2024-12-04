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
} from "../components/account.styles";
import { View } from "react-native";

export const AccountScreen = () => {
  const navigation = useNavigation();
  return (
    <AccountBackground>
      <AccountCover />
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

import React from "react";
import { colors } from "../../../infrastructure/theme/colors";
import { Spacer } from "../../restaurants/components/spacer/spacer.components";
import { useNavigation } from "@react-navigation/native";
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
            icon={"lock-open-outline"}
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

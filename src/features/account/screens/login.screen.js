import React, { useState, useContext } from "react";
import { colors } from "../../../infrastructure/theme/colors";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
} from "../components/account.styles";
import { Text } from "../../restaurants/components/typography/text.component";
import { Spacer } from "../../restaurants/components/spacer/spacer.components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  const navigation = useNavigation();
  return (
    <AccountBackground>
      <AccountCover />
      <Text>Meals To Go</Text>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              buttonColor={colors.brand.primary}
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton
          mode="contained"
          onPress={() => navigation.goBack()}
          buttonColor={colors.brand.primary}
        >
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};

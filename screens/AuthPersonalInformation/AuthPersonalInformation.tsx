import { View } from "react-native";

import AuthLayout from "layouts/AuthLayout/AuthLayout";
import Input from "components/Input";
import { Calendar, User, Gender } from "components/Icon";
import Button from "components/Button/Button";
import { global } from "global/styles";

import { IAuthPersonalInformation } from "./types";
import { AuthNavigatorData } from "navigator/navigator.data";

export default function AuthPersonalInformation({
  navigation,
}: IAuthPersonalInformation) {
  return (
    <AuthLayout subtitle="Information about yourself">
      <View style={global.authMain}>
        <View style={global.authForm}>
          <Input
            icon={User}
            options={{
              placeholder: "First Name",
            }}
          />
          <Input
            icon={User}
            options={{
              placeholder: "Last Name",
            }}
          />
          <Input
            icon={Calendar}
            options={{
              placeholder: "Birthday",
            }}
          />
          <Input
            icon={Gender}
            options={{
              placeholder: "Gender",
            }}
          />
          <Button
            title="Continue"
            color="solid"
            onPress={() =>
              navigation?.navigate(AuthNavigatorData.AuthRegionSettings)
            }
          />
        </View>
      </View>
    </AuthLayout>
  );
}

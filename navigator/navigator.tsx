import { NavigationContainer } from "@react-navigation/native";
import { useAppSelector } from "store";
import { useLayoutEffect } from "react";
import { AuthStack } from "./navigator.stack";

export function Navigator() {
  const user = useAppSelector((state) => state.user);

  useLayoutEffect(() => {
    console.log(user);
  }, [user, user.isLogin]);

  return <NavigationContainer>{AuthStack()}</NavigationContainer>;
}

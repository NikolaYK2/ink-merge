import {ReactElement, ReactNode} from "react";
import {Keyboard, TouchableWithoutFeedback} from "react-native";

export const HideKeyboard = ({children}: { children: ReactNode }): ReactElement => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

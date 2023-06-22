import { TextInputProps, View } from "react-native";
import { ContainerInput, IconEye } from "./input.style";
import { DisplayFlexColumn } from "../globalStyles/globalView.styled";
import { TextTypes } from "../text/textTypes";
import Text from "../text/Text";
import { theme } from "../../themes/theme";
import { useState } from "react";


interface InputProps extends TextInputProps {
    title?: string;
    errorMessage?: string;
    secureTextEntry?: boolean;
    margin?: string;
}

export const Input = ({ margin, title, secureTextEntry, errorMessage, ...props }:
    InputProps) => {
    const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);

    const handleOnPressEye = () => {
        setCurrentSecure((current) => !current);
    }


    return (
        <DisplayFlexColumn customMargin={margin}>
            {title && (
                <Text
                    margin="0px 0px 4px 16px"
                    color={theme.colors.grayTheme.gray100}
                    type={TextTypes.PARAGRAPH_SMALL_BOLD}
                >
                    {title}
                </Text>
            )}
            <View>
                <ContainerInput hasSecureTextEntry={secureTextEntry} secureTextEntry={currentSecure} isError={!!errorMessage} {...props} />
                {secureTextEntry && <IconEye onPress={handleOnPressEye} name={currentSecure ? "eye" :
                    "eye-blocked"}
                    size={20} />}
            </View>

            {errorMessage && (
                <Text
                    margin="4px 0px 0px 8px"
                    type={TextTypes.PARAGRAPH_SMALL_BOLD}
                    color={theme.colors.orangeTheme.orange80}>
                    {errorMessage}
                </Text>)}
        </DisplayFlexColumn>
    )
}

export default Input;
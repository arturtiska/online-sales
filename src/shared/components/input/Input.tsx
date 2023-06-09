import { TextInputProps } from "react-native";
import { ContainerInput } from "./input.style";
import { DisplayFlexColumn } from "../globalStyles/globalView.styled";
import { TextTypes } from "../text/textTypes";
import Text from "../text/Text";
import { theme } from "../../themes/theme";


interface InputProps extends TextInputProps {
    title?: string;
    errorMessage?: string;
}

export const Input = ({ title, errorMessage, ...props }: InputProps) => {
    return (
        <DisplayFlexColumn>
            {title && (
                <Text
                    margin="0px 0px 4px 16px"
                    color={theme.colors.grayTheme.gray100}
                    type={TextTypes.PARAGRAPH_SMALL_BOLD}
                >
                    {title}
                </Text>
            )}
            <ContainerInput isError={!!errorMessage} {...props} />
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
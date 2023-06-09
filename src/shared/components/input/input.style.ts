import styled from "styled-components/native";
import { theme } from "../../themes/theme";

interface ContainerInputProps {
    isError: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
    width: 100%;
    height: 50px;
    padding: 16px;
    background-color: ${theme.colors.neutralTheme.white};
    border-width: 1px;
    border-color:${(props) => props.isError ? theme.colors.orangeTheme.orange80 : theme.colors.grayTheme.gray80};
    color: ${theme.colors.neutralTheme.black};
    border-radius: 4px;
    `;


import styled from "styled-components/native";
import { theme } from "../../../shared/themes/theme";
import { Image } from "react-native";

export const ContainerLogin = styled.View`
height: 100%;
width: 100%;
background-color: ${theme.colors.neutralTheme.white};
justify-content: center;
align-items: center;
padding: 16px;
`;
export const ImageLogo = styled.Image`
width: 350px;
height: 350px;
margin-bottom: 24px
`;
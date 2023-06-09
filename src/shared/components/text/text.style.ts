import styled from "styled-components/native";

interface ContainertextProps {
    color?: string;
    fontSize: string;
    fontFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular';
    customMargin?: string;
}

export const ContainerText = styled.Text<ContainertextProps>`
${(props) => props.color ? `color: ${props.color};` : ''}
${(props) => props.customMargin ? `customMargin: ${props.customMargin};` : ''}

font-family: ${(props) => props.fontFamily};
font-size: ${(props) => props.fontSize};
`;	

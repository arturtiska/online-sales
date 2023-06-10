import styled from "styled-components/native";

interface DisplayProps {
    customMargin?: string;
}

export const DisplayFlexColumn = styled.View<DisplayProps>`
width: 100%;
display: flex;
margin: ${(props) => props.customMargin ? props.customMargin : "0"};
flex-direction: column;
`;
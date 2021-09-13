import React from "react";
import styled from "styled-components";

function Button({ children, primary }) {
	return <StyledButton primary={primary}>{children}</StyledButton>;
}

export default Button;

const StyledButton = styled.button`
	padding: 4px 12px;
	margin: 10px 0;
	color: ${({ primary }) => (primary ? "#fff" : "#616a7e")};
	background-color: ${({ primary }) => (primary ? "#7352ff" : "transparent")};
	border: ${({ primary }) => (primary ? "none" : "1px solid #7352ff")};
	border-radius: 6px;
	font-size: 16px;
`;

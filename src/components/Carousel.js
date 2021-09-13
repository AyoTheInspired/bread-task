import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

function Carousel() {
	return (
		<StyledContainer fluid>
			<Row>
				<Div className="flexed col">
					<h4 className="mb-2 header text-white">BROWSE ALL MY OFFERINGS</h4>
				</Div>
			</Row>
		</StyledContainer>
	);
}

export default Carousel;

const StyledContainer = styled(Container)`
	background: var(--pry-clr);
`;

const Div = styled.div`
	/* min-height: 300px; */
	background: black;
	padding-top: 250px;
	margin: 0 8px;

	.header {
		letter-spacing: 0.8px;
		margin-top: 20px;
	}
`;

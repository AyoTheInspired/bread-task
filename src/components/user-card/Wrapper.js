import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import CardMain from "../CardMain";

function Wrapper() {
	return (
		<Container fluid>
			<Row>
				<Div className="flexed col">
					<CardMain />
				</Div>
			</Row>
		</Container>
	);
}

export default Wrapper;

const Div = styled.div`
	min-height: 500px;
	background: url("/images/wavy.png") center/cover no-repeat fixed;
`;

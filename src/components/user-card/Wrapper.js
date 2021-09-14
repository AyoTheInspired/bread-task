import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import CardMain from "./CardMain";

function Wrapper() {
	return (
		<Container fluid>
			<Row>
				<Div className="flexed col px-2 mt-5">
					<CardMain />
				</Div>
			</Row>
		</Container>
	);
}

export default Wrapper;

const Div = styled.div`
	height: 400px;
	background: url("/images/wavy.png") center/cover no-repeat fixed;
	padding: 20px 0;
	z-index: 50;
`;

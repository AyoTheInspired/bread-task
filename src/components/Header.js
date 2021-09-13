import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

function Header() {
	return (
		<Container fluid>
			<Row>
				<Main className="flexed p-4 mx-auto col">
					<div className="title__container">
						<p className="mb-0 title text-center text-white">
							Start your day with the <br /> goodness of yoga
						</p>
					</div>
				</Main>
			</Row>
		</Container>
	);
}

export default Header;

const Main = styled.section`
	height: 300px;
	background: var(--linear-bg);

	.title__container {
		align-self: flex-start;
		background: var(--title-bg);
		padding: 15px;
	}

	.title {
		font-weight: bold;
		font-size: 30px;
	}
`;

/* Vector */

// position: absolute;
// left: -18.53%;
// right: 71.89%;
// top: -0.86%;
// bottom: 0.22%;

// border: 1px solid #7352FF;

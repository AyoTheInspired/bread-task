import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

function Header() {
	return (
		<Container fluid>
			<Row>
				<Main className="flexed p-4 mx-auto col mb-3">
					<div className="title__container col-lg-8">
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

	@media (max-width: 500px) {
		.title {
			font-size: 25px;
		}
	}
`;

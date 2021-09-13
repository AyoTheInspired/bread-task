import React from "react";
import styled from "styled-components";
import CardTop from "./CardTop";
import Thumbnail from "./Thumbnail";
import UserCardFooter from "./UserCardFooter";

function CardMain() {
	return (
		<Wrap className="p-2  col-lg-6 col-md-8">
			<CardTop />
			<Thumbnail />
			<UserCardFooter />
		</Wrap>
	);
}

export default CardMain;

const Wrap = styled.div`
	background: var(--pry-clr);
	border: 1px solid #fff;

	margin-top: 80px;

	@media (max-width: 500px) {
		margin-top: 120px;
	}
`;

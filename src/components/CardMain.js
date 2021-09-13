import React from "react";
import styled from "styled-components";
import CardTop from "./user-card/CardTop";
import Thumbnail from "./user-card/Thumbnail";

function CardMain() {
	return (
		<Wrap className="p-2 col-lg-6 col-md-8">
			<CardTop />
			<Thumbnail />
		</Wrap>
	);
}

export default CardMain;

const Wrap = styled.div`
	background: var(--pry-clr);
`;

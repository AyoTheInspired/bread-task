import React from "react";
import styled from "styled-components";
import CardTop from "./user-card/CardTop";

function CardMain() {
	return (
		<Wrap className="p-3 bg-success col-lg-8 ">
			<CardTop />
		</Wrap>
	);
}

export default CardMain;

const Wrap = styled.div``;

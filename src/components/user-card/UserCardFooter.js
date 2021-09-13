import React from "react";
import styled from "styled-components";
import Button from "../Button";

function UserCardFooter() {
	return (
		<Div>
			<p className="mb-3 footer__top">
				Subscribe to my profile and never miss another update from me.
			</p>

			<input type="text" placeholder="Enter your Email" />

			<Button primary>Subscribe</Button>
		</Div>
	);
}

export default UserCardFooter;

const Div = styled.div``;

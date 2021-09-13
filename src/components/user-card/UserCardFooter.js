import React from "react";
import styled from "styled-components";
import Button from "../Button";

function UserCardFooter() {
	return (
		<Div className="">
			<div className="wrap col-lg-10 mx-auto py-2">
				<p className="footer__top">
					Subscribe to my profile and never miss another update from me.
				</p>
				<input
					type="text"
					placeholder="Enter your Email"
					className="col-8 mr-4 py-1 "
				/>
				<Button primary>Subscribe</Button>
			</div>
		</Div>
	);
}

export default UserCardFooter;

const Div = styled.div`
	background: #fff;
	padding: 20px;

	.footer__top {
		font-weight: bold;
		font-size: 13px;
	}

	.wrap {
		border: 1px solid #d3c9ff;
		border-radius: 12px;
	}

	input {
		border: 1px solid #d3c9ff;
		border-radius: 8px;

		:focus {
			outline-width: 0;
		}
	}

	input::placeholder {
		font-size: 13px;
	}
`;

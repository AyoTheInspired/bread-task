import React from "react";
import styled from "styled-components";
import Button from "../Button";

const userItems = ["Yoga", "Wellness", "Fitness"];

function CardTop() {
	return (
		<Wrap>
			<div className="userAvatar d-flex justify-content-between align-items-start bg-light p-4">
				<div className="left fx-start">
					<div className="img__wrap">
						<img src="/images/jane.png" width="100" alt="user" />
					</div>
					<div className="items__wrap ml-1 flexed flex-wrap">
						{userItems.map((item, index) => (
							<p
								key={index + 1}
								className="mb-0 user__item col-5 text-center mr-auto my-1  mx-1">
								{item}
							</p>
						))}
					</div>
				</div>
				<div className="right flex-col ">
					<Button primary>Book Trial</Button>
					<Button secondary>Contact Me</Button>
				</div>
			</div>
		</Wrap>
	);
}

export default CardTop;

const Wrap = styled.div`
	.img__wrap {
		border: 1px solid var(--pry-clr);
		padding: 5px;
		border-radius: 10px;
	}

	.user__item {
		font-size: 12px;
		font-weight: bold;
		padding: 2px 10px;
		border-radius: 25px;
		cursor: pointer;
		border: 1px solid var(--pry-clr);
	}
`;
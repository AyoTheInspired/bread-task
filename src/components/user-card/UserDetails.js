import React from "react";
import styled from "styled-components";
import { userData } from "../../appData";

function UserDetails() {
	return (
		<Div>
			<h3 className="mb-2 user__name">Jane Doe</h3>

			<p className="mb-0 user__bio mt-2">
				Hi, I am Jane Doe, your next door fitness instructor with just one goal
				- Make people fit and healthy. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Quidem dolorem sit quas, provident numquam error
				maiores impedit ipsam. Autem, distinctio.
			</p>

			<div className="user__icons-wrap flex-btw px-3 py-2 my-2 col-lg-6">
				{userData.socialIcons.map((icon) => (
					<span className="socials"> {icon} </span>
				))}
			</div>
			<div className="divide"></div>

			<div className="location">
				<span className="locationIcon"> </span>
			</div>
		</Div>
	);
}

export default UserDetails;

const Div = styled.div`
	margin-top: 20px;

	.socials {
		font-size: 18px;
		cursor: pointer;
	}

	.divide {
		border-top: 0.5px solid gray;
		opacity: 0.5;
	}
`;

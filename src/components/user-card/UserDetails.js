import React from "react";
import styled from "styled-components";
import { userData } from "../../appData";
import { GoLocation } from "react-icons/go";
import { IoIosChatboxes } from "react-icons/io";

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
				{userData.socialIcons.map((icon, idx) => (
					<span key={idx} className="socials">
						{" "}
						{icon}{" "}
					</span>
				))}
			</div>
			<div className="divide"></div>

			<div className="locationWrap d-flex justify-contentt-start align-items-center my-3">
				<p className="mr-2 mb-0">
					<span className="locationIcon">
						<GoLocation />
					</span>{" "}
					Lives in{" "}
				</p>
				<span className="locationValue ml-3">New Delhi</span>
			</div>

			<div className="locationWrap d-flex justify-contentt-start align-items-center my-3">
				<p className="mr-2 mb-0">
					<span className="chatIcon mr-2">
						<IoIosChatboxes />
					</span>
					Speaks
				</p>

				{userData.languages.map((language, index) => (
					<span key={index} className="locationValue mx-3">
						{language}
					</span>
				))}
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

	.locationWrap {
		p,
		.locationIcon {
			font-weight: bold;
		}

		.locationValue {
			font-size: 12px;
			padding: 1px 8px;
			background: #ddd;
			border-radius: 8px;
		}
	}
`;

import React from "react";
import styled from "styled-components";

function CarouselItem({ properties }) {
	const { picturePath, title, detail, scale } = properties;

	return (
		<Div>
			<div className="content__wrap">
				<img
					width={`${scale ? "350px" : "230px"}`}
					src={picturePath}
					alt={title}
				/>
				<div className="text text-white p-2">
					<p className="mb-1 live text-center ">Live</p>
					<p className="mb-0 title"> {title} </p>
					<p className="mb-0 detail"> {detail} </p>
				</div>
			</div>
		</Div>
	);
}

export default CarouselItem;

const Div = styled.div`
	margin: 30px auto;

	.content__wrap {
		padding: 8px;
		border: 1px solid #aaa;
		border-radius: 5px;
		position: relative;

		img {
			opacity: 0.3;
			cursor: pointer;
			transition: var(--transition);

			:hover {
				opacity: 0.6;
			}
		}
	}

	.text {
		position: absolute;
		bottom: 10px;
		left: 15px;

		.live {
			width: 40px;
			font-size: 10px;
			padding: 0.3px 10px;
			border: 1px solid lightgreen;
			border-radius: 12px;
		}

		.title,
		.detail {
			font-size: 12px;
		}
	}
`;

// Friday - Online class
// Aug 8, 9:00 AM to 11:00 AM IST

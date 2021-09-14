import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import CarouselItem from "./CarouselItem";
import { carouselItems } from "../../appData";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function Carousel() {
	return (
		<StyledContainer fluid>
			<Row>
				<Section className="flex-col col">
					<h4 className="mb-2 header text-center text-white">
						BROWSE ALL MY OFFERINGS
					</h4>

					<Wrap className="mx-auto col-lg-10 flex-btw">
						{carouselItems.map((item, index) => {
							return <CarouselItem key={index + 1} properties={item} />;
						})}
					</Wrap>
					<div className="arrows flexed">
						<span className="leftArrow flexed">
							<GoArrowLeft />
						</span>

						<span className="rightArrow flexed">
							<GoArrowRight />
						</span>
					</div>
				</Section>
			</Row>
		</StyledContainer>
	);
}

export default Carousel;

const StyledContainer = styled(Container)`
	background: var(--pry-clr);
`;

const Section = styled.section`
	/* min-height: 300px; */
	background: black;
	padding-top: 250px;
	padding-bottom: 50px;
	margin: 0 8px;

	.header {
		letter-spacing: 0.8px;
		margin: 20px 0;
	}

	.leftArrow,
	.rightArrow {
		color: #fff;
		font-size: 28px;
		margin: 0 5px;
		cursor: pointer;
		padding: 2px;
		border: 1px solid #aaa;
		border-radius: 50%;
	}
`;

const Wrap = styled.div``;

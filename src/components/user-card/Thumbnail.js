import React from "react";
import styled from "styled-components";
import { RiArrowRightFill } from "react-icons/ri";

function Thumbnail() {
	return (
		<Div className="flexed p-3">
			<div className="thumb__left px-2">
				<p className="mb-0 thumb__advert">
					Check out my video about 30 min yoga for beginners.
				</p>

				<p className="mb-0 mt-3 contact">
					Contact me
					<span className="contact__arrow ml-2">
						<RiArrowRightFill />
					</span>
				</p>
			</div>
			<div className="thumb__right ml-2">
				<div className="img__wrap p-1">
					<img src="/images/yoga-thumb.png" alt="yoga" />
				</div>
			</div>
		</Div>
	);
}

export default Thumbnail;

const Div = styled.div`
	background: #fff;

	.thumb__advert {
		color: #2b2a35;
		font-weight: bold;
		font-size: 22px;
	}

	.img__wrap {
		border: 1px solid var(--pry-clr);
		border-radius: 5px;

		img {
			width: 270px;

			@media (max-width: 500px) {
				width: 230px;
			}
		}
	}

	.contact {
		color: var(--pry-clr);
	}
`;

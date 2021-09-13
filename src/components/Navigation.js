import React from "react";
import styled from "styled-components";

const navItems = [
	"Offerings",
	"Other Links",
	"Testimonials",
	"Portfolio",
	"Contact me",
];

function Navigation() {
	return (
		<Nav className="flex-btw px-3 py-2">
			<div className="nav__left">
				<p className="nav__title mb-0 text-white">bre.ad/jane</p>
			</div>
			<div className="nav__right flexed col-lg-8">
				<ul className="flexed my-auto py-1">
					{navItems.map((item) => (
						<li key={item} className="nav__right-item mx-3  text-white">
							{item}
						</li>
					))}
				</ul>

				<div className="trial__el mr-3">
					<p className="trial mb-0">Book Trial</p>
				</div>
			</div>
		</Nav>
	);
}

export default Navigation;

const Nav = styled.nav`
	background: var(--linear-bg);

	.nav__title {
		text-decoration: underline;
	}

	.nav__right-item {
		list-style-type: none;
		cursor: pointer;
		font-weight: 500;
	}

	.trial {
		border: 1px solid whitesmoke;
		padding: 2px 15px;
		border-radius: 20px;
		cursor: pointer;
		color: #fff;
		transition: var(--transition);

		:hover {
			background: #fff;
			color: #7352ff;
		}
	}
`;

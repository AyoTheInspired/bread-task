import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const navItems = [
	"Offerings",
	"Other Links",
	"Testimonials",
	"Portfolio",
	"Contact me",
];

function Navigation() {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<Nav className="flex-btw px-3 py-2">
			<div className="nav__left">
				<p className="nav__title mb-0 text-white">bre.ad/jane</p>
			</div>

			<div
				className={`${showSidebar && "show__sidebar"} nav__right flexed col`}>
				<ul className="flexed my-auto py-1 ml-auto">
					{navItems.map((item) => (
						<li key={item} className="nav__right-item text-white">
							{item}
						</li>
					))}

					<p className="trial mb-0">Book Trial</p>
				</ul>
			</div>

			<div
				className="hamburger__container flexed"
				onClick={() => setShowSidebar(!showSidebar)}>
				{showSidebar ? (
					<FaTimes className="hamburger" />
				) : (
					<GiHamburgerMenu className="hamburger" />
				)}
			</div>
		</Nav>
	);
}

export default Navigation;

const Nav = styled.nav`
	position: sticky !important;
	top: 0;
	width: 100%;
	z-index: 100;
	box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);
	background: var(--linear-bg);
	height: 50px;

	.nav__title {
		text-decoration: underline;
	}

	.nav__right-item {
		list-style-type: none;
		cursor: pointer;
		font-weight: 500;
		margin: 0 12px;
	}

	.hamburger {
		color: #fff;
		font-size: 20px;
		cursor: pointer;
	}

	.trial {
		border: 1px solid whitesmoke;
		padding: 2px 15px;
		border-radius: 20px;
		cursor: pointer;
		color: #fff;
		font-weight: 500;
		transition: var(--transition);

		:hover {
			background: #fff;
			color: #7352ff;
		}
	}

	li,
	.trial {
		white-space: nowrap;
	}

	.hamburger__container {
		display: none;
	}

	@media (max-width: 768px) {
		position: relative;

		.hamburger__container {
			display: flex;
		}

		.nav__right {
			position: absolute;
			top: 50px;
			left: 0;
			right: 0;
			width: 100vw;
			background: var(--linear-bg);
			padding: 10px 0;
			height: calc(100vh - 50px);
			transform: translateX(-100%);
			transition: var(--transition);
		}

		ul {
			padding: 30px;
			flex-direction: column;
			height: 100%;
			justify-content: space-between !important;
		}
	}

	.show__sidebar {
		transform: translatex(0);
	}
`;

import React from "react";
import styled from "styled-components";
import { footerLeftIcons, footerRightItems } from "../appData";
import { MdCopyright } from "react-icons/md";

function Footer() {
	return (
		<Div className=" flex-btw  flex-wrap">
			<div className="footer__left">
				<div className="footer__left-title flexed mb-0 ">
					<p className="mb-0">Powered by</p>
					<span className="footer__logo ml-2 mb-2">
						<img src="/images/bread-footer-logo.png" width="50" alt="bread" />
					</span>
				</div>

				<div className="icons__wrap flex-btw">
					{footerLeftIcons.map((icon, index) => (
						<span key={index + 1} className=" mx-auto footer__icon">
							{icon}
						</span>
					))}
				</div>
			</div>
			<div className="footer__right">
				<p className="copyTitle text-white mb-0">
					<span className="copyIcon">
						<MdCopyright />{" "}
					</span>
					Bread 2021. All rights reserved.
				</p>

				<div className="flexed">
					{footerRightItems.map((item, index) => (
						<p key={index + 1} className="mb-0 mx-auto footer__right-item">
							{item}
						</p>
					))}
				</div>
			</div>
		</Div>
	);
}

export default Footer;

const Div = styled.div`
	background: var(--pry-clr);
	padding: 15px 20px;

	.footer__left-title {
		font-size: 20px;
		font-weight: 400;
		color: #fff;
	}

	.footer__icon {
		color: #fff;
		font-size: 18px;
		cursor: pointer;
	}

	.footer__right {
		.copyIcon {
			font-size: 18px;
		}
		.footer__right-item {
			color: #fff;
			font-size: 15px;
			cursor: pointer;
		}
	}

	@media (max-width: 768px) {
		.footer__left {
			width: 90%;
			margin: 0 auto;
		}

		.footer__right {
			width: 100% !important;
			margin-top: 30px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.footer__right-item {
			margin: 0px 8px !important;
		}
	}

	@media (max-width: 500px) {
		.footer__right {
			padding: 18px 15px;
		}

		.footer__right,
		.footer__right-item {
			font-size: 12px !important;
		}
	}
`;

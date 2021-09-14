import {
	FaInstagram,
	FaFacebookF,
	FaYoutube,
	FaTwitter,
	FaSpotify,
} from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

export const navItems = [
	"Offerings",
	"Other Links",
	"Testimonials",
	"Portfolio",
	"Contact me",
];

export const userData = {
	socialIcons: [
		<FaInstagram />,
		<FaFacebookF />,
		<FaYoutube />,
		<FaTwitter />,
		<GrLinkedinOption />,
		<FaSpotify />,
	],

	languages: ["English", "Hindi", "Punjabi"],
};

export const carouselItems = [
	{
		picturePath: "/images/carousel-left.png",
		title: "Friday - Online class",
		detail: "Aug 8, 9:00 AM to 11:00 AM IST",
		scale: false,
		hide: true,
	},
	{
		picturePath: "/images/carousel-mid.png",
		title: "Friday - Online class",
		detail: "Aug 8, 9:00 AM to 11:00 AM IST",
		scale: true,
		hide: false,
	},
	{
		picturePath: "/images/carousel-right.png",
		title: "Friday - Online class",
		detail: "Aug 8, 9:00 AM to 11:00 AM IST",
		scale: false,
		hide: true,
	},
];

export const footerLeftIcons = [
	<FaInstagram />,
	<FaFacebookF />,
	<FaTwitter />,
	<GrLinkedinOption />,
];

export const footerRightItems = ["Terms", "Privacy", "About"];

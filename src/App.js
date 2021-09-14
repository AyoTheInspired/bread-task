import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Wrapper from "./components/user-card/Wrapper";
import CarouselWrap from "./components/carousel/CarouselWrap";
import Footer from "./components/Footer";
import ScrollIcon from "./components/ScrollIcon";

function App() {
	return (
		<div className="app">
			<Navigation />
			<ScrollIcon />
			<Header />
			<Wrapper />
			<CarouselWrap />
			<Footer />
		</div>
	);
}

export default App;

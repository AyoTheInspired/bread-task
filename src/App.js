import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Wrapper from "./components/user-card/Wrapper";
import CarouselWrap from "./components/carousel/CarouselWrap";

function App() {
	return (
		<div className="app">
			<Navigation />
			<Header />
			<Wrapper />
			<CarouselWrap />
		</div>
	);
}

export default App;

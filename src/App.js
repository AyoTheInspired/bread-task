import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Wrapper from "./components/user-card/Wrapper";

function App() {
	return (
		<div className="app">
			<Navigation />
			<Header />
			<Wrapper />
		</div>
	);
}

export default App;

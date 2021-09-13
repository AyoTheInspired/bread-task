import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";

function App() {
	return (
		<div className="app">
			<Navigation />
			<Header />
		</div>
	);
}

export default App;

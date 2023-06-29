import { Icon } from "@iconify/react";
import "./App.css";
import BoardList from "./components/BoardList";

function App() {
	return (
		<div className="App">
			<Icon icon="mdi-light:home" />
			<header>
				<h1>Your Boards</h1>
				<h2> </h2>
				<BoardList />
			</header>
		</div>
	);
}

export default App;

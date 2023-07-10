import { useParams } from "react-router-dom";
import CardList from "./CardList";
import axios from "axios";
import { useState, useEffect } from "react";
import NotFound from "./NotFound";

const Board = () => {
	const { id } = useParams();
	const baseURL = "http://127.0.0.1:5000/boards";
	const [board, setBoard] = useState({});
	const [isError, setIsError] = useState(null);
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		axios
			.get(`${baseURL}/${id}`)
			.then((response) => {
				setLoading(false)
				setBoard(response.data.board);

			})
			.catch((error) => {
				setLoading(false)
				setIsError(true)
			})
	}, []);

	return (
		<>
			{loading && <p className="text-7xl text-center">Loading...</p>}
			{!loading && !isError &&
				< section >
					<h1> {board.title}</h1>
					<h2>{board.description}</h2>
					{/* <input type="text"> Create a Card </input> */}
					<CardList board_id={id} cards={board.cards} />
				</section >}
			{!loading && isError && <NotFound />}
		</>
	);
};

export default Board;

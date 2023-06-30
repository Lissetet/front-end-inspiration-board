import { useParams } from "react-router-dom";
import CardList from "./CardList";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const Board = (prop) => {
	const { id } = useParams();
	const baseURL = "http://127.0.0.1:5000/boards";
	const [board, setBoard] = useState({});
	const [isError, setIsError] = useState(false)

	useEffect(() => {
		axios
			.get(`${baseURL}/${id}`)
			.then((response) => {
				setBoard(response.data.board);
				console.log(response.data.board.cards);
			})
			.catch((error) => {
				setIsError(true)
			})

			;
	}, []);

	return (
		<>
			{isError && <Navigate to="/error" />}
			{!isError && <section>
				<h1> {board.title}</h1>
				<h2>{board.description}</h2>
				{/* <input type="text"> Create a Card </input> */}
				<CardList board_id={id} cards={board.cards} />
			</section>}
		</>
	);
};

export default Board;

import Card from "./Card";
import axios from "axios";
import React, { useState, useEffect } from "react";

const CardList = ({ board_id, cards = [] }) => {
	const [cardList, setCardList] = useState([]);

	const baseURL = "http://127.0.0.1:5000/boards";
	useEffect(() => {
		axios.get(`${baseURL}/${board_id}/cards`).then((response) => {
			// setCardList(response.data.board.cards);
		});
	}, []);

	// .catch(() => {
	// 	console.log("error!");
	// });

	return (
		<div>
			{cards.map((card) => (
				<Card
					{...card}
					key={card.id}
					// handleLike={handleLike}
					// handleDelete={handleDelete}
					// handleEdit={handleEdit}
				/>
			))}
		</div>
	);
};

export default CardList;

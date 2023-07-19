import Card from "./Card";
import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;

const CardList = ({ cards, setCards }) => {
	const [activeCard, setActiveCard] = useState(null);

	const handleUpdate = (id, body) => {
		axios.patch(`${baseURL}/cards/${id}`, body)
			.then((response) => {
				const newCard = response.data.card;
				const newCards = cards.map(card => card.id === id ? newCard : card);
				setCards(newCards);
			})
	}

	const handleDelete = (id) => {
		axios.delete(`${baseURL}/cards/${id}`)
			.then((response) => {
				const newCards = cards.filter((card) => card.id !== id);
				setCards(newCards);
			})
	}

	return (
		<>
			{cards.map((card) => (
				<Card
					key={card.id}
					card={card}
					handleDelete={handleDelete}
					handleUpdate={handleUpdate}
					activeCard={activeCard}
					setActiveCard={setActiveCard}
				/>
			))}
		</>
	);
};

CardList.propTypes = {
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			message: PropTypes.string.isRequired,
			likes_count: PropTypes.number.isRequired,
			date_created: PropTypes.string.isRequired,
			board_id: PropTypes.number.isRequired,
		})
	).isRequired,
	setCards: PropTypes.func.isRequired,
};

export default CardList;


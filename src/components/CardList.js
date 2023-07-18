import Card from "./Card";
import PropTypes from "prop-types";
import { useState } from "react";

const CardList = ({ cards, handleDelete, handleUpdate }) => {
	const [activeCard, setActiveCard] = useState(null);

	return (
		<div>
			{cards.map((card) => (
				<Card
					{...card}
					key={card.id}
				handleDelete={handleDelete}
				handleUpdate={handleUpdate}
				activeCard={activeCard}
				setActiveCard={setActiveCard}
				/>
			))}
		</div>
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
	handleUpdate: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired,
};

export default CardList;


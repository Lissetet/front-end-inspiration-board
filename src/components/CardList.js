import Card from "./Card";
import NewCard from "./NewCard";
import PropTypes from "prop-types";
import { useState } from "react";

const CardList = (props) => {
	const [cards, setCards] = useState(props.cards);
	return (
		<div 
			id="card_list" 
			className={`flex flex-wrap justify-center gap-8`}
		>
			{cards.map((card) => (
				<Card
					{...card}
					key={card.id}
					cards={cards}
					setCards={setCards}
				/>
			))}
			{props.boardID && (
				<NewCard
					boardID={props.boardID}
					cards={cards}
					setCards={setCards}
				/>
			)}
			
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
	setCards: PropTypes.func.isRequired,
	boardID: PropTypes.number.isRequired,
};

export default CardList;

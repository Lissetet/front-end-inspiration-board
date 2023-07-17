import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import PropTypes from 'prop-types';
import axios from "axios";
import DateFormat from "./DateFormat";

const baseURL = process.env.REACT_APP_BACKEND_URL;

const BoardCard = ({board, boards, setBoards}) => {
	const {id, title, owner, description, date_created, cards} = board;
	const plural = cards === 1 ? "" : "s";

	const deleteBoard = () => {
		axios
		.delete(`${baseURL}/boards/${id}`)
		.then((response) => {
			const newBoards = boards.filter((board) => board.id !== id);
			setBoards(newBoards);
		})
		.catch((error) => {
			console.log(error);
		});
	};


	return (
		<li className="card flex-col text-center relative">
			<button onClick={deleteBoard} className="absolute top-4 right-4 text-base">
				<Icon icon="mdi:trash" />
			</button>
			<DateFormat date={date_created} className="text-xs w-full font-bold mb-4" />
			<Link to={`/boards/${id}`}>
				<h3 className="text-lg font-bold pt-8">{title}</h3>
				<h4 className="text-xs mb-4 -mt-1">by {owner}</h4>
				<p className="text-sm pb-2">{description}</p>
				<p className="font-semibold pb-8">{cards} card{plural}</p>
      </Link>
		</li>
	);
};

BoardCard.propTypes = {
	board: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		owner: PropTypes.string.isRequired,
		theme : PropTypes.string,
		date_created: PropTypes.string.isRequired,
		cards: PropTypes.number.isRequired,
	}).isRequired,
	boards: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			owner: PropTypes.string.isRequired,
			theme : PropTypes.string,
			date_created: PropTypes.string.isRequired,
			cards: PropTypes.number.isRequired,
		})
	).isRequired,
	setBoards: PropTypes.func.isRequired,
};

export default BoardCard;

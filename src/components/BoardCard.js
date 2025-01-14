import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import PropTypes from 'prop-types';
import DateFormat from "./DateFormat";
import EditBoard from "./EditBoard";

const BoardCard = ({board, handleDelete, handleUpdate}) => {
	const {id, title, owner, description, date_created, cards} = board;

	return (
		<li className="card flex-col text-center relative">
			<EditBoard
					board={board}
					handleUpdate={handleUpdate}
					iconClassName="absolute top-4 left-4 text-lg"
				/>
			<button 
				onClick={()=>handleDelete(id)} 
				className="absolute top-4 right-4 text-lg"
				aria-label="Delete board"
			>
				<Icon icon="mdi:trash" />
			</button>
			
			<DateFormat 
				date={date_created} 
				className="text-xs w-full font-bold mb-4" 
			/>
			<Link to={`/boards/${id}`} className="mb-2">
				<h3 className="text-lg font-bold pt-8">{title}</h3>
				<h4 className="text-xs mb-4 -mt-1">by {owner}</h4>
				<p className="text-sm pb-2">{description}</p>
				<p className="font-semibold pb-8">
					{cards || 0} card{cards === 1 ? "" : "s"}
				</p>
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
	}).isRequired,
	handleDelete: PropTypes.func.isRequired,
	handleUpdate: PropTypes.func.isRequired,
};

export default BoardCard;

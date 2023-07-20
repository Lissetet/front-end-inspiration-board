import PropTypes from 'prop-types';
import DateFormat from './DateFormat';
import EditBoard from './EditBoard';

const BoardDetails = ({board, handleUpdate}) => {
	const { title, description, owner, date_created } = board;

	return (
		<>
			<div className='flex items-center gap-2'>
				<EditBoard board={board} handleUpdate={handleUpdate}/>
				<h1> {title} </h1>
			</div>
			<p className='text-neutral-200'>
				by {owner} on <DateFormat date={date_created}/>
			</p>
			<h2 className='text-lg mt-2 mb-8'>{description}</h2>
		</>
	)
}

BoardDetails.propTypes = {
	board: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		owner: PropTypes.string.isRequired,
		theme : PropTypes.string,
		date_created: PropTypes.string.isRequired,
	}).isRequired,
	handleUpdate: PropTypes.func.isRequired,
};

export default BoardDetails
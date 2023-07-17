import EditBoard from "./EditBoard";
import PropTypes from 'prop-types';
import DateFormat from "./DateFormat";

const Board = ({board, setBoard}) => {
  const { title, description, owner, date_created } = board;
  return (
    <>
      <span className="flex items-center gap-2">
        <EditBoard
          board={board}
          setBoard={setBoard}
        />
        <h1 className="text-3xl font-bold">{title}</h1>
      </span>
      <p className="text-neutral-200">
        by {owner} on <DateFormat date={date_created} />
      </p>
      <h2 className="text-lg mt-2 mb-8">{description}</h2>
    </>
  );
};

Board.propTypes = {
  board: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    theme : PropTypes.string,
    date_created: PropTypes.string.isRequired,
  }).isRequired,
  setBoard: PropTypes.func.isRequired,
};

export default Board;

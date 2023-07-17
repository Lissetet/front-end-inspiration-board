import CardList from "./CardList";
import EditBoard from "./EditBoard";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import DateFormat from "./DateFormat";
import NewCard from "./NewCard";

const Board = ({board, setBoard, cards, setCards}) => {
  const { title, description, owner, date_created } = board;

  return (
    <section className="board flex flex-col">
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
      <div id="card_list" className="flex flex-wrap justify-center gap-8">
        <CardList cards={cards} setCards={setCards} />
        <NewCard cards={cards} setCards={setCards} />
      </div>
      <Link
        className="flex btn btn-default self-center items-center mt-14"
        to="/boards"
      >
        <Icon icon="mdi:arrow-left" className="mr-2" />
        Go Back
      </Link>
    </section>
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
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
      board_id: PropTypes.number.isRequired,
      created_at: PropTypes.string.isRequired,
    })
  ).isRequired,
  setCards: PropTypes.func.isRequired,
};

export default Board;

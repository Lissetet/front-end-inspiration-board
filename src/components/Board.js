import CardList from "./CardList";
import EditBoard from "./EditBoard";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Board = ({board, setBoard}) => {
  const formattedDate = new Date(board.date_created).toLocaleDateString("en-US", 
    {month: "short", day: "numeric", year: "numeric"});
    
  return (
    <section className="board flex flex-col">
      <span className="flex items-center gap-2">
        <EditBoard
          board={board}
          setBoard={setBoard}
        />
        <h1 className="text-3xl font-bold">{board.title}</h1>
      </span>
      <p className="text-neutral-200">
        by {board.owner} on {formattedDate}
      </p>
      <h2 className="text-lg mt-2 mb-8">{board.description}</h2>
      <CardList cards={board.cards} boardID={board.id} />
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

export default Board;

import BoardCard from "../components/BoardCard"
import NewBoard from "../components/NewBoard";
import PropTypes from 'prop-types';

const BoardsList = ({boards, setBoards}) => {
  return (
    <ul className="flex flex-wrap gap-8 justify-center">
      {boards.map((board)=> {
        return <BoardCard
          board={board}
          key={board.id}
          boards={boards}
          setBoards={setBoards}
        />
      })}
      <li>
        <NewBoard boards={boards} setBoards={setBoards}/>
      </li>
    </ul>
  )
}

BoardsList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      theme : PropTypes.string,
      date_created: PropTypes.string.isRequired,
    })
  ).isRequired,
  setBoards: PropTypes.func.isRequired,
};


export default BoardsList;

import React from "react"
import BoardCard from "./BoardCard"
import PropTypes from 'prop-types';


const BoardsList = ({ boards, handleDelete, handleUpdate }) => {
  return (
    <>
      {boards.map((board) => {
        return (
          <BoardCard
            key={board.id}
            board={board}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        );
      })}
    </>
  );
}

BoardsList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      date_created: PropTypes.string.isRequired,
      cards: PropTypes.number,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default BoardsList;

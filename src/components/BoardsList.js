import React from "react"
import BoardCard from "./BoardCard"

const BoardsList = ({ boards, handleDelete }) => {
  return (
    <>
      {boards.map((board) => {
        return (
          <BoardCard
            key={board.id}
            board={board}
            handleDelete={handleDelete}
          />
        );
      })}
    </>
  );
}

export default BoardsList;

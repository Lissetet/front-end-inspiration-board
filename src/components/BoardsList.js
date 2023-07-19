import React from "react"
import BoardCard from "./BoardCard"
import NewBoard from "./NewBoard"
import axios from 'axios'

const baseURL = process.env.REACT_APP_BACKEND_URL;

const BoardsList = ({ boards, setBoards }) => {
  const handleDelete = (id) => {
    axios.delete(`${baseURL}/boards/${id}`)
      .then((response) => {
        const newBoards = boards.filter((board) => board.id !== id);
        setBoards(newBoards);
      })
  }

  const displayBoardInfo = () => {
    return boards.map((board) => {
      return (
        <BoardCard key={board.id} board={board} handleDelete={handleDelete} />
      )
    })
  }
  return (
    <section  >
      <h1>Select a Board</h1>
      <div className="flex flex-wrap gap-3" >
        {displayBoardInfo()}
        <NewBoard boards={boards} setBoards={setBoards} />
      </div>

    </section>
  );
}

export default BoardsList;

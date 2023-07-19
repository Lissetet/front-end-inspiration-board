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

  return (
    <ul className="flex flex-wrap gap-8 justify-center">
      {boards.map((board)=> {
        return <BoardCard
          board={board}
          key={board.id}
          handleDelete={handleDelete}
        />
      })}
      <li>
        <NewBoard boards={boards} setBoards={setBoards}/>
      </li>
    </ul>
  )
}

export default BoardsList;

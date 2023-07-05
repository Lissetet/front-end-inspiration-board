import React from "react"
import BoardCard from "../components/BoardCard"
import NewBoard from "../components/NewBoard";
import axios from "axios";
import { useState, useEffect } from "react";

const BoardsList = () => {
  const [boards, setBoards]=useState([])

  const getAllBoards = () => {
    axios
    .get(`http://127.0.0.1:5000/boards`)
    .then((response) => {
      setBoards(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=> getAllBoards(), [])

  return (
    <section>
      <h1 className="mb-10">Select a Board</h1>
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
    </section>
  );
}

export default BoardsList;

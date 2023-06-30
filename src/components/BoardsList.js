import React from "react"
import BoardCard from "./BoardCard"

const BoardsList = ({boards}) => {
  const displayBoardInfo = () => {
    return boards.map((board)=>{
      return (
        <BoardCard key={board.id} board={board}/>
      )
    })
  }
  return (
    <section  >
      <h1>Select a Board</h1>
      <div className="flex flex-wrap gap-3" >{displayBoardInfo()}</div>
    </section>
  );
}

export default BoardsList;

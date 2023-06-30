import React from "react"

const BoardsList = ({boards}) => {
  const displayBoardInfo = () => {
    return boards.map((board,index)=>{
      return (
        <div key={index} id="board-card">
          <div id="board-card-title" >
          {board.title}
          </div>
          <div>
          {board.description}
          </div>
        </div>
      )
    })
  }
  return (
    <section>
      <h1>Select a Board</h1>
      <div id="boards-container">{displayBoardInfo()}</div>
    </section>
  );
}

export default BoardsList;

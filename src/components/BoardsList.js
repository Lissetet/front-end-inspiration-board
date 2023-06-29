import React from "react"

const BoardsList = ({boards}) => {
  const displayBoardInfo = () => {
    return boards.map((board,index)=>{
      return (
        <li key={index}>
          <div>
          <b>{board.title}</b> by {board.owner}
          </div>
          <div>
          {board.description}
          </div>
        </li>
      )
    })
  }
  return (
    <section>
      <h1>Select a Board</h1>
      <ul>{displayBoardInfo()}</ul>
    </section>
  );
}

export default BoardsList;

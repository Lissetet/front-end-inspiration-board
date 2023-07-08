import React from "react"
import { Link } from "react-router-dom";

const BoardCard = ({ board }) => {
  // const clicker = () => {
  //   window.location.href="/boards/" + board.id
  //   // alert(board.id)
  // }
  return (
    <Link to={`/boards/${board.id}`} className="bg-primary bg-opacity-50 p-4 rounded-lg">

    <div className="w-72 flex flex-col relative h-52 text-2xl cursor-pointer" >
      <div className="font-bold mx-auto  text-center py-16 px-4 self-center w-full bg-transparent  resize-none">
        {board.title}
      </div>
      <div className= "text-base">
        {board.description}
      </div>
    </div>
    </Link>

  )
}

export default BoardCard;  
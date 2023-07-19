import React from "react"
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";


const BoardCard = ({ board, handleDelete }) => {


  const btnClasses = "text-lg absolute z-10 p-4";

  return (
    <Link to={`/boards/${board.id}`} className="bg-primary bg-opacity-50 p-4 rounded-lg">

      <div className="w-72 flex flex-col relative h-52 text-2xl cursor-pointer" >
        <div className="font-bold mx-auto  text-center py-16 px-4 self-center w-full bg-transparent  resize-none">
          {board.title}
        </div>
        <div className="text-base">
          {board.description}
        </div>
        <button
          onClick={() => handleDelete(board.id)}
          aria-label="Delete Card"
          className={`${btnClasses} top-0 right-0`}
        >
          <Icon icon="mdi:trash" />
        </button>
      </div>
    </Link>

  )
}

export default BoardCard;  
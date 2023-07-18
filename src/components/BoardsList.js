import React from "react"
import BoardCard from "./BoardCard"
import { useState } from "react";
import CreateNewBoardModal from "./CreateNewBoardModal";

const BoardsList = ({boards}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () =>{
    setIsModalOpen(false);
  };

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
      <button onClick={openModal}>Create New Board</button>
      <CreateNewBoardModal isOpen={ isModalOpen } onClose={ closeModal }></CreateNewBoardModal>
    </section>
  );
}

export default BoardsList;

import { useState } from 'react'
import { Icon } from "@iconify/react";
import InputField from "./InputField";
import PropTypes from 'prop-types';
import Modal from './Modal';

const EditBoard = ({board, handleUpdate, iconClassName}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState(board.title)
  const [owner, setOwner] = useState(board.owner)
  const [description, setDescription] = useState(board.description)
  const validInput =  title.trim() && title.trim() && title.trim();

  const onSave = () => {
    handleUpdate(board.id, {title, description, owner})
    setIsOpen(false)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal()
    } else if (e.key === 'Enter' && validInput) {
      e.preventDefault();
      onSave();
    } else if (e.key === 'Enter' && !validInput) {
      e.preventDefault();
    }
  }

  const closeModal = () => {
    setIsOpen(false);
    setTitle(board.title);
    setDescription(board.description);
    setOwner(board.owner);
  }

  const modalContent = (
    <>
      <form
        className="my-8 grid grid-cols-[auto,1fr] gap-4 items-center"
        onKeyDown={onKeyDown}
      >
        <InputField 
          label="title" 
          value={title} 
          setValue={setTitle} 
          maxLength={20} 
        />
        <InputField 
          label="owner" 
          value={owner} 
          setValue={setOwner} 
          maxLength={20} 
        />
        <InputField 
          label="description" 
          value={description} 
          setValue={setDescription} 
          maxLength={80} 
        />
      </form>
      <div className="flex mt-4 gap-4 text-white justify-center">
        <button
          type="button"
          className="btn btn-success"
          onClick={()=>onSave()}
          disabled={!validInput}
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-cancel"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </>
  )

  return (
    <>
      <button 
        type="button" 
        onClick={()=>setIsOpen(true)}
        aria-label="Edit board"
        className={iconClassName} 
      >
        <Icon icon="mdi:pencil" />
      </button>

      <Modal 
        isOpen={isOpen}
        closeModal={closeModal}
        title={`Edit ${board.title} Board`}
        description="Edit the title, owner, and description of your board."
        content={modalContent}
      />
    </>
  )
}

EditBoard.propTypes = {
  board: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    date_created: PropTypes.string.isRequired,
  }).isRequired,
  handleUpdate: PropTypes.func.isRequired,
  iconClassName: PropTypes.string,
};

export default EditBoard;
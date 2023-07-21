import { useState } from 'react'
import { Icon } from '@iconify/react';
import InputField from "./InputField";
import PropTypes from 'prop-types';
import Modal from './Modal';

const NewBoard = ({ handleCreate }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [owner, setOwner] = useState('')
  const validInput =  title.trim() && description.trim() && owner.trim();

  const closeModal = () => {
    setIsOpen(false);
    setTitle('');
    setDescription('');
    setOwner('');
  }

  const onSave = () => {
    handleCreate({title, description, owner});
    closeModal();
  }

  const modalContent = (
    <>
      <form
        className="my-8 grid grid-cols-[auto,1fr] gap-4 items-center"
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            closeModal()
          } else if (e.key === 'Enter' && validInput) {
            e.preventDefault();
            onSave();
          } else if (e.key === 'Enter' && !validInput) {
            e.preventDefault();
          }
        }}
      >
        <InputField label="title" value={title} setValue={setTitle} />
        <InputField label="owner" value={owner} setValue={setOwner} />
        <InputField label="description" value={description} setValue={setDescription} />
      </form>
      <div className="flex mt-4 gap-4 text-white justify-center">
        <button
          type="button"
          className="btn btn-success"
          onClick={onSave}
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
  );

  return (
    <>
      <button 
        className="card h-full" 
        type="button" 
        aria-label="Create new board"
        onClick={() => setIsOpen(true)}
      >
        <Icon
          icon="carbon:add-filled"
          className="text-7xl self-center text-center mx-auto my-10 h-full"
        />
      </button>
      <Modal 
        isOpen={isOpen}
        closeModal={closeModal}
        title="Create New Board"
        description="Please enter the title, owner and description of your board."
        content={modalContent}
      />
    </>
  )
}

NewBoard.propTypes = {
  handleCreate: PropTypes.func.isRequired,
};

export default NewBoard;
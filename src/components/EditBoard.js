import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Icon } from "@iconify/react";
import InputField from "./InputField";
import axios from "axios";
import PropTypes from 'prop-types';

const baseURL = process.env.REACT_APP_BACKEND_URL;

const EditBoard = ({board, setBoard}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState(board.title)
  const [description, setDescription] = useState(board.description)
  const [theme, setTheme] = useState(board.theme)
  const [owner, setOwner] = useState(board.owner)

  const handleSave = () => {
    const body = {title, description, theme, owner}
    axios.patch(`${baseURL}/boards/${board.id}`, body)
      .then((response) => {
        setBoard(response.data.board)
      })
      setIsOpen(false)
  }

  const closeModal = () => {
    setIsOpen(false);
    setTitle(board.title);
    setDescription(board.description);
    setTheme(board.theme);
    setOwner(board.owner);
  }

  return (
    <>
      <button type="button" onClick={()=>setIsOpen(true)}>
          <Icon icon="mdi:pencil" className="text-xl" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg rounded-lg bg-white \
                p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Edit "{board.title}" Board
                </Dialog.Title>
                <Dialog.Description as="p" className="text-sm text-gray-500">
                    Edit the title, description, and theme of your board.
                </Dialog.Description>
                <form
                  className="my-8 grid grid-cols-[auto,1fr] gap-4 items-center"
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleSave())}
                >
                  <InputField label="title" value={title} setValue={setTitle} />
                  <InputField label="owner" value={owner} setValue={setOwner} />
                  <InputField label="description" value={description} setValue={setDescription} />
                  <InputField label="theme" value={theme} setValue={setTheme} />
                </form>
                <div className="flex mt-4 gap-4 text-white justify-center">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={()=>handleSave()}
                    disabled={!title || !description || !owner}
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
              </Dialog.Panel>
            </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

EditBoard.propTypes = {
  board: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    theme : PropTypes.string,
    date_created: PropTypes.string.isRequired,
  }).isRequired,
  setBoard: PropTypes.func.isRequired,
};

export default EditBoard;
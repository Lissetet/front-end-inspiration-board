import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import InputField from "./InputField";
import axios from "axios";
import PropTypes from 'prop-types';

const baseURL = process.env.REACT_APP_BACKEND_URL;

export default function NewBoard({boards, setBoards}) {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [theme, setTheme] = useState('')
  const [owner, setOwner] = useState('')
  const navigate = useNavigate();

  const handleSave = () => {
    axios.post(`${baseURL}/boards`, {title, description, theme, owner})
      .then((response) => {
        const newBoards = [...boards, response.data.board]
        setBoards(newBoards)
        navigate(`/boards/${response.data.board.id}`);
      })
      setIsOpen(false)
  }

  const closeModal = () => {
    setIsOpen(false);
    setTitle('');
    setDescription('');
    setTheme('');
    setOwner('');
  }

  return (
    <>
      <button className="card h-full" type="button" onClick={()=>setIsOpen(true)}>
        <Icon
          icon="carbon:add-filled"
          className="text-7xl self-center text-center mx-auto my-10 h-full"
        />
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
                  Create New Board
                </Dialog.Title>
                <Dialog.Description as="p" className="text-sm text-gray-500">
                    Please enter the title, owner, description, and theme of your board.
                </Dialog.Description>
                <form
                  className="my-8 grid grid-cols-[auto,1fr] gap-4 items-center"
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      closeModal()
                    } else if (e.key === 'Enter' && title && owner && description) {
                      e.preventDefault();
                      handleSave();
                    } else if (e.key === 'Enter' && (!title || !owner || !description)) {
                      e.preventDefault();
                    }
                  }}
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
                    disabled={!title || !owner || !description}
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

NewBoard.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      theme : PropTypes.string,
      date_created: PropTypes.string.isRequired,
    })
  ).isRequired,
  setBoards: PropTypes.func.isRequired,
};

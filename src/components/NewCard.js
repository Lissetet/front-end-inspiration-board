import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Icon } from "@iconify/react";
import InputField from "./InputField";
import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;

const NewCard = ({boardID, cards, setCards}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSave = () => {
    axios.post(`${baseURL}/boards/${boardID}/cards`, {message})
      .then((response) => {
        const newCard = response.data.card
        const newCards = [...cards, newCard]
        setCards(newCards)
      })
      setMessage('');
      setIsOpen(false);
  }

  const closeModal = () => {
    setIsOpen(false);
    setMessage('');
  }

  return (
    <>
      <button className="card" type="button" onClick={()=>setIsOpen(true)}>
        <Icon 
          icon="carbon:add-filled" 
          className="text-7xl self-center text-center mx-auto my-16" 
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
                  Create New Card
                </Dialog.Title>
                <Dialog.Description as="p" className="text-sm text-gray-500">
                    Please enter the title, owner, description, and theme of your board.
                </Dialog.Description>
                <form 
                  className="my-8 grid grid-cols-[auto,1fr] gap-4 items-center"
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleSave())}
                  >
                  <InputField label="title" value={message} setValue={setMessage} />
                </form>
                <div className="flex mt-4 gap-4 text-white justify-center">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={()=>handleSave()}
                  >
                    Confirm
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

export default NewCard;
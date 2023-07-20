import { useState } from "react";
import { Icon } from "@iconify/react";
import InputField from "./InputField";
import PropTypes from "prop-types";
import Modal from "./Modal";

const NewCard = ({ handleCreate }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [message, setMessage] = useState("");
	const validInput = message.trim();

	const onSave = () => {
		handleCreate({ message });
		closeModal();
	};

	const closeModal = () => {
		setIsOpen(false);
		setMessage("");
	};

	const onKeyDown = (e) => {
		if (e.key === "Escape") {
			closeModal();
		} else if (e.key === "Enter" && validInput) {
			e.preventDefault();
			onSave();
		} else if (e.key === "Enter" && !validInput) {
			e.preventDefault();
		}
	};

	const modalContent = (
		<>
			<form
				className="my-8 grid grid-cols-[auto,1fr] gap-4 items-center"
				onKeyDown={onKeyDown}
			>
				<InputField
					label="message"
					value={message}
					setValue={setMessage}
				/>
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
				className="card"
				type="button"
				onClick={() => setIsOpen(true)}
				aria-label="add card"
			>
				<Icon
					icon="carbon:add-filled"
					className="text-7xl self-center text-center mx-auto my-16"
				/>
			</button>

			<Modal
				isOpen={isOpen}
				closeModal={closeModal}
				title="Create New Card"
				description="Please enter a message."
				content={modalContent}
			/>
		</>
	);
};

NewCard.propTypes = {
	handleCreate: PropTypes.func.isRequired,
};

export default NewCard;

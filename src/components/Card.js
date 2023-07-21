import { Icon } from "@iconify/react";
import { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from 'prop-types';
import TextareaAutosize from "react-textarea-autosize";
import DateFormat from "./DateFormat";

const Card = ({card, handleDelete, handleUpdate, activeCard, setActiveCard}) => {
  const { id, message, likes_count, date_created } = card;
	const [editable, setEditable] = useState(false);
	const [cardText, setCardText] = useState(message);
  const [originalText, setOriginalText] = useState(message);

	const inputRef = useRef(null);

  const setFocus = useCallback(() => {
    let len = inputRef.current.value.length;
    inputRef.current.setSelectionRange(len, len);
    inputRef.current.focus();
  }, []);

  const handleCancel = useCallback(() => {
    setEditable(false);
    setCardText(originalText);
  }, [originalText]);

  const updateMessage = () => {
    handleUpdate(id, { 'message': cardText});
    setOriginalText(cardText);
    setEditable(false);
  }

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      updateMessage();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  }

  const onEditClick = () => {
    setActiveCard(id);
    setEditable(true);
  }

	useEffect(() => {
    if (editable && activeCard === id) setFocus();
    if (activeCard !== id) handleCancel();
	}, [id, editable, activeCard, setFocus, handleCancel]);

  const btnClasses = "text-lg absolute z-10 p-4";

	return (
		<article className="card relative flex-col">
      <DateFormat
        date={date_created}
        className="text-xs absolute top-0 font-bold py-4 w-full pr-8 text-center"
      />
      <TextareaAutosize
        minRows={1}
        maxRows={10}
        ref={inputRef}
        onChange={(e)=>setCardText(e.target.value)}
        onKeyDown={onKeyDown}
        className="font-bold mx-auto text-3xl text-center py-14 px-4 self-center
          w-full bg-transparent resize-none overflow-hidden mt-8"
        disabled={!editable}
        value={cardText}
      />
      <div className="flex w-full justify-center h-fit">
        <button
          onClick={() => handleUpdate(id, { 'likes_count': likes_count - 1})}
          aria-label = "Unlike"
          className="mr-8"
        >
          <Icon icon="mdi:thumb-down" />
        </button>
        <span className="font-bold mr-2">{likes_count}</span>
        <Icon icon="mdi:heart" className="text-lg text-red-600" />
        <button
          onClick={() => handleUpdate(id, { 'likes_count': likes_count + 1})}
          aria-label = "Like"
          className="ml-8"
        >
          <Icon icon="mdi:thumb-up" />
        </button>
      </div>
      <button
        onClick={onEditClick}
        disabled={editable}
        aria-label="Edit Text"
        className={`${btnClasses} top-0 left-0 ${editable ? "hidden" : ""}`}
      >
        <Icon icon="mdi:pencil" />
      </button>
      <button
        onClick={updateMessage}
        disabled={!editable}
        aria-label="Save Updated Text"
        className={`${btnClasses} top-0 left-0 ${editable ? "" : "hidden"}`}
      >
        <Icon icon="mdi:check" />
      </button>
      <button
        onClick={()=>handleDelete(id)}
        aria-label="Delete Card"
        className={`${btnClasses} top-0 right-0`}
      >
        <Icon icon="mdi:trash" />
      </button>
		</article>
	);
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired,
    date_created: PropTypes.string.isRequired,
    board_id: PropTypes.number.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  activeCard: PropTypes.number,
  setActiveCard: PropTypes.func.isRequired,
};

export default Card;

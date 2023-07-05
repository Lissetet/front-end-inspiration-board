import { Icon } from "@iconify/react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import TextareaAutosize from "react-textarea-autosize";

const baseURL = process.env.REACT_APP_BACKEND_URL;

const Card = (props) => {

  const { id, message, likes_count, date_created, cards, setCards } = props;

  const formattedDate = new Date(date_created).toLocaleDateString("en-US", 
    {month: "short", day: "numeric", year: "numeric"});

	const [textEditable, setTextEditable] = useState(false);
	const [cardText, setCardText] = useState(message);

	const handleChange = (e) => {
		setCardText(e.target.value);
	};

	const inputRef = useRef(null);

	useEffect(() => {
		let len = inputRef.current.value.length;
		inputRef.current.setSelectionRange(len, len);
		inputRef.current.focus();
	}, [textEditable]);



  const handleDelete = () => {
    axios.delete(`${baseURL}/cards/${id}`)
      .then((response) => {
        const newCards = cards.filter((card) => card.id !== id);
        setCards(newCards)
      })
  }

  const handleUpdate = (body) => {
    axios.patch(`${baseURL}/cards/${id}`, body)
    .then((response) => {
      const newCard = response.data.card;
      const newCards = cards.map((card) => {
        return card.id === newCard.id ? newCard : card;
      });
      setCards(newCards);
    })
  }

	return (
		<article className="card relative">
      <button
        onClick={() => setTextEditable(!textEditable)}
        disabled={textEditable}
        className={`text-lg absolute bottom-0 right-0 z-10 p-4 ${
          textEditable ? "hidden" : ""
        }`}
      >
        <Icon icon="mdi:pencil" />
      </button>
      <button
        disabled={!textEditable}
        onClick={() => {
          handleUpdate({ 'message': cardText});
          setTextEditable(!textEditable);
        }}
        className={`text-lg absolute bottom-0 right-0 z-10 p-4 ${
          textEditable ? "" : "hidden"
        }`}
      >
        <Icon icon="mdi:check" />
      </button>
      <button
        className="text-lg absolute top-0 right-0 z-10 p-4"
        onClick={handleDelete}
      >
        <Icon icon="mdi:trash" />
      </button>
      <span className="absolute text-xs top-0 w-full font-bold py-4 px-2">
        {formattedDate}
      </span>
      <TextareaAutosize
        minRows={1}
        maxRows={10}
        ref={inputRef}
        onChange={handleChange}
        className="font-bold mx-auto text-3xl text-center py-16 px-4 self-center \
          w-full bg-transparent resize-none"
        disabled={!textEditable}
        value={cardText}
      />
      <div className="absolute bottom-0 w-full flex gap-2 py-4 px-2">
        <button onClick={() => handleUpdate({ 'likes_count': likes_count - 1})}>
          <Icon icon="typcn:minus" className="self-center" />
        </button>
        <span className="font-bold">{likes_count}</span>
        <Icon icon="mdi:heart" className="text-lg text-red-600" />
        <button onClick={() => handleUpdate({ 'likes_count': likes_count + 1})}>
          <Icon icon="typcn:plus" className="self-center" />
        </button>
      </div>
		</article>
	);
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
  date_created: PropTypes.string.isRequired,
  board_id: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
      date_created: PropTypes.string.isRequired,
      board_id: PropTypes.number.isRequired,
    })
  ).isRequired,
  setCards: PropTypes.func.isRequired,
};

export default Card;

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BoardDetails from "../components/BoardDetails";
import CardList from "../components/CardList";
import NewCard from "../components/NewCard";
import Loading from "../components/Loading";
import NotFound from '../components/NotFound'
import ErrorAlert from '../components/ErrorAlert'


const baseURL = process.env.REACT_APP_BACKEND_URL;

const BoardPage = () => {
  const { id } = useParams();
  const [board, setBoard] = useState();
  const [cards, setCards] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(<Loading title="Loading board"/>);

  useEffect(() => {
    axios.get(`${baseURL}/boards/${id}?cards=details`).then((response) => {
      setBoard(response.data.board);
			setCards(response.data.board.cards);
    }).catch((error) => {
      if (error.response.data.error) {
        setError(<NotFound title={`${error.response.data.error}`} />);
      } else {
        setError(<ErrorAlert error={error.message} />);
      }
    }).finally(() => {
      setLoading(false);
    });
  }, [id]);

  const handleBoardUpdate = (title, description, owner) => {
    const body = {title, description, owner}
    axios.patch(`${baseURL}/boards/${id}`, body)
      .then((response) => {
        console.log(response.data)
        setBoard(response.data.board)
      })
  }

  const handleCardCreate = (body) => {
		axios
			.post(`${baseURL}/boards/${id}/cards`, body)
			.then((response) => {
				const newCard = response.data.card;
				setCards([...cards, newCard]);
			});
	};

  const getBoardJsx = () => {
    return (
      <section className="board flex flex-col">
        <article>
          <BoardDetails board={board} handleUpdate={handleBoardUpdate} />
        </article>
        <div className="flex flex-wrap justify-center gap-8">
          <CardList
            cards={cards}
            setCards={setCards}
          />
          <NewCard handleCreate={handleCardCreate}/>
        </div>
        <Link
          className="flex btn btn-default self-center items-center mt-14"
          to="/boards"
        >
          Go Back
        </Link>
      </section>
    );
  };

  return loading || error || getBoardJsx();
};

export default BoardPage;

import axios from "axios";
import { useState, useEffect, useCallback } from "react";
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

  const fetchData = useCallback(async () => {
    try {
      const boardResponse = await axios.get(`${baseURL}/boards/${id}`);
      setBoard(boardResponse.data.board);

      const cardsResponse = await axios.get(`${baseURL}/boards/${id}/cards`);
      setCards(cardsResponse.data);
    }
    catch (error) {
      if (error.response.data.error) {
        setError(<NotFound title={`${error.response.data.error}`} />);
      } else {
        setError(<ErrorAlert error={error.message} />);
      }
    }
    setLoading(false);
  }, [id]);

  useEffect(() => fetchData, [fetchData]);

  const handleUpdate = (title, description, theme, owner) => {
    const body = {title, description, theme, owner}
    axios.patch(`${baseURL}/boards/${id}`, body)
      .then((response) => {
        setBoard(response.data.board)
      })
  }

  const getBoardJsx = () => {
    return (
      <section className="board flex flex-col">
        <article>
          <BoardDetails board={board} handleUpdate={handleUpdate} />
        </article>
        <div className="flex flex-wrap justify-center gap-8">
          {/* <CardList cards={cards} setCards={setCards} /> */}
          {/* <NewCard cards={cards} setCards={setCards} boardID={id}/> */}
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

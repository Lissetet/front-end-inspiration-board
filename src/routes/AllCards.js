import axios from "axios";
import { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Loading from "../components/Loading";
import ErrorAlert from "../components/ErrorAlert";

const baseURL = process.env.REACT_APP_BACKEND_URL;

const AllCards = () => {
  const [cards, setCards] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(<Loading title="Loading cards" />);

  useEffect(() => {
    axios.get(`${baseURL}/cards`).then((response) => {
			setCards(response.data);
    }).catch((error) => {
      setError(<ErrorAlert error={error.message} />);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  const getCardsJsx = () => {
    return (
      <section id="card_list" className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold">All Cards</h1>
        <div className="flex flex-wrap justify-center gap-8">
          <CardList cards={cards} setCards={setCards} />
        </div>
      </section>
    );
  };

  return loading || error || getCardsJsx();
};

export default AllCards;

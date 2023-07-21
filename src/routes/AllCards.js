import axios from "axios";
import { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Loading from "../components/Loading";
import ErrorAlert from "../components/ErrorAlert";
import { SortSelect, sortCards } from "../components/CardSortSelect";

const baseURL = process.env.REACT_APP_BACKEND_URL;

const AllCards = () => {
  const [cards, setCards] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(<Loading title="Loading cards" />);
  const [sortKey, setSortKey] = useState('');

  useEffect(() => {
    axios.get(`${baseURL}/cards`).then((response) => {
			setCards(response.data);
    }).catch((error) => {
      setError(<ErrorAlert error={error.message} />);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() =>  {
    if (sortKey) {
      const sortedCards = sortCards(cards, sortKey);
      setCards(sortedCards);
    }
  // eslint-disable-next-line
  }, [sortKey]);

  const getCardsJsx = () => {
    return (
      <section id="card_list" className="flex flex-col gap-8">
        <div className="flex justify-between flex-wrap gap-12">
          <h1 className="text-3xl font-bold">All Cards</h1>
          <SortSelect sortKey={sortKey} setSortKey={setSortKey} />
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <CardList 
            cards={cards} 
            setCards={setCards} 
            sortKey={sortKey}
            sortCards={sortCards}
          />
        </div>
      </section>
    );
  };

  return loading || error || getCardsJsx();
};

export default AllCards;
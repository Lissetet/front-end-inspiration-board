import CardList from "../components/CardList";
import axios from "axios";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";


const baseURL = process.env.REACT_APP_BACKEND_URL;

const AllCards = () => {

  const [cards, setCards] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${baseURL}/cards`).then((response) => {
			setCards(response.data);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

	let content = 
		loading ? <Icon icon="eos-icons:bubble-loading" className="loading" /> : 
			<CardList cards={cards} setCards={setCards} />;

	return (
		<section id="card_list" className="flex flex-wrap gap-8">
			<h1 className="text-3xl font-bold">All Cards</h1>
			{content}
		</section>
	);
};

export default AllCards;

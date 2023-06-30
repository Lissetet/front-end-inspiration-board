// import { useState, useEffect } from "react";
// import axios from 'axios'
// import Card from "./Card";

// const BASE_URL = "http://127.0.0.1:5000";

// const CardList = ({ board_id }) => {

//   const [cards, setCards] = useState([])

//   useEffect(() => {
//     const fetchCards = async () => {
//       const response = await axios.get(`${BASE_URL}/boards/${board_id}/cards`)
//       const cards = response.data
//       setCards(cards)
//     }
//     fetchCards()
//   }, [cards])

//   const handleLike = () => {

//   }

//   const handleDelete = (id) => {



//   }

//   return (
//     <section >
//       <h1>Select a Board</h1>
//       <div className="flex gap-2">
//         {cards.map((card) => {
//           return (
//             <Card
//               id={card.id}
//               message={card.message}
//               likes_count={card.likes_count}
//               date_created={card.date_created}
//               handleLike
//               handleDelete />
//           )
//         })}
//       </div>

//     </section>
//   );
// }

// export default BoardList;

import Card from './Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const baseURL = 'http://127.0.0.1:5000/cards'
  const [cards, setCards] = useState([])
  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setCards(response.data)
      }
    )
  }, [])

  const handleLike = (id, unlike=false) => {
    axios.patch(`${baseURL}/${id}/${unlike ? 'unlike' : 'like'}`)
      .then((response) => {
        const new_cards = cards.map((card) => {
          if (card.id === id) {
            return response.data.card
          } else {
            return card
          }
        })
        setCards(new_cards)
      })
  }

  const handleDelete = (id) => {
    axios.delete(`${baseURL}/${id}`)
      .then((response) => {
        const new_cards = cards.filter((card) => card.id !== id)
        setCards(new_cards)
      })
  }

  const handleEdit = (id, msg) => {
    axios.patch(`${baseURL}/${id}`, {'message': msg})
    .then((response) => {
      const new_cards = cards.map((card) => {
        if (card.id === id) {
          return response.data.card
        } else {
          return card
        }
      })
      setCards(new_cards)
    })
  }

  return (
    <>
      <h1>Login page will go here eventually</h1>
      <section className="flex flex-wrap gap-4 py-10">
        {
          cards.map((card) => (
            <Card 
              {...card}
              key={card.id} 
              handleLike={handleLike}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))
        }
      </section>
    </>
  )
};

export default Home;
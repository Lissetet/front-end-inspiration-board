import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Team from "./components/Team";
import BoardsList from "./components/BoardsList";
import Board from "./components/Board";
// import NewBoard from "./components/Board";
import NewBoard from "./components/NewBoard";
import axios from "axios";
import React, {useState, useEffect} from "react"

export default function App() {
  const [boardsData, setBoardsData]=useState([])

  const getAllBoards = () => {
    axios
    .get(`http://127.0.0.1:5000/boards`)
    .then((response) => {
      // console.log(response)
      const newData = response.data.map((board)=> {
        return {
          id: board.id,
          title: board.title,
          owner: board.owner,
          description: board.description,
          theme: board.theme,
          date_created: board.date_created,
          cards:board.cards
        }
      })
      setBoardsData(newData)
    })
    .catch((error)=>{
      console.log(error)
    })

  }

  useEffect(()=> getAllBoards(), [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="/boards">
            <Route index element={<BoardsList boards={boardsData}/>} />
            <Route path=":id" element={<Board />} />
            <Route path="new" element={<NewBoard />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
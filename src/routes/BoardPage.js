import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import NotFound from '../components/NotFound'
import Board from '../components/Board'
import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;

const BoardPage = () => {
  const { id } = useParams();
  const [board, setBoard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${baseURL}/boards/${id}`).then((response) => {
      setBoard(response.data.board);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setLoading(false);
    });
  }, [id]);

  let content = 
    loading ? <Icon icon="eos-icons:bubble-loading" className="loading" /> : 
    board ? <Board board={board} setBoard={setBoard} /> : 
    <NotFound title="Board not found!" />;

  return content;

};

export default BoardPage;

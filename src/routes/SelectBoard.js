import axios from "axios";
import { useState, useEffect } from "react";
import BoardsList from "../components/BoardsList";
import Loading from "../components/Loading";
import ErrorAlert from "../components/ErrorAlert";
import NewBoard from "../components/NewBoard";

const baseURL = process.env.REACT_APP_BACKEND_URL;

const SelectBoard = () => {
  const [boards, setBoards]=useState()
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(<Loading title="Loading boards" />);

  useEffect(()=> {
    axios
    .get(`${baseURL}/boards?cards=count`).then((response) => {
      setBoards(response.data)
    }).catch((error)=>{
      setError(<ErrorAlert error={error.message} />);
    }).finally(() => {
      setLoading(false);
    });
  }, [])

  const handleCreate = (body) => {
    axios.post(`${baseURL}/boards`, body)
      .then((response) => {
        const newBoards = [...boards, response.data.board]
        setBoards(newBoards)
      })
  }

  const handleDelete = (id) => {
    axios.delete(`${baseURL}/boards/${id}`)
      .then((response) => {
        const newBoards = boards.filter((board) => board.id !== id);
        setBoards(newBoards);
      })
  };

  const getBoardsListJsx = () => {
    return (
      <section>
        <h1 className="mb-10">Select a Board</h1>
        <ul className="flex flex-wrap gap-8 justify-center">
          <BoardsList boards={boards} handleDelete={handleDelete} />
          <li>
            <NewBoard boards={boards} handleCreate={handleCreate}/>
          </li>
        </ul>
      </section>
    );
  };

  return loading || error || getBoardsListJsx();
}

export default SelectBoard;
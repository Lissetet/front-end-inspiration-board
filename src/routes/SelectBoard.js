import axios from "axios";
import { useState, useEffect } from "react";
import BoardsList from "../components/BoardsList";
import Loading from "../components/Loading";
import ErrorAlert from "../components/ErrorAlert";
import NewBoard from "../components/NewBoard";
import { SortSelect, sortBoards } from "../components/BoardSortSelect";


const baseURL = process.env.REACT_APP_BACKEND_URL;

const SelectBoard = () => {
  const [boards, setBoards]=useState()
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(<Loading title="Loading boards" />);
  const [sortKey, setSortKey] = useState('');

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
        const newBoard = response.data.board
        const newBoards = [...boards, newBoard]
        const sortedBoards = sortKey ? sortBoards(newBoards, sortKey) : null;
        setBoards(sortedBoards || newBoards);
      })
  }

  const handleDelete = (id) => {
    axios.delete(`${baseURL}/boards/${id}`)
      .then((response) => {
        const newBoards = boards.filter((board) => board.id !== id);
        const sortedBoards = sortKey ? sortBoards(newBoards, sortKey) : null;
        setBoards(sortedBoards || newBoards);
      })
  };

  useEffect(() =>  {
    if (sortKey) {
      const sortedBoards = sortBoards(boards, sortKey);
      setBoards(sortedBoards);
    }
  // eslint-disable-next-line
  }, [sortKey]);

  const getBoardsListJsx = () => {
    return (
      <section>
        <div className="flex justify-between h-fit mb-10">
          <h1 className="text-3xl font-bold">Select a Board</h1>
          <SortSelect sortKey={sortKey} setSortKey={setSortKey} />
        </div>
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
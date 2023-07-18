import axios from "axios";
import { useState, useEffect } from "react";
import BoardsList from "../components/BoardsList";
import Loading from "../components/Loading";
import ErrorAlert from "../components/ErrorAlert";

const baseURL = process.env.REACT_APP_BACKEND_URL;

const SelectBoard = () => {
  const [boards, setBoards]=useState()
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(<Loading title="Loading cards" />);

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

  const getBoardsListJsx = () => {
    return (
      <section>
        <h1 className="mb-10">Select a Board</h1>
        <BoardsList boards={boards} setBoards={setBoards} />
      </section>
    );
  };

  return loading || error || getBoardsListJsx();
}

export default SelectBoard;
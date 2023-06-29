import { useParams } from "react-router-dom"

const Board = (prop) => {
  const { id } = useParams()
  return (
    <>
      <section>
        Board {id} section
      </section>
    </>
  );
}

export default Board;

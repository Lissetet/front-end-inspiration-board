import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Team from "./components/Team";
import BoardsList from "./components/BoardsList";
import Board from "./components/Board";
import NewBoard from "./components/Board";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="/boards">
            <Route index element={<BoardsList />} />
            <Route path=":id" element={<Board />} />
            <Route path="new" element={<NewBoard />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
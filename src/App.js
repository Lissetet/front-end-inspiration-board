import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Team from "./routes/Team";
import SelectBoard from './routes/SelectBoard'
import BoardPage from "./routes/BoardPage";
import NotFound from "./components/NotFound";
import AllCards from "./routes/AllCards";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="/boards" >
            <Route index element={<SelectBoard />} />
            <Route path=":id" element={<BoardPage />} />
          </Route>
          <Route path="/cards" element={<AllCards />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
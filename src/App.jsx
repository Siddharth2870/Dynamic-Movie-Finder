import "../src/css/App.css";
import Favourites from "./pages/Favorites";
import Home from "./pages/Home";
import NavBar from "./Components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
import { Routes, Route } from "react-router-dom";
function App() {
  const movienumber = 1;
  return (
    <>
      <div>
        <MovieProvider>
          <NavBar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favourites />} />
            </Routes>
          </main>
        </MovieProvider>
      </div>
    </>
  );
}

export default App;

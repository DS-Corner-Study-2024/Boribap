import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/new">New</Link>
        <Link to="/diary">Diary</Link>
        <Link to="/edit">Edit</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}
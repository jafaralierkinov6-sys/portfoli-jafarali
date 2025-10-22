import { Link } from "react-router-dom";
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Uzr, siz qidirgan sahifa mavjud emas.</p>
      <Link to="/" className="home-btn">Go to Home</Link>
    </div>
  );
}

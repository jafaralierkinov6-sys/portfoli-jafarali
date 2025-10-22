import { useState, useEffect } from "react";
import Search from '../public/sear.svg'
import Location from "../public/loc.svg";
import LinkIcon from "../public/link.svg";
import Twit from "../public/twit.svg";
import Home from "../public/home.svg";
import "./GitHub.css";
import { Link } from "react-router";
export default function GitHub() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [light, setLight] = useState("");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("theme1", document.body.classList);
      localStorage.removeItem("theme", light);
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("theme", document.body.classList);
      localStorage.removeItem("theme1", darkMode);
    }
  }, [darkMode]);

  function Find() {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          setError("user not found");
          setUserData(false);
          return;
        } else {
          setError(false);
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
      });
  }

  return (
    <div className="github-container">
      <div className="github-header">
        <h2 className="logo">devfinder</h2>
        <Link to='/'>
        <button className="max-w-[100px] -translate-x-[10px]">Back</button>
        </Link>
        <h5 className="theme-switch" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Dark" : "Light"}
        </h5>
      </div>

      <div className="search-box">
        <img className="search-icon" src={Search} alt="Search" />
        <input
          className="max-w-[600px] max-[221px]:max-w-[100px] max-[280px]:max-w-[150px] max-[800px]:-translate-x-[4px] max-[800px]:max-w-[200px] -translate-x-[100px]"
          type="text"
          placeholder="Search"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button className="max-w-[200px] " onClick={Find}>
          Search
        </button>

      </div>

      {error && <p className="error-msg">User not found</p>}

      {userData && (
        <div className="user-card">
          <div className="user-header">
            <img className="user-avatar" src={userData.avatar_url} alt="avatar" />
            <div className="user-info">
              <h2 className="user-name">{userData.name}</h2>
              <h3 className="user-bio">{userData.bio || "This profile has no bio"}</h3>
              <h3 className="user-login">{userData.login}</h3>
            </div>
          </div>

          <div className="stats-box">
            <div className="stat-item">
              <span>Repos</span>
              <p>{userData.public_repos}</p>
            </div>
            <div className="stat-item">
              <span>Followers</span>
              <p>{userData.followers}</p>
            </div>
            <div className="stat-item">
              <span>Following</span>
              <p>{userData.following}</p>
            </div>
          </div>

          <div className="socials">
            <div className="social-item">
              <img src={Location} alt="location" />
              <h3>{userData.location || "Not available"}</h3>
            </div>
            <div className="social-item">
              <img src={LinkIcon} alt="link" />
              <h3>{userData.blog || "Not available"}</h3>
            </div>
            <div className="social-item">
              <img src={Twit} alt="twitter" />
              <h3>{userData.html_url}</h3>
            </div>
            <div className="social-item">
              <img src={Home} alt="home" />
              <h3>{userData.twitter_username || "No twitter account available"}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useContext } from "react";
import AppContext from "../provider/appContext";

function Footer() {
  const {
    app: { isDark },
  } = useContext(AppContext);
  const anchorStyle = {
    color: "#C6C6C6",
  };
  return (
    <>
      <footer className="footer">
        <a
          href="https://myheartcreative.com"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          Built with ❤️ by <span>myheartcreative</span>
        </a>
        <a
          href="https://github.com/akshaynmhc/weather-app"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-solid fa-github"></i> <span>Github</span>
        </a>
        <a
          href="https://github.com/akshaynmhc/weather-app"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-solid fa-star"></i> <span>Star</span>
        </a>
        <a
          href="https://www.instagram.com/myheartcreative/"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-brands fa-instagram"></i> <span>Instagram</span>
        </a>
      </footer>
    </>
  );
}

export default Footer;

import logo from "./logo.svg";
import "./App.css";
import NewsHeader from "./components/News/Header";
import NewsNavbar from "./components/News/Navbar";
import News from "./components/News/News";

// console.log(process.env.NEWS_API_KEY);

function App() {
  return (
    <div>
      <NewsHeader />
      <NewsNavbar />
      <News />
    </div>
  );
}

export default App;

import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Component/Navbar/Navbar";
import News from "./Component/News/News";
import Footer from "./Component/Footer/Footer"


function App() {
  const [newsData, setNewsData] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [category, setCategory] = useState("general");

  console.log(process.env)

  const getData = async () => {
    try {
      const news = await axios.get(
        ` https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY} & category=${category}`
      );

      setNewsData(news.data.articles)
      setNewsResults(news.data.totalResults)
      
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [newsResults,category]);
  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <News newsData={newsData} newsResults={newsResults} />
      <Footer/>
    </div>
  );
}

export default App;

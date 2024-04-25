import logo from './logo.svg';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WeatherTable from './components/WeatherTable';
import Footer from './components/Footer';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const Fetchdata = () => {
      fetch(
        `https://cdn.contentstack.io/v3/content_types/home/entries/bltfa713eb40cc57246?environment=dev&include[]=menu&include_fallback=true`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            api_key: "blt99631240311b3204",
            access_token: "cs03331c422edb4a46a7482c2e",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data.entry);
          setLoading(false);
        });
    };
    Fetchdata();
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  if (!data) {
    return <div className="App">Loading...</div>;
  }

  console.log(data)

  return (
    <div className="App">
        <Header props={data.modal}></Header>
        <Navigation props={data.menu}></Navigation>
        <Hero props={data.hero}></Hero>
        <WeatherTable></WeatherTable>
        <Footer></Footer>
    </div>
  );
}

export default App;

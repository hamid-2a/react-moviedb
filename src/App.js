import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header/header.component';
import SearchBar from './components/search-bar/search-bar.component';
import Card from './components/card/card.component';


const getData = async (search, searchType, setData) => {
  const result = await axios(`https://api.themoviedb.org/3/search/${searchType}`, {
    method: 'get',
    params: {
      api_key: "94efd6964e404350f5167f7bc89d12a2",
      query: search
    }
  });

  console.log(result);
  setData(result);
}

function App() {
  const [searchType, setSearchType] = useState("movie");
  const [searchedName, setSearchedName] = useState("Avengers");
  const [data, setData] = useState([]);


  useEffect(() => {
    getData(searchedName, searchType, setData)
  },
    [searchedName])

  return (
    <div className="App">
      <Header />
      <SearchBar setSearchType={setSearchType} setSearchedName={setSearchedName} />
      <div className="cards-container">
        {
          !data.data ? <h2>Loading...</h2> :
            data.data.results.map(item => (
              <Card
                key={item.id}
                type={searchType}
                movieTitle={item.original_title}
                tvTitle={item.name}
                posterUrl={item.poster_path}
                overview={item.overview}
                rate={item.vote_average}
                movieId={item.id}
                bgUrl={item.backdrop_path}
                genre_ids={item.genre_ids}
                releaseDate={item.release_date}
                first_air_date={item.first_air_date}
              />
            ))
        }
      </div>
    </div>
  );
}

export default App;

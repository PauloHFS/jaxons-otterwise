import { useState, useEffect, Fragment } from 'react';

import Header from './components/Header/Header';
import Card from './components/Card/Card';

import './App.scss';

import { getAllShoes } from './services/shoes';

function App() {
  const [Shoes, setShoes] = useState([]);

  useEffect(() => {
    (async () => {
      const shoes = await getAllShoes();
      setShoes(shoes);
    })();
  }, []);

  return (
    <div className="App">
      <Header />
      {!!Shoes && (
        <Fragment>
          <h3 className="App-search-title">Search results</h3>
          {Shoes.map(shoe => (
            <Card data={shoe} key={shoe.id}></Card>
          ))}
        </Fragment>
      )}
    </div>
  );
}

export default App;

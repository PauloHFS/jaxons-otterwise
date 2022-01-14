import { useState, useEffect } from 'react';
import Card from './components/Card';
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
      {Shoes.map(shoe => (
        <Card data={shoe} key={shoe.id}></Card>
      ))}
    </div>
  );
}

export default App;

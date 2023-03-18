import { useEffect, useState } from "react";
const URLApi= "https://catfact.ninja/fact"
function App() {
  const [fact, setFact] = useState();

  const getData = async () => {
    const data = await fetch(URLApi);
    const response = await data.json();
    setFact(response.fact);
    const firstWord = response.fact.split(' ')[0];
    console.log(firstWord);
    
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <h1>app de gatitos</h1>
      {fact && <p>{fact}</p>}
      {/* <p>{firstWord}</p> */}
    </div>
  );
}

export default App;

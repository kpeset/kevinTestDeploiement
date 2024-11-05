import axios from "axios";
import { useEffect, useState } from "react";

import Dog from "./components/Dog";

import "./App.css";

interface DogProps {
  id: number;
  name: string;
  picture: string;
}

function App() {
  const [dogs, setDogs] = useState([] as DogProps[]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/pets`)
      .then((response) => setDogs(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
      {dogs.length ? (
        dogs.map((dog) => <Dog key={dog.id} dog={dog} />)
      ) : (
        <p>Chargement</p>
      )}
    </main>
  );
}

export default App;

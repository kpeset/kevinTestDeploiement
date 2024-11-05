interface DogProps {
  dog: {
    name: string;
    picture: string;
  };
}

export default function Dog({ dog }: DogProps) {
  return (
    <article>
      <h2>Nom : {dog.name}</h2>
      <img
        src={`${import.meta.env.VITE_API_URL}/assets/images${dog.picture}`}
        alt={dog.name}
      />
    </article>
  );
}

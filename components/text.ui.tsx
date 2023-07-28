import Image from "next/image";

type Game = {
  id: number;
  background_image: string;
  rating: string;
  name: string;
};

const getGame = async (): Promise<Game[]> => {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=6e1e950c83954e8b8fd5973e59f4d496`
  );
  if (!res.ok) {
    throw new Error("fail to fetch");
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await res.json();

  return data.results;
};

export default async function Home() {
  const games = await getGame();

  return (
    <div className=" px-6 lg:px-10 mt-24 rounded-md grid gap-10 grid-cols-4">
      {games?.map((game) => (
        <div className=" col-span-4 md:col-span-2" key={game.id}>
          <h2>{game.name}</h2>
          <p>{game.rating}</p>
          <div className=" aspect-video relative">
            <Image
              src={game.background_image}
              alt={game.name}
              fill
              className=" object-cover rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

import { AnimeCard } from "./AnimeCard";

export function AnimeComponent(props) {
  return (
    <div className="anime_cards_container">
      {props.data.map((animeData) => {
        return (
          <div key={Math.random()}>
            <AnimeCard data={animeData}></AnimeCard>
          </div>
        );
      })}
    </div>
  );
}

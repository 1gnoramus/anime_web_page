export function AnimeCard(props) {
    return (
      <div className="anime_card">
        <img src={props.data.images.jpg.image_url} alt="anime image" />
        <h1>{props.data.title}</h1>
        <button>Watch</button>
        <a href={props.data.url}>Learn More</a>
      </div>
    ); 
  }
  
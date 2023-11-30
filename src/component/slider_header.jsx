import React from 'react';
import './slider_header.css';



const slider_header = () => {

  const colors = ["#92c952", "#771796", "#24f355", "#d32776", "#f66b97"];

  const images = [
    "https://wallpaperswide.com/download/spider_man_across_the_spider_verse_2023_movie-wallpaper-960x540.jpg",
    "https://wallpaperswide.com/download/bumblebee_vs_optimus_prime_transformers_the_last_knight-wallpaper-1024x576.jpg",
    "https://wallpaperswide.com/download/star_wars_the_rise_of_skywalker_3-wallpaper-1024x576.jpg"
  ];

  const texto = ["Spider-Man: Across The Spider-verse","Transformers: The Last Knight","Star Wars VII: The Force Awakens"];
  const [value, setValue] = React.useState(0);

  

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        return v === 2 ? 0 : v + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const newPage = () => {


    return alert('PELICULA: '+texto[value]);
  };

  return (
    <div className="app" >
      <img src={images[value]} alt="img" style={{ width: "1180px", border: "3px solid", borderRadius: "20px" }} />
      <h3 className="textos"><button onClick={newPage}>{texto[value]}</button> </h3>
    </div>
  );
}

export default slider_header;
import { useEffect, useState } from 'react';
import './App.css';

// import function to register Swiper custom elements
import { register as registerSwiper} from 'swiper/element/bundle';
import { AppSwiper } from './component/app_swiper';
import AppSwiperSld from './component/app_swiper_sld';
// register Swiper custom elements
registerSwiper();

function App() {
  
  const [currentPage] = useState(2);
  const [moviesxpagina] = useState(25); 

  const [movie, setMovie] = useState([]);
  
  
  useEffect(() => {
    const getApiMovie = async () => {
      try {
        //const apiKey = 'ddf286270a985c5d9fa71c7e94ae8da7';
        const apiKey = 'c83c433f5710598d12bbe8b5392081a8';
        const endpoint = `https://api.themoviedb.org/3/movie/popular?language=es-US&page=${currentPage}&api_key=${apiKey}`;

        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error('Error en buscar los datos');
        }

        const data = await response.json();
        setMovie(data.results);
        
      } catch (err) {
        console.error(err);
      }
    };

    getApiMovie();
  }, [currentPage]);

  const imgs = 'https://image.tmdb.org/t/p/w500';

  const moviesToShow = movie.slice(3, moviesxpagina);
  const moviesToShow1 = movie.slice(7, moviesxpagina);
  const moviesToShow2 = movie.slice(12, moviesxpagina);
  const moviesToShow3 = movie.slice(0, moviesxpagina);
 
  return (

    

    <div className="App">
      

      

      <h3>Películas Populares</h3>
      

      <AppSwiper>

        {
        
            
            moviesToShow.map((m, index) => (
              <AppSwiperSld key={index}>
                <div className='movie-item' style={{width: "280px"}} >
                  <img src={`${imgs + m.poster_path}`} alt="poster" style={{ height: "160px" }} />
                  <div className='overview'>
                    <h3>{m.title}</h3>
                  
                 </div>
               </div>
              </AppSwiperSld>

          ))}
       
      </AppSwiper>
      <h3>Continuar Viendo</h3>
      <AppSwiper>

        {
          //Array.from({length: 20}).map((_, index) => (
            
            moviesToShow1.map((m, index) => (
              
              <AppSwiperSld key={index}>
               <div className='movie-item' style={{width: "280px"}} >
                  <img src={`${imgs + m.poster_path}`} alt="poster" style={{ height: "160px" }} />
                  <div className='overview'>
                    <h3>{m.title}</h3>
                    
                 </div>
               </div>
              </AppSwiperSld>

          ))
          
          }
       
      </AppSwiper>
      <h3>Mis Favoritas</h3>
      <AppSwiper>

        {
          //Array.from({length: 20}).map((_, index) => (
            
            moviesToShow2.map((m, index) => (
              <AppSwiperSld key={index}>
                <div className='movie-item' style={{width: "280px"}}>
                  <img src={`${imgs + m.poster_path}`} alt="poster" style={{ height: "160px" }} />
                  <div className='overview'>
                    <h3>{m.title}</h3>
                  
                 </div>
               </div>
              </AppSwiperSld>

          ))}
       
      </AppSwiper>
      <h3>Varias</h3>
      <AppSwiper>

        {
          //Array.from({length: 20}).map((_, index) => (
            
            moviesToShow3.map((m, index) => (
              <AppSwiperSld key={index}>
                <div className='movie-item' style={{width: "280px"}}>
                  <img src={`${imgs + m.poster_path}`} alt="poster" style={{ height: "160px" }} />
                  <div className='overview'>
                    <h3>{m.title}</h3>
                    
                 </div>
               </div>
              </AppSwiperSld>

          ))}
       
      </AppSwiper>
      
     
    </div>
  );
}

export default App;

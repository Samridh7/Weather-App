import React from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data,setData] = useState({});
  const [location,setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=e8eaa258ae55574742b2ae6423745acc`

  const searchLocation = (e) => {
    if(e.key === 'Enter'){
    axios.get(url).then((res) => {
        setData(res.data);
        console.log(res);
      })
      setLocation('')
    }
  }
  
  return (
    <div className="App">
     <div className="search">
       <input
       value={location}
       onChange={event => setLocation(event.target.value)}
       onKeyPress={searchLocation}
       placeholder='Enter Location' 
       type="text" 
       />
     </div>
     <div className="container">
       <div className="top">
         <div className="location">
           <p>{data.name}</p>
         </div>
         <div className="temp">
           {data.main ? <h1>{data.main.temp}°C</h1> : null}
         </div>
         <div className="description">
           {data.weather ? <p>{data.weather[0].main}</p> : null}
         </div>
       </div>
       {data.name !== undefined && <div className="bottom">
         <div className="feels">
           {data.main ? <p className="bold">{data.main.feels_like}°C</p> : null}
           <p>Feels Like</p>
         </div>
         <div className="humidity">
           {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
           <p>Humidity</p>
         </div>
         <div className="wind">
           {data.wind ? <p className="bold">{data.wind.speed}MPH</p> : null}
           <p>Wind</p>
         </div>
       </div>}
     </div>
    </div>
  );
}

export default App;

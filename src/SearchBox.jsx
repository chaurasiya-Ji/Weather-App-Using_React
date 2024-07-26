import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
const SearchBox = ({updateInfo}) => {
    let [city, setCity]=useState("");
    let [error, seterror]= useState(false);

    const API_URL= "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY= "e0072aaa4456f091e675ac080576426f";


    let getWetherInfo= async()=>{
        try{

            let res=   await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let JsonRes= await res.json();
            //   console.log(JsonRes);
            //   console.log(city);
            let result={
                city: JsonRes.name,   
                temp: JsonRes.main.temp,
                tempMin: JsonRes.main.temp_min,
                tempMax: JsonRes.main.temp_max,
                humidity: JsonRes.main.humidity,
                feelsLike: JsonRes.main.feels_like,
                weather: JsonRes.weather[0].description,
                
            };
            seterror(false)
              // console.log(result);
            return result;
        } catch(err){
           throw err;
        }
            
    };
    let handelChange= (event)=>{
        setCity(event.target.value);

    };
let handelSubmit= async(ev)=>{
    try{

        ev.preventDefault();
        setCity("");
        let newInfo = await getWetherInfo();
        updateInfo(newInfo);
        // console.log(newInfo);
    }catch(err){
        seterror(true)
    }

}
  return (
    <div  className='Searchbox'>
      <form onSubmit={handelSubmit}>
      <TextField onChange={handelChange} value={city} id="city" label="City Name" required variant="outlined" />
      <br /><br /> 
      <Button className='btn'  variant="contained"  type='submit'>
        Search
      </Button>
      
      <br /><br /> <hr /><br />
      {error&& <p style={{color: "red"}}>"No Such place in My data"</p>}
        
      </form>
    </div>
  )
}

export default SearchBox

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css'
export default function InfoBox({info}){
const rain_img="https://images.unsplash.com/photo-1561471026-0bbb77535d25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const hot_img= "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlciUyMHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
const cold_img= "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYXRoZXIlMjBjb2xkfGVufDB8fDB8fHww";


    return(

        <div className="infobox">
          <br /><br />
          
            <div className="cardContainer">
            <Card sx={{ maxWidth: 500 }} className='card'>
      <CardMedia className='img'
        sx={{ height: 140 }}
        image={info.humidity>80?rain_img:info.temp>15?hot_img:cold_img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <hr />
        <Typography variant="body2" color="text.secondary" component="span">
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The weather can be described as <i>{info.weather}</i> and fells like {info.feelsLike}&deg;C</p>
         
        </Typography>
      </CardContent>
    
    </Card>
    </div>
 </div>
    )
}
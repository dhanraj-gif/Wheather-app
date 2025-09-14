import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({info}){
	const INIT_URL=
		"https://images.unsplash.com/photo-1497032472206-e3c18e68e8e6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRhcmslMjB3ZWF0aGVyfGVufDB8fDB8fHww"
		
		const HOT_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-KMJBMVgV3-14oiLkbK1_vcG--CTIwiMFsQ&s";
		const COLD_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpAs9VniJvuieSefh4eHkeuczsvh9tS278A&s";
		const RAIN_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOxLGrQldFvH_EhAklHuz8_oVmXUetqfAaA&s";
	
	return (
		<div className="InfoBox">
			<div className="cardContainer">
			<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp>20?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
          info.humidity>80
            ?<WaterDropIcon/>
            :info.temp>20
            ?<SunnyIcon/>
            :<AcUnitIcon/>
				}
        </Typography>
				<Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature={info.temp}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p>Min Temp={info.tempMin}&deg;C</p>
         <p>Max Temp={info.tempMax}&deg;C</p>
         <p>
	         The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
	         </p>
        </Typography>
      </CardContent>
    </Card>
	    </div>
		</div>
		);
	}
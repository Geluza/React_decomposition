
function Weather({props}) {
  return (
   <div className="weather_container">
   <h4>Погода на сегодня</h4>
   <div className="icon_text_weather">
   <img className="weather_icon" src={props.icon} alt={props.alt}/>
   <div class="weather_text">{props.text}</div>
   </div>
   </div>
  );
}

export default Weather;

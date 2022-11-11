
function TVprogrammItem({props}) {
  return (
  <div className="tv_prog_list">
  <span className="time_tv>">{props.time}</span>
  <span className="name_tv>">{props.name}</span>
  <span className="channel_tv>">{props.channel}</span>
  </div>
  );
}

export default TVprogrammItem;

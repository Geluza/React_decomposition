import TVprogrammItem from './TVprogrammItem';

let tvList = [{time: "02:00", channel: "ТНТ", name: "ТНТ.TheBest"},{time: "12:00", channel: "Карусель", name: "Джинглики"}]


function TVprogramm() {
  return (
    <div className="tv_container">
  <h4 className="tv_title">Телепрограмма</h4>
  <div className="tv_programm_list">
  {tvList.map(item => 
  <TVprogrammItem props = {item} key={item.channel}/>
  )}
  </div>
  </div>
  );
}

export default TVprogramm;

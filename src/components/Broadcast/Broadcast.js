import BroadcastItem from './BroadcastItem';

let broadcast = [{channel: "Успех", name: "Управление как искусство"}, {channel: "earthTV", name: "Ночь. Мир в это время"}, {channel: "СовершенноСекретно", name: "Андрей Возн..."}]

function BroadCast() {
  return (
    <div className="broadcast_container">
  <h4 className="broadcast_title">Эфир</h4>
  <div className="broadcast_list">
  {broadcast.map(item => 
  <BroadcastItem props = {item} key={item.channel}/>
  )}
  </div>
  </div>
  
  );
}

export default BroadCast;

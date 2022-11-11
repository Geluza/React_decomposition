
function BroadcastItem({props}) {
  return (
    <div className="broadcast_item">
    <span className="broadcast_name">{props.name}</span>
    <span className="broadcast_channel">{props.channel}</span>
    </div>
  );
}

export default BroadcastItem;

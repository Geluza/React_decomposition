

function Billboard({props}) {
  return (
   <img className="billboard_image" src={props.img} alt={props.alt}>
  </img>
  );
}

export default Billboard;

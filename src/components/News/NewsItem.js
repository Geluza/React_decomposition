

function NewsItem({props}) {
  return (
    <li className="news_item">
      <img src={props.icon} alt="img" className="news_img"></img>
      <span className="news_item_text">{props.text}</span>  
    </li>
  )
 
}

export default NewsItem;

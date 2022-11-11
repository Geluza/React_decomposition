
function PopularItem({props}) {
  return (
    <div className="article_category">
    <div className="category">{props.category}</div>
    <span>-</span>
    <div className="article">{props.article}</div>
    </div>
  );
}

export default PopularItem;

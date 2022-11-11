
import PopularItem from './PopularItem';
let popular = [{category: "Недвижимость", article: "O сталинках"}, {category: "Маркет", article: "Люстры и светильники"}, {category: "Авто.ру", article: "привод 4х4"}];


function Popular() {
  return (
  <div className="popular_container">
  <h4 className="popular_title">Посещаемое</h4>
  <div className="aticle_category_list">
  {popular.map(item => 
  <PopularItem props = {item} key={item.category}/>
  )}
  </div>
  </div>
  );
}

export default Popular;

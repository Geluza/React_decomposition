

function Search() {
  return (
    <div className="search-group">
    <img src="http://www.seoded.ru/istoriya/img/istoriya-yandeksa.png" alt="иконка Яндекс"  className="img_search-group"/>
    <form className="search-form">
    <label className="search">
    <input type="text" className="search-field" required/>
    </label>
    <button className="button-search" type="submit"><span className="search-text">Найти</span></button>
    </form>
    </div>
  );
}

export default Search;

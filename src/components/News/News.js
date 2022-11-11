import TitleNews from './TitleNews';
import NewsItem from './NewsItem'

const news = [{text: "Путин упростил получение автомобильных номеров", icon: "https://www.shareicon.net/data/128x128/2015/09/26/646859_weather_512x512.png"},
{text: "в команде Зеленского раскрыли план реформ на Украине", icon: "https://www.shareicon.net/data/128x128/2015/09/26/646859_weather_512x512.png"},
{text: "Турпомощь прокмментировала гибель десятков россиян в Анталье", icon: "https://pigmentarius24.ru/wp-content/uploads/2018/02/sun-png.png"},
{text: "Суд закрыл дело Демпартии США против России", icon: "https://pigmentarius24.ru/wp-content/uploads/2018/02/sun-png.png"},
{text: "На Украине призвали создать ракеты для удара по Москве", icon: "https://pigmentarius24.ru/wp-content/uploads/2018/02/sun-png.png"}]


function News() {
  return (
    <main>
    <TitleNews/>
     <ul className="news_list">
      {news.map(item=> <NewsItem props = {item} key={item.text}/>)}
     </ul>
    </main>
  );
}

export default News;

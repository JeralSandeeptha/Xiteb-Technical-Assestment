import { news } from '../../data/news.data';
import News from '../news/News';
import './NewsSection.scss';

const NewsSection = () => {
  return (
    <div className='news-section'>
      <div className="news-section-inner">

        <div className="news-header">
            <h1 className='section-header'>LATEST NEWS</h1>
            <h5 className='section-sub-header'>INTEGER CONGUE ELIT</h5>
        </div>

        <div className="news-content">
            {
                news.map((news) => {
                    return (
                        <News 
                            key={news.id}
                            commentsCount={news.commentsCount}
                            date={news.date}
                            description={news.description}
                            id={news.id}
                            image={news.image}
                            month={news.month}
                            user={news.user}
                            title={news.title}
                        />
                    )
                })
            }
        </div>

      </div>
    </div>
  )
}

export default NewsSection

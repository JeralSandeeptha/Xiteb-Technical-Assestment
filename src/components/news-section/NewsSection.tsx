import { news } from '../../data/news.data';
import { News } from '../../types/model.types';
import './NewsSection.scss';
import chatIcon from '../../assets/logos/chat.png';

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
                news.map((news: News) => {
                    return (
                        <div className='news'>
                            <div className="news-left" style={{ backgroundImage: `url(${news.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="date-container">
                                    <h1 className='date'>{ news.date }</h1>
                                    <h3 className='month'>{ news.month }</h3>
                                </div>
                            </div>
                            <div className="news-right">
                                <h2 className='news-title'>{ news.title }</h2>
                                <div className="user-content">
                                    <h5 className='user'>{ news.user }</h5>
                                    <img src={chatIcon} alt="chat-icon" className='comment-logo'/>
                                    <h5 className='count'>{ news.commentsCount }</h5>
                                </div>
                                <h5 className='news-description'>{news.description}</h5>
                            </div>
                        </div>
                    )
                })
            }
        </div>

      </div>
    </div>
  )
}

export default NewsSection

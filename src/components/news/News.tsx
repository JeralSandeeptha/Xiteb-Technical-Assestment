import "./News.scss";
import chatIcon from "../../assets/logos/chat.png";
import { NewsProps } from "../../types/component.types";

const News = (props: NewsProps) => {
  return (
    <div className="news">
      <div
        className="news-left"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="date-container">
          <h1 className="date">{props.date}</h1>
          <h3 className="month">{props.month}</h3>
        </div>
      </div>
      <div className="news-right">
        <h2 className="news-title">{props.title}</h2>
        <div className="user-content">
          <h5 className="user">{props.user}</h5>
          <img src={chatIcon} alt="chat-icon" className="comment-logo" />
          <h5 className="count">{props.commentsCount}</h5>
        </div>
        <h5 className="news-description">{props.description}</h5>
      </div>
    </div>
  );
};

export default News;

import "./Widget.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Donald Trump is back", "Top news= 1m readers")}
      {newsArticle("Talent", "Linkedin Clone created, No copyrights")}
      {newsArticle(
        "Elon musk praises creator",
        "Clone was praised by Elon musk, potential investor"
      )}
      {newsArticle(
        "Redux is fun",
        "Millions using redux to enhance their skills"
      )}
    </div>
  );
}

export default Widget;

import "./TrafficWidget.css";

const TrafficWidget = (props) => {
  return (
    <div>
      <p className="traffic-title">TRAFFIC BY SITE</p>
      <div className="traffic-widget">
        {props.data.map((website) => (
          <div className="traffic-box">
            <img src={website.logo} alt="icon"/>
            <p className="traffic-amount">{website.amount}</p>
            <p className="traffic-name">{website.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficWidget;

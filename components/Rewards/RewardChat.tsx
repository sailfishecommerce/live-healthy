import rewardContent from "@/json/reward.json";
import RewardCard from "./RewardCard";

export default function RewardChat() {
  return (
    <>
      <div className="reward-chat-box">
        <div className="chat-header">
          <h6>Welcome to</h6>
          <h4>Sailfish + Rewards</h4>
        </div>
        <div className="card-group">
          {rewardContent.cards.map((card) => (
            <RewardCard card={card} key={card.title} />
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .chat-header {
            background: linear-gradient(
              135.19deg,
              hsla(35, 93%, 55%, 1),
              hsla(35, 100%, 37%, 1)
            );
            height: 160px;
            width: 100%;
            color: white;
            padding: 20px;
            border-radius: 30px;
          }
          .reward-chat-box {
            background-color: white;
          }
          .card-group {
            padding: 20px;
          }
        `}
      </style>
    </>
  );
}

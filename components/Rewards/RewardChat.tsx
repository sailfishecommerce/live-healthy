import rewardContent from "@/json/reward.json";
import RewardCard from "./RewardCard";

export default function RewardChat() {
  return (
    <>
      <div className="reward-chat-box">
        <div className="chat-header">
          <h6 className="mt-2">Welcome to</h6>
          <h4>Sailfish + Rewards</h4>
        </div>
        <div className="reward-card-group">
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
            height: 120px;
            width: 100%;
            color: white;
            padding: 20px;
            padding-left: 30px;
            border-radius: 30px;
          }
          .chat-header h6,
          .chat-header h4 {
            color: white;
          }
          .reward-chat-box {
            background-color: white;
            border-radius: 30px;
            box-shadow: 0 0 13px 0 rgb(0 0 0 / 9%);
            position: fixed;
            right: 20px;
            bottom: 100px;
            width: 400px;
            z-index: 5000;
            height: 700px;
            overflow: hidden;
          }
          .reward-card-group {
            padding: 20px;
            height: 600px;
            overflow-y: scroll;
          }
        `}
      </style>
    </>
  );
}

import rewardContent from "@/json/reward.json";
import RewardCard from "./RewardCard";

export default function RewardChat() {
  return (
    <div>
      <div className="chat-header">
        <h6>Welcome to</h6>
        <h4>Sailfish + Rewards</h4>
      </div>
      {rewardContent.cards.map((card) => (
        <RewardCard card={card} key={card.title} />
      ))}
    </div>
  );
}

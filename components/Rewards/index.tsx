import { useAppSelector } from "@/hooks/useRedux";
import { useState } from "react";
import RewardButton from "./RewardButton";
import rewardsTab from "./RewardsTab";

export default function Reward() {
  const [showChat, setShowChat] = useState(false);
  const { stage } = useAppSelector((state) => state.rewardWidget);

  function displayChat() {
    setShowChat(!showChat);
  }

  return (
    <>
      <div className="reward-widget d-flex flex-column">
        {showChat && rewardsTab(stage)}
        <RewardButton showChat={showChat} onClick={displayChat} />
      </div>
      <style jsx>
        {`
          .reward-widget {
            position: fixed;
            z-index: 100;
            right: 20px;
            bottom: 20px;
          }
        `}
      </style>
    </>
  );
}

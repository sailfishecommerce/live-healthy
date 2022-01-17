import { useState } from "react";
import RewardButton from "./RewardButton";
import RewardChat from "./RewardChat";

export default function Reward() {
  const [showChat, setShowChat] = useState(false);

  function displayChat() {
    setShowChat(!showChat);
  }

  return (
    <>
      <div className="reward-widget d-flex flex-column">
        {showChat && <RewardChat />}
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

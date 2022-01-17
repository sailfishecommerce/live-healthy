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
      <div className="reward">
        {showChat && <RewardChat />}
        <RewardButton showChat={showChat} onClick={displayChat} />
      </div>
      <style jsx>
        {`
          .reward {
            position: fixed;
            right: 20px;
            bottom: 20px;
            width: 400px;
            z-index: 10000;
            height: 700px;
          }
        `}
      </style>
    </>
  );
}

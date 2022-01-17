/* eslint-disable @next/next/no-img-element */

interface Props {
  onClick: () => void;
  showChat: boolean;
}

export default function RewardButton({ showChat, onClick }: Props) {
  return (
    <>
      <button onClick={onClick} className="rewardButton">
        {!showChat ? (
          <span className="imgContainer">
            <img src="/img/cartLoveIcon.png" alt="shopping cart with rewards" />{" "}
            Rewards
          </span>
        ) : (
          <span className="cancel">X</span>
        )}
      </button>
      <style jsx>{`
        button.rewardButton {
          height: 60px;
          min-width: 60px;
          color: white;
          padding: 20px;
          border-radius: 30px;
          display: flex;
          align-items: center;
          background-color: #f79f24;
          border: none;
        }
        button.rewardButton span img {
          height: 30px;
          width: 30px;
          margin-right: 03px;
        }
        .imgContainer {
          display: flex;
          align-items: center;
        }
        .cancel {
          font-size: 25px;
        }
      `}</style>
    </>
  );
}

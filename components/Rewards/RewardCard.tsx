/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface Props {
  card: {
    title: string;
    text: string;
    type: string;
    links?: {
      icon: string;
      title: string;
      route?: string;
      text?: string;
    }[];
  };
}

export default function RewardCard({ card }: Props) {
  return (
    <>
      <div className="reward-card">
        <h6 className="title text-center">{card.title}</h6>
        <p className="text-center">{card.text}</p>
        {card.type === "button" && (
          <div className="button-view d-flex flex-column">
            <Link href="/my-account" passHref>
              <button>Join Now</button>
            </Link>
            <p className="text-center">
              Already have an account ?{" "}
              <Link href="/my-account" passHref>
                <a>Sign in</a>
              </Link>
            </p>
          </div>
        )}
        {card.type !== "button" && (
          <ul className="menu-link">
            {card.type === "links"
              ? card?.links?.map((link) => (
                  <li
                    key={link.title}
                    className="point-list d-flex align-items-center"
                  >
                    <img className="icon" src={link.icon} alt="icon" />
                    <p>{link.title}</p>
                  </li>
                ))
              : card.type === "referrals" &&
                card?.links?.map((item, index) => (
                  <li
                    key={index}
                    className="point-list d-flex align-items-center"
                  >
                    <img className="icon" src={item.icon} alt="icon" />
                    <span className="d-flex flex-column">
                      <h6>{item.title}</h6>
                      <p>{item.text}</p>
                    </span>
                  </li>
                ))}
          </ul>
        )}
      </div>
      <style jsx>{`
        .menu-link {
          padding: 0px;
        }
        img.icon {
          height: 30px;
          width: 30px;
        }
        .button-view button {
          width: 90px;
        }
        .reward-card h6 {
          font-size: 15px;
          font-weight: 500;
        }
        .button-view button {
          margin: auto;
          border: none;
          color: white;
          background-color: #f79f24;
          padding: 10px;
          border-radius: 5px;
          font-size: 13px;
          margin-bottom: 10px;
        }
        .point-list {
          margin: 0px 0px 10px 15px;
        }
        .point-list img.icon {
          margin-right: 20px;
        }
        .point-list p {
          margin-bottom: 0px;
        }
        .button-view button:hover {
          opacity: 0.8;
        }
        .reward-card p {
          font-size: 13px;
          font-weight: 300;
        }
        .reward-card {
          width: 350px;
          -webkit-animation: fadeSlideOut 0.2s ease;
          animation: fadeSlideOut 0.2s ease;
          -webkit-animation-delay: 0.25s;
          animation-delay: 0.25s;
          -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
          transform: translate(-10px);
          border-radius: 10px;
          -webkit-animation: fadeSlideIn 0.3s ease;
          animation: fadeSlideIn 0.3s ease;
          -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
          -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
          background-color: #fff;
          box-shadow: 0 0 13px 0 rgb(0 0 0 / 9%);
          margin-bottom: 12px;
          margin-left: 15px;
          overflow: hidden;
          padding: 16px 12px;
          color: black;
          position: relative;
        }
      `}</style>
    </>
  );
}

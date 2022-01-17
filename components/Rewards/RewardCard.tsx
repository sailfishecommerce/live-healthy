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
    <div className="reward-card">
      <h6>{card.title}</h6>
      <p>{card.text}</p>
      {card.type === "button" && (
        <div className="button-view d-flex flex-column">
          <Link href="/my-account" passHref>
            <button>Join Now</button>
          </Link>
          <p>
            Already have an account ?{" "}
            <Link href="/my-account" passHref>
              <a>Sign in</a>
            </Link>
          </p>
        </div>
      )}
      <ul className="menu-link">
        {card.type === "links"
          ? card?.links?.map((link) => (
              <li key={link.title} className="d-flex align-items-center">
                <img src={link.icon} alt="icon" />
                <p>{link.title}</p>
              </li>
            ))
          : card.type === "referrals" &&
            card?.links?.map((item, index) => (
              <li key={index} className="d-flex flex-column">
                <img src={item.icon} alt="icon" />
                <span className="d-flex flex-column">
                  <h6>{item.title}</h6>
                  <p>{item.text}</p>
                </span>
              </li>
            ))}
      </ul>
    </div>
  );
}

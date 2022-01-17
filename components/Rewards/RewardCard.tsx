/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface Props {
  title: string;
  text: string;
  type: string;
  links: {
    img: string;
    text: string;
  }[];
  textGroup: {
    img: string;
    text: string;
    title: string;
  }[];
}

export default function RewardCard({
  title,
  text,
  type,
  links,
  textGroup,
}: Props) {
  return (
    <div className="reward-card">
      <h6>{title}</h6>
      <p>{text}</p>
      {type === "button" && (
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
        {type === "links"
          ? links.map((link) => (
              <li key={link.text} className="d-flex align-items-center">
                <img src={link.img} alt="icon" />
                <p>{link.text}</p>
              </li>
            ))
          : type === "referrals" &&
            textGroup.map((item) => (
              <li key={item.title} className="d-flex flex-column">
                <img src={item.img} alt="icon" />
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

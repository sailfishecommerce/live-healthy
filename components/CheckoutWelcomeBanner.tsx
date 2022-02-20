import { useAccount } from "@/hooks";
import { useQuery } from "react-query";

export default function CheckoutWelcomeBanner() {
  const { getUserAccount } = useAccount();

  const { data: userDetails, status } = useQuery("getAccount", getUserAccount);

  return (
    <div className="mt-5 d-sm-flex justify-content-between align-items-center bg-secondary p-4 rounded-3 mb-grid-gutter">
      {status === "error" ? (
        "unable to fetch user data"
      ) : status === "loading" ? (
        "loading ..."
      ) : (
        <div className="d-flex align-items-center">
          {userDetails !== null ? (
            <span className="fw-bold ">
              Hello <span className="text-accent">{userDetails.firstName}</span>
              , Thanks for choosing Sailfish.
            </span>
          ) : (
            <span className="guest fw-bold text-decoration-underline">
              Hello Guest, Thanks for choosing Sailfish.
            </span>
          )}
        </div>
      )}
    </div>
  );
}

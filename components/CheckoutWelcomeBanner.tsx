import { useAppSelector } from "@/hooks/useRedux";

export default function CheckoutWelcomeBanner() {
  const { userDetail, authorized } = useAppSelector((state) => state.auth);
  return (
    <div className="mt-5 d-sm-flex justify-content-between align-items-center bg-secondary p-4 rounded-3 mb-grid-gutter">
      <div className="d-flex align-items-center">
        {authorized ? (
          <span className="fw-bold text-decoration-underline">
            Hello {userDetail.firstName}
          </span>
        ) : (
          <span className="guest fw-bold text-decoration-underline">
            Hello Guest, Thanks for choosing Sailfish.
          </span>
        )}
        <div className="ps-3">
          <h3 className="fs-base mb-0">
            {userDetail?.firstName} {userDetail?.lastName}
          </h3>
          <span className="text-accent fs-sm">{userDetail?.email}</span>
        </div>
      </div>
    </div>
  );
}

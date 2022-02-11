import { useState } from "react";
import dynamic from "next/dynamic";
import passwordResetForm from "@/json/password-reset.json";

import Applayout from "@/layout/Applayout";

type stateType = { status: any; email?: string };

const AccountRecoveryform = dynamic(
  () => import("@/components/account-recovery-form")
);

export default function AccountPasswordRecovery() {
  const [recoveryStatus] = useState<null | stateType>(null);

  return (
    <Applayout title="Recover your password with ease">
      <div className="container py-4 py-lg-5 my-4">
        {recoveryStatus?.email && (
          <div
            data-aos="zoom-in-up"
            className="alert bg-danger text-white text-center col-8 mb-5 mx-auto"
          >
            Reset password link has been sent to{" "}
            <span className="fw-bold">{recoveryStatus?.email}</span>, please
            check your e-mail
          </div>
        )}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <h2 className="h3 mb-4">Forgot your password?</h2>
            <p className="fs-md">
              Change your password in three easy steps. This helps to keep your
              new password secure.
            </p>
            <ol className="list-unstyled fs-md">
              {passwordResetForm.listView.map((list, index) => (
                <li key={index}>
                  <span className="text-primary me-2">{list.count}.</span>
                  {list.text}
                </li>
              ))}
            </ol>
            <AccountRecoveryform />
          </div>
        </div>
      </div>
    </Applayout>
  );
}

import Applayout from "@/layout/Applayout";

import PasswordReset from "@/components/account-recovery/PasswordReset";

export default function AccountPasswordRecovery() {
  return (
    <Applayout title="Reset your password">
      <PasswordReset />
    </Applayout>
  );
}

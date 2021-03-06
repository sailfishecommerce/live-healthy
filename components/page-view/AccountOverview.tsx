import Breadcrumb from "@/components/bread-crumb/Breadcrumb";
import OrderHistory from "@/components/order/OrderHistory";
import AccountDetail from "@/components/shipping/AccountDetail";
import breadcrumb from "@/json/breadcrumb.json";

export default function AccountOverview() {
  return (
    <main className="container mx-auto px-4 md:px-0">
      <Breadcrumb breadcrumbItems={breadcrumb.account} />
      <h1 className="text-2xl font-bold lg:mt-8 mt-2">My Account</h1>
      <OrderHistory />
      <AccountDetail />
    </main>
  );
}

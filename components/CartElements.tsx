import useCart from "@/hooks/useCart";
import useCoupon from "@/hooks/useCoupon";
import { Button } from "@/components/UIElement";
import styles from "@/styles/ui.module.css";

interface cartControlProps {
  item: any;
}

export function CartControl({ item }: cartControlProps) {
  const { updateQuantity } = useCart();

  const stepValue = item.product.attributes?.box ? 10 : 1;
  const minValue = item.product.attributes?.box ? 10 : 1;

  function updateItemQuantity(e: any) {
    console.log("e.target.value", e.target.value);
    updateQuantity(item, e.target.value);
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <label
          style={{ fontSize: "13px" }}
          htmlFor="itemQuantity"
          className="fw-normal me-1 text-muted"
        >
          Quantity:
        </label>
        <input
          onClick={updateItemQuantity}
          className="form-control my-2 py-1 text-center text-dark"
          type="number"
          id="itemQuantity"
          min={minValue}
          defaultValue={item.quantity}
          step={stepValue}
          max={90}
        />
      </div>
      <style jsx>
        {`
          .cartControl button {
            height: 30px;
            width: 30px;
            color: black;
            padding: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .cartControl button:hover {
            border: 1px solid black !important;
          }
          .cartControl input:hover {
            background-color: #f5f5f5;
          }
          #itemQuantity {
            width: 80px;
          }
        `}
      </style>
    </div>
  );
}

export function CartDiscount({ cartItem }: any) {
  const { loading, couponInputHandler, onSubmitCoupon } = useCoupon();

  return (
    <form
      onSubmit={onSubmitCoupon}
      className={`${styles.cartDiscount} flex-column d-flex justify-content-end`}
    >
      <p className="mb-0 mt-2 align-right">Applied discounts</p>
      <h6>{cartItem?.shipping}</h6>
      <div className="justify-content-end d-flex my-2">
        <input
          className="mx-2 border px-4"
          onChange={couponInputHandler}
          placeholder="Enter discount code"
          required
        />
        <Button
          className="btn"
          loading={loading}
          disable={loading}
          text="ADD"
          type="submit"
        />
      </div>
    </form>
  );
}

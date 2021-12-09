import useCheckout from "@/hooks/useCheckout";
import { checkoutStageProcess } from "@/types";
import checkoutSteps from "@/json/checkoutSteps.json";
import { switchTab } from "./CheckoutTab";

type stepType = {
  count: number;
  icon: string;
  name: checkoutStageProcess;
};

interface StepProps {
  content: stepType;
}

// active , active current | step-item

function Step({ content }: StepProps) {
  // switchTab;
  
  const { updateCheckoutHandler, checkout } = useCheckout();

  const currentStageCount = switchTab(content.name);
  const checkoutStageCount = switchTab(checkout);

  const stageStyle = checkout === content.name ? 'active current' : Number(currentStageCount) < Number(checkoutStageCount) ? 'active' : ''
 
  return (
    <a
      data-step={content.count}
      onClick={() => updateCheckoutHandler(content.name)}
      className={`step-item ${stageStyle} p-0`}
    >
      <div className="step-progress">
        <span className="step-count">{content.count}</span>
      </div>
      <div className="step-label">
        <i className={content.icon}></i>
        {content.name}
      </div>
    </a>
  );
}

export default function CheckoutStep() {
  return (
    <div className="steps steps-light pt-2 pb-3 mb-5">
      {checkoutSteps.map((step: any, index: number) => (
        <Step key={index} content={step} />
      ))}
    </div>
  );
}

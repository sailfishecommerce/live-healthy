import VisibilitySensor from "react-visibility-sensor";

export default function JustInView({ children, section }: any) {
  function onChangeHandler(isVisible: boolean) {
    console.log("Element is now %s", isVisible ? "visible" : "hidden");
  }
  return (
    <VisibilitySensor
      active={true}
      partialVisibility={true}
      offset={{ top: 10 }}
      minTopValue={100}
      scrollCheck={true}
      onChange={onChangeHandler}
    >
      {({ isVisible }) => {
        console.log("isVisible", isVisible, "section",  section);
        return isVisible ? <>{children}</> : <p>Hrllod</p>;
      }}
    </VisibilitySensor>
  );
}

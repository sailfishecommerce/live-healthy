import useInView from "react-cool-inview";

export default function JustInView({ children, section }: any) {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    onEnter: ({ unobserve }) => unobserve(),
  });
  console.log("inView", inView, "section", section);

  return (
    <div ref={observe}  className="inviewContainer">
      {inView && <>{children}</>}
    </div>
  );
}

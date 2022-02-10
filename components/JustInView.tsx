import useInView from "react-cool-inview";

export default function JustInView({ children }: any) {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });

  return (
    <div ref={observe} className="inviewContainer">
      {inView && children}
    </div>
  );
}

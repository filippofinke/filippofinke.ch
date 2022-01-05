import "./Container.css";

const Container = (props) => {
  let onScroll = props.onScroll;

  return (
    <div className="container" onScroll={onScroll}>
      {props.children}
    </div>
  );
};

export default Container;

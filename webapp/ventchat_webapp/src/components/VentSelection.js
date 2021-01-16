import ReactiveButton from "reactive-button";

export default function VentSelection(props) {
  return (
    <>
      <h3>Join As</h3>
      <ReactiveButton
        idleText="Venter"
        onClick={() =>
          props.history.push({
            pathname: "/chat",
            state: { type: "listener" },
          })
        }
      />
      <ReactiveButton
        idleText="listener"
        onClick={() =>
          props.history.push({
            pathname: "/chat",
            state: { type: "Listener" },
          })
        }
      />
    </>
  );
}

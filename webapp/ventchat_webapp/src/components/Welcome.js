import ReactiveButton from "reactive-button";

export default function Welcome(props) {
  return (
    <>
      <h1>Welcome!</h1>
      <h2>Venter:</h2>
      <h3>
        As a venter, you get a chance to help someone out. When most people come
        to these platforms, They are more interested that the other person
        understands them even if their problem seems small. So our advice is to
        give them hope and help them see a better future than they do right now.
        Refrain from abusing anyone and be kind to others because you dont know
        what the other person is going throught. Happy Helping.
      </h3>
      <h2>Listener:</h2>
      <h3>
        As a listener, you can vent out and and talk about your problems. A
        stranger out there might have gone through the same thing and have a way
        for you to recover. Happy venting.
      </h3>
      <ReactiveButton
        idleText="Accept and Continue"
        onClick={() => props.history.push("/selection")}
      />
    </>
  );
}

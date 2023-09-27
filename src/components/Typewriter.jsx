import ReactTyped from "react-typed";

const Typewriter = () => {
    return (
      <div>
        <h1>
          I'm a{" "}
          <ReactTyped
            strings={["Developer", "Writer", "Designer"]}
            typeSpeed={100}
            loop
            backSpeed={20}
            cursorChar=">"
            showCursor={true}
          />
        </h1>
      </div>
    );
  };

export default Typewriter;
import withLayout from "./withLayout";

function About() {
  return (
    <div style={{ maxWidth: "700px", margin: "auto" }}>
      <h2>About Me</h2>
    </div>
  );
}

export default withLayout(About);

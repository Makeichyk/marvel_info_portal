import "./App.scss";
import styled from "styled-components";

const H1 = styled.h1`
  color: #bf4f74;
  font-size: 60px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <H1>Default build, instaled: SASS, Styled Components</H1>
        <h2 className="scss">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam dolor,
          quasi ipsum necessitatibus iure aliquid recusandae consequatur labore,
          suscipit soluta ut iusto est, omnis porro sint expedita. Numquam,
          deserunt hic.
        </h2>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import styled from "styled-components";

function App() {
  return (
    <>
        <Wrapper>
            <p>
                당신의 조달등록을 도와드립니다.
                <Button onClick={() => alert("Marker added!")}>Add Marker</Button>

            </p>
        </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
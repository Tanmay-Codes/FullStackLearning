import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: ${props=>props.weight};
`;
function Splitscreen({ children, lweight, rweight }) {
    const [left, right] = children;
  return (
    <Container>
      <Pane weight={lweight}>
        {left}
      </Pane>
      <Pane weight={rweight}>
        {right}
      </Pane>
    </Container>
  );
}

export default Splitscreen;

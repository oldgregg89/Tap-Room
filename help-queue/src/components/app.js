import React from "react";
import Header from "./Header";
import KegControl from "./KegControl";
import Container from "react-bootstrap/Container";

function App(){
  return (
    <React.Fragment>
        <Header />
      <Container style={{backgroundColor: 'blue', marginTop: '150px'}}>
        <KegControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
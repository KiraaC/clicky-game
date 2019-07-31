import React from 'react';
import './App.css';
import ImageCard from "./components/ImageCard"
import Container from "./components/Container"
import Row from "./components/Row"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>


      <Navbar />
      <Container />
      <Row>
        <ImageCard imgUrl="http://picsum.photos/200/200" />
        <ImageCard imgUrl="http://picsum.photos/200/200" />
        <ImageCard imgUrl="http://picsum.photos/200/200" />
      </Row>



      {/* <ImageCard cardTitle="kIRA WAS HERE"/> */}

    </div>
  );
}

export default App;

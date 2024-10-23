
import Image from "next/image";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Editor from './editor';
import Viz from './viz';

export default function Home() {
  return (
    <Row>
      <Col>
        <h1>Code</h1>
        <Editor />
      </Col>
      <Col>
        <h1>Output</h1>
        <Viz />
      </Col>
    </Row>
  );
}

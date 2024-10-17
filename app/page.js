
import Image from "next/image";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Editor from './editor';

export default function Home() {
  return (
    <Row>
      <Col>
        <h1>Code</h1>
        <Editor />
      </Col>
      <Col>
        <h1>Output</h1>
      </Col>
    </Row>
  );
}

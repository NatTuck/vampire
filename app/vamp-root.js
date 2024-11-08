"use client";

import React from 'react';
import { Provider } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Editor from './editor';
import Output from './output';

import store from './store';

export default function VampRoot(props) {
  return (
    <Provider store={store}>
      <Row>
        <Col>
          <h1>Code</h1>
          <Editor />
        </Col>
        <Col>
          <h1>Output</h1>
          <Output />
        </Col>
      </Row>
    </Provider>
  );
}

"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Scene from './scene';

export default function Output(_props) {
  const output = useSelector((state) => state.output);
  const dispatch = useDispatch();

  function setTab(tab) {
    console.log("set-tab", tab);
    dispatch({type: 'set-tab', data: tab});
  }

  return (
    <Tabs activeKey={output.tab} onSelect={setTab}>
      <Tab eventKey="errors" title="Errors">
        <p>Errors</p>
      </Tab>
      <Tab eventKey="text" title="Text">
        <p>Text</p>
      </Tab>
      <Tab eventKey="scene" title="Scene">
        <Scene />
      </Tab>
    </Tabs>
  );
}

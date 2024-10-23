"use client";

import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { basicSetup } from '@uiw/codemirror-extensions-basic-setup';
import { javascript } from '@codemirror/lang-javascript';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { runCode } from './render';

const text0 = `
function onDraw(state) {

}

function onTick() {

}

function onClick() {

}

function onKey() {

}
`;

export default function Editor() {
  const [code, setCode] = React.useState(text0);
  const onChange = React.useCallback((code1, viewUpdate) => {
    console.log('code:', code1);
    setCode(code1);
  }, []);
  return (
    <Card>
      <Card.Body>
        <div>
          <Button onClick={() => runCode(code)}>Run</Button>
        </div>
        <CodeMirror value={code} height="600px"
                    extensions={[javascript({ jsx: false })]}
                    basicSetup={{foldGutter: false}}
                    onChange={onChange} />
      </Card.Body>
    </Card>
  );
}

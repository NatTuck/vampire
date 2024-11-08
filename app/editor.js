"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CodeMirror from '@uiw/react-codemirror';
import { basicSetup } from '@uiw/codemirror-extensions-basic-setup';
import { javascript } from '@codemirror/lang-javascript';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { runCode } from './render';

export default function Editor() {
  const code = useSelector((state) => state.code);
  const dispatch = useDispatch();

  const onChange = React.useCallback((code1, viewUpdate) => {
    console.log('code:', code1);
    dispatch({type: 'set-code', data: code1});
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

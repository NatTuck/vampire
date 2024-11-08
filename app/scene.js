"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from 'react-bootstrap/Card';

export default function Scene() {
  const scene = useSelector((state) => state.scene);
  const dispatch = useDispatch();

  const cvRef = React.useRef(null);

  React.useEffect(() => {
    let canv = cvRef.current;
    let ctx = canv.getContext('2d');
    startDrawing(ctx, scene);
    return () => stopDrawing();
  }, [scene]);
  
  return (
    <Card>
      <Card.Body>
        <canvas ref={cvRef} width="600" height="600">
        </canvas>
      </Card.Body>
    </Card>
  );
}

"use client";

import React from 'react';

import Card from 'react-bootstrap/Card';

export default function Viz() {
  const cvRef = React.useRef(null);

  React.useEffect(() => {
    
    return () => cleanup();
  });
  
  return (
    <Card>
      <Card.Body>
        <canvas ref={cvRef} width="600" height="600">
        </canvas>
      </Card.Body>
    </Card>
  );
}

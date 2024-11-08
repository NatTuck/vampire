
import Image from "next/image";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Editor from './editor';
import Output from './output';

import VampRoot from './vamp-root.js';

export default async function Home() {
  return <VampRoot />;
}

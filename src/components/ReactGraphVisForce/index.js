import React from 'react';
import { ForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';

const ReactGraphVisForce = () => {
  return (
    <ForceGraph zoom simulationOptions={{ height: 600, width: 600 }} showLabels>
      <ForceGraphNode node={{ id: '0' }} fill="red" />
      <ForceGraphNode node={{ id: '1' }} fill="blue" />
      <ForceGraphNode node={{ id: '2' }} fill="red" />
      <ForceGraphNode node={{ id: '3' }} fill="blue" />
      <ForceGraphNode node={{ id: '4' }} fill="red" />
      <ForceGraphNode node={{ id: '5' }} fill="blue" />
      <ForceGraphNode node={{ id: '6' }} fill="red" />
      <ForceGraphNode node={{ id: '7' }} fill="blue" />
      <ForceGraphLink link={{ source: '0', target: '1' }} strokeWidth="123" />
      <ForceGraphLink link={{ source: '0', target: '2' }} strokeWidth="123" />
      <ForceGraphLink link={{ source: '0', target: '3' }} strokeWidth="123" />
      <ForceGraphLink link={{ source: '0', target: '4' }} strokeWidth="123" />
      <ForceGraphLink link={{ source: '0', target: '5' }} strokeWidth="123" />
      <ForceGraphLink link={{ source: '3', target: '6' }} strokeWidth="123" />
      <ForceGraphLink link={{ source: '3', target: '7' }} strokeWidth="123" />
    </ForceGraph>
  );
};

export default ReactGraphVisForce;

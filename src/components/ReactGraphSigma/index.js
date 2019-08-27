import React from 'react';
import Graph from 'react-sigma-graph';

const data = {
  nodes: [
    { id: '0', category: 'cat', name: '0' },
    { id: '1', category: 'dog', name: '1' },
    { id: '2', category: 'cat', name: '2' },
    { id: '3', category: 'cat', name: '3' },
    { id: '4', category: 'cat', name: '4' },
    { id: '5', category: 'cat', name: '6' },
    { id: '6', category: 'cat', name: '5' },
    { id: '7', category: 'cat', name: '7' },
    { id: '8', category: 'cat', name: '5' },
    { id: '9', category: 'cat', name: '7' },
    { id: '10', category: 'mouse', name: '10' },
    { id: '11', category: 'mouse', name: '11' },
    { id: '12', category: 'mouse', name: '12' },
  ],
  // edge labels and types are optional
  edges: [
    {
      source: '0', target: '1', label: 'friend', type: 'arrow',
    },
    {
      source: '0', target: '2', label: 'enemy', type: 'arrow',
    },
    {
      source: '0', target: '3', label: 'enemy', type: 'arrow',
    },
    {
      source: '0', target: '4', label: 'friend', type: 'arrow',
    },
    {
      source: '0', target: '5', label: 'enemy', type: 'arrow',
    },
    {
      source: '0', target: '6', label: 'friend', type: 'arrow',
    },
    {
      source: '0', target: '7', label: 'enemy', type: 'arrow',
    },
    {
      source: '4', target: '7', label: 'friend', type: 'arrow',
    },
    {
      source: '1', target: '2', label: 'friend', type: 'arrow',
    },
    {
      source: '5', target: '11', label: 'spec', type: 'arrow',
    },
    {
      source: '6', target: '11', label: 'spec', type: 'arrow',
    },
    {
      source: '7', target: '11', label: 'spec', type: 'arrow',
    },
    {
      source: '1', target: '10', label: 'spec', type: 'arrow',
    },
    {
      source: '2', target: '10', label: 'spec', type: 'arrow',
    },
    {
      source: '3', target: '10', label: 'spec', type: 'arrow',
    },
    {
      source: '7', target: '9', label: 'spec', type: 'arrow',
    },
    {
      source: '8', target: '9', label: 'spec', type: 'arrow',
    },
    {
      source: '9', target: '12', label: 'spec', type: 'arrow',
    },
  ],
};

// // optional color definition, defaults to d3 category10 based on domain of categories in data
// const categoryColors = {
//   cat: '#1f77b4',
//   dog: '#ff7f0e',
// };

const ReactGraphSigma = () => {
  return <Graph data={data} />;
};

export default ReactGraphSigma;

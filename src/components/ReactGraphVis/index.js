/* eslint-disable func-names */
/* eslint-disable object-shorthand */
import React from 'react';
import Graph from 'react-graph-vis';

const graph = {
  nodes: [
    { id: 1, label: 'Node 1', color: '#e04141' },
    { id: 2, label: 'Node 2', color: '#e09c41' },
    { id: 3, label: 'Node 3', color: '#e0df41' },
    { id: 4, label: 'Node 4', color: '#7be041' },
    { id: 5, label: 'Node 5', color: '#41e0c9' },
    { id: 6, label: 'Node 6', color: '#e04141' },
    { id: 7, label: 'Node 7', color: '#e09c41' },
    { id: 8, label: 'Node 8', color: '#e0df41' },
    { id: 9, label: 'Node 9', color: '#7be041' },
    { id: 10, label: 'Node 10', color: '#41e0c9' },
    { id: 11, label: 'Node 11', color: '#e09c41' },
    { id: 12, label: 'Node 12', color: '#e04141' },
    { id: 13, label: 'Node 13', color: '#e0df41' },
    { id: 14, label: 'Node 14', color: '#e04141' },
  ],
  edges: [
    { from: 5, to: 6 },
    { from: 5, to: 7 },
    { from: 5, to: 8 },
    { from: 5, to: 9 },
    { from: 5, to: 1 },
    { from: 5, to: 3 },
    { from: 5, to: 2 },
    { from: 5, to: 4 },
    { from: 7, to: 12 },
    { from: 6, to: 4 },
    { from: 10, to: 11 },
    { from: 10, to: 12 },
    { from: 1, to: 9 },
    { from: 5, to: 13 },
    { from: 5, to: 14 },
  ],
};

const graph1 = {
  nodes: [
    { id: 5, label: 'Node 5', color: '#41e0c9' },
    { id: 6, label: 'Node 6', color: '#e04141' },
    { id: 7, label: 'Node 7', color: '#e09c41' },
    { id: 8, label: 'Node 8', color: '#e0df41' },
    { id: 9, label: 'Node 9', color: '#7be041' },
  ],
  edges: [
    { from: 5, to: 6 },
    { from: 5, to: 7 },
    { from: 5, to: 8 },
    { from: 5, to: 9 },
  ],
};

let currentGraph = graph;

const options = {
  layout: {
    hierarchical: true,
  },
  edges: {
    color: '#000000',
  },
  height: '700px',
};

const events = {
  click: function (event) {
    // eslint-disable-next-line no-unused-vars
    const { nodes, edges } = event;
    currentGraph = graph1;
    console.log(nodes, edges);
  },
};

const ReactGraphVis = () => {
  return <Graph graph={currentGraph} options={options} events={events} />;
};

export default ReactGraphVis;

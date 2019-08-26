/* eslint-disable func-names */
/* eslint-disable object-shorthand */
import React, { useState } from 'react';
import Graph from 'react-graph-vis';

import './network.css';

const initialGraph = {
  nodes: [
    { id: 1, label: 'Node 1', title: '<h1>Heyya 1<br/> <a href="http://google.com">Link</a></h1>', color: '#e04141' },
    { id: 2, label: 'Node 2', title: 'Heyya', color: '#e09c41' },
    { id: 3, label: 'Node 3', title: 'Heyya', color: '#e0df41' },
    { id: 4, label: 'Node 4', title: 'Heyya', color: '#7be041' },
    { id: 5, label: 'Node 5', title: 'Heyya', color: '#41e0c9' },
    { id: 6, label: 'Node 6', title: 'Heyya', color: '#e04141' },
    { id: 7, label: 'Node 7', title: 'Heyya', color: '#e09c41' },
    { id: 8, label: 'Node 8', title: 'Heyya', color: '#e0df41' },
    { id: 9, label: 'Node 9', title: 'Heyya', color: '#7be041' },
    { id: 10, label: 'Node 10', title: 'Heyya', color: '#41e0c9' },
    { id: 11, label: 'Node 11', title: 'Heyya', color: '#e09c41' },
    { id: 12, label: 'Node 12', title: 'Heyya', color: '#e04141' },
    { id: 13, label: 'Node 13', title: 'Heyya', color: '#e0df41' },
    { id: 14, label: 'Node 14', title: 'Heyya', color: '#e04141' },
  ],
  edges: [
    { from: 5, to: 6, label: 'Member of' },
    { from: 5, to: 7, label: 'Operations in' },
    { from: 5, to: 8, label: 'Located in' },
    { from: 5, to: 9, label: 'Bufferred in' },
    { from: 5, to: 1, label: 'Deep of' },
    { from: 5, to: 3, label: 'Instance of' },
    { from: 5, to: 2, label: 'Member of' },
    { from: 5, to: 4, label: 'Located of' },
    { from: 7, to: 12, label: 'Located of' },
    { from: 6, to: 4, label: 'Located of' },
    { from: 10, to: 11, label: 'Located of' },
    { from: 10, to: 12, label: 'Located of' },
    { from: 1, to: 9, label: 'Located of' },
    { from: 5, to: 13, label: 'Located of' },
    { from: 5, to: 14, label: 'Located of' },
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

const options = {
  layout: {
    hierarchical: true,
  },
  edges: {
    color: '#000000',
  },
  height: '700px',
};

const ReactGraphVis = () => {
  const [graph, setGraph] = useState(initialGraph);

  const events = {
    doubleClick: function(event) {
      // eslint-disable-next-line no-unused-vars
      const { nodes, edges } = event;
      setGraph(graph1);
      console.log(event);
    },
  };

  return <Graph graph={graph} options={options} events={events} />;
};

export default ReactGraphVis;

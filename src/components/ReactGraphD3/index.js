import React, { useState } from 'react';
import { Graph } from 'react-d3-graph';

import Modal from 'components/common/Modal';

// graph payload (with minimalist structure)
const data = {
  nodes: [
    {
      id: '0',
      name: 'Garry',
      color: '#ff00ff',
      size: '500',
    },
    { id: '1', name: 'Sally' },
    { id: '2', name: 'Alice' },
    { id: '3', name: 'Peter' },
    { id: '4', name: 'Alex' },
    { id: '5', name: 'Kris' },
    { id: '6', name: 'Anders' },
    { id: '7', name: 'Garry' },
    { id: '8', name: 'Sally' },
    { id: '9', name: 'Alice' },
    { id: '10', name: 'Peter' },
    { id: '11', name: 'Alex' },
    { id: '12', name: 'Kris' },
    { id: '13', name: 'Anders' },
  ],
  links: [
    { source: '0', target: '3', label: 'friend' },
    { source: '0', target: '2', label: 'enemy' },
    { source: '0', target: '1', label: 'collegue' },
    { source: '2', target: '5', label: 'friend' },
    { source: '3', target: '5', label: 'friend' },
    { source: '5', target: '6', label: 'collegue' },
    { source: '6', target: '4', label: 'friend' },
    { source: '1', target: '13', label: 'collegue' },
    { source: '2', target: '11', label: 'enemy' },
    { source: '3', target: '9', label: 'enemy' },
    { source: '4', target: '10', label: 'friend' },
    { source: '6', target: '8', label: 'collegue' },
    { source: '7', target: '5', label: 'friend' },
    { source: '5', target: '2', label: 'collegue' },
    { source: '6', target: '1', label: 'enemy' },
    { source: '6', target: '12', label: 'collegue' },
  ],
};

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
  nodeHighlightBehavior: true,
  node: {
    color: 'lightgreen',
    size: 200,
    highlightStrokeColor: 'blue',
    renderLabel: true,
    labelProperty: 'name',
  },
  link: {
    highlightColor: 'lightblue',
    renderLabel: true,
  },
  directed: true,
  height: 800,
  width: 800,
  focusZoom: 1,
  d3: {
    gravity: -300,
  },
};

const initialModalSettings = {
  show: false,
  position: {
    top: 0, left: 0,
  },
};

const ReactGraphD3 = () => {
  const [modalSettings, setModalSettings] = useState(initialModalSettings);

  const onClickNode = (nodeId) => {
    console.log(nodeId);
  };

  const onRightClickNode = (event, nodeId) => {
    event.persist();
    event.preventDefault();
    const { clientX, clientY } = { ...event };

    const nodeLabel = data.nodes.find(node => node.id === nodeId).name;

    setModalSettings({
      show: true,
      top: clientY,
      left: clientX,
      title: nodeLabel,
    });
  };

  const handleCloseModal = () => {
    setModalSettings(initialModalSettings);
  };

  return (
    <>
      <Graph
        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
        data={data}
        config={myConfig}
        onClickNode={(nodeId) => onClickNode(nodeId)}
        onRightClickNode={(event, nodeId) => onRightClickNode(event, nodeId)}
      />
      <Modal modalSettings={modalSettings} onClose={handleCloseModal} />
    </>
  );
};

export default ReactGraphD3;

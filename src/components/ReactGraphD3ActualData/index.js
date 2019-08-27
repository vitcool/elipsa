import React, { useState } from 'react';
import { Graph } from 'react-d3-graph';

import Modal from 'components/common/Modal';

const data = {
  nodes: [
    { id: '0', name: 'Ukraine', type: 'country' },
    { id: '1', name: 'France', type: 'country' },
    { id: '2', name: 'Spain', type: 'country' },
    { id: '3', name: 'Sweden', type: 'country' },
    { id: '4', name: 'Norway', type: 'country' },
    { id: '5', name: 'Germany', type: 'country' },
    { id: '6', name: 'China', type: 'country' },
    { id: '7', name: 'Iran', type: 'country' },
    { id: '8', name: 'Yemen', type: 'country' },
    { id: '9', name: 'Iraq', type: 'country' },
    { id: '10', name: 'Japan', type: 'country' },
    { id: '11', name: 'Oman', type: 'country' },
    { id: '12', name: 'Brazil', type: 'country' },
    { id: '13', name: 'Argentina', type: 'country' },
    { id: '14', name: 'Peru', type: 'country' },
    { id: '15', name: 'Colombia', type: 'country' },
    { id: '16', name: 'Chili', type: 'country' },
    { id: '17', name: 'Uruguay', type: 'country' },
    { id: '18', name: 'Australia', type: 'country' },
    { id: '19', name: 'Papua New Guinea', type: 'country' },
    { id: '20', name: 'Fiji', type: 'country' },
    { id: '21', name: 'Samoa', type: 'country' },
    { id: '22', name: 'Europe', type: 'continent' },
    { id: '23', name: 'Asia', type: 'continent' },
    { id: '24', name: 'South America', type: 'continent' },
    { id: '25', name: 'Oceanian', type: 'continent' },
    { id: '26', name: 'Planet', type: 'world' },
  ],
  links: [
    { source: '0', target: '22', type: 'situatedIn' },
    { source: '1', target: '22', type: 'situatedIn' },
    { source: '2', target: '22', type: 'situatedIn' },
    { source: '3', target: '22', type: 'situatedIn' },
    { source: '4', target: '22', type: 'situatedIn' },
    { source: '5', target: '22', type: 'situatedIn' },
    { source: '6', target: '23', type: 'situatedIn' },
    { source: '7', target: '23', type: 'situatedIn' },
    { source: '8', target: '23', type: 'situatedIn' },
    { source: '9', target: '23', type: 'situatedIn' },
    { source: '10', target: '23', type: 'situatedIn' },
    { source: '11', target: '23', type: 'situatedIn' },
    { source: '12', target: '24', type: 'situatedIn' },
    { source: '13', target: '24', type: 'situatedIn' },
    { source: '14', target: '24', type: 'situatedIn' },
    { source: '15', target: '24', type: 'situatedIn' },
    { source: '16', target: '24', type: 'situatedIn' },
    { source: '17', target: '24', type: 'situatedIn' },
    { source: '18', target: '25', type: 'situatedIn' },
    { source: '19', target: '25', type: 'situatedIn' },
    { source: '20', target: '25', type: 'situatedIn' },
    { source: '21', target: '25', type: 'situatedIn' },
    { source: '25', target: '26', type: 'situatedIn' },
    { source: '24', target: '26', type: 'situatedIn' },
    { source: '23', target: '26', type: 'situatedIn' },
    { source: '22', target: '26', type: 'situatedIn' },
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
    gravity: -200,
  },
};

const initialModalSettings = {
  show: false,
  position: {
    top: 0,
    left: 0,
  },
};

const COLOR_TYPE_MAP = {
  country: 'green',
  continent: 'yellow',
  world: 'red',
};

const SIZE_TYPE_MAP = {
  country: 200,
  continent: 600,
  world: 1000,
};

const FONT_SIZE_MAP = {
  country: '12',
  continent: '14',
  world: '18',
};

const LABEL_TYPE_MAP = {
  situatedIn: 'Situated in',
};

const ReactGraphD3ActualData = () => {
  const [modalSettings, setModalSettings] = useState(initialModalSettings);

  const generateNodeData = () => {
    return data.nodes.map(({ id, name, type }) => {
      const color = COLOR_TYPE_MAP[type];
      const size = SIZE_TYPE_MAP[type];
      const fontSize = FONT_SIZE_MAP[type];

      return {
        id,
        name,
        color,
        size,
        fontSize,
      };
    });
  };

  const generateLinkData = () => {
    return data.links.map(({ source, target, type }) => {
      const label = LABEL_TYPE_MAP[type];

      return {
        source,
        target,
        label,
      };
    });
  };

  const onClickNode = (nodeId) => {
    console.log(nodeId);
  };

  const onRightClickNode = (event, nodeId) => {
    event.persist();
    event.preventDefault();
    const { clientX, clientY } = { ...event };

    const nodeLabel = data.nodes.find((node) => node.id === nodeId).name;

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

  const graphData = {
    nodes: generateNodeData(),
    links: generateLinkData(),
  };

  return (
    <>
      <Graph
        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
        data={graphData}
        config={myConfig}
        onClickNode={(nodeId) => onClickNode(nodeId)}
        onRightClickNode={(event, nodeId) => onRightClickNode(event, nodeId)}
      />
      <Modal modalSettings={modalSettings} onClose={handleCloseModal} />
    </>
  );
};

export default ReactGraphD3ActualData;

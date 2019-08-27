/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-indent */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

const Modal = ({
  modalSettings,
  onClose,
}) => {
  const {
    show,
    top,
    left,
    title,
  } = { ...modalSettings };

  return show
    ? ReactDOM.createPortal(
        <div
          className={styles.modalWrapper}
          style={{ top: `${top}px`, left: `${left}px` }}
        >
          <div className={styles.modalHeader}>
            {title}
            <button type="button" onClick={onClose}>x</button>
          </div>
          {/* {content} */}
        </div>,
        document.body,
      )
    : null;
};

Modal.propTypes = {
  modalSettings: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;

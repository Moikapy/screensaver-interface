import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

export const GLBComponent = ({
  artifactUri,
  previewUri,
  preview,
  onDetailView,
  displayView,
}) => {
  const ref = useRef();
  // const [width, setWidth] = useState('100%');
  // const [height, setHeight] = useState('100%');

  const props = {
    src: preview ? previewUri : artifactUri,
    autoplay: true,
    'auto-rotate': true,
    'data-js-focus-visible': true,
    'interaction-prompt': 'none',
  };

  if (onDetailView) {
    props['ar'] = true;
    props['ar-modes'] = 'webxr scene-viewer quick-look';
    props['camera-controls'] = true;
  }


  return (
    <model-viewer className={`.model-viewer`} {...props}
      auto-rotate
      camera-controls
      ar
      style={{ width: '100%', height: '100%' }}
      ar-modes="webxr scene-viewer quick-look"
      ar-scale="auto"
    >
      <button slot="ar-button" className={styles.arButton}>
        AR
      </button>
    </model-viewer>
  );

};

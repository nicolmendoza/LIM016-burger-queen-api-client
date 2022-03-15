import React from 'react';
import '../style-components/loader.css'

const Loader = () => {
  return (
    <div className="loader-container" data-testid="loader">
        <div class="lds-spinner">
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    </div>
  );
};

export default Loader;
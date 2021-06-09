import React from 'react';
import ReactDOM from 'react-dom';
import {Routes} from './Routes';
import './index.css';

const goats = {};

async function loadJson(path) {
  const data = await fetch(path);
  console.log(data);
  const json = await data.json();
  return json;
}

async function loadAssets() {
  const goatData = await loadJson(process.env.PUBLIC_URL+'/goatData.json');
  Object.keys(goatData).forEach(goatName => {
    goats[goatName] = goatData[goatName];
  });
  ReactDOM.render(
    <React.StrictMode>
      <Routes />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

loadAssets();

export default goats;
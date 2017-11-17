import React from 'react';
import ReactDOM from 'react-dom';
import ClickityClick from './components/ClickityClick'

ReactDOM.render(
  <ClickityClick/>,
  document.getElementById('root')
);
//this code along this not set up correctly for me. npm install returned:
// npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.1.2 (node_modules/react-scripts/node_modules/fsevents):
// npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
// npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules/chokidar/node_modules/fsevents):
// npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
// npm WARN extract-text-webpack-plugin@3.0.2 requires a peer of webpack@^3.1.0 but none was installed.
// npm WARN file-loader@1.1.5 requires a peer of webpack@^2.0.0 || ^3.0.0 but none was installed.
//L14&&15 are new and i believe are what prevented the webpage from properly working

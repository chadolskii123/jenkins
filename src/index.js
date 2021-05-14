import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Hello World! Auto-deploying Success!';

ReactDOM.render(
  <div>{title}</div>, 
  document.getElementById('app')
);

module.hot.accept();

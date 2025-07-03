import React, { Fragment, useReducer } from "react";
import { BrowserRouter } from 'react-router-dom';
import Routes from "./components";
import { LayoutContext, layoutState, layoutReducer } from "./components/shop";
import process from 'process';
import fs from 'fs';
import https from 'https';
import path from 'path';

const ca = async () => { await fs.readFileSync(path.join(__dirname, './cert/commercy.classisfoto.com+5.pem'))}
const options = {
  hostname: 'https://100.115.92.206:3000',
  port: 3000,
  method: 'GET',
  ca: ca,
};
 async function req() { await https.req(options, (res) => {
  res.on('data', (d) => {
    process.stdout.write(d);
  });
}).on('error', (e) => {
  console.error(e);
});
req.end();
}


  
function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState);

  return (
      <BrowserRouter basename='/'>
    <Fragment>
      <LayoutContext.Provider value={{ data, dispatch }}>
        <Routes />
      </LayoutContext.Provider>
    </Fragment>
      </BrowserRouter>
  );
}

export default App;
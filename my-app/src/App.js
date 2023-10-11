import logo from './logo.svg';
import './App.css';
import React from "react";
// import '../public/Build/build_2.framework'
import Unity, { UnityContext } from "react-unity-webgl";
// import { Unity, useUnityContext } from "react-unity-webgl";
// import { Unity, useUnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "./build_4/Build/build_4.loader.js",
  dataUrl: "./build_4/Build/build_4.data",
  frameworkUrl: "./build_4/Build/build_4.framework.js",
  codeUrl: "./build_4/Build/build_4.wasm",
});

function App() {
  return (
    <div className="App">
      {/* <h1>hi debbie</h1> */}
      {/* <div>
        <header>Octocat</header>
        <button>Page 1</button>
      </div> */}
      
      
      <div className ="Unity">
        <Unity unityContext={unityContext} 
        style= {{
          width: "100%",
          justifySelf: "center",
          alignSelf: "center",
          ovrflow: "hidden",
        }}/>  
      </div>
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Unity unityProvider={unityProvider} />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

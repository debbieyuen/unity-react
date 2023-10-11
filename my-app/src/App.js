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
      <div className ="Unity">
        <Unity unityContext={unityContext} 
        style= {{
          height: "100vh",
          // width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          justifySelf: "center",
          alignSelf: "center",
          overflow: "hidden",
        }}/>  
      </div>

      {/* <h1>hi debbie</h1> */}
      <div className="HeaderBar">
        <h2>Octocat World</h2>
        {/* <div className="Button">Hi</div> */}
        {/* <button>Page 1</button> */}
      </div>
    </div>
  );
}

export default App;

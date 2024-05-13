import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store/store.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingScreen from "./pages/LoadingScreen.tsx";


// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <LoadingScreen />
//     <Provider store={store}>
//       <Router>
//         <App />
//       </Router>
//     </Provider>
//   </React.StrictMode>
// );

// 로딩 상태를 저장하는 상태
const loadingRoot = ReactDOM.createRoot(document.getElementById("loading-root")!);

// 로딩 상태를 렌더링하는 컴포넌트
loadingRoot.render(
  <React.StrictMode>
    <LoadingScreen />
  </React.StrictMode>
);

// 메인 앱을 렌더링하는 상태
const appRoot = ReactDOM.createRoot(document.getElementById("root")!);

// 메인 앱을 렌더링
appRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
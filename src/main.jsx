import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import {ConfigProvider} from "antd";
import style from "./GeneralStyle.js";
import store from "./Store/configureStore.js";
import {Provider} from "react-redux";


ReactDOM.createRoot(document.getElementById('root')).render(
    <ConfigProvider
        theme={{
            token: {
                colorPrimary: style.mainColor,
            },
        }}
    >
        <Provider store={store}>
            <App/>
        </Provider>
    </ConfigProvider>
)
// <React.StrictMode>
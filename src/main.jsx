import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import {ConfigProvider} from "antd";
import {mainColor} from "./GeneralStyle.js";



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: mainColor,
                },
            }}
        >
            <App/>
        </ConfigProvider>
    </React.StrictMode>
)

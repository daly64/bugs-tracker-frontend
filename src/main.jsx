import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import {ConfigProvider} from "antd";
import {primaryColor} from "./GeneralStyle.js";



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: primaryColor,
                },
            }}
        >
            <App/>
        </ConfigProvider>
    </React.StrictMode>
)

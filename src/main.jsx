import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import {ConfigProvider} from "antd";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#fa8c16',
                },
            }}
        >
            <App/>
        </ConfigProvider>
    </React.StrictMode>
)

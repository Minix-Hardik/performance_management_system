import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { FrappeComponent } from "./components/helper/frappe-compenent";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <FrappeComponent>
            <App />
        </FrappeComponent>
    </StrictMode>,
)

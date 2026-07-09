import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryProvider } from './providers/QueryProvider.tsx'
import './index.css'
import {RouterProvider} from "react-router";
import {router} from "./router/Router.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryProvider>
          <RouterProvider router={router} />
      </QueryProvider>
  </StrictMode>,
)

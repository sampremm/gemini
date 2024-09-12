import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './routes/homepage/Homepage';
import DashboardPage from './routes/dashboardPage/DashboardPage';
import ChatPage from './routes/chatPage/ChatPage';
import RootLayout from './layouts/rootLayout/RootLayout';
import Dashboardlayout from './layouts/dashboardlayout/Dashboardlayout';
import SiginPage from './routes/signinPage/SigninPage';
import SignupPage from './routes/signupPage/SignupPage';


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children:[
      {
        path: "/",
        element: <Homepage/>
      },
      {
        path: "/sign-in/*",
        element: <SiginPage/>
      },
      {
        path: "/sign-up/*",
        element: <SignupPage/>
      },
      {
        element: <Dashboardlayout/>,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />
          },
          {
            path: "dashboard/chats/:id",
            element: <ChatPage />
          }
        ]
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

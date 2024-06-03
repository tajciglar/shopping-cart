import App from "./App.jsx";
import ItemPage from './components/ItemPage.jsx';
import HomePage from './components/HomePage.jsx';

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "items",
        element: <ItemPage />,
      },
    ],
  },
];

export default routes;
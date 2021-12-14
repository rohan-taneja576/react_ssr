import React from "react";
import App from "./App";
import AdminsPage from "./pages/AdminsPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import UsersListPage from "./pages/UsersListPage";

export default [
  {
    ...App,
    routes: [
      {
        path: "/",
        exact: true,
        ...HomePage,
      },
      {
        ...AdminsPage,
        path: "/admins",
      },
      {
        path: "/users",
        ...UsersListPage,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];

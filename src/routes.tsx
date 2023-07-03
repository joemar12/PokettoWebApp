import React, { Suspense, lazy } from "react";
import { RouteObject, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import SuspenseLoader from "./components/SuspenseLoader";

function Loader<T>(Component: React.ComponentType<T>) {
  return (props: T) => (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );
}

const Accounts = Loader(lazy(() => import("./features/Accounts")));
const Transactions = Loader(lazy(() => import("./features/Transactions")));

const SimpleDashboard = Loader(lazy(() => import("./pages/Dashboards/Simple")));
const DetailedDashboard = Loader(
  lazy(() => import("./pages/Dashboards/Detailed"))
);

const NotFound = Loader(lazy(() => import("./pages/Status/NotFound")));
const Maintenance = Loader(lazy(() => import("./pages/Status/Maintenance")));
const InternalServerError = Loader(
  lazy(() => import("./pages/Status/InternalServerError"))
);

const routes: RouteObject[] = [
  {
    path: "*",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="dashboard/simple" replace />
      },
      {
        path: "home",
        element: <Navigate to="/" replace />
      },
      {
        path: "status",
        children: [
          {
            path: "",
            element: <Navigate to="404" replace />
          },
          {
            path: "404",
            element: <NotFound />
          },
          {
            path: "maintenance",
            element: <Maintenance />
          },
          {
            path: "500",
            element: <InternalServerError />
          }
        ]
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  },
  {
    path: "dashboard",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="simple" replace />
      },
      {
        path: "simple",
        element: <SimpleDashboard />
      },
      {
        path: "detailed",
        element: <DetailedDashboard />
      }
    ]
  },
  {
    path: "management",
    element: <MainLayout />,
    children: [
      {
        path: "accounts",
        element: <Accounts />
      }
    ]
  },
  {
    path: "operation",
    element: <MainLayout />,
    children: [
      {
        path: "transactions",
        element: <Transactions />
      }
    ]
  }
];

export default routes;

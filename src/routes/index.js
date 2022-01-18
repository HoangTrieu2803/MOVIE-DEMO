import { lazy } from "react";
const HomePage = lazy(() => import("containers/HomeTemplate/HomePage"));
const AboutPage = lazy(() => import("containers/HomeTemplate/AboutPage"));
const ListMoviePage = lazy(() =>
  import("containers/HomeTemplate/ListMoviePage")
);
const DetailMovie = lazy(() => import("containers/HomeTemplate/DetailMovie"));
const HocPage = lazy(() => import("containers/HomeTemplate/HocPage"));
const HooksPage = lazy(() => import("containers/HomeTemplate/Hooks"));
const DashboardPage = lazy(() =>
  import("containers/AdminTemplate/DashboardPage")
);
const AddUserPage = lazy(() => import("containers/AdminTemplate/AddUserPage"));
const HomeTemplate = lazy(() => import("containers/HomeTemplate"));
const Admin = lazy(() => import("containers/AdminTemplate"));

const routesHome = [
  //home
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  //about
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
  //listmoive
  {
    exact: false,
    path: "/list-movie",
    component: ListMoviePage,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailMovie,
  },
  //hocpage
  {
    exact: false,
    path: "/hoc",
    component: HocPage,
  },
  {
    exact: false,
    path: "/hooks",
    component: HooksPage,
  },
];
const renderRouteHome = () => {
  return routesHome.map((root, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={root.exact}
        path={root.path}
        component={root.component}
      />
    );
  });
};
const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    exact: false,
    path: "/add-user",
    component: AddUserPage,
  },
];
const renderRouteAdmin = () => {
  return routesAdmin.map((root, index) => {
    return (
      <Admin
        key={index}
        exact={root.exact}
        path={root.path}
        component={root.component}
      />
    );
  });
};
export { renderRouteHome, renderRouteAdmin };

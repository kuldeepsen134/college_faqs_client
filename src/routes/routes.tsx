import { ElementType, Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ChildrenRouteType, RoutesType } from "../@types/Routes";
import RequireAuth from "../Components/requireAuth";
import DashboardLayout from "../Containers/layout/DashboardLayout";
import MainLayout from "../Containers/layout/MainLayout";
import CustomPage from "../Pages/CustomPages";
import Home from "../Pages/Home";
import { MainRoutes, AuthRoutes, DefaultRoutes, ProtectedRoutes } from "./path";

const RoutesComponent = () => {
  const loadRoutes: any = (
    routes: Array<RoutesType>,
    Layout: ElementType = Fragment,
    isMain: Boolean
  ) =>
    routes.map(
      ({ component: Component, children, path, guard }: RoutesType) => {
        const Guard = guard ? guard : Fragment;
        return children ? (
          children?.map(
            ({ component: ChildComponent, path, guard }: ChildrenRouteType) => {
              const Guard = guard ? guard : Fragment;
              return;
            }
          )
        ) : (
          <Route
            key={path}
            path={path}
            element={
              <Guard>
                <MainLayout>
                  <Layout>
                    {isMain ? (
                      <Component />
                    ) : (
                      <CustomPage>
                        <Component />
                      </CustomPage>
                    )}
                  </Layout>
                </MainLayout>
              </Guard>
            }
          />
        );
      }
    );
  return (
    <Routes>
      {loadRoutes(DefaultRoutes, DashboardLayout, false)}
      {loadRoutes(MainRoutes, DashboardLayout, true)}
      <Route>{loadRoutes(AuthRoutes, Fragment, false)}</Route>
      <Route element={<RequireAuth />}>
        {loadRoutes(ProtectedRoutes, DashboardLayout, true)}
      </Route>
    </Routes>
  );
};

export default RoutesComponent;

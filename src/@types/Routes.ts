import { ReactNode } from 'react';

export type RoutesType = {
  path: string;
  component: any;
  children: null | ChildrenRouteType[];
  guard?: any;
};

export type ChildrenRouteType = {
  path: string;
  component: any;
  guard?: any;
};

export type AuthGuardPropsType = {
  children: ReactNode;
};

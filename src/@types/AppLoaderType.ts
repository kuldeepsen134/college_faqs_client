export type LoaderPropsType = {
  title: string;
};

export type LoaderType = {
  loader: LoaderObjectType;
  type?: string;
};

export type LoaderObjectType = {
  title: string;
  isLoading: boolean;
};

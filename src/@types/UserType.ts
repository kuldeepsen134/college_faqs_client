export type UserResponseType = User;

export type User = {
  type: string;
  name: string;
  email: string;
};

export type UserActionType = {
  payload: UserStateType;
  type: string;
};

export type UserStateType = {
  isLoggedIn?: boolean | undefined;
  user: User;
  message?: string;
  type?: string | undefined;
};

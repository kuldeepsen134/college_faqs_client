import * as React from "react";

export type TextFieldProps = {
  type: string;
  id: string;
  label: string;
  error: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
};

export type InputFeedbackProps = {
  error: string;
};

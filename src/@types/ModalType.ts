// import { Color } from '@material-ui/lab';

export type ModalPropsType = {
  message: string;
  isShow: boolean;
  onToggle: () => void;
  success?: boolean;
};

export type AlertPropsType = {
  onToggle?: () => void;
  severity: any | undefined;
};

export type ModalType = {
  modal: ModalObjectType;
  type?: string;
};

export type ModalObjectType = {
  message: string;
  isShow: boolean;
  flag: boolean;
};

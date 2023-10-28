import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { ComponentPropsType } from '../../@types/CommonComponentType';

const ScrollToTop = ({ children }: ComponentPropsType) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;

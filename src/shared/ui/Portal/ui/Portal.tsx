import { createPortal } from "react-dom";

interface IProps {
  children: React.ReactNode;
}

const Portal = ({ children }: IProps) => {
  const mount = document.body;
  return createPortal(children, mount);
};

export default Portal;

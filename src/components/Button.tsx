import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button type="button" className="btn btn-primary">
      {children}
    </button>
  );
};

export default Button;

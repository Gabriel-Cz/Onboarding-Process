import { ComponentProps } from "react";

type ClassVariant = 'DEFAULT' | 'SPACE';
type Type = 'primary ' | 'secondary';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: Type;
  classType?: ClassVariant;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  classType = 'DEFAULT'
}) => {
  return (
    <button className={`btn-${variant}-${classType.toLowerCase()}`}>
      {children}
    </button>
  )
}
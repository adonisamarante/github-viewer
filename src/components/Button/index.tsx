import React, { ButtonHTMLAttributes } from 'react';

type buttonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ ...props }: buttonProps) {
  return (
    <button {...props} />
  );
}

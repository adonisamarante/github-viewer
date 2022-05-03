import React, { ButtonHTMLAttributes } from 'react';
import { CustomButton } from './styles';

type buttonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ ...props }: buttonProps) {
  return (
    <CustomButton {...props} />
  );
}

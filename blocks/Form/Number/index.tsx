import type { TextField } from '@payloadcms/plugin-form-builder/types';
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';

import { Error } from '../Error';
import { Width } from '../Width';

export const Number: React.FC<
  TextField & {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: unknown;
      }>
    >;
    register: UseFormRegister<FieldValues>;
    placeholderText?: string;
    description?: string;
  }
> = ({
  name,
  defaultValue,
  errors,
  label,
  register,
  required: requiredFromProps,
  width,
  placeholderText,
  description,
}) => {
  return (
    <Width width={width}>
      <Label htmlFor={name}>
        {requiredFromProps && <span className="mr-1 text-orange-200">*</span>}
        {label}
      </Label>
      <Input
        defaultValue={defaultValue}
        id={name}
        type="number"
        placeholder={placeholderText}
        {...register(name, { required: requiredFromProps })}
      />
      {description && <p className="mt-2 text-black/40">{description}</p>}
      {requiredFromProps && errors[name] && <Error />}
    </Width>
  );
};

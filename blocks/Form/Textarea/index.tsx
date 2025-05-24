import type { TextField } from '@payloadcms/plugin-form-builder/types';
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';

import { Label } from '@/components/ui/label';
import { Textarea as TextAreaComponent } from '@/components/ui/textarea';
import React from 'react';

import { Error } from '../Error';
import { Width } from '../Width';

export const Textarea: React.FC<
  TextField & {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any;
      }>
    >;
    register: UseFormRegister<FieldValues>;
    rows?: number;
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
  rows = 3,
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

      <TextAreaComponent
        defaultValue={defaultValue}
        id={name}
        rows={rows}
        placeholder={placeholderText}
        {...register(name, { required: requiredFromProps })}
      />
      {description && <p className="mt-2 text-black/40">{description}</p>}
      {requiredFromProps && errors[name] && <Error />}
    </Width>
  );
};

import type { SelectField } from '@payloadcms/plugin-form-builder/types';
import type { Control, FieldErrorsImpl, FieldValues } from 'react-hook-form';

import { Label } from '@/components/ui/label';
import {
  Select as SelectComponent,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';
import { Controller } from 'react-hook-form';

import { Error } from '../Error';
import { Width } from '../Width';

export const Select: React.FC<
  SelectField & {
    control: Control<FieldValues, any>;
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any;
      }>
    >;
    placeholderText?: string;
    description?: string;
  }
> = ({ name, control, errors, label, options, required, width, placeholderText, description }) => {
  return (
    <Width width={width}>
      <Label htmlFor={name}>
        {required && <span className="mr-1 text-orange-200">*</span>}
        {label}
      </Label>
      <Controller
        control={control}
        defaultValue=""
        name={name}
        render={({ field: { onChange, value } }) => {
          const controlledValue = options.find((t) => t.value === value);

          return (
            <SelectComponent onValueChange={(val) => onChange(val)} value={controlledValue?.value}>
              <SelectTrigger
                className={`w-full ${!controlledValue?.value && 'text-grey-300'}`}
                id={name}
              >
                <SelectValue placeholder={placeholderText} />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {options.map(({ label, value }) => {
                  return (
                    <SelectItem key={value} value={value} className="cursor-pointer">
                      {label}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </SelectComponent>
          );
        }}
        rules={{ required }}
      />
      {description && <p className="mt-2 text-black/40">{description}</p>}
      {required && errors[name] && <Error />}
    </Width>
  );
};

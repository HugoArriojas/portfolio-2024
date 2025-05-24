import type { CountryField } from '@payloadcms/plugin-form-builder/types';
import type { Control, FieldErrorsImpl, FieldValues } from 'react-hook-form';

import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React, { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Error } from '../Error';
import { Width } from '../Width';
import { countryOptions } from './options';

export const Country: React.FC<
  CountryField & {
    control: Control<FieldValues, any>;
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any;
      }>
    >;
    placeholderText?: string;
    description?: string;
  }
> = ({ name, control, errors, label, required, width, placeholderText, description }) => {
  const formContext = useFormContext();

  useEffect(() => {
    if (formContext) {
      const fieldValue = formContext.getValues(name);
      if (!fieldValue) {
        formContext.setValue(name, 'CA', {
          shouldValidate: true,
          shouldDirty: false,
        });
      }
    }
  }, [formContext, name, required]);

  return (
    <Width width={width}>
      <Label htmlFor={name}>
        {required && <span className="mr-1 text-orange-200">*</span>}
        {label}
      </Label>
      <Controller
        control={control}
        defaultValue="CA"
        name={name}
        render={({ field: { onChange, value } }) => {
          const controlledValue = countryOptions.find((t) => t.value === value) || { value: 'CA' };

          return (
            <Select onValueChange={(val) => onChange(val)} value={controlledValue?.value}>
              <SelectTrigger
                className={`w-full ${!controlledValue?.value && 'text-grey-300'}`}
                id={name}
              >
                <SelectValue
                  placeholder={placeholderText}
                  className={!controlledValue?.value ? 'text-red-400' : ''}
                />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {countryOptions.map(({ label, value }) => {
                  return (
                    <SelectItem key={value} value={value} className="cursor-pointer">
                      {label}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          );
        }}
        rules={{ required }}
      />
      {description && <p className="mt-2 text-black/40">{description}</p>}
      {required && errors[name] && <Error />}
    </Width>
  );
};

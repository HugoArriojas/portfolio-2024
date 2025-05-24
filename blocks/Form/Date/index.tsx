'use client';
import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFormContext } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Width } from '../Width';
import { Error } from '../Error';
import { CalendarDays } from 'lucide-react';
import type { DateField as DateFieldType } from '@payloadcms/plugin-form-builder/types';
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import { inputStyles } from '@/components/ui/input';
import './date-picker.scss';

const CustomInput = forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ value, onClick, onChange, placeholder, className }, ref) => (
    <div className="relative">
      <input
        ref={ref}
        value={value}
        onChange={onChange}
        onClick={onClick}
        placeholder={placeholder}
        className={className}
      />
      <CalendarDays className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-surface-lighter" />
    </div>
  ),
);

CustomInput.displayName = 'CustomInput';

export const DateField: React.FC<
  DateFieldType & {
    errors: Partial<FieldErrorsImpl<{ [x: string]: any }>>;
    register: UseFormRegister<FieldValues>;
    description?: string;
  }
> = ({ name, label, required: requiredFromProps, width, errors, placeholderText, description }) => {
  const { register, setValue, watch } = useFormContext();
  const value = watch(name);

  register(name, { required: requiredFromProps });
  return (
    <Width width={width}>
      <Label htmlFor={name}>
        {requiredFromProps && <span className="mr-1 text-orange-200">*</span>}
        {label}
      </Label>
      <DatePicker
        id={name}
        selected={value ? new Date(value) : null}
        onChange={(date: Date | null) => setValue(name, date?.toISOString().split('T')[0])}
        customInput={<CustomInput className={inputStyles} />}
        dateFormat="MMMM d, yyyy"
        placeholderText={placeholderText}
        enableTabLoop={false}
      />
      {description && <p className="text-black/40">{description}</p>}
      {requiredFromProps && errors[name] && <Error />}
    </Width>
  );
};

export default DateField;

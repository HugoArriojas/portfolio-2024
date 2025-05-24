'use client';
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types';
import type { FormFieldBlock } from '@payloadcms/plugin-form-builder/types';

import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import RichText from '@/components/RichText';
import { Button } from '@/components/ui/button';
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';

import { buildInitialFormState } from './buildInitialFormState';
import { fields } from './fields';
import { getClientSideURL } from '@/utilities/getURL';
import { ArrowRight } from 'lucide-react';

export type Value = unknown;

export interface Property {
  [key: string]: Value;
}

export interface Data {
  [key: string]: Property | Property[];
}

export type FormBlockType = {
  blockName?: string;
  blockType?: 'formBlock';
  enableIntro: boolean;
  form: FormType & { fields: ExtendedFormFieldBlock[] };
  introContent?: SerializedEditorState;
};

type SectionHeadingFieldBlock = {
  blockType: 'sectionHeading';
  name: string;
  label: string;
  description?: string;
};

type ExtendedFormFieldBlock = FormFieldBlock | SectionHeadingFieldBlock;

export const FormBlock: React.FC<{ id?: string } & FormBlockType> = (props) => {
  return <FormComponent {...props} variant="default" />;
};

export const SidebarForm: React.FC<{ id?: string } & FormBlockType> = (props) => {
  return <FormComponent {...props} variant="sidebar" />;
};

const FormComponent: React.FC<
  { id?: string } & FormBlockType & { variant: 'default' | 'sidebar' }
> = (props) => {
  const {
    enableIntro,
    form: formFromProps,
    form: { id: formID, confirmationMessage, confirmationType, redirect, submitButtonLabel } = {},
    introContent,
    variant,
  } = props;

  const formMethods = useForm({
    defaultValues: buildInitialFormState(formFromProps.fields),
  });
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods;

  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>();
  const [error, setError] = useState<{ message: string; status?: string } | undefined>();
  const router = useRouter();

  const onSubmit = useCallback(
    (data: Data) => {
      let loadingTimerID: ReturnType<typeof setTimeout>;
      const submitForm = async () => {
        setError(undefined);

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }));

        // delay loading indicator by 1s
        loadingTimerID = setTimeout(() => {
          setIsLoading(true);
        }, 1000);

        try {
          const req = await fetch(`${getClientSideURL()}/api/form-submissions`, {
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          });

          const res = await req.json();

          clearTimeout(loadingTimerID);

          if (req.status >= 400) {
            setIsLoading(false);

            setError({
              message: res.errors?.[0]?.message || 'Internal Server Error',
              status: res.status,
            });

            return;
          }

          setIsLoading(false);
          setHasSubmitted(true);

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect;

            const redirectUrl = url;

            if (redirectUrl) router.push(redirectUrl);
          }
        } catch (err) {
          console.warn(err);
          setIsLoading(false);
          setError({
            message: 'Something went wrong.',
          });
        }
      };

      void submitForm();
    },
    [router, formID, redirect, confirmationType],
  );

  interface FieldInfo {
    fieldIndex: number;
    fieldData: ExtendedFormFieldBlock;
  }

  const renderField = (field: ExtendedFormFieldBlock, index: number): JSX.Element | null => {
    const fieldType = field.blockType as keyof typeof fields;
    const FieldComponent = fields[fieldType];
    if (!FieldComponent) return null;

    const TypedFieldComponent = FieldComponent as React.ComponentType<
      ExtendedFormFieldBlock & {
        control: typeof control;
        errors: typeof errors;
        register: typeof register;
        form: typeof formFromProps;
      }
    >;

    return (
      <TypedFieldComponent
        key={`field-${index}`}
        form={formFromProps}
        {...field}
        control={control}
        errors={errors}
        register={register}
      />
    );
  };

  const renderSectionGroup = (sectionIndex: number, sectionFields: FieldInfo[] = []) => {
    // Cast to unknown first to handle type conversion safely
    const sectionHeadingField = formFromProps.fields[sectionIndex] as unknown;
    const sectionHeadingData = sectionHeadingField as SectionHeadingFieldBlock;
    const SectionHeadingField = fields.sectionHeading;

    return (
      <div
        className={`flex flex-col w-full border-t-2 border-primary-200 mt-[68px] mb-6 pt-[92px]`}
        key={`sep-group-${sectionIndex}`}
      >
        <SectionHeadingField
          label={sectionHeadingData.label}
          description={sectionHeadingData.description}
        />
        {sectionFields && (
          <div className="w-full flex flex-wrap gap-y-4 gap-x-2 items-start">
            {sectionFields.map((fieldInfo) => {
              const { fieldIndex, fieldData } = fieldInfo;
              if (fieldData.blockType === 'sectionHeading') return null;
              return renderField(fieldData, fieldIndex);
            })}
          </div>
        )}
      </div>
    );
  };

  const renderFormFields = () => {
    if (!formFromProps || !formFromProps.fields) return null;

    const extendedFields = formFromProps.fields as ExtendedFormFieldBlock[];
    let currentSectionHeading: number | null = null;
    let fieldsAfterSectionHeading: FieldInfo[] = [];
    const renderedItems: JSX.Element[] = [];
    let standaloneFields: (JSX.Element | null)[] = [];

    // Process all fields to organize them into sections and standalone fields
    extendedFields.forEach((field, index) => {
      if (field.blockType === 'sectionHeading') {
        if (
          standaloneFields.length > 0 &&
          standaloneFields.some((singleField) => singleField !== null)
        ) {
          renderedItems.push(
            <div
              className="flex flex-wrap gap-y-4 gap-x-2 items-end"
              key={`standalone-group-${index}`}
            >
              {standaloneFields.filter(Boolean)}
            </div>,
          );
          standaloneFields = [];
        }

        if (currentSectionHeading !== null) {
          renderedItems.push(renderSectionGroup(currentSectionHeading, fieldsAfterSectionHeading));
        }

        currentSectionHeading = index;
        fieldsAfterSectionHeading = [];
      } else if (currentSectionHeading !== null) {
        fieldsAfterSectionHeading.push({ fieldIndex: index, fieldData: field });
      } else {
        standaloneFields.push(renderField(field, index));
      }
    });

    if (
      standaloneFields.length > 0 &&
      standaloneFields.some((singleField) => singleField !== null)
    ) {
      renderedItems.push(
        <div className="flex flex-wrap gap-4" key="standalone-group-final">
          {standaloneFields.filter(Boolean)}
        </div>,
      );
    }

    if (currentSectionHeading !== null) {
      renderedItems.push(renderSectionGroup(currentSectionHeading, fieldsAfterSectionHeading));
    }

    return renderedItems;
  };

  const containerClass =
    variant === 'sidebar' ? 'wrapper-aside my-4' : 'wrapper-col layout no-bg my-4';

  return (
    <section className={containerClass}>
      {enableIntro && introContent && !hasSubmitted && (
        <RichText className="mb-12" data={introContent} enableGutter={false} />
      )}
      <FormProvider {...formMethods}>
        {!isLoading && hasSubmitted && confirmationType === 'message' && (
          <RichText data={confirmationMessage} />
        )}
        {isLoading && !hasSubmitted && <p>Loading, please wait...</p>}
        {error && <div>{`${error.status || '500'}: ${error.message || ''}`}</div>}
        {!hasSubmitted && (
          <form id={formID} onSubmit={handleSubmit(onSubmit)}>
            <div className="last:mb-0">{renderFormFields()}</div>

            <div className="mt-10 flex">
              <Button className={'group/button'} form={formID} type="submit" variant="default">
                {submitButtonLabel}
                <ArrowRight
                  className={
                    'transition-transform transform group-hover/button:translate-x-1.5 duration-200 shrink-0'
                  }
                />
              </Button>
            </div>
          </form>
        )}
      </FormProvider>
    </section>
  );
};

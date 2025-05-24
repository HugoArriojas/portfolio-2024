import type { FormFieldBlock } from '@payloadcms/plugin-form-builder/types';

type SectionHeadingField = {
  blockType: 'sectionHeading';
  name?: string;
};

type ExtendedFormFieldBlock = FormFieldBlock | SectionHeadingField;

export const buildInitialFormState = (fields: ExtendedFormFieldBlock[]) => {
  return fields?.reduce((initialSchema, field, index) => {
    if (field.blockType === 'checkbox') {
      return {
        ...initialSchema,
        [field.name]: field.defaultValue,
      };
    }
    if (field.blockType === 'country') {
      return {
        ...initialSchema,
        [field.name]: '',
      };
    }
    if (field.blockType === 'email') {
      return {
        ...initialSchema,
        [field.name]: '',
      };
    }
    if (field.blockType === 'text') {
      return {
        ...initialSchema,
        [field.name]: '',
      };
    }
    if (field.blockType === 'select') {
      return {
        ...initialSchema,
        [field.name]: '',
      };
    }
    if (field.blockType === 'state') {
      return {
        ...initialSchema,
        [field.name]: '',
      };
    }
    if (field.blockType === 'date') {
      return {
        ...initialSchema,
        [field.name]: '',
      };
    }
    if (field.blockType === 'sectionHeading') {
      return {
        ...initialSchema,
        [field.name || `sectionHeading_${index}`]: '',
      };
    }
    return initialSchema;
  }, {});
};

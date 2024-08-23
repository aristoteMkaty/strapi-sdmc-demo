import type { Schema, Attribute } from '@strapi/strapi';

export interface PhoneNoPhoneNumbers extends Schema.Component {
  collectionName: 'components_phone_no_phone_numbers';
  info: {
    displayName: 'PhoneNumbers';
  };
  attributes: {
    PhoneNo: Attribute.String;
  };
}

export interface PhoneNoTelefon extends Schema.Component {
  collectionName: 'components_phone_no_telefons';
  info: {
    displayName: 'telefon';
  };
  attributes: {};
}

export interface ReusableEmailTemplateFormEmailTemplateForm
  extends Schema.Component {
  collectionName: 'components_reusable_email_template_form_email_template_forms';
  info: {
    displayName: 'Email-template-form';
    description: '';
  };
  attributes: {
    headerText: Attribute.String;
    language: Attribute.Enumeration<['En', 'De', 'It', 'Hu']>;
    salutation: Attribute.String;
    updatedDocuments: Attribute.String;
    overview: Attribute.String;
    changedDocuments: Attribute.String;
    changedAt: Attribute.String;
    questions: Attribute.String;
    regards: Attribute.String;
    regardsEnd: Attribute.String;
    aldiName: Attribute.String;
    confidentialMessageNote: Attribute.Text;
    empowerIdAccountNote: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'phone-no.phone-numbers': PhoneNoPhoneNumbers;
      'phone-no.telefon': PhoneNoTelefon;
      'reusable-email-template-form.email-template-form': ReusableEmailTemplateFormEmailTemplateForm;
    }
  }
}

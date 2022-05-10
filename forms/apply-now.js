import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
// icons
import Icon from '../icons';
// ui
import { Box, Button, FlexBox, AbsoluteBox, RelativeBox, SectionTitle } from '../ui';
// forms
import { RadioInput, StyledLabel, StyledInput, StyledTextArea } from './ui';
//////////////////////////////////////////////////

const validationSchema = Yup.lazy(({ useEmail, usePhone }) => {
  const fieldNotRequired = Yup.string().notRequired();
  const fullName = Yup.string().required('Field is required');
  const email = Yup.string().email('Should be a valid Email').required('Field is required');
  const phone = Yup.string().required('Field is required').min(10, 'Should be a valid Phone');

  return Yup.object().shape({
    fullName,
    email: useEmail ? email : fieldNotRequired,
    phone: usePhone ? phone : fieldNotRequired,
  });
});

const hasError = ({ errors = {}, touched = {} }, name) => touched[name] && errors[name];

const TextInput = ({ form, field, ...props }) => (
  <RelativeBox>
    <StyledInput {...form} {...field} {...props} />
    {hasError(form, field.name) && (
      <AbsoluteBox top='102%' left='10px' fontSize={11} color='#ce2828'>
        {form.errors[field.name]}
      </AbsoluteBox>
    )}
  </RelativeBox>
);

const TextAreaInput = ({ form, field, ...props }) => (
  <StyledTextArea {...form} {...field} {...props} />
);

export const ApplyNowForm = ({ handleCloseModal }) => {
  const [isSended, setIsSended] = useState(false);

  return (
    <Box
      bg='white'
      width={600}
      maxHeight='80vh'
      overflowY='auto'
      borderRadius='8px'
      p={{ xs: 20, sm: 30 }}
    >
      {isSended && (
        <>
          <FlexBox justifyContent='flex-end'>
            <Icon iconName='cross' handleClick={handleCloseModal} />
          </FlexBox>
          <FlexBox mt={{ xs: 20, sm: 30 }} justifyContent='center'>
            {/* eslint-disable-next-line */}
            Thank you for applying to Xpath. We’re looking forward to partnering with you! Someone will be reaching out to you shortly.
          </FlexBox>
        </>
      )}
      {isSended === false && (
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            phone: '',
            email: '',
            comments: '',
            fullName: '',
            useEmail: true,
            usePhone: false,
          }}
          onSubmit={({ phone, email, comments, fullName, useEmail, usePhone }) => {
            const data = {
              fullName,
              email: useEmail === false ? '-' : email,
              phone: usePhone === false ? '-' : phone,
              comments: comments == '' ? '-' : comments,
            };
            const url = 'https://us-central1-xpath-website.cloudfunctions.net/sendMail';
            const options = {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            };
            fetch(url, options)
              .then(res => {
                if (res.status === 200) {
                  setIsSended(true);
                }
              })
              .catch(error => {
                setIsSended(false);
                alert('something is wrong');
              });
          }}
        >
          {({ setValues, isSubmitting, values: { useEmail, usePhone }, ...props }) => (
            <Form>
              <SectionTitle mb={25} fontSize={20} fontWeight={500}>
                Apply Now
              </SectionTitle>
              <Field
                p={10}
                mt={25}
                height={40}
                width='100%'
                name='fullName'
                component={TextInput}
                placeholder='Full Name:'
              />
              <FlexBox mt={25} alignItems='center'>
              Preferred Contact:
                <RadioInput
                  id='email'
                  type='radio'
                  checked={false}
                  name='radioGroup'
                  onChange={() => setValues(prev => ({
                    ...prev,
                    useEmail: true,
                    usePhone: false,
                  }))}
                />
                <RadioInput
                  id='phone'
                  type='radio'
                  checked={false}
                  name='radioGroup'
                  onChange={() => setValues(prev => ({
                    ...prev,
                    usePhone: true,
                    useEmail: false,
                  }))}
                />
                <RadioInput
                  id='both'
                  type='radio'
                  checked={false}
                  name='radioGroup'
                  onChange={() => setValues(prev => ({
                    ...prev,
                    usePhone: true,
                    useEmail: true,
                  }))}
                />
                <FlexBox ml={{ xs: 10, sm: 30 }} flexDirection={{ xs: 'column', sm: 'row' }}>
                  <StyledLabel htmlFor='email' mr={{ xs: 0, sm: 30 }}>
                    <Box
                      mr='8px'
                      width={16}
                      height={16}
                      borderRadius='50%'
                      transition='all ease .5s'
                      borderColor={!usePhone ? 'black' : 'grey'}
                      border={!usePhone ? '4px solid' : '1px solid'}
                    />
                    Email
                  </StyledLabel>
                  <StyledLabel htmlFor='phone' mt={{ xs: '5px', sm: 0 }}  mr={{ xs: 0, sm: 30 }}>
                    <Box
                      mr='8px'
                      width={16}
                      height={16}
                      borderRadius='50%'
                      transition='all ease .5s'
                      borderColor={!useEmail ? 'black' : 'grey'}
                      border={!useEmail ? '4px solid' : '1px solid'}
                    />
                    Phone
                  </StyledLabel>
                  <StyledLabel htmlFor='both' mt={{ xs: '5px', sm: 0 }}>
                    <Box
                      mr='8px'
                      width={16}
                      height={16}
                      borderRadius='50%'
                      transition='all ease .5s'
                      borderColor={useEmail && usePhone ? 'black' : 'grey'}
                      border={useEmail && usePhone ? '4px solid' : '1px solid'}
                    />
                    Both
                  </StyledLabel>
                </FlexBox>
              </FlexBox>
              {useEmail && (
                <Field
                  p={10}
                  mt={25}
                  height={40}
                  name='email'
                  width='100%'
                  placeholder='Email:'
                  component={TextInput}
                />
              )}
              {usePhone && (
                <Field
                  p={10}
                  mt={25}
                  height={40}
                  name='phone'
                  width='100%'
                  placeholder='Phone:'
                  component={TextInput}
                />
              )}
              <Field
                p={10}
                mt={25}
                height={80}
                width='100%'
                type='textarea'
                name='comments'
                hasError={false}
                component={TextAreaInput}
                placeholder='What kind of services are you looking for?'
              />
              <FlexBox mt={25} justifyContent='space-between'>
                <Button
                  width={100}
                  height={40}
                  type='button'
                  variant='cancel'
                  borderRadius='100px'
                  onClick={handleCloseModal}
                >
                  Cancel
                </Button>
                <Button
                  width={100}
                  height={40}
                  variant='dark'
                  borderRadius='100px'
                  disabled={isSubmitting}
                  cursor={isSubmitting ? 'not-allowed' : 'pointer'}
                >
                  Apply
                </Button>
              </FlexBox>
            </Form>
          )}
        </Formik>
      )}
    </Box>
  );
};

const ApplyNowFormComponent = ({ handleCloseModal }) => {
  const [submitting, setSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    errors: {
      email: 'required',
      fullName: 'required',
      phone: 'not-required',
    },
    touched: {
      phone: false,
      email: false,
      emailOrPhone: false,
    },
    values: {
      phone: '',
      email: '',
      comments: '',
      fullName: '',
      useEmail: true,
      usePhone: false,
    },
  });

  const { errors, values, touched } = formState;
  const {
    email,
    phone,
    comments,
    fullName,
    useEmail,
    usePhone,
  } = values;

  const hasError = fieldName => touched[fieldName] && errors[fieldName];

  const handleChange = event => {
    const id = event.currentTarget.id;
    const value = event.currentTarget.value;
    const values = { ...formState.values, [id]: value };

    setFormState({ ...formState, values });
  };

  const handleBlur = event => {
    const id = event.currentTarget.id;
    const touched = { ...formState.touched, [id]: true };

    setFormState({ ...formState, touched });
  };

  const errorValues = ['', null, undefined];

  const handleSubmit = async event => {
    event.preventDefault();
    setFormState(prev => ({
      ...prev,
      touched: { email: true, phone: true, fullName: true },
    }));

    const validationArray = [
      errorValues.includes(fullName),
      errorValues.includes(email) && useEmail,
      errorValues.includes(phone) && usePhone,
    ];

    if (validationArray.some(item => item)) return;

    const data = {
      fullName,
      email: useEmail === false ? '-' : email,
      phone: usePhone === false ? '-' : phone,
      comments: comments == '' ? '-' : comments,
    };
    const url = 'https://us-central1-xpath-website.cloudfunctions.net/sendMail';
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    };
    fetch(url, options)
      .then(res => {
        if (res.status === 200) {
          setIsSubmitted(true);
        }
      })
      .catch(error => {
        setSubmitting(false);
        alert('something is wrong');
      });
  };

  useEffect(() => setFormState(prev => ({
    ...prev,
    errors: {
      fullName: errorValues.includes(fullName) ? 'required' : '',
      email: errorValues.includes(email) && useEmail ? 'required' : '',
      phone: errorValues.includes(phone) && usePhone ? 'required' : '',
    },
  })), [email, phone, fullName, useEmail, usePhone]);
  return (
    <Box
      bg='white'
      width={600}
      minHeight={385}
      maxHeight='80vh'
      overflowY='auto'
      borderRadius='8px'
      p={{ xs: 20, sm: 30 }}
    >
      {isSubmitted && (
        <>
          <FlexBox justifyContent='flex-end'>
            <Icon iconName='cross' handleClick={handleCloseModal} />
          </FlexBox>
          <FlexBox mt={{ xs: 20, sm: 30 }} justifyContent='center'>
            {/* eslint-disable-next-line */}
            Thank you for applying to Xpath. We’re looking forward to partnering with you! Someone will be reaching out to you shortly.
          </FlexBox>
        </>
      )}
      {isSubmitted === false && (
        <>
          <SectionTitle mb={25} fontSize={20} fontWeight={500}>
            Apply Now
          </SectionTitle>
          <form onSubmit={handleSubmit}>
            <StyledInput
              p={10}
              height={40}
              width='100%'
              id='fullName'
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder='Full Name:'
              hasError={hasError('fullName')}
            />
            <FlexBox mt={25} alignItems='center'>
              Preferred Contact:
              <RadioInput
                id='email'
                type='radio'
                checked={false}
                name='radioGroup'
                onChange={() => setFormState({
                  ...formState,
                  values: { ...values, usePhone: false, useEmail: true },
                })}
              />
              <RadioInput
                id='phone'
                type='radio'
                checked={false}
                name='radioGroup'
                onChange={() => setFormState({
                  ...formState,
                  values: { ...values, usePhone: true, useEmail: false },
                })}
              />
              <RadioInput
                id='both'
                type='radio'
                checked={false}
                name='radioGroup'
                onChange={() => setFormState({
                  ...formState,
                  values: { ...values, usePhone: true, useEmail: true },
                })}
              />
              <FlexBox ml={{ xs: 10, sm: 30 }} flexDirection={{ xs: 'column', sm: 'row' }}>
                <StyledLabel htmlFor='email' mr={{ xs: 0, sm: 30 }}>
                  <Box
                    mr='8px'
                    width={16}
                    height={16}
                    borderRadius='50%'
                    transition='all ease .5s'
                    borderColor={!usePhone ? 'black' : 'grey'}
                    border={!usePhone ? '4px solid' : '1px solid'}
                  />
                  Email
                </StyledLabel>
                <StyledLabel htmlFor='phone' mt={{ xs: '5px', sm: 0 }}  mr={{ xs: 0, sm: 30 }}>
                  <Box
                    mr='8px'
                    width={16}
                    height={16}
                    borderRadius='50%'
                    transition='all ease .5s'
                    borderColor={!useEmail ? 'black' : 'grey'}
                    border={!useEmail ? '4px solid' : '1px solid'}
                  />
                  Phone
                </StyledLabel>
                <StyledLabel htmlFor='both' mt={{ xs: '5px', sm: 0 }}>
                  <Box
                    mr='8px'
                    width={16}
                    height={16}
                    borderRadius='50%'
                    transition='all ease .5s'
                    borderColor={useEmail && usePhone ? 'black' : 'grey'}
                    border={useEmail && usePhone ? '4px solid' : '1px solid'}
                  />
                  Both
                </StyledLabel>
              </FlexBox>
            </FlexBox>
            {
              useEmail && (
                <StyledInput
                  p={10}
                  mt={25}
                  id='email'
                  height={40}
                  width='100%'
                  value={email}
                  onBlur={handleBlur}
                  placeholder='Email:'
                  onChange={handleChange}
                  hasError={hasError('email')}
                />
              )
            }
            {
              usePhone && (
                <StyledInput
                  p={10}
                  mt={25}
                  id='phone'
                  height={40}
                  width='100%'
                  value={phone}
                  onBlur={handleBlur}
                  placeholder='Phone:'
                  onChange={handleChange}
                  hasError={hasError('phone')}
                />
              )
            }
            <StyledTextArea
              p={10}
              mt={25}
              height={80}
              width='100%'
              id='comments'
              hasError={false}
              onChange={handleChange}
              placeholder='What kind of services are you looking for?'
            />
            <FlexBox mt={25} justifyContent='space-between'>
              <Button
                width={100}
                height={40}
                type='button'
                variant='cancel'
                borderRadius='100px'
                onClick={handleCloseModal}
              >
                Cancel
              </Button>
              <Button
                width={100}
                height={40}
                variant='dark'
                borderRadius='100px'
                disabled={submitting}
                cursor={submitting ? 'not-allowed' : 'pointer'}
              >
                Apply
              </Button>
            </FlexBox>
          </form>
        </>
      )}
    </Box>
  );
};

export default ApplyNowForm;

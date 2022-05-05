import { useState, useEffect } from 'react';
// icons
import Icon from '../icons';
// ui
import { Box, Button, FlexBox, SectionTitle } from '../ui';
// forms
import { RadioInput, StyledLabel, StyledInput, StyledTextArea } from './ui';
//////////////////////////////////////////////////

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
          <FlexBox mt={20} justifyContent='center'>
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

export default ApplyNowFormComponent;

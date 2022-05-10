import { useState } from 'react';
// components
import ImageComponent from '../components/image';
// hooks
import { useWindowSize } from '../hooks/use-window-size';
// icons
import Icon from '../icons';
// ui
import {
  Box,
  Text,
  Button,
  Article,
  Section,
  FlexBox,
  PageTitle,
  RelativeBox,
  ArticleTitle,
} from '../ui';
// animations
import { AnimatedBox } from '../ui/animations';
//////////////////////////////////////////////////

const questionsAnswers = [
  {
    // eslint-disable-next-line max-len
    question: 'What services does Xpath provide?',
    answer: [
      // eslint-disable-next-line max-len
      'We offer a wide range of back-office services to keep your trucks running while taking away the headache of day-to-day operations. This includes: finding loads, dispatching, tracking/tracing, invoicing, IFTA reports, connecting with your clients for electronic communication and much more. Apply now and see what other services we can provide!',
    ],
  },
  {
    // eslint-disable-next-line max-len
    question: 'What modes of transportation does Xpath cover?',
    answer: [
      // eslint-disable-next-line max-len
      'Any mode, anywhere. If you are an FTL, LTL, Drayage/Intermodal, Flatbed or anything else, we will make sure to accommodate your transportation mode.',
    ],
  },
  {
    // eslint-disable-next-line max-len
    question: 'What does Xpath charge for the services?',
    answer: [
      // eslint-disable-next-line max-len
      'Our fees are simple, we take a small percentage from the gross of the load that is booked which covers finding loads, dispatching, tracking/tracing and invoicing. For additional services like IFTA reports, we charge a flat fee per truck.',
    ],
  },
  {
    // eslint-disable-next-line max-len
    question: 'How will I get paid?',
    answer: [
      // eslint-disable-next-line max-len
      'We work with the type of payment structure that you need. For instance, you can get paid weekly with a statement of all pertinent information and direct deposit to your bank account. If you require factoring, we will get connected with your factoring company to automatically send invoices and have the payments remitted to you.',
    ],
  },
  {
    // eslint-disable-next-line max-len
    question: 'What if I hire more drivers and obtain new trucks?',
    answer: [
      // eslint-disable-next-line max-len
      'Not a problem! We will be able to onboard the new drivers and trucks within minutes and begin the work to find their first load. Because of our technology, this process becomes very easy.',
    ],
  },
  {
    // eslint-disable-next-line max-len
    question: 'Can I set my own criteria for loads?',
    answer: [
      // eslint-disable-next-line max-len
      'Absolutely. We always make sure to find out where you want to drive and for how much based on Rate per Mile (RPM).',
    ],
  },
  {
    // eslint-disable-next-line max-len
    question: 'Can I set my own schedule?',
    answer: [
      // eslint-disable-next-line max-len
      'This is very important to us and we make sure to book loads based on your schedule. If you have days off, we will make sure to get you where you need to be by that time and not book loads until you are available again.',
    ],
  },
  {
    // eslint-disable-next-line max-len
    question: 'What if I run into issues while transporting the load?',
    answer: [
      // eslint-disable-next-line max-len
      'Our dispatching team is available 24/7 for any questions and issues at no additional charge. We will help make sure to process any additional fees like Lumper, Detention, Layover etc. to have a fair outcome for all parties involved.',
    ],
  },
  {
    // eslint-disable-next-line max-len
    question: 'Will I have access to my information?',
    answer: [
      // eslint-disable-next-line max-len
      'Always at anytime. You will get a direct login into our TMS so you can monitor your loads and financial information, offering a full transparency of the business that you do with Xpath.',
    ],
  },
  {
    // eslint-disable-next-line max-len
    question: 'Is there a contract that I need to sign?',
    answer: [
      // eslint-disable-next-line max-len
      'We do need to have an agreement signed with you while you are onboarding that covers the agreed Xpath service rates and criteria for loads from you and Xpath. There is no time agreement for services provided by Xpath, you are free to come and go as you please.',
    ],
  },
];

const Answer = ({ activeLine, animationName, handleOpenModal }) => (
  <Box width={{ xs: '100%', sm: '50%' }} p={{ xs: 18, lg: 22, xl: 25 }}>
    {
      questionsAnswers[activeLine].answer.map((text, index) => (
        <AnimatedBox
          key={index}
          animationName={animationName}
          animationProps='0.3s ease both'
        >
          <Text
            color='white'
            lineHeight='25px'
            mt={index === 0 ? 0 : 25}
            fontSize={{ xs: 14, lg: 15, xl: 16 }}
          >
            {text}
          </Text>
        </AnimatedBox>
      ))
    }
    <AnimatedBox
      animationName={animationName}
      animationProps='0.3s ease both'
    >
      <Button
        mt={30}
        variant='primary'
        borderRadius='100px'
        onClick={handleOpenModal}
        height={{ xs: 48, lg: 54, xl: 60 }}
        width={{ xs: 160, lg: 180, xl: 200 }}
        fontSize={{ xs: 14, lg: 15, xl: 16 }}
      >
        Apply Now
      </Button>
    </AnimatedBox>
  </Box>
);

const QuestionsAnswersComponent = ({ handleOpenModal }) => {
  const { width } = useWindowSize();
  const [activeLine, setActiveLine] = useState(0);
  const [animationName, setAnimationName] = useState('');

  const handleChangeQuestion = index => {
    if (index === activeLine) return;

    setAnimationName('fade-out');
    setTimeout(() => {
      setActiveLine(index);
      setAnimationName('fade-in');
    }, 300);
  };

  return (
    <Box
      width='100vw'
      py={{ xs: 0, sm: 80, lg: 100 }}
      px={{ xs: 0, md: 20, lg: 40, xl: 0 }}
    >
      <Article
        mx='auto'
        display='flex'
        maxWidth={1200}
        background='url(/images/X.svg) no-repeat bottom right black'
      >
        <Box
          background='black'
          borderBottom='1px solid'
          width={{ xs: '100%', sm: '50%' }}
          borderColor={activeLine === questionsAnswers.length - 1 ? 'transparent' : '#E2E2E2'}
        >
          {
            questionsAnswers.map(({ question }, index) => (
              <div key={index}>
                <Section
                  minHeight={100}
                  cursor='pointer'
                  position='relative'
                  borderTop='1px solid'
                  borderLeft='1px solid'
                  borderRight='1px solid'
                  p={{ xs: 18, lg: 22, xl: 25 }}
                  onClick={() => handleChangeQuestion(index)}
                  background={activeLine === index ? 'transparent' : 'white'}
                  borderColor={activeLine === index ? 'transparent' : '#E2E2E2'}
                >
                  <ArticleTitle
                    fontWeight={500}
                    wordBreak='break-all'
                    width='calc(100% - 20px)'
                    fontSize={{ xs: 14, lg: 15, xl: 16 }}
                    color={activeLine === index ? 'white' : undefined}
                  >
                    {question}
                  </ArticleTitle>
                  {
                    activeLine === index && (
                      <Icon
                        w={20}
                        h={14}
                        right='16px'
                        position='absolute'
                        iconName='arrowRight'
                        bottom='calc(50% - 14px)'
                        transform={width <= 640 ? 'rotate(90deg)' : 'unset'}
                      />
                    )
                  }
                </Section>
                {width <= 640 && activeLine === index && (
                  <Answer
                    activeLine={activeLine}
                    animationName={animationName}
                    handleOpenModal={handleOpenModal}
                  />
                )}
              </div>
            ))
          }
        </Box>
        {width > 640 && (
          <Answer
            activeLine={activeLine}
            animationName={animationName}
            handleOpenModal={handleOpenModal}
          />
        )}
      </Article>
    </Box>
  );
};

const FAQPage = ({ handleOpenModal }) => (
  <>
    <Box
      width='100vw'
      background='black'
      px={{ xs: 20, lg: 40, xl: 0 }}
      pb={{ xs: 45, lg: 90, xl: 130 }}
      pt={{ xs: 90, lg: 120, xl: 150 }}
    >
      <FlexBox
        mx='auto'
        maxWidth={1200}
        alignItems='center'
        justifyContent='space-between'
        flexDirection={{ xs: 'column', sm: 'unset' }}
      >
        <Section width={{ xs: '100%', sm: 320 }}>
          <PageTitle
            color='white'
            fontSize={36}
            textTransform='uppercase'
            fontFamily='Ethnocentric'
            lineHeight={{ xs: '52px', xl: '65px' }}
          >
            Frequently <br /> asked <br /> questions
          </PageTitle>
          <Button
            mt={40}
            mb={32}
            fontWeight={500}
            variant='primary'
            borderRadius='100px'
            onClick={handleOpenModal}
            height={{ xs: 48, lg: 54, xl: 60 }}
            width={{ xs: 210, lg: 220, xl: 240 }}
            fontSize={{ xs: 14, lg: 15, xl: 16 }}
          >
            Ask Additional Questions
          </Button>
        </Section>
        <RelativeBox
          maxWidth={720}
          height={{ xs: 300, lg: 400, xl: 450 }}
          width={{ xs: '100%', sm: 'calc(100% - 350px)' }}
        >
          <ImageComponent
            layout='fill'
            placeholder='blur'
            src='/images/image_2.png'
          />
        </RelativeBox>
      </FlexBox>
    </Box>
    <QuestionsAnswersComponent handleOpenModal={handleOpenModal} />
  </>
);

export default FAQPage;

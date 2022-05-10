// components
import ImageComponent from '../components/image';
// ui
import {
  Box,
  Video,
  Button,
  Article,
  Section,
  FlexBox,
  PageTitle,
  RelativeBox,
  SectionTitle,
} from '../ui';
//////////////////////////////////////////////////

const articles_2 = [
  {
    src: '/images/cards.svg',
    title: 'Better Earnings',
    // eslint-disable-next-line max-len
    text: 'Xpath only charges 10% off the gross for each load dispatched to you. This means more money flowing to your company, with average savings of 10-20% per load.'
  },
  {
    title: 'Stable Loads',
    src: '/images/logistics-2.svg',
    // eslint-disable-next-line max-len
    text: 'We have established customers that will give you the best, steady loads on the market. Any mode, anytime, we will make sure to keep your trucks covered and moving. ',
  },
  {
    title: 'Respect',
    src: '/images/respect.svg',
    // eslint-disable-next-line max-len
    text: 'We hire people with 1 term in-mind: honesty. Our employees make sure you are treated like a human-being that receives honest communications and fair payment for any load that you transport.',
  },
];

// const numbers = [
//   {
//     number: '200k',
//     description: 'Users',
//   },
//   {
//     number: '70',
//     description: 'Operators',
//   },
//   {
//     number: '120',
//     description: 'Drivers',
//   },
// ];

const HomePage = ({ handleOpenModal }) => (
  <>
    <Box
      width='100vw'
      background='black'
      px={{ xs: 20, lg: 40, xl: 0 }}
      py={{ xs: 90, lg: 120, xl: 150 }}
    >
      <FlexBox
        mx='auto'
        maxWidth={1200}
        alignItems='center'
        justifyContent='space-between'
        flexDirection={{ xs: 'column', sm: 'unset' }}
      >
        <Section
          mr={{ md: 50 }}
          width={{ xs: '100%', sm: '45%' }}
        >
          <PageTitle
            color='white'
            fontFamily='Ethnocentric'
            fontSize={{ xs: 38, sm: 30, lg: 42, xl: 52 }}
            lineHeight={{ xs: '56px', lg: '62px', xl: '78px' }}
          >
            Partner to <br />grow
          </PageTitle>
          <Article color='white' my={{ xs: 32, lg: 36, xl: 40 }} fontSize={{ xs: 14, lg: 15, xl: 16 }}>
            Xpath handles your logistics back-office using tech solutions while treating you like a business partner,
            not just another number.
          </Article>
          <Button
            mb={32}
            fontWeight={500}
            variant='primary'
            borderRadius='100px'
            onClick={handleOpenModal}
            height={{ xs: 48, lg: 54, xl: 60 }}
            width={{ xs: 160, lg: 180, xl: 200 }}
            fontSize={{ xs: 14, lg: 15, xl: 16 }}
          >
            Apply Now
          </Button>
        </Section>
        <Video
          controls={true}
          poster='/images/poster.png'
          width={{ xs: '100%', sm: '48%', md: 600, xl: 720 }}
        >
          <source src='/videos/Xpath Logistics Intro Video Final.mp4' type='video/mp4' />
        </Video>
      </FlexBox>
    </Box>
    <Section
      bg='lightGrey'
      px={{ xs: 20, lg: 40, xl: 0 }}
      py={{ xs: 30, lg: 50, xl: 70 }}
    >
      <SectionTitle
        textAlign='center'
        fontFamily='Ethnocentric'
        textTransform='uppercase'
        fontSize={{ xs: 36,lg: 40, xl: 46 }}
      >
        our owner-ops save 15-20% per load
      </SectionTitle>
    </Section>
    <Section
      mx='auto'
      maxWidth={1200}
      px={{ xs: 20, lg: 40, xl: 0 }}
      py={{ xs: 50, lg: 100, xl: 120 }}
    >
      <PageTitle
        color='mainDark'
        fontFamily='Ethnocentric'
        fontSize={{ xs: 38, lg: 42, xl: 52 }}
        lineHeight={{ xs: '56px', lg: '62px', xl: '78px' }}
      >
        Why choose <br />XPath?
      </PageTitle>
      {/* <FlexBox
        flexWrap={{ xs: 'wrap', lg: 'nowrap' }}
        justifyContent={{ xs: 'center', sm: 'space-between' }}
      >
        {
          articles.map(({ src, text, title }, index) => (
            <Section
              key={index}
              position='relative'
              mt={{ xs: 30, md: 50 }}
              width={{ xs: '100%', sm: '30%' }}
              maxWidth={{ xs: '100%', sm: 320 }}
            >
              <RelativeBox width='100%' height={{ xs: 220, md: 320 }}>
                <ImageComponent
                  src={src}
                  layout='fill'
                  placeholder='blur'
                />
              </RelativeBox>
              <SectionTitle my={20} fontWeight={500} fontSize={{ xs: 18, lg: 19, xl: 20 }}>
                {title}
              </SectionTitle>
              <Article fontSize={{ xs: 14, lg: 15, xl: 16 }}>
                {text}
              </Article>
            </Section>
          ))
        }
      </FlexBox> */}
      <FlexBox
        flexWrap={{ xs: 'wrap', lg: 'nowrap' }}
        justifyContent={{ xs: 'center', sm: 'space-between' }}
      >
        {
          articles_2.map(({ src, text, title }, index) => (
            <Section
              key={index}
              position='relative'
              mt={{ xs: 30, md: 50 }}
              width={{ xs: '100%', sm: '30%' }}
              maxWidth={{ xs: '100%', sm: 320 }}
            >
              <Box width='max-content' bg='lightGrey' borderRadius='40px' p={{ xs: 30, lg: 40, xs: 50 }}>
                <ImageComponent src={src} width={120} height={120} />
              </Box>
              <SectionTitle mb={20} fontWeight={500} mt={{ xs: 20, sm: 40 }} fontSize={{ xs: 18, lg: 19, xl: 20 }}>
                {title}
              </SectionTitle>
              <Article fontSize={{ xs: 14, lg: 15, xl: 16 }}>
                {text}
              </Article>
            </Section>
          ))
        }
      </FlexBox>
    </Section>
    <Box
      width='100vw'
      bg='lightGrey'
      pt={{ xs: 25, lg: 50, xl: 60 }}
      background='url(/images/x-dark.svg) no-repeat bottom right 10% #F8F9FD'
    >
      <Section
        mx='auto'
        display='flex'
        maxWidth={1200}
        alignItems='center'
        flexDirection='column'
        px={{ xs: 20, lg: 40, xl: 0 }}
        pt={{ xs: 25, lg: 50, xl: 60 }}
        pb={{ xs: 50, lg: 100, xl: 120 }}
      >
        <PageTitle
          color='mainDark'
          textAlign='center'
          fontFamily='Ethnocentric'
          fontSize={{ xs: 38, lg: 42, xl: 52 }}
          lineHeight={{ xs: '56px', lg: '62px', xl: '78px' }}
        >
          SERVICES
        </PageTitle>
        <FlexBox
          width='100%'
          maxWidth={500}
          alignItems='center'
          mt={{ xs: 20, sm: 40 }}
          justifyContent='space-between'
          flexDirection={{ xs: 'column', md: 'row' }}
        >
          <ul>
            <li>24/7 Dispatching</li>
            <li>Invoicing and Factoring</li>
            <li>Accounting</li>
          </ul>
          <ul>
            <li>24/7 Dispatching</li>
            <li>Invoicing and Factoring</li>
            <li>Accounting</li>
          </ul>
        </FlexBox>
      </Section>
    </Box>
    <FlexBox
      maxWidth={1200}
      background='black'
      alignItems='center'
      mt={{ xs: 50, lg: 100, xl: 120 }}
      mb={{ xs: 0, sm: 50, lg: 100, xl: 120 }}
      mx={{ sm: 0, md: 20, lg: 40, xl: 'auto' }}
      flexDirection={{ xs: 'column', sm: 'row' }}
    >
      <Section
        py={{ xs: 20, sm: 0 }}
        px={{ xs: 20, xl: 60 }}
        width={{ xs: '100%', sm: '65%' }}
      >
        <SectionTitle
          color='white'
          fontWeight={500}
          lineHeight='32px'
          fontSize={{ xs: 18, lg: 19, xl: 20 }}
        >
          Xpath is designed to use technology.
          Simplifing and automating your back-office operations while keeping you and your clients happy...
        </SectionTitle>
        <Article my={30} color='white' fontSize={{ xs: 14, lg: 15, xl: 16 }}>
          {/* eslint-disable-next-line max-len */}
          Technology is often an overlooked “super-tool” that can set your truck apart. Xpath uses technology not only to give you the best possible service, but to provide crucial information to your clients so that you build a better relationship with them. We connect directly with your clients using technology so they receive load status updates and all communications necessary for a hands-off experience, establishing a network for repeat business.
        </Article>
        <Button
          fontWeight={500}
          variant='primary'
          borderRadius='100px'
          onClick={handleOpenModal}
          height={{ xs: 48, lg: 54, xl: 60 }}
          width={{ xs: 160, lg: 180, xl: 200 }}
          fontSize={{ xs: 14, lg: 15, xl: 16 }}
        >
          Apply Now
        </Button>
      </Section>
      <RelativeBox
        width={{ xs: '100%', sm: '35%' }}
        height={{ xs: 470, lg: 600, xl: 650 }}
      >
        <ImageComponent
          layout='fill'
          placeholder='blur'
          src='/images/truck_1.png'
        />
      </RelativeBox>
    </FlexBox>
    <Box
      background='black'
      py={{ xs: 50, lg: 120 }}
      px={{ xs: 20, lg: 40, xl: 0 }}
    >
      <Section
        mx='auto'
        display='flex'
        maxWidth={1200}
        alignItems='center'
        flexDirection='column'
        justifyContent='center'
      >
        <PageTitle
          color='white'
          fontFamily='Ethnocentric'
          textTransform='uppercase'
          mb={{ xs: 30, md: 50, lg: 80 }}
          fontSize={{ xs: 38, lg: 42, xl: 52 }}
        >
          Learn more about Xpath
        </PageTitle>
        <Video
          controls={true}
          poster='/images/poster.png'
          height={{ xs: 300, lg: 400, xl: 450 }}
          width={{ xs: '100%', sm: '48%', md: 600, xl: 720 }}
        >
          <source src='/videos/Xpath Logistics Intro Video Final.mp4' type='video/mp4' />
        </Video>
      </Section>
    </Box>
    {/* <FlexBox
      maxWidth={1200}
      justifyContent='space-between'
      mb={{ xs: 90, lg: 120, xl: 150 }}
      mt={{ xs: 90, lg: 150, xl: 250 }}
      mx={{ xs: 0, md: 20, lg: 40, xl: 'auto' }}
    >
      <RelativeBox
        width={{ xs: 500, lg: 600, xl: 720 }}
        height={{ xs: 300, lg: 400, xl: 450 }}
      >
        <ImageComponent
          layout='fill'
          placeholder='blur'
          src='/images/image_2.png'
        />
      </RelativeBox>
      <Section width='32%'>
        <SectionTitle fontWeight={500} lineHeight='32px' fontSize={{ xs: 18, lg: 19, xl: 20 }}>
          Lorem ipsum dolor sit amet:
        </SectionTitle>
        <Article my={{ xs: 18, lg: 24, xl: 30 }} fontSize={{ xs: 14, lg: 15, xl: 16 }}>
          <Text>
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          </Text>
          <Text mt={{ xs: 18, lg: 24, xl: 30 }}>
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          </Text>
          <Text mt={{ xs: 18, lg: 24, xl: 30 }}>
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          </Text>
          <Text mt={{ xs: 18, lg: 24, xl: 30 }}>
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          </Text>
        </Article>
        <Button
          fontWeight={500}
          variant='secondary'
          borderRadius='100px'
          onClick={handleOpenModal}
          height={{ xs: 48, lg: 54, xl: 60 }}
          width={{ xs: 160, lg: 180, xl: 200 }}
          fontSize={{ xs: 14, lg: 15, xl: 16 }}
        >
          Apply Now
        </Button>
      </Section>
    </FlexBox> */}
    {/* TODO: check this section after release */}
    {/* <Box
      py={80}
      width='100vw'
      px={{ xs: 0, md: 20, lg: 40, xl: 0 }}
      background='linear-gradient(88.64deg, #F1EEFC 0.29%, #D8DDE9 87.7%);'
    >
      <Section mx='auto' maxWidth={1200}>
        <PageTitle
          color='mainDark'
          fontFamily='Ethnocentric'
          fontSize={{ xs: 38, lg: 42, xl: 52 }}
          lineHeight={{ xs: '56px', lg: '62px', xl: '78px' }}
        >
          XPath in Numbers
        </PageTitle>
        </Article>
        <FlexBox justifyContent='space-between'>
          {
            numbers.map(({ number, description }, index) => (
              <Box key={index} width='27%'>
                <Text
                  borderColor='mainBlack'
                  borderBottom='4px solid'
                  fontFamily='Ethnocentric'
                  fontSize={{ xs: 38, lg: 42, xl: 52 }}
                >
                  {number}
                </Text>
                <Text mt={10} fontSize={{ xs: 14, lg: 15, xl: 16 }}>
                  {description}
                </Text>
              </Box>
            ))
          }
        </FlexBox>
      </Section>
    </Box> */}
  </>
);

export default HomePage;

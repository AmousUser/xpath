// components
import ImageComponent from '../components/image';
// ui
import {
  Box,
  Button,
  Article,
  Section,
  FlexBox,
  PageTitle,
  RelativeBox,
  SectionTitle,
} from '../ui';
//////////////////////////////////////////////////

const articles = [
  {
    src: '/images/technology.png',
    title: 'The right Technology',
    // eslint-disable-next-line max-len
    text: 'We use Amous TMS as the backbone to drive your sucess. With your own login you can monitor your operations at anytime and anywhere. This gives you the visibility and transperancy that will drive a great business partnership.'
  },
  {
    src: '/images/people.png',
    title: 'The right People',
    // eslint-disable-next-line max-len
    text: 'We hire people with 1 term in-mind: honesty. Our employees make sure you are treated like a human-being that receives honest communications and fair payment for any load that you transport.',
  },
  {
    src: '/images/load.png',
    title: 'The right Loads',
    // eslint-disable-next-line max-len
    text: 'Our priority is to find loads that meet your exact criteria. You give us the rules, and we follow. Our 24/7 dispatching team is in contact with the largest brokers and shippers, creating a network to find the right loads for you.',
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
        <RelativeBox
          height={{ xs: 300, lg: 400, xl: 450 }}
          width={{ xs: '100%', sm: '48%', md: 600, xl: 720 }}
        >
          <ImageComponent
            layout='fill'
            placeholder='blur'
            src='/images/image_2.png'
          />
        </RelativeBox>
      </FlexBox>
    </Box>
    <Box
      width='100vw'
      bg='lightGrey'
      pt={{ xs: 50, lg: 100, xl: 120 }}
    >
      <Section
        mx='auto'
        maxWidth={1200}
        px={{ xs: 20, lg: 40, xl: 0 }}
      >
        <PageTitle
          color='mainDark'
          fontFamily='Ethnocentric'
          fontSize={{ xs: 38, lg: 42, xl: 52 }}
          lineHeight={{ xs: '56px', lg: '62px', xl: '78px' }}
        >
          Why choose <br />XPath?
        </PageTitle>
        <FlexBox
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
        </FlexBox>
      </Section>
      <FlexBox
        maxWidth={1200}
        background='black'
        alignItems='center'
        mb={{ xs: 0, sm: 50 }}
        mt={{ xs: 50, lg: 120, xl: 150 }}
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
    </Box>
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
          fontSize={{ xs: 38, lg: 42, xl: 52 }}
        >
          Learn more about Xpath
        </PageTitle>
        <RelativeBox
          width='100%'
          maxWidth={800}
          mt={{ xs: 30, md: 50, lg: 80 }}
          height={{ xs: 220, md: 320, lg: 450 }}
        >
          <ImageComponent
            layout='fill'
            placeholder='blur'
            src='/images/image_2.png'
          />
        </RelativeBox>
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

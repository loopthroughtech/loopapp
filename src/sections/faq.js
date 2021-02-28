/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'How to be an author at loopthrough ?',
    contents: (
      <div>
        Simply go to the <a herif= 'http://join.loopthrough.tech'>join us </a>page and sign up. Contact us in case of any issues.
      </div>
    ),
  },
  {
    title: 'Do i have the rights to repost my blogs ?',
    contents: (
      <div>
         Yes. The autor will have the complete rights to repost his work in other platforms. 
      </div>
    ),
  },
  {
    title: `Do i need to know coding to write blogs ?`,
    contents: (
      <div>
        We have a very intutive UI for the blogers thanks to ghost. Loopthrough is build for everyone. Writing is easy as never before. But with a bit more tips and tricks it can be way better.
      </div>
    ),
  },
  {
    title: `Is loopthrough topic specific ?`,
    contents: (
      <div>
        Nope, We love to have all types of nice contents. let it be tech, code, story, or a poem this is the platform for you. If you are having something completely out of box let us know :) 
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }}>
      <Container>
        <SectionHeader
          title="Frequently asked question"
          slogan="Get your question answer"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}

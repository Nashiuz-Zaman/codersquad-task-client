// components
import InnerContainer from '@/components/containers/InnerContainer/InnerContainer';
import About from '@/components/page-related/home/About/About';
import Banner from '@/components/page-related/home/Banner/Banner';

const Home = () => {
   return (
      <>
         <section className='mt-sectionGapSm 2md:mt-sectionGapMd lg:mt-24 xl:mt-[7.5rem] mb-sectionGapMd md:mb-sectionGapLg'>
            <Banner />
         </section>

         <section id='learn-more' className='mb-sectionGapMd md:mb-sectionGapLg'>
            <InnerContainer>
               <About />
            </InnerContainer>
         </section>
      </>
   );
};

export default Home;

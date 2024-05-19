import AboutOrFeatures from '@/components/Sections/AboutOrFeatures/AboutOrFeatures';
import Banner from '@/components/Sections/Banner/Banner';
import MemeGenerator from '@/components/Sections/MemeGenerator/MemeGenerator';
import OurWayMoon from '@/components/Sections/OurWayMoon/OurWayMoon';
import SideMenu from '@/components/Sections/SideMenu/SideMenu';
import TokenInformation from '@/components/Sections/TokenInformation/TokenInformation';

const Home = () => {
  return (
    <>
      <div className='sticky z-50 -top-32 md:-top-32 lg:-top-32 xl:-top-32 2xl:-top-10'>
        <SideMenu />
      </div>
      <Banner />
      <AboutOrFeatures />
      <TokenInformation />
      <MemeGenerator />
      <OurWayMoon />
    </>
  );
};

export default Home;

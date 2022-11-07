import AboutSection from './about/AboutSection';
import AboutMeSection from './about_me/AboutMeSection';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import NavLink from './components/NavLink';
import NavLogo from './components/NavLogo';
import ContactSection from './contact/ContactSection';
import HomeSection from './home/HomeSection';
import QuoteSection from './quote/QuoteSection';
import TipsAndTrickSection from './tips&trick/TipsAndTrickSection';

function App() {
  return (
    <>
      <Header>
        <Navbar>
          <NavLogo />
          <NavLink />
        </Navbar>
      </Header>
      <MainContent>
        <HomeSection />
        <QuoteSection />
        <TipsAndTrickSection />
        <AboutSection />
        <AboutMeSection />
        <ContactSection />
      </MainContent>
      <Footer />
    </>
  );
}

export default App;

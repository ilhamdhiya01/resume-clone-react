import AboutSection from './about/AboutSection';
import AboutMeSection from './about_me/AboutMeSection';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import NavLink from './components/NavLink';
import NavLogo from './components/NavLogo';
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
      </MainContent>
    </>
  );
}

export default App;

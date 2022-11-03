import Header from './components/Header';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import NavLink from './components/NavLink';
import NavLogo from './components/NavLogo';
import HomeSection from './home/HomeSection';
import QuoteSection from './quote/QuoteSection';

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
      </MainContent>
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/Pages/AboutPage';
import BlogPage from './components/Pages/BlogPage';
import BlogPageOne from './components/Pages/BlogPageOne';
import BlogDetailsPage from './components/Pages/BlogDetailsPage';
import ContactPage from './components/Pages/ContactPage';
import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';
 import PortfolioDetailsPage from './components/Pages/PortfolioDetailsPage';
import ServiceDetailsPage from './components/Pages/ServiceDetailsPage';
import ServicesPage from './components/Pages/ServicesPage';
import TeamPage from './components/Pages/TeamPage';
import PortfolioPage from './components/Pages/PortfolioPage';
import TeamDetails from './components/Pages/TeamDetails';
import PhotographyAgencyHome from './components/Pages/PhotographyAgencyHome';
import CreativePortfolioHome from './components/Pages/CreativePortfolioHome';
import DigitalAgencyHome from './components/Pages/DigitalAgencyHome';
import MarketingAgencyHome from './components/Pages/MarketingAgencyHome';
import ShowcasePortfolioHome from './components/Pages/ShowcasePortfolioHome';
import CaseStudyShowcaseHome from './components/Pages/CaseStudyShowcaseHome';
import Layout from './components/Layout';
import CaseStudyDetailsPage from './components/Pages/CaseStudyDetailsPage';
import FaqPage from './components/Pages/FaqPage';
import ThreedConfigPage from './components/Pages/ThreedConfigPage';
import ColleseumProjectPage from './components/Pages/colleseumProjectPage'
import RamandirProjectPage from './components/Pages/ramandirProjectPage'
import ZeeProjectPage from './components/Pages/zeeProjectPage'
import WebsummitProjectPage from './components/Pages/websummitProjectPage';
import AkshyaProjectPage from './components/Pages/akshyaProjectPage';
import SportsverseProjectPage from './components/Pages/sportsverseProjectPage';
import BusinessPage from './components/Pages/businessPage';
import MetaverseBlogPage from './components/Pages/metaverseBlogPage';
import CryptoBlogPage from './components/Pages/cryptoBlogPage';
import NftBlogPage from './components/Pages/nftBlogPage';
import BlockchainBlogPage from './components/Pages/blockchainBlogPage';
import GamificationBlogPage from './components/Pages/gamificationBlogPage';
// import { Link } from 'react-router-dom';
import ThreedconfiguratorPage from './components/Pages/ThreedconfiguratorPage'; 
import MetaverseSpacePage from './components/Pages/MetaverseSpacePage';
import BlockchainServicePage from './components/Pages/BlockchainServicePage';

function App() {
  return (
    <>

    {/* <Link to="service/:threedConfigId">Aboutpage</Link> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="photography-agency"
            element={<PhotographyAgencyHome />}
          />
          <Route path="digital-agency" element={<DigitalAgencyHome />} />
          <Route path="marketing-agency" element={<MarketingAgencyHome />} />
          <Route path="about" element={<AboutPage />} />

          <Route path="threedconfigPage" element={<ThreedconfiguratorPage/>}></Route>
          <Route path="metaversespacePage" element={<MetaverseSpacePage/>}></Route>
          <Route path="blockchainServicePage" element={<BlockchainServicePage/>}></Route>

          <Route path="service" element={<ServicesPage />} />
          <Route path="service/:serviceDetailsId" element={<ServiceDetailsPage/>} />
          <Route path="service/:threedConfigId" element={<ThreedConfigPage/>} />


          
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="" element={<PortfolioDetailsPage />} />
          <Route path="colleseumProjectPage" element={<ColleseumProjectPage />} />
          <Route path="ramandirProjectPage" element={< RamandirProjectPage />} />
          <Route path="zeeProjectPage" element={<ZeeProjectPage />} />
          <Route path="websummitProjectPage" element={<WebsummitProjectPage />} />
          <Route path="akshyaProjectPage" element={<AkshyaProjectPage />} />
          <Route path="sportsverseProjectPage" element={<SportsverseProjectPage />} />


          <Route path="blog" element={<BlogPage />} />
          <Route path="blogone" element={<BlogPageOne />} />
          <Route path="blog/:blogDetailsId" element={<BlogDetailsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="businessPage" element={<BusinessPage />} />
          <Route path="metaverseBlogPage" element={<MetaverseBlogPage />} />
          <Route path="cryptoBlogPage" element={<CryptoBlogPage />} />
          <Route path="blockchainBlogPage" element={<BlockchainBlogPage />} />
          <Route path="NftBlogPage" element={<NftBlogPage />} />
          <Route path="GamificationBlogPage" element={<GamificationBlogPage />} />
          <Route path="team/:teamDetails" element={<TeamDetails />} />
          <Route
            path="/case-study/:caseStudyDetailsId"
            element={<CaseStudyDetailsPage />}
          />
          <Route path="faq" element={<FaqPage />} />
        </Route>
        <Route path="/" element={<Layout headerVariant="cs-site_header_full_width" />}>
          <Route path="creative-portfolio" element={<CreativePortfolioHome />} />
          <Route
            path="showcase-portfolio"
            element={<ShowcasePortfolioHome />}
          />
          <Route
            path="case-study-showcase"
            element={<CaseStudyShowcaseHome />}
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
 

export default App;

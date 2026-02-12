import {
  ScrollRestoration,
  Outlet,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";
import NotFound from "./pages/notfound/NotFound";
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import "./index.css";
import Welcome from "./components/welcome/Welcome";
import useLocalStorage from "./hooks/useLocalStorage";
import WelcomePage from "./pages/welcomePage/WelcomePage";
import WelcomeProvider from "./context/welcome/WelcomeProvider";
import ProductionDetails from "./pages/portfolio/production/productionDetails/ProductionDetails";
import ContactInboxProvider from "./context/contactInbox/ContactInboxProvider";

const Layouts = () => {
  const { saveValue, setSaveValue } = useLocalStorage("welcome", true);

  return (
    <div className="app">
      {saveValue ? (
        <Welcome setWelcomePage={setSaveValue} />
      ) : (
        <>
          <NavBar />
          <ScrollRestoration />
          <Outlet />
        </>
      )}
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="portfolio">
        <Route index element={<Portfolio />} />
        <Route path=":productionId" element={<ProductionDetails />} />
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path={process.env.REACT_APP_ROUTER} element={<WelcomePage />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

export default function App() {
  return (
    <div className="app">
      <WelcomeProvider>
        <ContactInboxProvider>
          <RouterProvider router={router} />
        </ContactInboxProvider>
      </WelcomeProvider>
    </div>
  );
}

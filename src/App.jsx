// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import "./App.css";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { BrowserRouter as Router } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import AppHeader from "./components/header";
import AppHome from "./pages/home";
import AppAbout from "./pages/about";
import AppServices from "./pages/services";
import AppEvents from "./pages/events";
import AppContacts from "./pages/contacts";
import AppFooter from "./pages/footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <div className="container-fluid p-0">
          <AppHome />
          <AppAbout />
          <AppServices />
          <AppEvents />
          <AppContacts />
        </div>
        {/* <AppHome />
        <AppAbout />
        <AppServices />
        <AppEvents />
        <AppContacts /> */}
      </main>
      <footer>
        <AppFooter />
      </footer>

      {/* <div className="container-fluid p-0">
        <Routes>
          <Route path="/" element={<AppHome />} />
          <Route path="/about" element={<AppAbout />} />
          <Route path="/services" element={<AppServices />} />
          <Route path="/events" element={<AppEvents />} />
          <Route path="/contact" element={<AppContacts />} />
        </Routes>
      </div> */}

      {/* <Router>
        <header>
          <AppHeader />
        </header>
        <Switch>
          <Route path="/" exact component={AppHome} /> 
          <Route path="/About" exact component={AppAbout} /> 
          <Route path="/Services" exact component={AppServices} /> 
          <Route path="/Contact" exact component={AppContact} /> 
        </Switch>
        <Footer></Footer>
      </Router> */}

      {/* <header>
        <AppHeader />
      </header>
      <main>
        <AppHome />
        <AppAbout />
        <AppServices />
        <AppContacts />
      </main>
      <footer>
        <AppFooter />
      </footer> */}
    </div>
  );
}

export default App;

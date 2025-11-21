import React from 'react'
import 'boxicons'
import HeroSect from './ComponentJSX/HeroSect'
import { Route, Routes } from 'react-router-dom'
import MainSection from './ComponentJSX/MainSection'
import Footer from './ComponentJSX/Footer'

import About from './PagesJSX/About'
import HelpSupport from './PagesJSX/HelpSupport'
import ReportFraud from './PagesJSX/ReportFraud'
import ScrollToTop from './ComponentJSX/ScrollToTop'

const App = () => {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<HeroSect />} />

        {/* YOUR MAIN WEBSITE */}
        <Route path='/mainWebsite/*' element={<MainSection />} />

        {/* Other Pages */}
        <Route path='/about' element={<About />} />
        <Route path='/help-support' element={<HelpSupport />} />
        <Route path='/report-fraud' element={<ReportFraud />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
import React from 'react'
import StrengthTable from './StrengthTable'
import WeaknessCard from './WeaknessTable'
import OpportunityCard from './OpportunityTable'
import ThreatCard from './ThreatTable'
import SideNav from './swotSideNav'
import '../../scss/SituationAnalysis.scss'
import DraggableTable from './DraggableTable'
import {Element, animateScroll as scroll} from 'react-scroll'

const SituationAnalysis = () =>{
  const scrollToTop = () =>{
    scroll.scrollToTop()
  }

  return(
    <div className='swot-container'>
      <div className='sidenav'>
        <SideNav/>
      </div>

      <div className='elements'>
        <Element name='strengths'>
          <section className='top'>
            <div className='strength-container'>
              <h2>Strengths</h2>
                <StrengthTable/>
                {/* <DraggableTable/> */}
            </div>
          </section>
        </Element>

        <Element name='weaknesses'>
          <div className='weakness-container'>
            <h2>Weaknesses</h2>
              <WeaknessCard/>
          </div>
        </Element>

        <Element name='opportunities'>
          <div className='opportunity-container'>
            <h2>Opportunities</h2>
              <OpportunityCard/>
          </div>
        </Element>

        <Element name='threats'>
          <div className='threat-container'>
            <h2>Threats</h2>
              <ThreatCard/>
          </div>
        </Element>

      </div>
      <div className='arrow'>
        <i class="fas fa-arrow-up" onClick={scrollToTop}></i>
      </div>
    </div>
  )
}

export default SituationAnalysis
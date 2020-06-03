import React, {useState} from 'react'
import StrengthTable from './StrengthTable'
import WeaknessCard from './WeaknessTable'
import OpportunityCard from './OpportunityTable'
import ThreatCard from './ThreatTable'
import SideNav from './swotSideNav'
import '../../scss/SituationAnalysis.scss'
import {Element, animateScroll as scroll} from 'react-scroll'
import Example from './dndverticallist'
import {Accordion, Icon} from 'semantic-ui-react'

const SituationAnalysis = () =>{
  let [isActive, setIsActive] = useState(0)

  const handleClick = (e, titleProps) =>{
    const {index} = titleProps
    const newIndex = isActive === index ? -1 : index
    setIsActive(newIndex)
  }

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
                {/* <StrengthTable/> */}
                <Accordion>
                <div className='container'>

                  <Accordion.Title
                    onClick={handleClick}
                    active={isActive === 0}
                    index={0}
                  >
                    View Items
                    <i class="fas fa-chevron-circle-down"></i>
                    <i class="fas fa-chevron-circle-up"></i>

                  </Accordion.Title>
                  <Accordion.Content active={isActive === 0}>
                    <Example/>
                  </Accordion.Content>
                  </div>
                </Accordion>
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
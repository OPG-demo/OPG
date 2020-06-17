import React, {useState} from 'react'
import StrengthTable from './StrengthTable'
import WeaknessCard from './WeaknessTable'
import OpportunityCard from './OpportunityTable'
import ThreatTable from './ThreatTable'
import SideNav from './swotSideNav'
import '../../scss/SituationAnalysis.scss'
import {Element, animateScroll as scroll} from 'react-scroll'
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion'


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
        <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
          <AccordionItem>
            <Element name='strengths'>
              <section className='top'>
                <div className='strength-container'>
                  <h2>Strengths</h2>
                  <div className='container'>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <i class="fas fa-align-justify"></i>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <StrengthTable/>
                    </AccordionItemPanel>
                  </div>
                </div>
              </section>
            </Element>
          </AccordionItem>

          <AccordionItem>
            <Element name='weaknesses'>
              <div className='weakness-container'>
                <h2>Weaknesses</h2>
                <div className='container'>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <i class="fas fa-align-justify"></i>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <WeaknessCard/>
                  </AccordionItemPanel>
                </div>
              </div>
            </Element>
          </AccordionItem>

          <AccordionItem>
            <Element name='opportunities'>
              <div className='opportunity-container'>
                <h2>Opportunities</h2>
                <div className='container'>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <i class="fas fa-align-justify"></i>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <OpportunityCard/>
                  </AccordionItemPanel>
                </div>
              </div>
            </Element>
          </AccordionItem>

          <AccordionItem>
            <Element name='threats'>
              <div className='threat-container'>
                <h2>Threats</h2>
                <div className='container'>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <i class="fas fa-align-justify"></i>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <ThreatTable/>
                  </AccordionItemPanel>
                </div>
              </div>
            </Element>
          </AccordionItem>
        </Accordion>
      </div>
      <div className='arrow'>
        <i class="fas fa-arrow-up" onClick={scrollToTop}></i>
      </div>
    </div>
  )
}

export default SituationAnalysis
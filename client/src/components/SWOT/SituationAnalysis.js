import React from 'react'
import StrengthCard from './StrengthCards'
import WeaknessCard from './WeaknessCards'
import OpportunityCard from './OpportunityCards'
import ThreatCard from './ThreatCards'
import SideNav from './swotSideNav'
import '../../scss/SituationAnalysis.scss'

import {Element, animateScroll as scroll} from 'react-scroll'

const SituationAnalysis = () =>{
  const scrollToTop = () =>{
    scroll.scrollToTop()
  }

  const strengthData= [
    {title: 'Test strength', priority: '1', division: 'Executive'},
    {title: 'Test strength2', priority: '2', division: 'Marketing'},
    {title: 'Test strength3', priority: '3', division: 'Executive'},
    {title: 'Test strength4', priority: '4', division: 'Operations'},
  ]

  const weaknessData= [
    {title: 'Test weakness', priority: '1', division: 'Executive'},
    {title: 'Test weakness2', priority: '2', division: 'Marketing'},
    {title: 'Test weakness3', priority: '3', division: 'Executive'},
    {title: 'Test weakness4', priority: '4', division: 'Operations'},
  ]

  const opportunityData= [
    {title: 'Test opportunity', priority: '1', division: 'Executive'},
    {title: 'Test opportunity2', priority: '2', division: 'Marketing'},
    {title: 'Test opportunity3', priority: '3', division: 'Executive'},
    {title: 'Test opportunity4', priority: '4', division: 'Operations'},
  ]

  const threatData= [
    {title: 'Test threat', priority: '1', division: 'Executive'},
    {title: 'Test threat2', priority: '2', division: 'Marketing'},
    {title: 'Test threat3', priority: '3', division: 'Executive'},
    {title: 'Test threat4', priority: '4', division: 'Operations'},
  ]

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
              <div className='card-container'>
                {strengthData.map(strength =>{
                  return <StrengthCard
                    key={strength.title}
                    title={strength.title}
                    priority={strength.priority}
                    division={strength.division}
                  />
                })}
              </div>
            </div>
          </section>
        </Element>

        <Element name='weaknesses'>
          <div className='weakness-container'>
            <h2>Weaknesses</h2>
            <div className='card-container'>
              {weaknessData.map(weakness =>{
                return <WeaknessCard
                  key={weakness.title}
                  title={weakness.title}
                  priority={weakness.priority}
                  division={weakness.division}
                />
              })}
            </div>
          </div>
        </Element>

        <Element name='opportunities'>
          <div className='opportunity-container'>
            <h2>Opportunities</h2>
            <div className='card-container'>
              {opportunityData.map(opportunity =>{
                return <OpportunityCard
                  key={opportunity.title}
                  title={opportunity.title}
                  priority={opportunity.priority}
                  division={opportunity.division}
                />
              })}
            </div>
          </div>
        </Element>

        <Element name='threats'>
          <div className='threat-container'>
            <h2>Threats</h2>
            <div className='card-container'>
              {threatData.map(threat =>{
                return <ThreatCard
                  key={threat.title}
                  title={threat.title}
                  priority={threat.priority}
                  division={threat.division}
                />
              })}
            </div>
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
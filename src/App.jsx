
import { useState } from 'react'
import prices from './prices.json'
import './App.css'

function App() {
  const [isSwitch, setIsSwitch] = useState(false)
  const [value, setValue] = useState(50)

  function toggleSwitch(){
    setIsSwitch(prev => !prev)
  }

  function handleChange(e){
    setValue(e.target.value)
  }

  const getBackgrounSize = () => {
    return { backgroundSize: `${value * 100 / 100}% 100%` }
  }
  
  return (
    <>
      <header>
        <h1 className='header-title'>Simple, traffic-based pricing</h1>
        <p className='header-text'>Sign-up for our 30-day trial. No credit card required. </p>
      </header>
      <main>
        <section className='pricing-section'>
          <p className='views'>{prices[value].views} pageviews</p>
          <div className='price-container'>
            <span className='price'>${isSwitch ? prices[value].price * 0.75 : prices[value].price}</span><p>/month</p>
          </div>  
          <input 
            type="range" 
            min={0} 
            max={100}  
            step={25}
            className='slider' 
            value={value} 
            onChange={handleChange}
            style={getBackgrounSize()}
          />
          <div className='switch-container'>
            <div className='billing-container'>
              <p>Monthly Billing</p>
              <div className={`switch ${isSwitch ? "switched" : ""}`} onClick={toggleSwitch}>
                <div className='switch-circle'></div>
              </div>
              <p className='yearly-text'>Yearly Billing</p>
            </div>
             </div>
        </section>
        <div className='divider'></div>
        <section className='footer-section'>
          <div className='check-list'>
            <div className='check-list-item'>
              <img src='/images/icon-check.svg' alt="Check Icon" className='check-icon'></img>
              <p>Unlimited websites</p>
            </div>
            <div className='check-list-item'>
              <img src='/images/icon-check.svg' alt="Check Icon" className='check-icon'></img>
              <p> 100% data ownership</p>
            </div>
            <div className='check-list-item'>
              <img src='/images/icon-check.svg' alt="Check Icon" className='check-icon'></img>
              <p>Email reports</p>
            </div>
          </div>
          <button className='main-btn'>Start my trial</button>
        </section>
      </main>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
      </footer>
    </>
  )
}

export default App

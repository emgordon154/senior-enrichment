import React from 'react'
import WinterJokes from './WinterJokes'

const About = () => (
  <div id="about-academy">
    <div>
      <h1 id="academy-name">Margaret Hamilton Interplanetary Academy of JavaScript</h1>
      <h4 id="blurb">Recently voted the top JavaScript Academy in the Sol system!</h4>
    </div>

    <div id="mission">
      <h2>Our Mission:</h2>
      <div id="mission-statement">
        <h3 id="new-joke-mission">
          To empower women to write code
          in the silly language that runs every website ever created
          in the last two millenia! Long-live JavaScript!
        </h3>
        {/* <h4 id="gh-mission">Accessible Tech Education for Women. </h4>
        <h4 id ="false-mission">Let's Close the Gap. </h4>
        <h4 id="true-mission">
          Let's force girls to write ES5 code
          during the intro course even now that ES3017 is out,
          just to watch them suffer!
        </h4> */}
      </div>
    </div>

    <p id="self-praise">Hahahahaha!! Chief Technology Officer, you have outdone yourself with this app to manage the Academy's students and campuses! Margaret Hamilton would high-five you if she weren't still in cryogenic stasis!</p>

    <p id="note-to-self">Note to self: Remember to reprogram this page to not show this stuff when somebody else is logged in</p>

    <WinterJokes />
  </div>
)

export default About

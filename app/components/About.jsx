import React from 'react'
import WinterJokes from './WinterJokes'

const About = () => (
  <div id="about-academy">
    <div>
      <h1 id="academy-name">Margaret Hamilton Interplanetary Academy of JavaScript</h1>
      <h4 id="blurb">Recently voted the top JavaScript Academy in the Sol system!</h4>
    </div>

    <div>
      <h2>Our Mission</h2>
      <h6 id="false-mission">Accessible Tech Education for Women. Let's Close the Gap.</h6>
      <h4 id="true-mission">Let's force girls to write ES5 code during Foundations even now that ES3017 is out!</h4>
    </div>

    <p id="self-praise">Hahahahaha!! Chief Technology Officer, you have outdone yourself with this app to manage the Academy's students and campuses! Margaret Hamilton would high-five you if she weren't still in cryogenic stasis!</p>

    <p id="note-to-self">Note to self: Remember to reprogram this page's React component to not show this stuff when somebody else is logged in</p>

    <p>It's winter back on Earth! Maybe some jokes about the cold season will warm up your soul in the cold vacuum of space!</p>
    <WinterJokes />
  </div>
)

export default About

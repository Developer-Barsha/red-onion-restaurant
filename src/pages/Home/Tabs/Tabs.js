import React, { useState } from 'react';
import { Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs'
import Breakfasts from '../Breakfasts/Breakfasts';
import Lunches from '../Lunches/Lunches';
import Dinners from '../Dinners/Dinners';
import './Tabs.css';

function ControlledTabs() {
  const [key, setKey] = useState('lunches');

  return (
    <div>
      <h4 className='text-center mt-5 text-danger'>Click on item to add to Cart</h4>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mt-3 d-flex justify-content-center border-0"
      >
        <Tab eventKey="breakfasts" title="Breakfasts">
          <Breakfasts />
        </Tab>
        <Tab eventKey="lunches" title="Lunches">
          <Lunches />
        </Tab>
        <Tab eventKey="dinner" title="Dinner">
          <Dinners />
        </Tab>
      </Tabs>
    </div>
  );
}

export default ControlledTabs;
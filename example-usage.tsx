// Example usage of master-js-utils
import React from 'react';
import { ScrollProgressBar, ScrollTimeline, debounce, utils } from 'master-js-utils';
import 'master-js-utils/style.css';

const App = () => {
  // Test debounce utility
  const debouncedLog = debounce((message: string) => {
    console.log('Debounced:', message);
  }, 300);

  // Test date utilities
  const today = utils.dates.getToday();
  
  return (
    <div>
      {/* Progress bar - no props required */}
      <ScrollProgressBar />
      
      {/* Timeline - no props required, will use demo data */}
      <ScrollTimeline />
      
      {/* Test debounce */}
      <button onClick={() => debouncedLog('Hello World!')}>
        Test Debounce
      </button>
      
      <div style={{ height: '200vh' }}>
        <h1>Scroll to test components</h1>
        <p>Today is: {today.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default App;

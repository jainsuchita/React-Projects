import React from 'react';
import OutputScreenRow from './outputScreenRow.js';
  
// Functional Component.
// Use to hold two Screen Rows.
const OutputScreen = () => {
  return (
    <div className="screen">
      <OutputScreenRow/>
      <OutputScreenRow/>
    </div>
  )
}
  
// Export Output Screen.
export default OutputScreen;
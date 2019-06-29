import React from 'react';
import tabData from './data.js';
import Tab from './Tab';

class Tabs extends React.Component{
  constructor(){
    super();
    this.state = {
      tab: tabData
    };
  }

render(){
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {props.tabs.map(tab => {
              return(
                <>
                tab={this.state.tab}
                </>
              );
            })}
      </div>
    </div>
  );
}}

// Make sure to use PropTypes to validate your types!
export default Tabs;

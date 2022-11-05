import React from 'react';

import Page1 from './page1';

import Page2 from './page2';

class Parte1 extends React.Component {
    state = {
        page : 0,
        userToShow : null
    };
  
    render() { if (this.state.page === 0) {
      return <div>
        <Page1 setPage1={this.setPage1}></Page1>
      </div>;
    } else {
      //console.log(this.state.userToShow)
      return <Page2 user={this.state.userToShow} setPage0={this.setPage0}></Page2>
      
    }
    }
  
    setPage1 = (user) => {
      this.setState({page : 1, userToShow : user})
    }
  
    setPage0 = () => {
      this.setState({page : 0, userToShow : null})
    }
}
 
export default Parte1;
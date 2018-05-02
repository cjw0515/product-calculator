import React, { Component } from 'react';
import { Perchase, PerchaseByProduct } from '../components/perchase';
import { Tabs, Tab } from 'material-ui/Tabs';
  
class PerchaseContainer extends Component{

    constructor(props) {
        super(props);
        this.state = {
          value: 'a',
        };
      }
    
      handleChange = (value) => {
        this.setState({
          value: value,
        });
      };
    
    render(){

        const { perchaseList, totalPerchase } = this.props;

        return(
            <div className="container">
                <div className="perchaseList">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        tabItemContainerStyle={{background: 'white'}}
                    >
                    <Tab 
                        label="구매내역" 
                        value="a"
                        style={{color:"black"}}                         
                    >
                        <Perchase
                            perchaseList={ perchaseList }
                            totalPerchase={ totalPerchase }
                        /> 
                    </Tab>
                    <Tab
                        label="제품별구매내역"
                        value="b"
                        style={{color:"black"}}                                                 
                    >
                        <PerchaseByProduct
                            perchaseList={ perchaseList }
                            totalPerchase={ totalPerchase }
                        />
                    </Tab>
                    </Tabs>   
                </div>
            </div>
        );
    }
}

export default PerchaseContainer;
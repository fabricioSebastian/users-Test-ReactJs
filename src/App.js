import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
class App extends Component{

  renderHome = () => <HomeContainer />;
  renderCustomerListContainer = () => <CustomersContainer />;
  renderCustomerNewContainer = () => <h1>new</h1>;

 render(){
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={this.renderHome} />
        <Route exact path="/customers" component={this.renderCustomerListContainer} />
        <Switch>
          <Route path="/customers/new" component={this.renderCustomerNewContainer} /> 
          <Route path="/customers/:dni" component={CustomerContainer} />          
        </Switch>      
      </div>
    </Router>
    );
  }

}
export default App;
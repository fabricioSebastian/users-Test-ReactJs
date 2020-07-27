import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import CustomerActions from './../components/CustomerActions';

class HomeContainer extends Component {
    handleOnClick = () => {
        this.props.history.push('/customers');
    }


    render () {
        return(
                <div> 
                    <AppFrame 
                    header='Home'
                    body={
                        <div>
                            Esta es la pantalla home
                            <CustomerActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>                                
                            </CustomerActions>
                        </div>
                    }
                    ></AppFrame>             
                </div>

            );
    }
}

HomeContainer.propTypes = {
   
}
/** withrouter es un decoration que agraga funcionalidades como history siempre al componente */
export default withRouter(HomeContainer);
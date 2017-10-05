import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCustomer, updateCustomer } from '../actions/creators';
import { Link } from 'react-router';

interface ICustomerUpdateProps extends React.Props<any>{
    token?: string,
    localSaveCustomer?: Function
}

interface ICustomerUpdateState {
    firstName: string,
    lastName: string,
    city: string,
    country: string,
    phone: string
}

function mapStateToProps(state: any, ownProps: any) { 
    return {
        token: state.customerReducer.token,
        customer: state.customerReducer.customer
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        localGetCustomer: bindActionCreators(getCustomer, dispatch),
        localUpdateCustomer: bindActionCreators(updateCustomer, dispatch)
    };
}

class CustomerUpdate extends React.Component<any, ICustomerUpdateState> {
    constructor(props: ICustomerUpdateProps) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            city: '',
            country: '',
            phone: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLastnameChange = this.handleLastnameChange.bind(this);
        this.handleCiudadChange = this.handleCiudadChange.bind(this);
        this.handlePaisChange = this.handlePaisChange.bind(this);
        this.handleTelefonoChange = this.handleTelefonoChange.bind(this);
        this.handleUpdateCustomer = this.handleUpdateCustomer.bind(this)
    }

    componentDidMount(){
        this.props.localGetCustomer(this.props.token, this.props.params.id);
    }

    componentWillReceiveProps(newProps) { 
        this.setState({
            firstName: newProps.customer.firstName, 
            lastName: newProps.customer.lastName,
            city: newProps.customer.city,
            country: newProps.customer.country,
            phone: newProps.customer.phone
        });
    }

    render() {
        let {
            firstName,
            lastName,
            city,
            country,
            phone
        } = this.state;
        return <div className="container-fluid container-background">
            <div className="row full-height-row">
                <div className="col-md-3 hidden-sm"></div>
                <div className="col-sm-12 col-md-6">
                    <div className="text-center">
                        <div className="panel panel-default panel-list text-left">
                            <div className="panel-body">
                                <h3>Modificar Cliente</h3>
                                <br/>
                                <div>
                                    <div className="form-group">
                                        <label >Nombres</label>
                                        <input type="text" className="form-control" placeholder="Nombres"
                                        onChange={this.handleNameChange} value={firstName}/>
                                    </div>
                                    <div className="form-group">
                                        <label >Apellidos</label>
                                        <input type="text" className="form-control" placeholder="Apellidos"
                                        onChange={this.handleLastnameChange} value={lastName}/>
                                    </div>
                                    <div className="form-group">
                                        <label >Ciudad</label>
                                        <input type="text" className="form-control" placeholder="Ciudad"
                                        onChange={this.handleCiudadChange} value={city}/>
                                    </div>
                                    <div className="form-group">
                                        <label >Pais</label>
                                        <input type="text" className="form-control" placeholder="Pais"
                                        onChange={this.handlePaisChange} value={country}/>
                                    </div>
                                    <div className="form-group">
                                        <label >Teléfono</label>
                                        <input type="tel" className="form-control" placeholder="Teléfono"
                                        onChange={this.handleTelefonoChange} value={phone}/>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button className="btn btn-primary" onClick={(e)=> this.handleUpdateCustomer()}>Guardar</button>
                                    &nbsp;&nbsp;&nbsp;
                                    <Link to={'/customers'} className="btn btn-danger">Cancelar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 hidden-sm"></div>
            </div>
        </div>;
    };

    handleNameChange(event: any){
        let newVal = event.currentTarget.value;
        this.setState({firstName: newVal});
    }
    handleLastnameChange(event: any){
        let newVal = event.currentTarget.value;
        this.setState({lastName: newVal});
    }
    handleCiudadChange(event: any){
        let newVal = event.currentTarget.value;
        this.setState({city: newVal});
    }
    handlePaisChange(event: any){
        let newVal = event.currentTarget.value;
        this.setState({country: newVal});
    }
    handleTelefonoChange(event: any){
        let newVal = event.currentTarget.value;
        this.setState({phone: newVal});
    }

    handleUpdateCustomer(){
        let { token, localUpdateCustomer, customer } = this.props
        let newCustomer = {
            id: customer.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            city: this.state.city,
            country: this.state.country,
            phone: this.state.phone
        };
        localUpdateCustomer(token, newCustomer);
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerUpdate);
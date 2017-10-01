import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCustomerList } from '../actions/creators';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';

interface ICustomerListProps extends React.Props<any>{
    token?: string,
    customers?: Array<any>,
    localGetCustomerList?: Function,
}

function mapStateToProps(state: any, ownProps: any) { 
    return {
        token: state.customerReducer.token,
        customers: state.customerReducer.customers
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        localGetCustomerList: bindActionCreators(getCustomerList, dispatch),
    };
}

class CustomerList extends React.Component<any,any> {
    constructor(props: ICustomerListProps) {
        super(props);
    }

    componentDidMount(){
        this.props.localGetCustomerList(this.props.token);
    }

    render() {
        let {customers} = this.props;
        return <div className="container-fluid container-background">
            <div className="row full-height-row">
                <div className="col-md-3 hidden-sm"></div>
                <div className="col-sm-12 col-md-6">
                    <div className="text-center">
                        <div className="panel panel-default panel-list text-left">
                            <div className="panel-body">
                                <h3>Lista de clientes</h3>
                                <table className="table table-bordered table-hover table-condensed">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nombre Completo</th>
                                            <th>Ciudad</th>
                                            <th>País</th>
                                            <th>Teléfono</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customers.map((item) =>  
                                        {
                                            return <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{`${item.firstName} ${item.lastName}`}</td>
                                                <td>{item.city}</td>
                                                <td>{item.country}</td>
                                                <td>{item.phone}</td>
                                                <td>
                                                    <Link to={`/customerview/${item.id}`}><span className="glyphicon glyphicon-eye-open list-icon text-primary"></span></Link>
                                                    <Link to={`/customeredit/${item.id}`}><span className="glyphicon glyphicon-pencil list-icon text-primary"></span></Link>
                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                                <div className="text-right">
                                    <Link to="/customercreate" className="btn btn-primary">Agregar Cliente</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 hidden-sm"></div>
            </div>
        </div>;
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
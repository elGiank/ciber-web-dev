import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCustomerList } from '../actions/creators';

interface ICustomerListProps extends React.Props<any>{
    token?: string,
    localGetCustomerList?: Function,
}

function mapStateToProps(state: any, ownProps: any) { 
    return {
        token: state.customerReducer.token,
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
        console.log(this.props.token);
        this.props.localGetCustomerList(this.props.token);
    }

    render() {
        return <div className="container-fluid container-background">
            <div className="row full-height-row">
                <div className="col-md-3 hidden-sm"></div>
                <div className="col-sm-12 col-md-6">
                    <div className="text-center">
                        <div className="panel panel-default panel-list text-left">
                            <div className="panel-body">
                                <h3>Lista de clientes</h3>
                                <ul className="list-group">
                                    <li className="list-group-item">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item">Morbi leo risus</li>
                                    <li className="list-group-item">Porta ac consectetur ac</li>
                                    <li className="list-group-item">Vestibulum at eros</li>
                                </ul>
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
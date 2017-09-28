import * as React from "react";

export class Login extends React.Component<any, any> {
    render() {
        return <div className="container-fluid container-login">
            <div className="row full-height-row">
                <div className="col-md-3 hidden-sm"></div>
                <div className="col-sm-12 col-md-6">
                    <div className="text-center">
                        <div className="panel panel-default panel-login text-left">
                            <div className="text-center">
                                <div><img src="assets/imgs/reactdux.png" className="login-header-img" /></div>
                            </div>
                            <div className="panel-body">
                                <h3>Iniciar sesión</h3>
                                <form>
                                    <div className="form-group">
                                        <label >Email</label>
                                        <input type="email" className="form-control"  placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <label >Password</label>
                                        <input type="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <button className="btn btn-primary btn-block">Entrar</button>
                                </form>
                            </div>
                        </div>
                    </div>        
                </div>
                <div className="col-md-3 hidden-sm"></div>
            </div>
        </div>
    }
}
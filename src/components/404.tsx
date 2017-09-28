import * as React from 'react';

export function NotFound (){
    return (
        <div className="container-fluid container-login">
            <div className="row full-height-row">
                <div className="col-sm-12">
                    <div className="text-center">
                        <h1 className="page-not-found">Página no encontrada :(
                            <br/>
                            <small className="page-not-found-small">creo que deberias regresar...</small>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

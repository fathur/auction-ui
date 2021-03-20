import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <div className="jumbotron text-center w-100">
                <div className="container">
                    <h1 className="mb-5"><span className="display-3 text-danger">#1</span> Auction Platform In The Universe</h1>

                    <input className="form-control form-control-lg" 
                        autoFocus
                        type="text" 
                        placeholder="Search your wanted item here" />
                </div>
            </div>
        );
    }
}

export default Hero;
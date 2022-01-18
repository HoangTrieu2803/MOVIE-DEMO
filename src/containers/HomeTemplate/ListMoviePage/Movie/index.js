import React, { Component } from 'react';
import {Link} from "react-router-dom";
export default class Movie extends Component {
    render() {
        const {movie} = this.props;
        return (
            <div className='col-md-3'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={movie.hinhAnh} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{movie.tenPhim}</h5>
                        <Link className='btn btn-success' to={`/detail/${movie.maPhim}`} >Detail</Link>
                    </div>
                </div>

            </div>
        )
    }
}

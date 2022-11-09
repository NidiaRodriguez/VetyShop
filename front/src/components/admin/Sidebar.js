import React from 'react'
import {Link} from "react-router-dom"

const sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="List-unstyled components">
                    <li>
                        <Link to="/"><i className='fa fa-tachometer'></i>Administracion</Link>
                    </li>

                    <li>
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className='dropdown-tooggle'><i
                            className="fa fa-product-hunt"></i>productos</a>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                                <Link to="/ProductList"><i className="fa fa-clipboard"></i> Todos</Link>
                            </li>

                            <li>
                                <Link to="/nuevoProducto"><i className="fa fa-plus"></i> Crear</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/admin/orders"><i className="fa fa-shopping-basket"></i> Pedidos</Link>
                    </li>

                    <li>
                        <Link to="/admin/users"><i className="fa fa-users"></i> Usuarios</Link>
                    </li>

                    <li>
                        <Link to="/admin/reviews"><i className="fa fa-star"></i> Opiniones</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default sidebar
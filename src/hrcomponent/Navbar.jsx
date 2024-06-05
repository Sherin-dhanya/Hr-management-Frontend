import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="nav justify-content-end w-600 container"  >
            <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary" >
                <div class="container-fluid">

                    <div class="d-flex">

                        <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
                            <img
                                src="https://st4.depositphotos.com/11956860/28789/v/450/depositphotos_287891936-stock-illustration-illustration-icon-concept-sustainable-employee.jpg"
                                height="90"
                                alt="MDB Logo"
                                loading="lazy"
                                style={{ marginTop: 2 }}
                            />
                        </a>

                        <form class="input-group w-auto my-auto d-none d-sm-flex">
                            <input
                                autocomplete="off"
                                type="search"
                                class="form-control rounded"
                                placeholder="Search"
                                style={{ minWidth: 125 }}
                            />
                            <span class="input-group-text border-0 d-none d-lg-flex"
                            ><i class="fas fa-search"></i
                            ></span>
                        </form>
                    </div>
                    <div class="d-flex justify-content-end">
                        <ul class="navbar-nav flex-row d-none d-md-flex">


                            <li class="nav-item me-3 me-lg-1">
                                <a class="nav-link" href="#">
                                    <span><i class="fas fa-flag fa-lg"></i></span>
                                </a>
                            </li>

                            <li class="nav-item me-3 me-lg-1">
                                <a class="nav-link" href="#">
                                    <span><i class="fas fa-video fa-lg"></i></span>
                                </a>
                            </li>

                            <li class="nav-item me-3 me-lg-1">
                                <a class="nav-link" href="#">
                                    <span><i class="fas fa-shopping-bag fa-lg"></i></span>
                                </a>
                            </li>

                            <li class="nav-item me-3 me-lg-1">
                                <a class="nav-link" href="#">
                                    <span><i class="bi bi-bell-fill"></i></span>
                                    <span class="badge rounded-pill badge-notification bg-danger">2</span>
                                </a>
                            </li>
                        </ul>

                        <ul class="navbar-nav flex-row">


                            <li class="nav-item dropdown me-3 me-lg-1">
                                <a
                                    data-mdb-dropdown-init
                                    class="nav-link dropdown-toggle hidden-arrow"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    aria-expanded="false">
                                    <i class="bi bi-bookmarks"></i>

                                    <span class="badge rounded-pill badge-notification bg-danger">4</span>
                                </a>


                            </li>

                            <li class="nav-item dropdown me-3 me-lg-1">
                                <a
                                    data-mdb-dropdown-init
                                    class="nav-link dropdown-toggle hidden-arrow"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <i class="bi bi-envelope-at-fill"></i>
                                    <span class="badge rounded-pill badge-notification bg-danger">12</span>
                                </a>

                            </li>
                            <li class="nav-item me-3 me-lg-1">
                                <a class="nav-link d-sm-flex align-items-sm-center" href="#">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                                        class="rounded-circle"
                                        height="22"
                                        alt="Black and White Portrait of a Man"
                                        loading="lazy" />
                                    <strong class="d-none d-sm-block ms-1">John</strong>
                                </a>
                            </li>
                        </ul>

                    </div>
                    </div>
            </nav>
        </div>
    )
};

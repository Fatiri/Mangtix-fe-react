import Route from "react-router-dom/es/Route";
import Header from "../../layout/customer/Header";
import React from "react";
import Admin from "../../layout/admin/Admin";
import Footer from "../../layout/customer/Footer";
import AdminFooter from "../../layout/admin/AdminFooter";
import AdminNavBar from "../../layout/admin/AdminNavBar";
import EventContainer from "../../modules/events/EventContainer";
import BookingContainer from "../../modules/booking/BookingContainer";
import ListSchedule from "../../modules/schedules/components/ListSchedule";
import FormLogin from "../../modules/login/components/FormLogin";
import TicketForm from "../../modules/tickets/components/component-admin/TicketForm";
import {Provider} from "react-redux";
import {createStore} from "redux";
import ticketReducer from "../../modules/tickets/reducer/TicketReducer";
import loginReducer from "../../modules/login/reducer/LoginReducer";
import FormRegistration from "../../modules/register/components/FormRegistration";
import RegistrationManagementContainer from "../../modules/register/RegistrationManagementContainer";
import FormRegisterCustomer from "../../modules/register/components/FormRegisterCustomer";
import registrationReducer from "../../modules/register/reducer/RegistrationReducer";
import TicketDetail from "../../modules/tickets/components/component-admin/TicketDetail";
import TicketListAdmin from "../../modules/tickets/components/component-admin/TicketListAdmin";
import TicketContainer from "../../modules/tickets/TicketContainer";
import EventDetail from "../../modules/events/components/adminComponent/EventDetail";
import EventForm from "../../modules/events/components/adminComponent/EventForm";
import EventByCompany from "../../modules/events/components/adminComponent/EventByCompany";
import CategoryContainer from "../../modules/categories/CategoryContainer";
import BookingFormAdmin from "../../modules/booking/components/component-admin/BookingListAdmin";
import bookingReducer from "../../modules/booking/reducer/BookingReducer";
import FormLocationEvent from "../../modules/location/components/FormLocationEvent";
import EventAdmin from "../../modules/events/components/adminComponent/EventAdmin";
import EventUpdate from "../../modules/events/components/adminComponent/EventUpdate";
import Main from "../../main/Main";
import mainReducer from "../../main/MainReducer";
import Cart from "../../layout/customer/Cart";
import paymentReducer from "../../modules/payment/reducer/PaymentReducer";
import PaymentList from "../../modules/payment/components/componenAdmin/PaymentList";
import ListEvent from "../../modules/events/components/ListEvent";
import EventSchedule from "../../layout/customer/EventSchedule";


// public route
export const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) => (
            <>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">

                        <Header/> {/* HEADER ALWAYS VISIBLE */}
                        <Provider store={createStore(mainReducer)} >
                        <Main/>
                        </Provider>

                    </div>
                    <Footer/>
                </div>
            </>
        )}
        />
    )
}

export const RegistrationRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) => (
            <>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">

                        <Header/> {/* HEADER ALWAYS VISIBLE */}
                            <FormRegistration/>
                    </div>
                    <Footer/>
                </div>
            </>
        )}
        />
    )
}

export const RegistrationManagementRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) => (
            <>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">

                        <Header/> {/* HEADER ALWAYS VISIBLE */}
                            <Provider store={createStore(registrationReducer)}>
                            <RegistrationManagementContainer/>
                            </Provider>
                    </div>
                    <Footer/>
                </div>
            </>
        )}
        />
    )
}

export const RegistrationCustomerRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) => (
            <>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">

                        <Header/> {/* HEADER ALWAYS VISIBLE */}

                            <Provider store={createStore(registrationReducer)}>
                            <FormRegisterCustomer/>
                            </Provider>

                    </div>
                    <Footer/>
                </div>
            </>
        )}
        />
    )
}

export const LoginRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) => (
            <>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">

                        <Header/> {/* HEADER ALWAYS VISIBLE */}
                        <div className="container-fluid" id="container-wrapper">
                            <Provider store={createStore(loginReducer)}>
                            <FormLogin/>
                            </Provider>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </>
        )}
        />
    )
}

export const BookingRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) => (
            <>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">

                        <Header/> {/* HEADER ALWAYS VISIBLE */}
                        <div className="container-fluid" id="container-wrapper">
                            <BookingContainer/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </>
        )}
        />
    )
}




export const EventScheduleRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) => (
            <>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">

                        <Header/> {/* HEADER ALWAYS VISIBLE */}
                            <EventSchedule/>
                    </div>
                    <Footer/>
                </div>
            </>
        )}
        />
    )
}
export const TicketRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) => (
            <>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">

                        <Header/> {/* HEADER ALWAYS VISIBLE */}
                            <TicketContainer/>
                    </div>
                    <Footer/>
                </div>
            </>
        )}
        />
    )
}
export const EventRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) => (
            <>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">

                        <Header/> {/* HEADER ALWAYS VISIBLE */}
                            <ListEvent/>
                    </div>
                    <Footer/>
                </div>
            </>
        )}
        />
    );
};

export const CartRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) => (
            <>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">

                        <Header/> {/* HEADER ALWAYS VISIBLE */}
                        <Cart/>
                    </div>
                    <Footer/>
                </div>
            </>
        )}
        />
    );
};



// private route

export const AdminRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            component={(props) => (

                <>

                         <Admin {...props} />
                        <div id="content-wrapper" className="d-flex flex-column">
                            <div id="content">
                                <AdminNavBar/>
                                <div className="container-fluid" id="container-wrapper">
                                </div>
                            </div>
                            <AdminFooter/>
                        </div>
                </>
            )}
        />
    );
};



export const TicketFormRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                <>
                    <Admin {...props}/>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <AdminNavBar/>
                            <div className="container-fluid" id="container-wrapper">

                                <TicketForm/>

                            </div>
                        </div>
                        <AdminFooter/>
                    </div>
                </>
            )}
        />
    );
};

export const TicketDetailRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                <>
                    <Admin {...props}/>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <AdminNavBar/>
                            <div className="container-fluid" id="container-wrapper">
                                    <TicketDetail/>
                            </div>
                        </div>
                        <AdminFooter/>
                    </div>
                </>
            )}
        />
    );
};
export const TicketListRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                <>
                    <Admin {...props}/>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <AdminNavBar/>
                            <div className="container-fluid" id="container-wrapper">

                                    <TicketListAdmin/>
                            </div>
                        </div>
                        <AdminFooter/>
                    </div>
                </>
            )}
        />
    )
}

export const EventDetailRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                <>
                    <Admin {...props}/>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <AdminNavBar/>
                            <div className="container-fluid" id="container-wrapper">

                                <EventDetail/>
                            </div>
                        </div>
                        <AdminFooter/>
                    </div>
                </>
            )}
        />
    )
}

export const EventFormRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                <>
                    <Admin {...props}/>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <AdminNavBar/>
                            <div className="container-fluid" id="container-wrapper">

                                <EventForm/>
                            </div>
                        </div>
                        <AdminFooter/>
                    </div>
                </>
            )}
        />
    )
}
export const EventUpdateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                <>
                    <Admin {...props}/>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <AdminNavBar/>
                            <div className="container-fluid" id="container-wrapper">

                                <EventUpdate/>
                            </div>
                        </div>
                        <AdminFooter/>
                    </div>
                </>
            )}
        />
    )
}

export const EventByCompanyRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                <>
                    <Admin {...props}/>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <AdminNavBar/>
                            <div className="container-fluid" id="container-wrapper">

                                <EventByCompany/>
                            </div>
                        </div>
                        <AdminFooter/>
                    </div>
                </>
            )}
        />
    )
}
export const EventLocationRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                <>
                    <Admin {...props}/>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <AdminNavBar/>
                            <div className="container-fluid" id="container-wrapper">

                                <FormLocationEvent/>
                            </div>
                        </div>
                        <AdminFooter/>
                    </div>
                </>
            )}
        />
    )
}

export const EventAdminRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                <>
                    <Admin {...props}/>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <AdminNavBar/>
                            <div className="container-fluid" id="container-wrapper">

                                <EventAdmin/>
                            </div>
                        </div>
                        <AdminFooter/>
                    </div>
                </>
            )}
        />
    )
}

export const CategoryRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                <>
                    <Admin {...props}/>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <AdminNavBar/>
                            <div className="container-fluid" id="container-wrapper">
                                <CategoryContainer/>
                            </div>
                        </div>
                        <AdminFooter/>
                    </div>
                </>
            )}
        />
    )
}

export const BookingRouteAdmin = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                <>
                    <Admin {...props}/>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <AdminNavBar/>
                            <div className="container-fluid" id="container-wrapper">
                                <Provider store={createStore(bookingReducer)}>
                                <BookingFormAdmin/>
                                </Provider>
                            </div>
                        </div>
                        <AdminFooter/>
                    </div>
                </>
            )}
        />
    )
}
export const PaymentRouteAdmin = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                <>
                    <Admin {...props}/>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <AdminNavBar/>
                            <div className="container-fluid" id="container-wrapper">
                                <Provider store={createStore(paymentReducer)}>
                                    <PaymentList/>
                                </Provider>
                            </div>
                        </div>
                        <AdminFooter/>
                    </div>
                </>
            )}
        />
    )
}

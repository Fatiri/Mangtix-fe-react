import Route from "react-router-dom/es/Route";
import Header from "../../layout/customer/Header";
import React from "react";
import Admin from "../../layout/admin/Admin";
import Footer from "../../layout/customer/Footer";
import AdminFooter from "../../layout/admin/AdminFooter";
import AdminNavBar from "../../layout/admin/AdminNavBar";
import EventContainer from "../../modules/events/EventContainer";
import RegisterContainer from "../../modules/register/RegisterContainer";
import LoginContainer from "../../modules/login/LoginContainer";
import BookingContainer from "../../modules/booking/BookingContainer";
import TicketList from "../../modules/tickets/components/TicketList";
import ListSchedule from "../../modules/schedules/components/ListSchedule";


// public route

export const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) => (
            <>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">

                        <Header/> {/* HEADER ALWAYS VISIBLE */}
                        <div className="container-fluid" id="container-wrapper">
                        </div>
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
                        <div className="container-fluid" id="container-wrapper">
                            <RegisterContainer/>
                        </div>
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
                            <LoginContainer/>
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

export const TicketListRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) => (
            <>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">

                        <Header/> {/* HEADER ALWAYS VISIBLE */}
                        <div className="container-fluid" id="container-wrapper">
                            <TicketList/>
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
                        <div className="container-fluid" id="container-wrapper">
                            <ListSchedule/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </>
        )}
        />
    )
}

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

export const EventsRoute = ({component: Component, ...rest}) => {
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
                                <EventContainer/>
                            </div>
                        </div>
                        <AdminFooter/>
                    </div>
                </>
            )}
        />
    );
};

import React, {Component} from 'react';

class AdminFooter extends Component {
    render() {
        return (
            <>
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>copyright &copy; 2019 - developed by
                                <b><a href="#" target="_blank"> MangTix</a></b>
                            </span>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default AdminFooter;

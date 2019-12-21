import React, {Component} from 'react';

class CategoryList extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card mb-4">
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Dropdowns Basic</h6>
                            </div>
                            <div className="card-body">
                                <p> Any single <code className="highlighter-rouge">.btn</code> can be turned into a
                                    dropdown toggle with
                                    some markup changes. Here’s how you can put them to work with either <code
                                        className="highlighter-rouge">&lt;button&gt;</code> elements: </p>
                                <div className="dropdown mb-3">
                                    <button className="btn btn-primary dropdown-toggle" type="button"
                                            id="dropdownMenuButton"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown button
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                                <p>And with <code className="highlighter-rouge">&lt;a&gt;</code> elements:</p>
                                <div className="dropdown">
                                    <a className="btn btn-primary dropdown-toggle" href="#" role="button"
                                       id="dropdownMenuLink"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown
                                        link </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card mb-4">
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Dropdowns Sizing</h6>
                            </div>
                            <div className="card-body">
                                <p>Button dropdowns work with buttons of all sizes, including default and split dropdown
                                    buttons.</p>
                                <div className="btn-group mb-1">
                                    <button className="btn btn-primary btn-lg dropdown-toggle" type="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                        Large button
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                                <div className="btn-group mb-1">
                                    <button className="btn btn-primary btn-lg" type="button">
                                        Large split button
                                    </button>
                                    <button type="button"
                                            className="btn btn-lg btn-primary dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <button className="btn btn-primary btn-sm dropdown-toggle" type="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                        Small button
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <button className="btn btn-primary btn-sm" type="button">
                                        Small split button
                                    </button>
                                    <button type="button"
                                            className="btn btn-sm btn-primary dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="card mb-4">
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Dropdown Basic with Color</h6>
                            </div>
                            <div className="card-body">
                                <p>The best part is you can do this with any button variant, too:</p>
                                <div className="btn-group mb-1">
                                    <button type="button" className="btn btn-primary dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                        Primary
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                                <div className="btn-group mb-1">
                                    <button type="button" className="btn btn-secondary dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                        Secondary
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                                <div className="btn-group mb-1">
                                    <button type="button" className="btn btn-success dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                        Success
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                                <div className="btn-group mb-1">
                                    <button type="button" className="btn btn-info dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                        Info
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                                <div className="btn-group mb-1">
                                    <button type="button" className="btn btn-warning dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                        Warning
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                                <div className="btn-group mb-1">
                                    <button type="button" className="btn btn-danger dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                        Danger
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="card mb-4">
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Dropdown Split Button with Color</h6>
                            </div>
                            <div className="card-body">
                                <p>Similarly, create split button dropdowns with virtually the same markup as single
                                    button dropdowns,
                                    but with the addition of <code
                                        className="highlighter-rouge">.dropdown-toggle-split</code> for proper
                                    spacing around the dropdown caret.</p>
                                <p>We use this extra class to reduce the horizontal <code
                                    className="highlighter-rouge">padding</code> on
                                    either side of the caret by 25% and remove the <code
                                        className="highlighter-rouge">margin-left</code>
                                    that’s added for regular button dropdowns. Those extra changes keep the caret
                                    centered in the split
                                    button and provide a more appropriately sized hit area next to the main button.</p>
                                <div className="btn-group mb-1">
                                    <button type="button" className="btn btn-primary">Primary</button>
                                    <button type="button"
                                            className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                                <div className="btn-group mb-1">
                                    <button type="button" className="btn btn-secondary">Secondary</button>
                                    <button type="button"
                                            className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                                <div className="btn-group mb-1">
                                    <button type="button" className="btn btn-success">Success</button>
                                    <button type="button"
                                            className="btn btn-success dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                                <div className="btn-group mb-1">
                                    <button type="button" className="btn btn-info">Info</button>
                                    <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                                <div className="btn-group mb-1">
                                    <button type="button" className="btn btn-warning">Warning</button>
                                    <button type="button"
                                            className="btn btn-warning dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                                <div className="btn-group mb-1">
                                    <button type="button" className="btn btn-danger">Danger</button>
                                    <button type="button"
                                            className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card mb-4">
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Dropdown with Menu Contents</h6>
                            </div>
                            <div className="card-body">
                                <h6 className="font-weight-bold">Header</h6>
                                <p>Add a header to label sections of actions in any dropdown menu.</p>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                        Dropdown with Header Content
                                    </button>
                                    <div className="dropdown-menu">
                                        <h6 className="dropdown-header">Dropdown header</h6>
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                    </div>
                                </div>
                                <h6 className="font-weight-bold mt-3">Dividers</h6>
                                <p>Separate groups of related menu items with a divider.</p>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                        Dropdown with Divider Content
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CategoryList;

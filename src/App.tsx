import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import TimeRanges from './domain/components/TimeRanges/TimeRanges.component';
import './App.css';
import TimeRangeCreator from './domain/components/TimeRangeCreator/TimeRangeCreator.component';
import { Nav, Navbar } from "react-bootstrap";
const App = () => {
    return (
        <Router>
            <div className="container">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Time Ranges</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/">Verify</Link>
                            <Link to="/creator">Configure</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route path="/" exact component={TimeRanges}></Route>
                    <Route path="/creator" component={TimeRangeCreator}></Route>
                </Switch>
            </div>
        </Router>
    );
}
export default App;

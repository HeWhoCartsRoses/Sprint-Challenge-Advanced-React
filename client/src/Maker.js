import React from 'react';
import axios from 'axios';
import Chart from "./components/Chart";
class WomenMaker extends React.Component {
    constructor() {
        super();
        this.state = {
            runner: []
        };
    }
    componentDidMount() {

        axios.get("http://localhost:5000/api/players")
            .then(res => {
                res.data.sort((a, b) => (a.searches > b.searches) ? 1 : -1)
                this.setState({ runner: res.data });
            })
    }
    componentDidUpdate() {
    }
    render() {
        return (
            <div className="runners" >
                runners
                {this.state.runner.map(e => {
                    return (
                        <div>
                            <p>Runner name: {e.name}</p>
                            <p>Country: {e.country}</p>
                            <p>Searches: {e.searches}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}
export default WomenMaker;
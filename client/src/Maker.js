import React from 'react';
import axios from 'axios';
import Chart from "./components/Chart";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
function CustomTooltip({ payload, label, active }) {
    if (active) {
        return (

            <div className="custom-tooltip">
                <p className="name">{`${label} : ${payload[0].value}`}</p>
                <p className="intro">{`${payload[0].payload.country}`}</p>
            </div>
        );
    }
}
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
                <LineChart width={1000} height={500} data={this.state.runner}>
                    <Line type="monotone" dataKey="searches" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={CustomTooltip} />
                </LineChart>
            </div>
        );
    }
}
export default WomenMaker;
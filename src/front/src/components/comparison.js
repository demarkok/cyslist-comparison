import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Form from './form.js';
import Results from './results.js';
import MenuHeader from './menu.js';

let centerComponents = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
};

class Comparison extends React.Component {
    constructor() {
        super();

        this.state = {
            textEntered: false,
            firstName: "",
            secondName: ""
        };
    };

    renderResults = () => {
        if (this.state.textEntered) {
            return (
                <Results items={this.state.items}
                         center={centerComponents}
                         firstName={this.state.firstName}
                         secondName={this.state.secondName}
                         />
            );
        };
    };

    render() {
        return (
            <div style={centerComponents}> 
                <Form center={centerComponents}
                      sendToPreviousComponent={this.getData.bind(this)}
                      />

                {this.renderResults()}
            </div>
        );
    };

    getData = (name1, name2, items) => {
        console.log(items);
        this.setState({
            textEntered: true,
            firstName: name1,
            secondName: name2,
            items: items,
        });
    };
};

export default Comparison;
exports.centerComponents = centerComponents;
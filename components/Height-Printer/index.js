import React, { Component } from 'react';

class HeightPrinter extends Component {
    
    constructor(props) {
        super(props);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentWillMount(){
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions); 
    }

    componentWillReceiveProps(nextProps) {
        this.setState({height: nextProps.height});
    }

    updateDimensions() {
        let w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
            height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

            this.setState({width:width,height:height});
    }

    render() {
        return (
            <div>
                <h1>Height:{this.state.height} Width:{this.state.width}</h1>
            </div>
        );
    }
}

export default HeightPrinter;
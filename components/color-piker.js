import React from 'react';
import CellColor from './cellColor';


class ColorPiker extends React.Component {
    constructor() {
        super();
        this.state = {
            colorsList: [
                'red', 'green', 'blue', 'yellow'
            ],
            selectedColor: 'violet'
        }
    }

    handleClick(param) {
        this.setState({
            selectedColor: param
        })
    }

    render() {
        return (
            <div  className="container-whith-colors">
                <div className="box-with-colors">
                    {
                        this.state.colorsList.map((color, index) => {
                            return (
                                <div key={index}>
                                    <CellColor color={color} onClick={this.handleClick.bind(this)} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="colorful-box" style={ {'background': this.state.selectedColor} }>
                
                </div>
            </div>
        )
    }
}

export default ColorPiker;
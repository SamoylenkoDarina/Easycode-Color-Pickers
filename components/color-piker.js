import React from 'react';
import CellColor from './cellColor';


class ColorPiker extends React.Component {
    constructor() {
        super();
        this.state = {
            colorsList: [
                'red', 'green', 'blue', 'yellow'
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="box-with-colors">
                    {
                        this.state.colorsList.map((color, index) => {
                            return (
                                <div key={index}>
                                    <CellColor color={color} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="colorful-box">
                
                </div>
            </div>
        )
    }
}

export default ColorPiker;
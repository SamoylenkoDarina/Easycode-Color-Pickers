import React from 'react';

class CellColor extends React.Component {
    handleClick() {
        this.props.onClick(this.props.color)
    }
    render () {
        return (
            <div className="cell-color" style= { {'background': this.props.color} } onClick={this.handleClick.bind(this)}/>
        )
    }
}

export default CellColor;
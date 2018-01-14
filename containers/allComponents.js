import React from 'react';
import Counter from '../components/counter';
import ColorPicker from '../components/color-piker'

const AllComponents = () => {
    return (
        <div>
            <h2>Counter Components</h2>
            <Counter />
            <hr />
            <h2>Color Picker</h2>
            <ColorPicker />
        </div>
    )
};

export default AllComponents;
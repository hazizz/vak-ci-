import React, {useEffect, useState} from 'react';
import Main from "./Main";
import config from "./config.json";

const generateNewBgIndex = (): number => {
    return Math.floor(Math.random() * config.backgrounds.length - 1) + config.backgrounds.length - 1;
}

const App = () => {
    const [backgroundIndex, setBeckgroundIndex] = useState<number>(generateNewBgIndex());

    useEffect(() => {
        setTimeout(() => {
            let newIndex = generateNewBgIndex();
            while (backgroundIndex === newIndex) {
                newIndex = generateNewBgIndex();
            }
            setBeckgroundIndex(newIndex);
        }, 600000)
    });

    return (
        <Main backgroundIndex={1}/>
    );
};

export default App;
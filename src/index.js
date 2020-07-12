import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from './Slider';

const slides = [
    '<h2>1</h2><h2>2</h2>',
    '<div>3</div><div>4</div><div>5</div><div>6</div>',
    '<img src="https://placeimg.com/640/480/any" style="max-height: 100%; max-width: 100%;">',
    '<ul><li>a</li><li>b</li><li>c</li></ul>',
    '<div><img style="max-height: 100%; max-width: 100%;" src="https://placeimg.com/350/300/any"><img style="max-height: 100%; max-width: 100%;" src="https://placeimg.com/350/300/any"><img style="max-height: 100%; max-width: 100%;" src="https://placeimg.com/350/300/any"><img src="https://placeimg.com/350/300/any" style="max-height: 100%; max-width: 100%;"></div>'
];

const slidesInterval = 2;

const rootElement = document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
        <Slider slides={slides} slidesInterval={slidesInterval} />
    </React.StrictMode>,
    rootElement
);

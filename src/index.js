import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { withStyles } from 'material-ui/styles';

// Apply some reset
const styles = theme => ({
    '@global': {
        html: {
            background: '#ffffff',
            WebkitFontSmoothing: 'antialiased', // Antialiasing.
            MozOsxFontSmoothing: 'grayscale', // Antialiasing.
        },
        body: {
            margin: 0,
        },
    },
});

let AppWrapper = props => props.children;
AppWrapper = withStyles(styles)(AppWrapper);

ReactDOM.render(
    <AppWrapper>
        <App />
    </AppWrapper>
    ,
    document.getElementById('root')
);
registerServiceWorker();

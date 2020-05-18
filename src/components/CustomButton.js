/*
    CustomButton.js

    This file serves the custom styled button that was created for our application. By using the same
    button style across the site, we enforce usability principles of consistency and familiarity.
 */

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const CustomButton = withStyles({
    root: {
        border: 0,
        borderRadius: 3,
        color: "white",
        height: 24,
        paddingTop: "1.5em",
        paddingBottom: "1.25em",
        paddingLeft: "2em",
        paddingRight: "2em",
        fontWeight: "bold",
        marginLeft: "0.25em",
        marginRight: "0.25em",
    },
})(Button);

export default CustomButton;
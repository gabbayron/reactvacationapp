import React from 'react';
import Typography from "@material-ui/core/Typography";

const Footer = () => {
    return (<>
        <Typography variant='h6' align='center' gutterBottom>
            Bon Voyage
      </Typography>
        <Typography variant='body2' color='textSecondary' align='center'>
            {"Copyright © "}
                 Ron Gabbay October 2020
            {"."}
        </Typography>
        </>
        );
}

export default Footer;
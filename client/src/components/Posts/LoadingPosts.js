import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Autorenew from '@material-ui/icons/Autorenew'

const styles = {
    load: {
        textAlign: 'center',
        marginTop: 24,
        width: '100%'
    },
    loadIcon: {
        color: '#8B4513'
    }
}

const LoadingPosts = ({ classes }) => (
    <div className={classes.load}>
        <Autorenew className={classes.loadIcon} />
    </div>
)

export default withStyles(styles)(LoadingPosts)
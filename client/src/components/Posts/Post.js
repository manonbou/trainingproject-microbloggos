import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'

const styles = {
    paper: {
        padding: 8,
        display: 'flex', 
        marginTop: 8
    },
    avatar: {
        minWidth: 8,
        margin: '4px 12px 4px 4px'
    },
    username: {
        marginBottom: 8,
        color:'#800000'
    },
    time: {
        marginLeft: 8,
        color:'#d98880',
        fontSize: 14
    }
}


class Post extends Component {
    render () {
        const { classes, post } = this.props

        return (
            <Paper className={classes.paper}>
                <div 
                    className={classes.avatar}
                    style={{
                        backgroundColor: `#${post.user.id.slice(post.user.id.length - 3)}`
                    }}
                />
                <div>
                    <h3 className={classes.username}>
                        <Link to={`/profile/${post.user.id}`} className={classes.username}>{post.user.username}</Link>
                        <span className={classes.time}>{(new Date(post.createdAt)).toLocaleString()}</span>
                    </h3>
                    {post.text}
                </div>
            </Paper>
        )
    }
}

export default withStyles(styles)(Post)
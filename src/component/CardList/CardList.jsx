import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: 300,
        textAlign: "center",
        backgroundColor: "white",
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    pos: {
        marginBottom: 12,
        fontSize: 20,
        fontWeight: "bold",
    },
    email: {
        fontSize: 15,
        color: "crimson",
    },
    button: {
        color: "crimson",
    },
});

export default function CardList({ el }) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    {el.name}
                </Typography>
                {/* <Typography variant="h5" component="h2">
                    be{bull}nev{bull}o{bull}lent
                </Typography> */}
                <Typography className={classes.pos} color="textSecondary">
                    {el.username}
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    className={classes.email}
                >
                    {el.email}
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
        </Card>
    );
}

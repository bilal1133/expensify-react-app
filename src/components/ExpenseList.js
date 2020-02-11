import React from "react";
import SingleExpensePage from "./SingleExpensePage";
import {connect} from "react-redux";
import selectExpenses from "../display/visibility";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItemText from '@material-ui/core/ListItemText';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const ExpenseList= (props)=> {

    const classes = useStyles();
    return(
        <div>
            <List className={classes.root}>


            </List>
            {props.expenses.map((expense)=>
                (
                    <div>
                    <ListItem alignItems="flex-start">
                        <SingleExpensePage key={expense.id} {...expense}/>
                    </ListItem>
                     <Divider variant="inset" component="li" />
                </div>
                    )
            )
            }



        </div>
    )}
const mapStoreToState=(state)=>{
    return{
        expenses:selectExpenses(state.expenses, state.filters)
    }
}
export default connect(mapStoreToState)(ExpenseList)
import React from "react";
import moment from "moment";
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SingleDatePicker from "react-dates/esm/components/SingleDatePicker";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));
class ExpenseForm extends React.Component{
   constructor(props) {
       super(props);
       this.state={
           description: props.expense ?  props.expense.description :'',
           note: props.expense ? props.expense.note : '',
           createdAt:props.expense ? moment(props.expense.createdAt) : moment(),
           amount:props.expense ? props.expense.amount :'',
           focused:false,
           error:undefined
       }
   }
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState({error:true});
        }else{
            this.setState({error:undefined});
            console.log(this.state)
            this.props.onSubmit(
                {description:this.state.description,
                amount:parseFloat(this.state.amount),
                note:this.state.note,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }
    render() {
        return (

            <div>

                <Paper className={'paper'} elevation={3} >
                    {this.state.error ? <h1>Please Enter Description and Amount</h1>:undefined}
                    <form onSubmit={this.onSubmit}>

                        <TextField id="outlined-basic" label="Description" variant="outlined"
                                   value={this.state.description}
                                   placeholder='Description'
                                   onChange={(e)=>{
                                       e.persist();
                                       this.setState(()=>({description:e.target.value}))
                                   }}
                        />

                        <TextField id="outlined-basic" label="Amount" variant="outlined"
                                   type={'number'}
                                   placeholder={'Amount'}
                                   value={this.state.amount}
                                   onChange={(e)=>{
                                       e.persist();
                                       this.setState({amount:e.target.value})
                                   }}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Note"
                            multiline
                            rows="4"
                            defaultValue="Default Value"
                            variant="outlined"
                            value={this.state.note}
                            placeholder={'Note : to take a hint  (OPTIONAL)'}
                            onChange={(e)=>{
                                e.persist();
                                this.setState({note:e.target.value})
                            }
                            }
                        />

                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <SingleDatePicker
                            date={this.state.createdAt} // momentPropTypes.momentObj or null
                            onDateChange={date => this.setState({ createdAt:date })} // PropTypes.func.isRequired
                            focused={this.state.focused} // PropTypes.bool
                            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                        <Button variant="contained" color="primary" onClick={this.onSubmit}>
                            ADD EXPENSE
                        </Button>
                    </form>
                </Paper>



            </div>
        )


    }
}
export default ExpenseForm
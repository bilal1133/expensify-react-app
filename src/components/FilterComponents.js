import React from "react";
import {connect} from "react-redux";
import {setEndDate, setStartDate, setText, sortByAmount, sortByDate} from "../action/filtersAction";
import DateRangePicker from "react-dates/esm/components/DateRangePicker";
import SingleDatePicker from "react-dates/esm/components/SingleDatePicker";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
}
}));
class FilterComponents extends React.Component{
    constructor() {
        super();
        this.state={
            focusedInput:null
        }
    }
    render() {
        return (
            <div>

                <TextField id="filled-basic" label="Search" variant="filled"
                           placeholder={'Text'}
                           value={this.props.filters.text}
                           onChange={(e)=>{
                               this.props.dispatch(setText(e.target.value))
                           }}
                />

                <FormControl >
                    <InputLabel id="demo-controlled-open-select-label">Sort By</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        value={this.props.filters.sortBy}
                        onChange={(e)=>{
                            if(e.target.value === 'amount'){
                                this.props.dispatch(sortByAmount())
                            }else if(e.target.value === 'date'){
                                this.props.dispatch(sortByDate())
                            }
                        }}
                    >
                        <MenuItem value="date">
                            <em>Date</em>
                        </MenuItem>
                        <MenuItem value="amount">Amount</MenuItem>
                    </Select>
                </FormControl>

                {/* eslint-disable-next-line react/jsx-no-undef */}
                <DateRangePicker
                    startDate={this.props.filters.startingDate} // momentPropTypes.momentObj or null,
                    endDate={this.props.filters.endingDate} // momentPropTypes.momentObj or null,
                    onDatesChange={({ startDate, endDate }) => {
                        this.props.dispatch(setStartDate(startDate))
                        this.props.dispatch(setEndDate(endDate))
                    }} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    isOutsideRange={() => false}
                    showClearDates={true}
                />

            </div>

        )
    }
}
const mapStoreToState=(state)=>{
    return{
        filters:state.filters
    }
}

export default connect(mapStoreToState)(FilterComponents);
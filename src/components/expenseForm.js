import React from 'react';
import moment from 'moment';
import { SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseFrom extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
    }
    console.log(props)
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;  
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        }
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}));
        }
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}))
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.description && this.state.amount){
            console.log('Submitted')
            this.setState(() => ({errorMessage: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10)* 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }else{
            //console.log('Error')
            this.setState(() => ({errorMessage: 'Please provide description and amount'}))
        }
    }
    render() {
        return (
            <div>
            Expense From
                <p>{this.state.errorMessage}</p>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false }
                    />
                    <textarea
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        placeholder="Add a Note for the expense (optional)">
                    </textarea>
                    <button 
                        onClick={this.onSubmit}
                        >Add Expense</button>
                </form>
            </div>
        )
    }
}
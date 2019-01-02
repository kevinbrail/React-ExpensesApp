import {setStartDate, setEndDate} from '../../actions/filters'
import moment from 'moment'

test ('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual ({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })

});

test ('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual ({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })

});
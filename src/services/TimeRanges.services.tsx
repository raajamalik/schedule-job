import TimeRange from './../domain/models/TimeRange.model';
export class TimeRangesService {

    private timeRanges: Array<TimeRange> = [];
    
    public getAllRanges = ():Array<TimeRange> => {
        this.timeRanges = [{start: '13:00', end: '14:00'},{start: '15:00', end: '17:00'}]
        return this.timeRanges;
    }
}
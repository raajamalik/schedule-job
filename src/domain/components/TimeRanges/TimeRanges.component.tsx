//import H3 from '../../../components/Heading/Heading.component';
import TimeRangeCreator from '../TimeRangeCreator/TimeRangeCreator.component';
import TimeRangeList from '../TimeRangeList/TimeRangeList.component';

const TimeRanges = () => {
    return (
        <div>
            
            <TimeRangeCreator></TimeRangeCreator>            
            <TimeRangeList></TimeRangeList>
        </div>
    );
}

export default TimeRanges;
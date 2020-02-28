import { ScheduledTask, Task } from "./types";
import moment from 'moment';

const DATA_tasks: Task[] = [
    {id: '1',  name: {short: 'TA', long: 'Task A'}},
    {id: '2',  name: {short: 'TB', long: 'Task B'}}
]

const DATA_scheduled_tasks: ScheduledTask[] = [
    {id: '11', task: {id: '1'}, start: moment({hour: 10}), finish: moment({hour: 11})},
    {id: '22', task: {id: '1'}, start: moment({hour: 11, minute: 30 }), finish: moment({hour: 11})},
    {id: '33', task: {id: '2'}, start: moment({hour: 11, minute: 30 }), finish: moment({hour: 11})},
]

export { DATA_tasks, DATA_scheduled_tasks}
import { Moment } from "moment";
import * as moment from 'moment';


interface Volunteer {
    id: string,
    name?: string,
    email?: string,
    phone?: string,
    scheduled_tasks?: ScheduledTask[]
}

interface Area {
    id: string,
    name?: string,
    tasks?: Task[],
    timetable?: Timetable,
}

interface Task {
    id: string,
    name?: {
        short: string,
        long: string
    }
} 

interface ScheduledTask {
    id: string,
    start?: Moment,
    finish?: Moment,
    task?: Task
}

interface Timetable {
    id: string,
    start?: number,
    finish?: number,
    participants?: Volunteer[]
}


export {Volunteer, Area, Task, ScheduledTask, Timetable}
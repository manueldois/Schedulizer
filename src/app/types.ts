import { Moment } from "moment";

type Id = string

interface Area {
    id: Id,
    name?: string,
    time_start?: number,
    time_end?: number,
}

interface Task {
    id: Id,
    name?: {
        short: string,
        long: string
    },
    is_available_in_areas?: Area[],
    is_available_in_any_area?: boolean,
    color?: string,
    min_duration?: number
} 

interface ScheduledTask {
    id: Id,
    area?: Area,
    time_start?: Moment,
    time_end?: Moment,
    task?: Task
}

interface Volunteer {
    id: Id,
    name?: string,
    email?: string,
    phone?: string,
    scheduled_tasks?: ScheduledTask[]
}



export {Volunteer, Area, Task, ScheduledTask}
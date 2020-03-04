import { Pipe, PipeTransform } from '@angular/core';
import { ScheduledTask } from 'src/app/types';
import moment, { Moment } from 'moment';

@Pipe({
  name: 'scheduledTaskStyle'
})
export class ScheduledTaskStylePipe implements PipeTransform {

  transform(scheduled_task: ScheduledTask, timetable_start: Moment, timetable_end: Moment): any {

    const timeRelativeToTimetable = (time: Moment, timetable_start: Moment, timetable_end: Moment): number => {
      const timetable_duration = timetable_end.diff(timetable_start)

      const absolute_time_difference = time.diff(timetable_start)
      const relative_time_difference = absolute_time_difference / timetable_duration

      return relative_time_difference
    }

    const task_start_position = timeRelativeToTimetable(scheduled_task.start, timetable_start, timetable_end) // [0,1]
    const task_end_position = timeRelativeToTimetable(scheduled_task.end, timetable_start, timetable_end) // [0,1]   

    if(task_end_position < task_start_position){
      console.error("Task ends before it starts: ", scheduled_task)
    }

    return {
      'left.%': task_start_position * 100,
      'width.%': ( task_end_position - task_start_position ) * 100
    };
  }

}

declare module 'frappe-gantt' {
  interface Task {
    id: string;
    name: string;
    start: string;
    end: string;
    progress: number;
    dependencies?: string;
    custom_class?: string;
  }

  interface GanttOptions {
    header_height?: number;
    column_width?: number;
    step?: number;
    view_modes?: string[];
    bar_height?: number;
    bar_corner_radius?: number;
    arrow_curve?: number;
    padding?: number;
    view_mode?: 'Day' | 'Week' | 'Month' | 'Year';
    date_format?: string;
    language?: string;
    custom_popup_html?: (task: Task) => string;
  }

  export default class Gantt {
    constructor(
      element: SVGElement | HTMLElement | string,
      tasks: Task[],
      options?: GanttOptions,
    );
  }
}

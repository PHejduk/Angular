
export class Task {
  id: number = 0;
  title: string = '';
  description: string = '';
  status: 'todo' | 'doing' | 'done' = 'todo';
  functionalityId: number = 0;
  important: boolean = false;


  constructor(title: string, description: string, status: 'todo' | 'doing' | 'done', functionalityId: number) {
    this.title = title;
    this.description = description;
    this.status = status;
    this.functionalityId = functionalityId;
  }
}
export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'doing' | 'done';
  functionalityId: number;
  important: boolean;
}

export interface Functionality {
  id: number;
  title: string;
  description: string;
}

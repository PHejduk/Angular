
export class Task {
  id: number = 0;
  title: string;
  description: string;
  status: 'todo' | 'doing' | 'done';
  functionalityId: number;

  constructor(title: string, description: string, status: 'todo' | 'doing' | 'done', functionalityId: number) {
    this.title = title;
    this.description = description;
    this.status = status;
    this.functionalityId = functionalityId;
  }
}
export interface Task {
  title: string;
  description: string;
  status: 'todo' | 'doing' | 'done';
  functionalityId: number;
}

export interface Functionality {
  id: number;
  title: string;
  description: string;
}

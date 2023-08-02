export interface GeneralInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
}
export interface DirectorInterface extends GeneralInterface{
    workDirectorTasks(): string;
}

export interface TeacherInterface extends GeneralInterface {
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
    workFromHome() {
        return 'Working from home';
    }

    getCoffeeBreak(){
        return 'Getting a coffee break';
    }

    workDirectorTasks(){
        return 'Getting to director tasks';
    }
}

export class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

export function createEmployee(salary: (number | string)): (Director | Teacher) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

export function isDirector(employee: (Director | Teacher)) {
    return employee instanceof Director;
}

export function executeWork(employee: (Director | Teacher)) {
    if (isDirector(employee)) {
        return (employee as Director).workDirectorTasks();
    }
    return (employee as Teacher).workTeacherTasks();
}

export type Subjects = ('Math' | 'History');

export function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    if (todayClass === 'History') {
        return 'Teaching History';
    }
}
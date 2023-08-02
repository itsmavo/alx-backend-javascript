export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [index:string]: any;
}

export interface Directors extends Teacher {
    numberofReports: number;
}

export interface printTeacherFunction {
    (firstName: string, lastName:string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

export interface StudentClassConstructorInt {
    new (firstName: string, lastName: string): StudentClassInt;
}

export interface StudentClassInt {
    workOnHomework(): string;
    displayName(): string;
}

export class StudentClass implements StudentClassInt {
    private _firstName!: string;
    private _lastName!: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this._firstName;
    }
}

export function createStudent(ctor: StudentClassConstructorInt, firstName: string, lastName: string): StudentClassInt {
    return new ctor(firstName, lastName);
}
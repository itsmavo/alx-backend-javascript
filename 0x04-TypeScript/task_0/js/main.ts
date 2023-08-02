export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentA: Student = {
    firstName: "Harry",
    lastName: "Potter",
    age:18,
    location: "Hogwards",
}

const studentB: Student = {
    firstName: "Hermoine",
    lastName: "Granjer",
    age:18,
    location: "Muggle",
}

const studentsList: Array<Student> = [
    studentA,
    studentB,
];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement =  document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");
const rowH: HTMLTableRowElement = thead.insertRow(0);
const cellAH: HTMLTableCellElement = rowH.insertCell(0);
const cellBH: HTMLTableCellElement = rowH.insertCell(1);

cellAH.innerHTML = "firstName";
cellBH.innerHTML = "location";
table.append(thead)

studentsList.forEach((student) => {
    const row: HTMLTableRowElement = tbody.insertRow(0);
    const cellA: HTMLTableCellElement = row.insertCell(0);
    const cellB: HTMLTableCellElement = row.insertCell(1);

    cellA.innerHTML = student.firstName;
    cellB.innerHTML = student.location;
});

table.append(tbody);
body.append(table);
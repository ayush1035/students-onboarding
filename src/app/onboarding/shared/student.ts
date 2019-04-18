export class Student {
  constructor(
    public id: number,
    public name: string,
    public category: string,
    public fatherName: string,
    public motherName: string,
    public dateOfBirth: string,
    public lastMarks: number,
    public documents: [false, false, false, false, false, false]
  ) {}
}

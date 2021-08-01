const faker = require('faker');
const theName = faker.name.firstName();
const theJob = faker.name.jobTitle();

export default class User {

    name: string;
    job: string;

    constructor() {
        this.name=theName;
        this.job=theJob;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getJob(): string {
        return this.job;
    }

    setJob(job: string): void {
        this.job = job;
    }
}
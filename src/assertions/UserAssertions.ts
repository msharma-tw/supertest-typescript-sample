export default class UserAssertions {

    _response: any;

    constructor(response: any) {
        this._response = response;
    }

    responseShouldHaveStatus(status: number): void {
        expect(this._response.status).toEqual(status);
    }

    responseShouldHaveName(name: string): void {
        expect(this._response.body.name).toEqual(name);
    }

    responseShouldHaveJob(job: string): void {
        expect(this._response.body.job).toEqual(job);
    }
}
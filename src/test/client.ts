import * as superteste from 'supertest';
import { baseURL } from '../resources/config';

export function client(): superteste.SuperTest<superteste.Test> {
    return superteste(baseURL);
    //return superteste('https://fakerestapi.azurewebsites.net/api/v1');
}

import { get, post } from '../../api/api';
import { StatusCodes } from '../../resources/constants';
import UserAssertions from '../../assertions/UserAssertions';

import User from '../../data/User';

describe('Reqres.in Test', function () {

    it('should fetch single user entry by id', async () => {

        const response = await get('/users?page=2');
        const userAssert = new UserAssertions(response);
        userAssert.responseShouldHaveStatus(StatusCodes.OK);
    });

    it('should create new user entry', async function () {

        const user = new User();
        user.setName('testaccount');
        const response = await post('/users', user);

        const userAssert = new UserAssertions(response);
        userAssert.responseShouldHaveStatus(StatusCodes.CREATED);
        userAssert.responseShouldHaveName('testaccount');
    });

});

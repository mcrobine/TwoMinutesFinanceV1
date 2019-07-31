import {UserData} from './UserData';

export class UserLoggedIn {
  constructor(
    public success: boolean,
    public user: UserData,
  ) {}
}

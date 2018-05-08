export class UserClass {
  constructor(
    public name: string = '',
    public surname: string = '',
    public login: string = '',
    public password: string = '',
    public height: number = 0,
    public weight: number = 0,
    public isMale: boolean = false,
    public physicalActivityRatio: number = 0,
  ) {}
}

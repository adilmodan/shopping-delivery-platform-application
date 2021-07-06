export class User {

  phonenumber: number
  name: string
  email: string
  password: string
  created_at: Date;
  updated_at: Date;
  api_token: string;
  email_verified_at: string;

  constructor(phonenumber: number, name: string, email: string, password: string) {

    this.phonenumber = phonenumber;
    this.name = name;
    this.email = email;
    this.email_verified_at = null;
    this.password = password;
    this.created_at = new Date();
    this.updated_at = new Date();
    this.api_token = null;
    

  }
}

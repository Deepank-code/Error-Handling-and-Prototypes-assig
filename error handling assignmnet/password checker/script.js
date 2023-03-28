class User {
  constructor(username, password) {
    this.username = username;
    this._password = password;
  }

  get password() {
    return this._password.replace(/./g, "*");
  }

  set password(newPassword) {
    if (
      newPassword.length >= 8 &&
      /[A-Z]/.test(newPassword) &&
      /\d/.test(newPassword)
    ) {
      this._password = newPassword;
    } else {
      console.error(
        "Password must be at least 8 characters long and contain at least one number and one uppercase letter."
      );
    }
  }
}
const user = new User("john", "Password123");

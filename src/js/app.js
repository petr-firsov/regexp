export class Validator {
    constructor() {
    }
    validateUsername(username) {
        if (/[a-z]-_[0-9]/.test(username)  
        && /^-_[0-9]/.test(username)
        && /$-_[0-9]/.test(username)
        && /\[0-9][0-9][0-9][0-9]/.test(username)) {
            return true;
        } else {
            return false;
        }
    }
}
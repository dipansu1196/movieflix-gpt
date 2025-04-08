export const checkValidData = (fullname, email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    // Email and password validation for both sign in and sign up
    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
    
    // Name validation only for sign up
    if (fullname) {
        const isNameValid = /^[a-zA-Z]{3,}$/.test(fullname);
        if (!isNameValid) return "Name is not valid";
    }
    
    return null;
}

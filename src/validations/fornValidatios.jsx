// * @ Name: Form Validations
// * @ Since: Version 1.0
// * @ Description: This file contains all the validations that are used in the contact forms
// * @ Creator: Carlos Moctezuma aka @crdgom

const formValidations = {

    // * @ Name: Name Validation
    // * @ Since: Version 1.0
    // * @ Description: This part of the function validates the name field exist in the contact form
    // * @ -- if exist the field name, proceed to validate the field
    // * @ -- The name field must be minimum of 3 characters long and only letters are allowed
    // * @ -- If the field is empty or the validation is not passed, an error message is returned
    // * @ Creator: Carlos Moctezuma aka @crdgom

        name: (value) => {
            const nameRegex = /^[a-zA-Z\s]{3,}$/i;
            if (!value || !nameRegex.test(value)){
                return 'The name field must be minimum of 3 characters long'
            }
            return null;
        },

    // * @ Name: LastName Validation
    // * @ Since: Version 1.0
    // * @ Description: This part of the function validates the name field of the contact form
    // * @ -- The name field must be minimum of 2 characters long and only letters are allowed
    // * @ -- If the field is empty or the validation is not passed, an error message is returned
    // * @ Creator: Carlos Moctezuma aka @crdgom

    lastname: (value) => {
        const lastNameRegex = /^[a-zA-Z\s]{2,}$/i;
        if (!value || !lastNameRegex.test(value)){
            return 'The lastname field must be minimum of 2 characters long'
        }
    },

    // * @ Name: Email Validation
    // * @ Since: Version 1.0
    // * @ Description: This part of the function validates the email field of the contact form
    // * @ -- The email field must be a valid email address
    // * @ -- If the field is empty or the validation is not passed, an error message is returned
    // * @ Creator: Carlos Moctezuma aka @crdgom

    email: (value) => {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        if (!value || !emailRegex.test(value)){
            return 'The email field must be a valid email address'
        }
        return null;
    },

    // * @ Name: Password Validation
    // * @ Since: Version 1.0
    // * @ Description: This part of the function validates the password field of the contact form
    // * @ -- The password field must be minimum of 8 characters long, one uppercase, one lowercase, one number and one special character
    // * @ -- If the field is empty or the validation is not passed, an error message is returned
    // * @ Creator: Carlos Moctezuma aka @crdgom

    password: (value) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
        if (!value || !passwordRegex.test(value)){
            return 'The password field must be minimum of 8 characters long, one uppercase, one lowercase, one number and one special character'
        }
        return null;
    },

    // * @ Name: Password2 Validation
    // * @ Since: Version 1.0
    // * @ Description: This part of the function validates the password2 field of the contact form
    // * @ -- The password2 field must be the same as the password field
    // * @ -- If the field is empty or the validation is not passed, an error message is returned
    // * @ Creator: Carlos Moctezuma aka @crdgom

    password2: (value) => {
        const password = document.getElementById('password').value;
        if (!value || value !== password){
            return 'The passwords must match'
        }
        return null;
    },

    // * @ Name: Phone Validation
    // * @ Since: Version 1.0
    // * @ Description: This part of the function validates the phone field of the contact form
    // * @ -- The phone field must be 10 digits long
    // * @ -- If the field is empty or the validation is not passed, an error message is returned
    // * @ Creator: Carlos Moctezuma aka @crdgom

    phone: (value) => {
        const phoneRegex = /^[0-9]{10}$/i;
        if (!value || !phoneRegex.test(value)){
            return 'The phone field must be 10 digits long'
        }
        return null;
    },

    // * @ Name: Birthdate Validation
    // * @ Since: Version 1.0
    // * @ Description: This part of the function validates the birthdate field of the contact form
    // * @ -- The birthdate field must be in the format YYYY-MM-DD
    // * @ -- If the field is empty or the validation is not passed, an error message is returned
    // * @ Creator: Carlos Moctezuma aka @crdgom

    birthdate: (value) => {
        const birthdateRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/i;
        if (!value || !birthdateRegex.test(value)){
            return 'The birthdate field must be in the format YYYY-MM-DD'
        }
        return null;
    },

    // * @ Name: Address Validation
    // * @ Since: Version 1.0
    // * @ Description: This part of the function validates the address field of the contact form
    // * @ -- The address field must be minimum of 5 characters long and only letters, numbers, hash, and comma are allowed
    // * @ -- If the field is empty or the validation is not passed, an error message is returned
    // * @ Creator: Carlos Moctezuma aka @crdgom

    address: (value) => {
        const addressRegex = /^[a-zA-Z0-9\s#,-]{5,}$/i;
        if (!value || !addressRegex.test(value)){
            return 'The address field must be minimum of 5 characters long'
        }
        return null;
    },

    // * @ Name: Postal Code Validation
    // * @ Since: Version 1.0
    // * @ Description: This part of the function validates the postal code field of the contact form
    // * @ -- The postal code field must be 5 digits long and only numbers are allowed
    // * @ -- If the field is empty or the validation is not passed, an error message is returned
    // * @ Creator: Carlos Moctezuma aka @crdgom

    postalcode: (value) => {
        const postalcodeRegex = /^[0-9]{5}$/i;
        if (!value || !postalcodeRegex.test(value)){
            return 'The postal code field must be 5 digits long'
        }
        return null;
    },

    // * @ Name: Property Number Validation
    // * @ Since: Version 1.0
    // * @ Description: This part of the function validates the property number field of the contact form
    // * @ -- The property number field must be minimum of 1 character long and only letters and numbers are allowed
    // * @ -- If the field is empty or the validation is not passed, an error message is returned
    // * @ Creator: Carlos Moctezuma aka @crdgom

    propertyNumber: (value) => {
        const propertyNumberRegex = /^[a-zA-Z0-9]{1,}$/i;
        if (!value || !propertyNumberRegex.test(value)){
            return 'The property number field must be minimum of 1 character long'
        }
        return null;
    },
    
    



}

export default formValidations;
"use strict"; 


class User {

    constructor(username, email, password, first, last,
        dob, maritalStatus, education,
        city, country, mobileNumber, photoUrl) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.first = first;
        this.last = last;
        this.dob = dob;
        this.maritalStatus = maritalStatus;
        this.education = education;
        this.city = city;
        this.country = country;
        this.mobileNumber = mobileNumber;
        this.photoUrl = photoUrl;   
    }


}

module.exports.User = User;
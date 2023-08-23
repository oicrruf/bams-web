// * @ Name: Services for the user
// * @ Since: Version 1.0
// * @ Description: This is the services for the user, here you can find all
// * @ -- the services that are used in the user module.
// * @ Creator: Carlos Moctezuma aka @crdgom

import axios from 'axios';

const URL = 'http://localhost:3000';

// * @ Name: registerAdminService
// * @ Since: Version 1.0
// * @ Description: This is the service for register a new admin user (default)
// * @ -- and return the data of the new user. (id, name, email, password, role) ? for the moment.
// * @ Creator: Carlos Moctezuma aka @crdgom

const registerAdminService = async (data) => {
  const response = await axios.post(`${URL}/api/v1/user`, data);
  return response.data;
};

// * @ Name: registerUserInviteService
// * @ Since: Version 1.0
// * @ Description: This is the service for register a new user (by invitation)
// * @ -- and return the data of the new user. (id, name, email, password, role) ? for the moment.
// * @ Creator: Carlos Moctezuma aka @crdgom

const registerUserInviteService = async (data) => {
    const response = await axios.post(`${URL}/api/v1/user/invite`, data);
    return response.data;
  };

// * @ Name: loginService
// * @ Since: Version 1.0
// * @ Description: This is the service for login a user and return the data of the user.
// * @ Creator: Carlos Moctezuma aka @crdgom

const loginService = async (data) => {
    const response = await axios.post(`${URL}/api/v1/login`, data);
    return response.data;
    };

// * @ Name: getUserService
// * @ Since: Version 1.0
// * @ Description: This is the service for get a user and return the data of the user.
// * @ Creator: Carlos Moctezuma aka @crdgom

const getUserService = async (id) => {
    const response = await axios.get(`${URL}/api/v1/user${id}`);
    return response.data;
    }

// * @ Name: getAllUsersService
// * @ Since: Version 1.0
// * @ Description: This is the service for get a user and return the data of the user.
// * @ Creator: Carlos Moctezuma aka @crdgom

const getAllUsersService = async (data) => {
    const response = await axios.get(`${URL}/api/v1/users/all`, data);
    return response.data;
    }

// * @ Name: updateUserService
// * @ Since: Version 1.0
// * @ Description: This is the service for update a user and return the data of the user.
// * @ Creator: Carlos Moctezuma aka @crdgom

const updateUserService = async (id, data) => {
    const response = await axios.put(`${URL}/api/v1/user${id}`, data);
    return response.data;
    }

// * @ Name: deleteUserService
// * @ Since: Version 1.0
// * @ Description: This is the service for delete a user .
// * @ Creator: Carlos Moctezuma aka @crdgom

const deleteUserService = async (id) => {
    const response = await axios.delete(`${URL}/api/v1/user${id}`);
    return response.data;
    }

export { 
    registerAdminService,
    registerUserInviteService,
    loginService,
    getUserService,
    getAllUsersService,
    updateUserService,
    deleteUserService
};

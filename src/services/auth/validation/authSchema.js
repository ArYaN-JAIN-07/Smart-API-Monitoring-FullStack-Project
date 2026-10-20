
import { required } from "zod/mini";
import { isValidRole } from "../../../shared/constants/roles.js";

export const onboardSuperAdmin = {
    username: {
        required:true,
    },
    email: {
        required:true,
    },
    password: {
        required:true,
        minLength: 6,
    }
}

export const registrationSchema = {
    username: {
        required:true,
    },
    email: {
        required:true,
    },
    password: {
        required:true,
        minLength: 6,
    },

    role:{
        required: true,

        custom: (value) => {
            if(!value) return null;
            return isValidRole(value) ? null :'Invalid Role';
        }
    },
}


export const loginSchema = {
    username: {
        required:true,
    },
    password: {
        required:true
    },
}
const { checkSchema } = require('express-validator');

module.exports = {

    signup:checkSchema({
        name: {
            trim: true,
            notEmpty: true,
            isLength:{
                options: { min: 2}
            },
            errorMessage: 'O Nome precisa ter pelo menos 2 caracteres'
        },
        email: { 
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'E-mail invalido'
        },
        password: { 
            isLength: { 

                options: { min: 2}

            },
            errorMessage: 'Senha precisa ter pelo menos 2 caracteres'
        },
        state: { 
            notEmpty: true,
            errorMessage: 'Estado nao preenchido'
        }
    }),
    signin: checkSchema({
        email: { 
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'E-mail invalido'
        },
        password: { 
            isLength: { 

                options: { min: 2}

            },
            errorMessage: 'Senha precisa ter pelo menos 2 caracteres'
        },

    })
}
const inquirer = require('inquirer');
const colors = require('colors');

const preguntas = [
    {
        type : 'list',
        name : 'opcion',
        message : '¿que desea hacer?',
        choices : [

            {
                value : '1', 
                name : '1. Crear tarea'
            },

            {
                value : '2', 
                name : '2. Listar tareas'
            },
            {
                value : '3', 
                name : '3. Listar tareas completdas'
            },
            {
                value : '4', 
                name : '4. Listar tareas pendientes'
            },
            {
                value : '5', 
                name : '5. Completar tarea'
            },
            {
                value : '6', 
                name : '6. Borrar tarea'
            },
            {
                value : '0', 
                name : '0. Salir'
            }
        ]
    }
]

const inquirerMenu = async () => {

    console.log('====================='.green);
    console.log('Seleccione una opción'.green);
    console.log('=====================\n'.green);

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;


}


const pausa = async () => {

    const question = [
        {
            type : 'input',
            name : 'enter',
            message : `Presione la tecla ${'Enter'.green} para continuar`
        }
    ]
    await inquirer.prompt(question);
};


module.exports = {
    inquirerMenu,
    pausa
}
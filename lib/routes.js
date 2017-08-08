/**
 * Created by Parth Mehta on 08-08-2017.
 */
const Controler = require('./controler/UserControler');

module.exports = [

//region Add new User ,Path : /addNewUser
    {

        method: 'POST',
        path: '/addNewUser',
        handler: (request, reply) => {

            Controler.addNewUser(request,reply);
        }
    },
    //endregion

//region This is the just test api, Path : /Test
    {
        method: 'GET',
        path: '/Test',
        handler:(request,reply)=>{

            reply(JSON.stringify({message : "hello node"}));

        }
    },
    //endregion

//region List all users, Path : /listAllUsers
    {
        method: 'GET',
        path: '/listAllUsers',
        handler: (request,reply) =>{

            Controler.listAllUsers(request,reply);

        }
    },
    //endregion
    //region Get user using Username, Path : /getUserUsingemail&password
    {
        method: 'POST',
        path: '/getUserUsingemail&password',
        handler: (request,reply) =>{
            Controler.getUserUsingUsername(request,reply);
        }
    },
    //endregion
//region Update User By Id ,Path : /updateUserById
    {
        method: 'POST',
        path: '/updateUserById',
        handler: (request,reply)=>{
            Controler.updateUserById(request,reply);
        }
    }
    //endregion

];

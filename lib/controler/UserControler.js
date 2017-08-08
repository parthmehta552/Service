/**
 * Created by Parth Mehta on 08-08-2017.
 */
const Models = require('../models/User');

//region Add New User
/**
 *
 * @param In request user data will arrive (name,username(unique),password,admin(boolean),location)
 * @param In response user data will departure with same request data with _id from database
 */
exports.addNewUser = function (req,res) {
    var newUser = new Models();

    newUser.name = req.payload.name;
    newUser.password = req.payload.password;
    newUser.email = req.payload.email;
    newUser.image = req.payload.image;
    newUser.registerdate = req.payload.registerdate;
    newUser.admin = req.payload.admin;
    newUser.isblock = req.payload.isblock;


    newUser.save(function (err,data) {
        if (err){
            console.log(err);
            res(JSON.stringify({insert:false,message:err.toString()}));
        }else{
            res(JSON.stringify({insert:true}));
        }


    });
}
//endregion

//region List All Users
/**
 *
 * @param In request there will be no need any data
 * @param In response there will be all fields of all users, and "other" parameter contain some message about error
 * @constructor
 */
exports.listAllUsers = function (req,res) {

    Models.find({}, function (err, data) {
        if(err) {
            res(JSON.stringify({other:"Not Found"}));
            console.log(err);
            throw err;
        } else {
            res(JSON.stringify(data).replace(/]|[[]/g, ''));
        }
    });

}
//endregion

//region Get User using email and password
/**
 *
 * @param In request there will be useremail and userpassword
 * @param In respnse there will data of that particular user, and "other" parameter shows that the user is not found
 */
exports.getUserUsingUsername = function (req,res) {

    Models.findOne({'email' : req.payload.email.toString(),'password' : req.payload.password.toString()},function (err,users) {
        if(err){
            res(JSON.stringify({other:"User Not Found"}));
            console.log(err);
        }else{
            res(JSON.stringify(users).replace(/]|[[]/g, ''));
        }
    });

}
//endregion

//region Update User By Id
/**
 *
 * @param In request parameter there will be id of user
 * @param In response "update" parameter will pass with value true or false, if value is true then that user is updated and if value is false then that user is not updated, and "other" parameter shows that user not found
 */
exports.updateUserById = function (req,res) {

    Models.findById(req.payload._id,function (err,user) {

        if(!user){
            res(JSON.stringify({other:"User Not Found"}));
        }else{
            user.name = req.payload.name;
            user.save(function (err) {
                if(err){
                    res(JSON.stringify({update:false}));
                }else{
                    res(JSON.stringify({update : true}));
                }
            });
        }
    });

}
//endregion
import chalk1 from "chalk";
import nodemon from "nodemon";
import validator from "validator";

// const valid=require('validator');
// console.log(chalk1.blue.underline.inverse('Hello world!'));

const res=validator.isEmail("hahahahhha@haha.ac.in");
console.log(res ? chalk1.bgGreen(res) : chalk1.red.inverse(res));

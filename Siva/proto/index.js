const Schema=require("./patient.js");

const fs=require("fs");
// var goog = require('google-protobuf')

const sk= new Schema.Patient();
sk.setId(111);
sk.setAddress('america');
sk.setBalanceAmount(500);

const skkv= new Schema.Patient();
skkv.setId(112);
skkv.setAddress('newyork');
skkv.setBalanceAmount(800);

const siva= new Schema.Patient();
siva.setId(113);
siva.setAddress('canada');
siva.setBalanceAmount(5000);

patients.addPatients(sk);
patients.addPatients(siva);
patients.addPatients(skkv);
const bytes= patients.serializeBinary();  
console.log('serialize', bytes);

fs.writeFileSync("patientserial",bytes)




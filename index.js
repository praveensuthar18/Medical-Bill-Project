const express = require('express');

const app = express();
const PORT = 3000;
app.use(express.json());

const medical_bills = [];

app.get('/items', (request,response)=>{
    response.json(medical_bills);
});

app.post('/items', (request, response)=>{
    console.log(request.body);
    const { patient_name, patient_address, hospital_name, date_of_service, bill_amount } = request.body;

    if(!patient_name || !patient_address || !hospital_name || !date_of_service || !bill_amount){
        return response.status(400).send("Missing Fields....");
    }

    let medical_bill = {
        patient_name: patient_name,
        patient_address:patient_address,
        hospital_name:hospital_name,
        date_of_service:date_of_service,
        bill_amount: bill_amount
    }
    
    medical_bills.push(medical_bill);
    response.status(201).json(medical_bill);
});

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));

module.exports = app; // for testing
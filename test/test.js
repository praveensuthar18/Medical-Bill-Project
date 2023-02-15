

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index.js');


chai.use(chaiHttp);
const expect = chai.expect;


describe('MedicalBills', () =>{


    describe('GET /items', () => {
        it('should return an empty array of medical bills', (done) => {
            chai.request(app)
                .get('/items')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('array');
                    expect(res.body).to.have.lengthOf(0);
                    done();
                  });
                
            });
    });

    describe('POST /items', () => {
        it('should create a bill object', (done) =>{
            let bill = {
                patient_name: 'Praveen',
                patient_address:'Tempe, Arizona',
                hospital_name:'Arizona Hospital',
                date_of_service:'04/22/2023',
                bill_amount: 5000
            };

            chai.request(app)
                .post('/items')
                .send(bill)
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body).to.deep.include(bill);
                    done();
                });
        });
        

        it('should return an error if any field is missing', (done) => {
            chai.request(app)
                .post('/items')
                .send(
                    {
                        patient_name: 'John Smith',
                        patient_address:'Tempe, Arizona',
                        hospital_name: 'Arizona Hospital',
                        date_of_service: '04/22/2023',
                        
                    }
                )
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.text).to.equal("Missing Fields....");
                    done();
                });

        })


    });

    describe('GET /items', () => {

        let bill = {
            patient_name: 'Praveen',
            patient_address:'Tempe, Arizona',
            hospital_name:'Arizona Hospital',
            date_of_service:'04/22/2023',
            bill_amount: 5000
        };

        it('should get all medical bills', (done)=>{
            chai.request(app)
                .get('/items')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('array');
                    expect(res.body).to.have.lengthOf(1);
                    expect(res.body[0]).to.deep.include(bill);
                    done();
                });
        });
    })
});
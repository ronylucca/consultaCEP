'use strict';
const ConsultaCEPService = require('./consultaCEP_service');

const conSultaCEPService = new ConsultaCEPService()
module.exports.consultaCEP = async event => {
  
  let cep = ''
  if(event.queryStringParameters && event.queryStringParameters.cep){
    cep = event.queryStringParameters.cep
  }
 
  var retorno = ''
  var statusCode

  if(cep){
    retorno = await conSultaCEPService.consultaCEP(cep)
    statusCode = 200
  }else{
    retorno = 'Parâmetro não informado: cep:string.'
    statusCode = 400
  }
  return {
    statusCode: statusCode,
    body: JSON.stringify(retorno)
  };

};

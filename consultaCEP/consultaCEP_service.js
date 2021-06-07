const soap = require('soap')

module.exports = class ConsultaCEPService {

    async consultaCEP(cep) {

      var url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

        let client = await soap.createClientAsync(url)
        let result = await client.consultaCEPAsync(
          {
              cep: cep
          })
        return result[0].return;
    
    }        
}
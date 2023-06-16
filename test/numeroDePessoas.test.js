
const assert = require('assert');
const baseCode = require("../src/baseCode");
const result = baseCode.classificarPessoasDaLista(baseCode.listaDadosPessoas);


describe('Retornar a quantidade correta', function(){
  it('Deve confirmar o número de pessoas contidas em uma lista', function(){
    assert.equal(result,6)
  })
  
})

const EthereumTx = require('ethereumjs-tx')
var Web3 = require('web3')

var web3Provider = new Web3.providers.HttpProvider('http://ewasm.ethereum.org:8545')
var web3 = new Web3(web3Provider)

const argv = require('yargs').argv;
const fs = require('fs')
const request = require('request')

let data = argv.data ? argv.data : ''
let nonce = argv.nonce ? argv.nonce : ''
let to = argv.to ? argv.to : ''

let priv = argv.priv

const privateKey = Buffer.from(priv, 'hex')

if (data) {
  data = '0x'+fs.readFileSync(data).toString('hex')
}

var txParams = {}

txParams.data = data
txParams.value = '0x0'
txParams.nonce = nonce

var gasPrice = 1000000000 // web3.eth.gasPrice

web3.eth.estimateGas(txParams, function(err, gas) {

  txParams.gasLimit = gas
  txParams.gasPrice = gasPrice

  let tx = new EthereumTx(txParams)
  tx.sign(privateKey)
  let serializedTx = tx.serialize()
  serializedTx = serializedTx.toString('hex')

  console.log("0x"+serializedTx)

})



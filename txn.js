const EthereumTx = require('ethereumjs-tx')

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

const txParams = {
  nonce: '0x'+nonce,
  gasPrice: '0x174876e800', 
  gasLimit: '0x70000000',
  to: to,
  value: '0xa', 
  data: data,
  chainId: 66
}

let tx = new EthereumTx(txParams)
tx.sign(privateKey)
let serializedTx = tx.serialize()
serializedTx = serializedTx.toString('hex')

console.log("rawTx:")
console.log("0x"+serializedTx)

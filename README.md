Super-simple script to create a signed transaction

# Usage

## Craft the transaction
`node txn.js --data /path/to/binary --nonce nonce --private private_key  (--to recipient)`

## Send the transaction to the client
`curl -X POST -H 'Content-Type: application/json' --data '{"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":["raw txn value from above"],"id":2}' localhost:8545`

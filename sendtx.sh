#!/bin/bash

echo Generating transaction...
tx=$(node txn.js --data $1 --nonce $2 --priv $3)

echo Sending transaction...
echo $tx
curl -X POST -H 'Content-Type: application/json' --data "{\"jsonrpc\":\"2.0\",\"method\":\"eth_sendRawTransaction\",\"params\":[\"$tx\"],\"id\":2}" http://ewasm.ethereum.org:8545


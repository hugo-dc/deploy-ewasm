Super-simple script to deploy an ewasm contract to the testnet

# Usage

## Send Transaction

`./sendtx.sh <wasm_deployer> <nonce> <private_key>`

## Example

Directory `example/` contains a very simple ewasm contract, this contract stores
the number 1 into storage key 0 when contract is called.

Contract bytecode is in file: `example/store.wasm`. File `example/store.wast`
contains the text-format representation.

## Install wasm-chisel

In order to deploy this contract, its bytecode has to be returned by a
"deployer", [wasm-chisel](https://github.com/wasmx/wasm-chisel#deployer) can be
used to generate a deployer.

Execute the following command to install wasm-chisel:

```
cargo install chisel
```

## Execute chisel

In directory `example/` you can find a chisel configuration file `chisel.yml`,
take a look at the [wasm chisel README](https://github.com/wasmx/wasm-chisel/tree/v0.4.0#wasm-chisel) to learn
more about the options. In this configuration the option `deployer` is enabled with preset `memory`.

Execute the following command in the `example/` directory:

```
chisel run
```

This will generate a new file `store_deployer.wasm`. This is the file we have to use in our script.

## Execute sendtx script

Execute the `sendtx.sh` script sending as parameter the wasm deployer file generated above.

This is an example of a contract generated using this script: [0x3D67Ab971D5eC6bd2Ef248a6FA3982921EfE15D5](http://ewasm.ethereum.org/explorer/account/0x3D67Ab971D5eC6bd2Ef248a6FA3982921EfE15D5)


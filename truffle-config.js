require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remind attitude grid arena forward stomach'; 
let testAccounts = [
"0xf8ec06b4517ec1c016b2c635f476bd5c363328881a4e754b89ef5790efcde59b",
"0xf8e8c1bbc8e989834d4e57bcf15bc6510845d17c943e966ada501f65b626b4fc",
"0xfc8b61ad043a07c33d3f0be97ad07765160df1a336b7786c37027bb46bd2d455",
"0x5c87a2477882f8fecdc72fcf7931022d2ebbfe6d434c2693078c45cf1bd86498",
"0x2bf422dced96108358ad4c3df3c069ceebb2421713341b036e3021359883a87d",
"0x31d1b75e658727d4d5e2bcb015400cdf597563ce1ccca7c4688b63ce47f45442",
"0xf31b435085d3a593a4b2e2f41ab81848143d56fa37d8f67291cf6eee9c580e6b",
"0xbe52c912ce8a8c4d76b2998895e9982b5d171ebdc35f18680fe364d3cd31725c",
"0x285c0280657e2959cb915805cac4acace923933b7ce9cb7794dfed69bce367a9",
"0xe1f097a15e01b153db44f294c928ffb81525296c0cb8d5dc86e2c807e250ff96"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

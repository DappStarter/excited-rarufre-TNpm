require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth sister comic install crime off gas'; 
let testAccounts = [
"0x758878f81c1c296e95303a783183d273cb961414164069221cc4b7245f582613",
"0x4c38f2e399475681ce9f452aa2436e4af3ca88e04947c54254e53968f4ccac9e",
"0xd554343c7022758e824a9b2920bd20a3f3fc11d56975ed48db3ab827975c21c8",
"0xdc8685c898d1b92e4933e46a814a17885403890f8ab931e9316a6e4044cfb1d4",
"0xf06b111854b5957b9cbee9f56d19f2eccab7f32307097176efcd2afa9ec50919",
"0x764d833bf9827aef8e588d49bde5d641b6fca88d6165af08e2af67099b867d4c",
"0x54a4d16dfbf71912548185ce241d7ac8ac9cef94261edefe784880092525a709",
"0x150457cf6b8c6b711b975daaad31327d824f1176d86813a0f7e4b63e1b7dca7e",
"0x6d966fbc8eeb7524c9d1bf5f232eea23a89741df42e981f05cc259e4f549eaf0",
"0x890c9590c298abfce1934e5b7d98d7cd07d0969b92b6b9af480343c429fc6ec3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
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
            version: '^0.8.0'
        }
    }
};


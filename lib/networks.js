/** @module networks */

module.exports = {
  /** @type {Network} */
  cmt: {
    messagePrefix: '\x18CMT Signed Message:\n',
    bip32: {
      public: 0x043587cf, // base58 will have a prefix 'apub'
      private: 0x04358394 // base58Priv will have a prefix 'apriv'
    },
    name: 'mainnet',
    nethash: '20700d78709abd9f48c2c1970eb3202b1076b6dc83b0ed851a9f52dd84c9d1ed',
    token: 'CMT',
    symbol: 'CMT',
    pubKeyHash: 0x1C, // Addresses will begin with 'A'
    explorer: 'http://178.128.66.43:4200',
    wif: 0xBB, // Network prefix for wif generation
    activePeer: {
      ip: '178.128.66.43',
      port: 4100
    },
    peers: [],
  },
  /** @type {Network} */
  testnet: {
    messagePrefix: '\x18Ark Testnet Signed Message:\n',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    name: 'devnet',
    nethash: '578e820911f24e039733b45e4882b73e301f813a0d2c31330dafda84534ffa23',
    token: 'TEST',
    symbol: 'TEST',
    pubKeyHash: 0x52, // Addresses will begin with 'a'
    explorer: 'https://dexplorer.ark.io',
    wif: 0xba, // Network prefix for wif generation
    activePeer: {
      ip: '104.238.165.129',
      port: 4002
    },
    peers: [],
  },
  /** @type {Network} */
  bitcoin: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    wif: 0x80
  }
}

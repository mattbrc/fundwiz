require('@nomiclabs/hardhat-waffle')
module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/c6b257afe31f4b1589f5f0400dc9bd78',
      accounts: [
        '812aafb76f4534fabb9e250177a24ad23d3266710406f1dba6de4e7ad96710f8',
      ],
    },
  },
}
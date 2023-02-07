//https://eth-rinkeby.alchemyapi.io/v2/6S9H9KkIFnuO8Wt2kwRY8vxSgucPAEFH

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks:{
    rinkeby:{
        url:'https://eth-rinkeby.alchemyapi.io/v2/6S9H9KkIFnuO8Wt2kwRY8vxSgucPAEFH',

        accounts:['ef350968747df41adcff70ff640f7814e6377befeac0344ef9e72502da680974']
    }

  }
}
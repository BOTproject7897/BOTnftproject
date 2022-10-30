export const explorerUrl = () => {
  const address = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS

  switch (process.env.NEXT_PUBLIC_CHAIN_ID) {
    case '1':
      // Mainnet
      return `https://etherscan.io/token/${address}`
    case '4':
      // Rinkeby
      return `https://rinkeby.etherscan.io/token/${address}`
    case '5':
      // Goerli
      return `https://goerli.etherscan.io/token/${address}`
    case '137':
      // Polygon
      return `https://polygonscan.com/token/${address}`
    case '80001':
      // Munbai
      return `https://mumbai.polygonscan.com/token/${address}`
    case '250':
      // Fantom
      return `https://ftmscan.com/token/${address}`
    case '4002':
      // FantomTestnet
      return `https://testnet.ftmscan.com/token/${address}`
    default:
      return ''
  }
}

export const ChainIdname = () => {

  switch (process.env.NEXT_PUBLIC_CHAIN_ID) {
    case '1':
      // Mainnet
      return 'Ethereum'
    case '4':
      // Rinkeby
      return 'Rinkeby'
    case '5':
      // Goerli
      return 'Goerli'
    case '137':
      // Polygon
      return 'Polygon'
    case '80001':
      // Munbai
      return 'Mumbai'
    case '250':
      // Fantom
      return 'Fantom'
    case '4002':
      // FantomTestnet
      return 'Fantom Testnet'
    default:
      return ''
  }
}

export const swapUrl = () => {
  const token = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS
  const chain = process.env.NEXT_PUBLIC_CHAIN_ID

  switch (process.env.NEXT_PUBLIC_CHAIN_ID) {
    case '250':
      // Mainnet
      return `https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=${token}&chainId=${chain}`
    default:
      return ``
  }
}

export const openseaUrl = () => {
  const name = process.env.NEXT_PUBLIC_CONTRACT_NAME

  switch (process.env.NEXT_PUBLIC_CHAIN_ID) {
    case '137':
      // Mainnet
      return `https://opensea.io/collection/${name}`
    case '80001':
      // Mumbai
      return `https://testnets.opensea.io/collection/${name}`
    default:
      return ``
  }
}

export const twitterUrl = () => {
  return `https://twitter.com/${process.env.NEXT_PUBLIC_TWITER_ACCOUNT}`
}

export const instagramUrl = () => {
  return `https://www.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_ACCOUNT}`
}

export const discordUrl = () => {
  return `${process.env.NEXT_PUBLIC_DISCORD_URL}`
}

export const snsLinks = {
  explorerUrl,
  ChainIdname,
  openseaUrl,
  twitterUrl,
  instagramUrl,
  discordUrl,
}

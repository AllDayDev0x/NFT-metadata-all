const { Alchemy, Network } = require('alchemy-sdk');

const config = {
    apiKey: "p-VZESSmvJrry2na_4Qk9eoDFbrfL",
    network: Network.ETH_GOERLI,
}
const alchemy = new Alchemy(config)

const main = async () => {
    const address = 'e5D726a11de85069Ae5F2A8D3AB637Fd54d0532';
    const { nfts } = await alchemy.nft.getNftsForContract(address, {
        omitMetadata: false
    })

    let tokens = [];
    for(let nft of nfts) {
        tokens.push({id: nft.tokenId, uri:nft.tokenUri.raw});
    }

    console.log(tokens.length,"tokens")
    const rank = tokens.findIndex(token => {
        return token.uri.indexOf('/1/0x') > -1 
    })
    console.log('ranck: ', rank)
}

main();
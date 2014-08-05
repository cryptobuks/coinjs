
# Testnet Project

It really irks me that many Bitcoin projects these days don't pay any respects whatsoever to the Bitcoin testnet. The testnet is what allows developers to test Bitcoin **without testing with *actual money* **. Most Bitcoin "developers" (I am using the term loosely) just test their software with small amounts of money on the Bitcoin mainnet. **This is akin to testing in production**, which, as software development goes, is a recipe for failure.

And the lack of testnet infrastructure encourages developers to do this. Case in point: the popular blockchain explorer site blockchain.info doesn't even have a testnet offering. Everything their API offers is only for the Bitcoin mainnet. Since their APIs are so easy to use, developers have forgone running an actual Bitcoin(QT/d) node in favor of just using the blockchain.info APIs. But what if you want to test using, you know, ... testnet. The actual, Bitcoin test network which is built-in to Bitcoin itself, and whose tokens don't have real-world value aside from testing Bitcoin software.

Currently, as of 2014-08-05, the testnet blockchain size is ~1.5 GB. The output of ```du -sk .``` inside the Bitcoin/testnet3 directory reports: ```1533516```.

I plan to place it on Amazon S3 and link to it here, if it doesn't cost a lot per month. I'll evaluate the costs (and benefits) of compiling a daily/weekly testnet bootstrap file and whether or not I want to provide this. It (currently) really only takes a couple of hours to download the entire testnet blockchain anyway, but problems do occur, or you may need to restart the client due to bad peers, etc.

I also want to provide a more robust testnet infrastructure, e.g. the testnet equivalent of blockchain.info's mainnet APIs. I will have to ponder this in more detail, as it would require a much more significant investment in development (rate-limiting the JSON API, addressing other security concerns) and resources (servers). Bitpay already provides this with insight, so this point may be moot.


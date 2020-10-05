# cli-ceasar-cipher-tool

**Cli-ceasar-cipher-tool** is a tool for encrypt and decrypt the text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)

## Installation

Clone the repository or download the source files
```bash
$ git clone https://github.com/Stivooo/cli-ceasar-cipher-tool.git
```
The main.js file in the "cli-ceasar-cipher-tool" directory is used to run the tool.

It is recommended to use the stable (LTS) version of [Node](https://nodejs.org/en/) to run the tool. \
If you don't have Node then install it.

Using PPA and package manager on Ubuntu
```bash
$ curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
$ sudo apt install -y nodejs npm
```

Using package manager on Arch Linux
```bash
$ pacman -S nodejs npm
```

[Other download methods](https://nodejs.org/en/download/)

After downloading, install npm dependencies (in the "cli-ceasar-cipher-tool" directory)
```bash
$ cd cli-ceasar-cipher-tool/
$ npm install
```

## Accepted arguments:

1.  **-s, --shift**: a shift value
2.  **-i, --input**: an input file (optional)
3.  **-o, --output**: an output file (optional)
4.  **-a, --action**: an action encode/decode


Only the English alphabet is encoded / decoded, all other characters remain unchanged. \
If the input file is missed - used stdin as an input source. \
If the output file is missed - used stdout as an output destination.

## Usage example

```bash
$ node cli-ceasar-cipher-tool/main.js -s 2 -i ./input.txt -o ./output.txt -a encode
```

```bash
$ node cli-ceasar-cipher-tool/main.js --shift 2 --input ./input.txt --output ./output.txt --aсtion encode
```

> input.txt
> `This is a test :)`

> output.txt
> `Vjku ku c vguv :)`

If the input file is missed - used stdin as an input source.

```bash
$ node cli-ceasar-cipher-tool/main.js --shift 2 --output ./output.txt --aсtion encode
< Check!
```
> output.txt
> `Ejgem!`

If the output file is missed - used stdout as an output destination.

> input.txt
> `This is a test :)`
```bash
$ node cli-ceasar-cipher-tool/main.js --shift 2 --input ./input.txt --aсtion encode
> Vjku ku c vguv :)
```

Decoding

```bash
$ node cli-ceasar-cipher-tool/main.js -a decode -s 2 -o ./output.txt  -i ./input.txt
```

> input.txt
> `Vjku ku c vguv :)`

> output.txt
> `This is a test :)`

If no output or input files are available, stdin and stdout are used

```bash
$ node cli-ceasar-cipher-tool/main.js -s 10 -a encode
< Encode in CLI
> Oxmyno sx MVS
```

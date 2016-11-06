'use strict'

var bitcore = require('bitcore');

var Address = bitcore.Address;
var Networks = bitcore.Networks;

var PrivateKey = bitcore.PrivateKey;
var PublicKey = bitcore.PublicKey;

//Live network.

var livenetKey = PrivateKey.fromRandom();
console.log('private:', livenetKey.toString());
document.getElementById("livePrivateKey").innerHTML = livenetKey.toString();

var pubLiveKey = livenetKey.publicKey;
console.log('public:', pubLiveKey.toString());
document.getElementById("livePublicKey").innerHTML = pubLiveKey.toString();

var liveAddress = livenetKey.toAddress();
console.log('address:', liveAddress.toString());
document.getElementById("liveAddressKey").innerHTML = liveAddress.toString();

console.log('is valid?', Address.isValid(liveAddress));
document.getElementById("liveValidKey").innerHTML = Address.isValid(liveAddress);

//Test network.

var testnetKey = PrivateKey.fromRandom(Networks.testnet);
console.log('test private:', testnetKey.toString());
document.getElementById("testPrivateKey").innerHTML = testnetKey.toString();

var pubTestKey = testnetKey.publicKey;
console.log('test public:', pubTestKey.toString());
document.getElementById("testPublicKey").innerHTML = pubTestKey.toString();

var testAddress = testnetKey.toAddress();
console.log('test address:', testAddress.toString());
document.getElementById("testAddressKey").innerHTML = testAddress.toString();

console.log('is valid?', Address.isValid(testAddress));
document.getElementById("testValidKey").innerHTML = Address.isValid(testAddress);

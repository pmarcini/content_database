var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({

    productName: String,
    productCodeName: String, 
    productSKU: String,
    productType: String, //board or package 
    stackupType: String, 
    numberOfStackupLayers: Number, 
    socketType: String, 
    containsFIVR: Boolean, 
    containsMCDRAM: Boolean, 
    containsFabric: Boolean, 
    containsFPGA: Boolean, 
    memoryType: String, // DDR3 or DDR4
    pcieGen: String, 
    coreCount: Number

})

module.exports=mongoose.model('Product', ProductSchema);
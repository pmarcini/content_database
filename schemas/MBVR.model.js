var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MBVRSchema = new Schema({
    productName: String, 
    productSKU: String,
    productType: String,
    interfaceName: String,  
    railName: String, 
    revLevel: String, 
    decoupling: [], // Need to think about. type, location, count 
    phaseCount: int, 
    inductorL: int, 
    inductorR: int,
    current: [], // Imax Itdc
    voltage: [], //Vnom, Vmin, Vmax, what location
    //loadingCondition: 
    brdConductivity: int, 
    pkgConductivity: int,
    specs: [], // DC / AC / PK2PK 
    senseLocation: string, 
    databaseAnalyzed: string, 
    railHealth: int, 
    risks: string, 
    railBackground: string,
    dieParameters: [] 



})

module.exports=mongoose.model('MBVR', MBVRSchema);
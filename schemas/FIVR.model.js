var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FIVRSchema = new Schema({
    productName: String, 
    productSKU: String,
    productType: String,
    interfaceName: String,  
    railName: String, 
    revLevel: String, 
    phaseCount: int,
    vxbrBumpsPerPhase: int,
    current: [], // Imax Itdc
    voltage: [], //Vnom, Vmin, Vmax, what location
    specs: [], // DC / AC / PK2PK
    brdConductivity: int, 
    pkgConductivity: int, 
    aciParameters: [], // R,L,RDC,RAC,Q, Freqsw
    //loadingCondition: 
    senseLocation: string, 
    databaseAnalyzed: string, 
    railHealth: int, 
    risks: string, 
    railBackground: string,
    dieParameters: [], 
    tranRipple: [],
    tranDroop: [],
    tranFeedthrough: [], 
    efficiency: double,
})

module.exports=mongoose.model('FIVR', FIVRSchema);
//Save XML file in the disk
function saveXML(xmlFileID ,relativeFolderPath) {
    
}

//Delete XML file
function deleteXML(xmlFileID ,relativeFolderPath){}

//Update XML
function updateXML(xmlFile,atttbuteName,newAttributeValue){}


//Append to XML
function appendToXML(xmlFile,attributeArray){}

//return true if the XML files structure mathes with the XSD
function check_XML_with_XSD(XSDFile, JSONpayload) {
        
}



//Return True if XML files attribute value match the attribute value provided by the method
function match_XML_attribute(attribute, value , XMLFile) {
    
}

//Return the XML data in JSON format
function XML_2_JSON(xml){

}

//JSON to XML
function JSON_2_XML(xml){

}

//Modify the XML and return the XML file
function replace_Attribute_Of_XML(originalXML , attribute , newValue ){

}

module.exports = {
    saveXML,
    deleteXML,
    updateXML,
    appendToXML,
    check_XML_with_XSD,
    match_XML_attribute,
    XML_2_JSON,
    JSON_2_XML    
}

import XmlJS from "xml-js"

function recurseLevel(obj){

    if (Array.isArray(obj)){
        let res = [];
        for (let j = 0;  j < obj.length; ++j){
            res.push(recurseLevel(obj[j]));
        }
        return res;
    }

    if(obj.type === "text"){
        return obj.text;
    }

    if(obj.elements){
        if(obj.elements.length === 1){
            return recurseLevel(obj.elements[0]);
        }else{
            let contents = {};
            for (let i in obj.elements){
                if(obj.elements[i].name === "sensor"){
                    if(!contents["sensors"]){
                        contents["sensors"] = [];
                    }
                    let ob_tmp = {
                        "sid" : obj.elements[i].attributes.sid,
                        "initial" : Number.parseFloat(obj.elements[i].attributes.initial)
                    }
                    ob_tmp["readings"] = obj.elements[i].elements.sort((a, b) =>{
                            return a.attributes.time - b.attributes.time;
                        }).map((a) => {
                            return Number.parseFloat(a.attributes.value.replace(",","."))
                        }) ;

                    contents["sensors"].push(ob_tmp)
                }else{
                    contents[obj.elements[i].name] = recurseLevel(obj.elements[i]);
                }                    
            }
            if(obj.name){
                let ob_tmp = {};
                ob_tmp[obj.name] = contents;
                return ob_tmp;
            }else{
                return contents;
            }                
        }        
    }
    return "";
}
const parseXmlToJson = (xml) => {
    let obj = recurseLevel(XmlJS.xml2js(xml));
    return obj;
}

const parseBlobToJson = (blob) => {
    let textDecode = new TextDecoder();
    let uint8 = new Uint8Array();
    if (typeof blob === 'string'){
        uint8 = new Uint8Array(blob.split(","));
        return JSON.parse(textDecode.decode(uint8));
    }

    return {};
}

export default {parseXmlToJson, parseBlobToJson};
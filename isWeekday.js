module.exports = function(str){
    if(typeof (str) != 'string'){
      return false;
    }
  
      return !str.startsWith('S');
    
}
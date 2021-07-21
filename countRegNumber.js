module.exports = function countRegNumber(str){
    if(typeof(str) != 'string'){
      return false;
    }
    if(str == '' || str == ' '){
      return 0;
    }
    var reg = str.split(',');
    return reg.length;
}

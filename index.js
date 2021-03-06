
/**
 * Expose 'clone'
 * @param  {Object | Array} obj 
 * @api public
 */

module.exports = function(obj) {
  if(obj instanceof Array) return obj.slice(0);
  return clone(obj);
};


/**
 * Object deep copy.
 * 
 * @param  {Object} obj 
 * @api private
 */

function clone(obj){
  if(typeof obj === 'object') {
    var copy = {};
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = clone(obj[key]);
      }
    }
    return copy;
  }
  return obj;
}

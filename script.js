const arr = [1,2,[3,7,8,[2,5,3,[4,2,5]]]];

const sum = arr => arr.reduce((res, el) => res + (Array.isArray(el) ? sum(el) : el), 0);

console.log(sum(arr));

Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };

function f1(item, level = 0){ 
    if (item instanceof Array){
        return item.map(function(value, index){
            return f1(value, level + 1)
        }).max() - (level > 0 ? 0 : 1) 
    }
    return level;
}

console.log(f1(arr))




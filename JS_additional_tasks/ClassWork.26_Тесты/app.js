module.exports = {
    greet: function(){
        return 'hello';
    },
    reduceFunc: function(arr){
        if(!Array.isArray(arr)){
            return false;
        }
        return arr.reduce((acc, el) => acc + el, 0);
    },

    findNumber: function(...args) {
        if(args.every(el => el < 0)) {
            return Math.max(...args);
        }
            let arr = args.map(el => Math.abs(el));
            return Math.min(...arr);
    }
}
new Vue ({
    el:'#vue-app',
    data : {
        heading : 'Events In VUE',
        quantity : 1
    },
    methods : {
        add : function(inc) {
            this.quantity += inc;
        },
        sub : function(dec){
            this.quantity -= dec;
        }
    }
});
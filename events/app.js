new Vue ({
    el:'#vue-app',
    data : {
        heading : 'Events In VUE',
        quantity : '1'
    },
    methods : {
        add : function() {
            this.quantity++;
        },
        sub : function(){
            this.quantity--;
        }
    }
});
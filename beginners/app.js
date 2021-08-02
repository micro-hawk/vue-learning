new Vue ({
    el : '#vue-app',
    data : {
        name : 'MicroHawk',
        job : 'Nothing More'
    },

    methods : {
        greet: function(wish) {
            return 'Good' + wish + ' '+ this.name;
        }
    }
});
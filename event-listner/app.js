new Vue ({
    el: '#my-app',
    data : {
        heading: 'Events Listening',
        website: 'https://MicroHawk.me',
        x: 0,
        y: 0
    },
    methods : {
        updateXY : function(event) {
            this.x = event.offsetX ;
            this.y = event.offsetY;
        }
    }

});
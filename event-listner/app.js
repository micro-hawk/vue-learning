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
        },

        clicked: function() {
            alert("Hey you just clicked this shit :(");
        },
        
        btnFunct: function(){
            alert("U can click it for once only");
        },

        logUsername: function() {
            console.log("You entered your user name");
        },
        logPassword : function() {
            console.log("Password is entered.");
        }
    }

});
(function($){
    var systems = new Array();

    //Playing systems
    systems['3-3-1'] = new Array();
    systems['3-3-1']['x'] = [149, 15, 149, 283, 15, 149, 283, 149];
    systems['3-3-1']['y'] = [40, 110, 110, 110, 200, 200, 200, 320];

    systems['2-4-1'] = new Array();
    systems['2-4-1']['x'] = [149, 93, 205, 15, 93, 205, 283, 149];
    systems['2-4-1']['y'] = [40, 110, 110, 200, 200, 200, 200, 320];

    systems['3-2-2'] = new Array();
    systems['3-2-2']['x'] = [149, 15, 149, 283, 93, 205, 93, 205];
    systems['3-2-2']['y'] = [40, 110, 110, 110, 200, 200, 290, 320];

    var methods = {
        //initialize field
        init : function (options){
            return this.each(function(){
                var $this = $(this);
                data = $this.data('formation');

                //default settings
                var settings = {
                    target: $this,
                    players: [],
                    system: '3-3-1'
                }
                if (!data) {
                    $(this).addClass('matchcenter-field');
                    $(this).data('formation', settings);
                }
            });
        },

        //change formation
        setPlayingSystem : function(system){
            return this.each(function(){
                var $this = $(this);
                data = $this.data('formation');
                data.system = system;
                var xpos = 0;
                var ypos = 0;
                $.each(data.players, function(key,value){
                    xpos = systems[data.system]['x'][key];
                    ypos = systems[data.system]['y'][key];
                    $('#player-'+ value).animate({'left': xpos + 'px', 'top': ypos + 'px'}, "slow");
                });
            });
        },

        //add player
        addPlayer: function(pos, id, number, name){
            return this.each(function(){
                var $this = $(this);
                data = $this.data('formation');
                var xpos = systems[data.system]['x'][pos-1];
                var ypos = systems[data.system]['y'][pos-1];
                var player = '<div id="player-' + id + '" class="player" style="left: ' + xpos + 'px; top: ' + ypos + 'px;">';
                player += '<div class="player-number">' + number + '</div><div class="player-name">' + name + '</div>';
                player += '</div>';
                $this.append(player);
                $('#player-' + id).delay(pos * 100).fadeIn();
                data.players.push(id);
            });
        },
    
    };

    $.fn.formation = function(method){
        if(methods[method]){
            return methods[method].apply(this, Array.prototype.slice.call(arguments,1));
        }else if(typeof method === 'object' || !method){
            return methods.init.apply(this,arguments);
        }else {
            $.error('Method ' + method + ' does not exist on jQuery.formation');
        }
    }
})(jQuery);
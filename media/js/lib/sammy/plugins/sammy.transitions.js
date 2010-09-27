(function($) {
    
    Sammy = Sammy || {};
    
    Sammy.Transitions = function() {
        
        this.swap = function(content) {
            $('#headline').text($('#headline').data('new-text'));
            $(window).scrollTop(0);
            
            var $prevPanel = this.$element().find('.panel');
            
            var $panel = $('<div class="panel in hidden"></div>').html(content).appendTo(this.$element());
            window.setTimeout(function() {
                $prevPanel.addClass('out').addClass('hidden');
                $panel.removeClass('hidden');
            }, 0);
            window.setTimeout(function() {
                $prevPanel.remove();
                $panel.removeClass('in');
            }, 500);
            return $panel;
        };
        
    };
    
})(jQuery);

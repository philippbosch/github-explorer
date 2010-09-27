(function($) {
    
    var app = $.sammy(function() {
        this.element_selector = '#main';
        this.use(Sammy.Mustache);
        this.use(Sammy.Headline);
        this.use(Sammy.Transitions);
        
        this.clearTemplateCache();
        
        this.get('#/', function(context) {
            context.partial('templates/index.mustache');
        });
        
        this.get('#/user/show/:username', function(context) {
            this.headline('Profile');
            $.getJSON('https://github.com/api/v2/json/user/show/' + context.params['username'] + '?callback=?', function(data) {
                context.partial('templates/user-show.mustache', $.extend({}, context.params, data));
            });
        });
        
        this.get('#/user/show/:username/followers', function(context) {
            this.headline('Followers');
            $.getJSON('https://github.com/api/v2/json/user/show/' + context.params['username'] + '/followers?callback=?', function(data) {
                context.partial('templates/user-show-followers.mustache', $.extend({}, context.params, data));
            });
        });
        
        this.get('#/user/show/:username/following', function(context) {
            this.headline('Following');
            $.getJSON('https://github.com/api/v2/json/user/show/' + context.params['username'] + '/following?callback=?', function(data) {
                context.partial('templates/user-show-following.mustache', $.extend({}, context.params, data));
            });
        });
        
        this.get('#/repos/show/:username', function(context) {
            this.headline('Repositories');
            $.getJSON('https://github.com/api/v2/json/repos/show/' + context.params['username'] + '?callback=?', function(data) {
                context.partial('templates/repos-show.mustache', $.extend({}, context.params, data));
            });
        });
        
        this.get('#/gists/:username', function(context) {
            this.headline('Gists');
            $.getJSON('https://gist.github.com/api/v1/json/gists/' + context.params['username'] + '?callback=?', function(data) {
                context.partial('templates/gists.mustache', $.extend({}, context.params, data));
            });
        });
        
        this.get('#/gists/:username/:gist_id', function(context) {
            this.headline('Gist');
            $.getJSON('https://gist.github.com/api/v1/json/' + context.params['gist_id'] + '?callback=?', function(data) {
                context.partial('templates/gist.mustache', $.extend({}, context.params, data));
            });
        });
        
    });
    
    
    $(document).ready(function() {
        app.run('#/');
        $('a.back').click(function(e) {
            e.preventDefault();
            window.history.back();
        });
    });
    
})(jQuery);

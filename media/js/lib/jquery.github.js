;(function($) {
    $.github = {
        'init': function() {
        },
        
        'setUsernameAndPassword': function(username, password) {
            $.github.opts['username'] = username;
            $.github.opts['password'] = password;
        },
        'setUsernameAndToken': function(username, token) {
            $.github.opts['username'] = username;
            $.github.opts['password'] = token;
        },
        'getAuthUsername': function() {
            var username = $.github.opts['username'];
            if ($.github.opts['token']) username += '/token';
            return username;
        },
        'getAuthPassword': function() {
            return $.github.opts['token'] || $.github.opts['password'];
        },
        
        'get': function(path, callback) {
            var url = $.github.opts['urlPrefix'] + path + '?callback=?';
            $.ajax({
                'url': url,
                'dataType': 'jsonp',
                'method': 'GET',
                'success': function(data) {
                    callback(data);
                },
                'error': function(x,y,z) {
                    console.log(x,y,z);
                },
                'username': $.github.getAuthUsername(),
                'password': $.github.getAuthPassword()
            });
        },
        
        'userinfo': function(username, callback) {
            $.github.get('/user/show/' + encodeURIComponent(username), function(data) {
                callback(data);
            });
        },
        
        'following': function(username, callback) {
            $.github.get('/user/show/' + encodeURIComponent(username) + '/following', function(data) {
                callback(data);
            });
        },
        
        'followers': function(username, callback) {
            $.github.get('/user/show/' + encodeURIComponent(username) + '/followers', function(data) {
                callback(data);
            });
        },
        
        'repos': function(username, callback) {
            $.github.get('/repos/show/' + encodeURIComponent(username), function(data) {
                callback(data);
            });
        },
        
        'gists': function(username, callback) {
            $.github.get('/gists/show/' + encodeURIComponent(username), function(data) {
                callback(data);
            });
        }
    };
    $.github.opts = {
        'urlPrefix': 'https://github.com/api/v2/json',
        'username': null,
        'password': null
    };
})(jQuery);
(function($) {

  Sammy = Sammy || {};

  // Sammy.Headline is a very simple plugin to easily set the document's headline.
  // It supplies a helper for setting the headline (`headline()`) within routes.
  Sammy.Headline = function() {

    // ### Example
    //
    //    // setting a title prefix
    //    $.sammy(function() {
    //
    //      this.get('#/', function() {
    //        this.headline('Home');
    //      });
    //    });
    //
    
    this.helper('headline', function(headline) {
        $('#headline').data('new-text', headline);
        // Headline text will be set in swap()
    });
    
  };

})(jQuery);

/*
HTML :

<div class="table-responsive">
	<table id="table-filter" class="table table-bordered">
		<thead>
			<tr>
				<th><label>Name</label></th>
				<th><label>Salary</label></th>
			</tr>
		</thead>
		<tbody class="searchable" >
		</tbody>
	</table>
</div>

JS :

$('#table-filter').btablefilter();

*/
/* IE8 trim function not exist */
if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };
}
(function($) {
  if (!$.BTableFilter) {
    $.BTableFilter = {};
  }

  $.BTableFilter.start = function(el, options) {
    var base = this;

    base.$el = $(el);
    base.el = el;

    base.init = function() {
      base.options = $.extend({},$.BTableFilter.settings, options);

      // get id table
      var id = base.$el.attr('id').trim();
      var filter = 'filter-' + id;

      // if filter not exist
      if ($('#' + filter).length === 0) {
        // add template before table
        base.$el.before(base.options.template.trim());
      }

      // add id to filter
      base.$el.prev('.filter').attr('id', filter);

      // change addon with options
      base.$el.prev('.filter').find('span').text(base.options.addon.trim());

      // change placeholder with options
      base.$el.prev('.filter').find('input').attr('placeholder', base.options.placeholder.trim());

      // find input, add event keyup
      base.$el.prev('.filter').find('input').off('keyup').on('keyup', function(e) {

        var rex = new RegExp($(this).val(), 'i');
        $('#' + id + ' .' + base.options.class + ' tr').hide();
        $('#' + id + ' .' + base.options.class + ' tr').filter(function() {

          return rex.test($(this).text());
        }).show();
      });
    };

    //base.filter = function() {
      //$(e.delegateTarget).trigger( "EVENT_TABLEFILTER", [ $(this).val() ] );
      //base.$el.prev('.filter').find('input').on('EVENT_TABLEFILTER', function(e, val) {
      //});
    //};

    base.init();
    //base.filter();

    return true;
  };

  /**
   * BTableFilter Settings.
   *
   * @param searchable | class using to search on table
   * @param searchable | class using to search on table
   */
  $.BTableFilter.settings = {
    addon       : 'Search',
    placeholder : 'Search here...',
    class       : 'searchable',
    template    : '<div class="input-group filter"><span class="input-group-addon">Search</span><input type="text" class="form-control" placeholder="Search here..." ></div>'
  };

  $.fn.btablefilter = function(options) {
    var r = null;

    this.each(function() {
      r = $.BTableFilter.start(this, options);
    });

    return r;
  };

})(jQuery);

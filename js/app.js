/* app js */
// Shorthand for $( document ).ready()
$(function() {
  console.log( "ready!" );

  $('#table-clients').jfilter();
  $('#list-clients' ).jfilter();
});

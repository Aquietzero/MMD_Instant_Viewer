var converter = new Showdown.converter();

$(function() {
  input = document.getElementById('input');
  input.onkeyup = updatePreview;
  hljs.initHighlightingOnLoac();
})

function updatePreview() {
  md = $('#input').val();
  html = converter.makeHtml(md);
  $('#preview').html(html);
  $('pre code').each(function(i, e) { hljs.highlightBlock(e, '    '); });
  MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'preview']);
}

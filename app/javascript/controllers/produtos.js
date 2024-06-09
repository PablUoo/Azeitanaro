$(document).ready(function() {
  console.log('DOM fully loaded and parsed');

  if ($('body').hasClass('produtos-show')) {
    $('.produto-adicionar').click(function() {
      var produtoId = $(this).data('produto-id');
      var quantidade = 1;

      $.ajax({
        type: 'POST',
        url: `/carrinho/adicionar/${produtoId}`,
        data: { id_produto: produtoId, quantidade: quantidade },
        success: function(data) {
          // fazer algo com a resposta
        },
        error: function(xhr, status, error) {
          // lidar com o erro
        }
      });
    });

    $('.produto-comprar').click(function() {
      var produtoId = $(this).data('produto-id');
      var quantidade = 1;

      $.ajax({
        type: 'POST',
        url: `/carrinho/comprar/${produtoId}`,
        data: { id_produto: produtoId, quantidade: quantidade },
        success: function(data) {
          // fazer algo com a resposta
        },
        error: function(xhr, status, error) {
          // lidar com o erro
        }
      });
    });
  }
});

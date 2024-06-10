/*
  Esse js serve para tratar os forms em modal, para facilitar a validação dos campos.
  Como usar:
    Criar um partial com os divs de modal. No modal-body, colocar o partial do form desejado.
    O _form.html.erb geralmente usa o resource para preencher o objeto. Passar um novo objeto da classe utilizada no form. Ex:
      <%= render 'clientes/form', resource: Cliente.new %>

    No div pai, colocar os atributos data-url="url-de-destino". O data-url serve para setar a url do ajax
      Exemplo do div pai:
      <div id="modal-form-coordenador" class="modal modal-form" tabindex="-1" data-backdrop="static" role="dialog"
        data-url="<%= coordenadores_path %>">

*/
var ModalForm = (function(){
    function ModalForm(divModal){
      if(divModal instanceof jQuery){
        this.modal = divModal;
      }else{
        this.modal = $(divModal);
      }
      this.url = this.modal.data('url');
  
      var form = this.modal.find('form');
      form.validate(); // Usa o JQuery validator pra  possibilitar a validação dos campos nested.
      form.attr('data-remote', true);
      if(!form.attr('action').includes('.json')) form.attr('action', form.attr('action')+'.json');
      var arrayNotIn = form.find(".modal-form [name*='[']");
      this.model = form.find("[name*='[']").not(arrayNotIn).first()[0].name.split('[')[0];
  
      this.modal.on('ajax:success', form, function(e){
        this.limpaCampos();
        this.modal.modal('hide');
        this.modal.trigger('modalForm:submitted');
        $.notify({icon: 'fas fa-check', message: `Salvo com sucesso!`}, {type: 'success', z_index: 9999});
        location.reload();
      }.bind(this)).
      on('ajax:before', function(e){
        var form = this.modal;
      }).
      on('ajax:error', function(ev, ret){
        if(ret.status == 422){
          console.error('Erro de validação', ret);
          this.apontaErros(ret.responseJSON);
        }else if(ret.status == 401){
          $.notify({icon: 'fas fa-exclamation-triangle', message: 'Você não tem permissão para gravar!', target: 'notifier'},
            {type: 'danger', z_index: 9999});
          console.error(`Erro ao tentar salvar`, ret);
        }else{
          $.notify({icon: 'fas fa-exclamation-triangle', message: 'Ocorreu um erro!', target: 'notifier'}, {type: 'danger', z_index: 9999});
          console.error(`Erro ao tentar salvar`, ret);
        }
      }.bind(this));
    }
    //Pega o array de erros retornado do ajax e aponta em qual input esta o error e qual o erro
    ModalForm.prototype.apontaErros = function(e){
      this.limpaValidacoes();
      let scrollToPosition = 0;
      for(var campo in e.errors){
        if(campo.includes('.')){
          var divCampo = this.modal.find(`.${this.model}_${campo.replaceAll(/\./, '_')}`);
        }else{
          var divCampo = this.modal.find(`.${this.model}_${campo}`);
        }
        if(divCampo.length == 0 && campo.includes('.')) {
          divCampo = this.modal.find(`.${this.model}_${campo.split('.')[0]}`);
        }else{
          divCampo.append(`<div class="help-block">${e.errors[campo]}</div>`);
        }
        scrollToPosition = !!divCampo[0] ? divCampo[0].offsetTop : 0;
        divCampo.addClass('has-error');
      }
      this.modal.find('.modal-body').animate({ scrollTop: scrollToPosition }, 'slow');
    }
    //Limpa os campos para um novo objeto
    ModalForm.prototype.limpaCampos = function(){
      this.modal.find('input.form-control').each(function(i, el){
        el = $(el);
        el.val('');
      });
    }
    // Remove os help-blocks e os has-errors
    ModalForm.prototype.limpaValidacoes = function(){
      this.modal.find('.help-block').remove();
      this.modal.find('.has-error').removeClass('has-error');
    }
    // elemento é o div com form-group. Adiciona a cor vermelha nos inputs com erro e o help-block com a msg
    ModalForm.prototype.adicionaHasError = function(elemento, msg){
      elemento.addClass('has-error');
      elemento.append(`<div class="help-block">${msg}</div>`);
    }
    return ModalForm;
  })();
  
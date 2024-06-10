module ApplicationHelper
    include FontAwesomeHelper
        def modal(id, options = {}, &block)
          options = {
            tabindex: -1,
            backdrop: :static,
            modal_width: 80,
          }.merge(options)
          content_tag(:div, class: "modal #{options[:class]}", id: id, role: :dialog, tabindex: options[:tabindex], data: {backdrop: options[:backdrop]}.merge(options[:data] || {})) do
            content_tag(:div, class: "modal-dialog", style: "width: #{options[:modal_width]}%;") do
              content_tag(:div, class: "modal-content") do
                content_tag(:div, class: "modal-header") do
                  content_tag(:button, class: "close", 'aria-hidden': true, data: {dismiss: :modal}) { 'x' }+
                  content_tag(:h4, class: "modal-title") { options[:modal_header] }
                end+
                content_tag(:div, class: "modal-body") do
                  capture(&block)
                end
              end
            end
          end
        end
     
        def paginate(scope, paginator_class: Kaminari::Helpers::Paginator, template: nil, **options)
          content_tag(:div, class: "pagination-container") do
            content_tag(:ul, class: "pagination") do
              anterior = link_to_prev_page(scope, 'Página anterior')
              proxima = link_to_next_page(scope, 'Próxima página')
              if anterior
                content_tag(:li, anterior) + content_tag(:li, proxima)
              else
                content_tag(:li, proxima)
              end
            end
          end
        end
     
       def back_button(url = nil, html_options = {})
       link_to(
         icon('fas', 'arrow-left') + ' ' + t(:back).html_safe,
         url || collection_url,
         html_options.merge(class: 'ln-back btn btn-default')
       )
     end
     
       def print_button(r = resource)
         link_to(
           icon('fas', 'print') + ' ' + t(:print).html_safe,
           resource_url(r, format: :pdf),
           class: "ln-show btn btn-primary",
           target: "_blank"
         )
       end
     
       def new_button(options = {})
         url_params = options[:url_params] || {}
         title = options[:title] || t(:'new.title', scope: params[:controller].split('/'))
         link_to(
           icon('fas', 'file') + ' ' + title.html_safe,
           new_resource_url(url_params),
           class: "ln-new btn btn-primary"
         )
       end
     
       def edit_button(r = resource)
         link_to(
           icon('far', 'edit') + ' ' + t(:edit).html_safe,
           edit_resource_url(r),
           class: "ln-edit btn btn-warning"
         )
       end
     
       def destroy_button(r = resource)
         text = r.respond_to?(:ativo) ? t(:deactivate) : t(:destroy)
         link_to(
           icon('far', 'trash-alt') + ' ' + text.html_safe,
           resource_url(r),
           class: "ln-destroy btn btn-danger",
           data: {confirm: t(:confirm)},
           method: :delete
         )
       end
     
       def download_button(path)
         link_to(
           icon('fas', 'download') + ' Download',
           path,
           class: 'btn btn-primary',
         )
       end
     
       def print_link(r = resource, params = {})
         link_to(
           icon('fas', 'print'),
           resource_url(r, params.merge(format: :pdf)),
           class: "ln-show",
           title: t(:print),
           target: '_blank'
         )
       end
     
       def show_link(r = resource, options = {}, params = {})
         link_to(
           icon('far', 'eye'),
           resource_url(r, params),
           options.merge(
             class: "ln-show",
             title: t(:show)
           )
         )
       end
     
       def formata_valor(atributo, val)
         return val if val.blank?
     
         @col_types ||= {}
         @col_types[atributo] ||= ContratoVenda.type_for_attribute(atributo).type
     
         tipo = @col_types[atributo]
         case tipo
         when :date
             formata_data(val)
         when :datetime
             formata_data_hora(val)
         when :decimal
             formata_decimal(val)
         when :boolean
             formata_booleano(val)
         else
             val
         end
        end
     
       def edit_link(r = resource, options = {}, params = {})
         link_to(
           icon('far', 'edit'),
           edit_resource_url(r, params),
           options.merge(
             class: "ln-edit",
             title: t(:edit)
           )
         )
       end
     
       def destroy_link(r = resource, params = {})
         text = r.respond_to?(:ativo) ? t(:deactivate) : t(:destroy)
         link_to(
           icon('far', 'trash-alt'),
           resource_url(r, params),
           class: "ln-destroy",
           title: text,
           data: {confirm: t(:confirm)},
           method: :delete
         )
       end
     
       def activate_link(r = resource, params = {})
         link_to(
           icon('far', 'check-square'),
           activate_resource_url(r, params),
           class: "ln-activate",
           title: t(:activate),
           data: {confirm: t(:confirm)},
           method: :post
         )
       end
     
       def dissociate_link(r = resource)
         link_to(
           t(:destroy),
           dissociate_resource_url(r),
           class: "ln-destroy",
           title: t(:destroy)
         )
       end
     
       def fieldset(legend = '', options = {}, &block)
         if options[:helper].present?
           helper = icon('far', 'question-circle', title: options[:helper], rel: :tooltip, data: {container: :body, placement: :auto})
         end
         legend = "#{legend} #{helper}".html_safe
         content_tag(:fieldset, options) do
           content_tag(:legend, legend) + capture(&block)
         end
       end
     
       def l(value, options = {})
         super(value, **options) if value.present?
       end
     
       def n(value)
         number_with_precision(value)
       end
     
       def yn(value)
         value ? "Sim" : "Não"
       end
     
       def v_or_x(value)
         value ? icon('fas', 'check') : icon('fas', 'times')
       end
     
       def title(page_title)
         content_for(:title) { page_title }
       end
     
       def search(&block)
         content_for(:search) { render('common/search', content: capture(&block)) }
       end
     
       def action_buttons(&block)
         content_for(:action_buttons) { render('common/action_buttons', content: capture(&block)) }
       end
     
       def action_buttons_left(&block)
         content_for(:action_buttons_left) { content_tag(:div, capture(&block), id: 'left-actions') }
       end
     
       def filtered_form_for(object, options = {}, &block)
         options[:builder] = FilteredFormBuilder
         options[:html] ||= {}
         options[:html][:id] ||= 'form-filtrar'
         options[:html][:class] ||= ''
         options[:html][:class].concat(' form-filtrar').strip
         options[:html][:'data-turboform'] = true
         search_form_for(object, options, &block)
       end
     
       def custom_form_for(object, *args, &block)
         options = args.extract_options!
         options[:html] ||= {}
         options[:html][:multiplart] = true
         simple_nested_form_for(object, *(args << options.merge(builder: CustomFormBuilder)), &block)
       end
     
       def button_group(&block)
         content_tag(:div, class: 'bts-novo', &block)
       end
     
       def large_button(value, options = {})
         klass = options[:class].to_s.split(" ")
         klass += ["btn btn-default"]
         options[:class] = klass.join(" ")
         submit_tag value, options
       end
     
       def primary_button(value, options = {})
         options[:class] ||= ''
         options[:class] += ' btn-primary' if options[:class].index('btn-primary').nil?
         options[:class] = options[:class].strip
         large_button(value, options)
       end
     
       def info_button(value, options = {})
         options[:class] ||= ''
         options[:class] += ' btn-info' if options[:class].index('btn-info').nil?
         options[:class] = options[:class].strip
         large_button(value, options)
       end
     
       def danger_button(value, options = {})
         options[:class] ||= ''
         options[:class] += ' btn-danger' if options[:class].index('btn-danger').nil?
         options[:class] = options[:class].strip
         large_button(value, options)
       end
     
       def button(value = 'Salvar', options = {})
         button_group do
           primary_button(value, options)
         end
       end
     
       def notificacao_tarefas
         @_pending_tasks ||= current_usuario.tarefas_pendentes.where(ativo: true).size
         content_tag(:span, class: "badge badge-important") do
           @_pending_tasks.to_s
         end if @_pending_tasks > 0
       end
     
       def custom_file_field_tag(attribute_name, options = {})
         content_tag(:div, class: "fileinput fileinput-new input-group", data: {provides: "fileinput"}) do
           content_tag(:div, class: 'form-control', data: {trigger: 'fileinput'}) do
             content_tag(:i, nil, class: "glyphicon glyphicon-file fileinput-exists") + ' ' +
             content_tag(:span, nil, class: "fileinput-filename")
           end +
           content_tag(:span, class: "input-group-addon btn btn-default btn-file") do
             content_tag(:span, "Selecione", class: "fileinput-new") +
             content_tag(:span, "Trocar", class: "fileinput-exists") +
             file_field_tag(attribute_name, options) +
             hidden_field_tag("#{attribute_name}_cache")
           end +
           content_tag(:a, "Remover", href: "#", class: "input-group-addon btn btn-default fileinput-exists", data: {dismiss: "fileinput"})
         end
       end
     
       def dispatcher_route
         "#{controller_path.gsub(/\//, "_")}##{action_name}"
       end
     
       def input_datepicker(name, label, value = nil, options = {})
         options = {wrapper_html: {}, input_html: {}}.merge(options)
         options[:alt] ||= "date"
         label ||= name.to_s.capitalize
         if options[:helper].present?
           helper = icon('far', 'question-circle', title: options[:helper], rel: :tooltip, data: {container: :body, placement: :auto})
         end
         label = "#{label} #{helper}"
         options[:wrapper_html] = {class:'form-group '}.merge(options[:wrapper_html])
         required = options.delete(:required)
         required_markup = required ? content_tag(:abbr, '*', title: 'obrigatório') : ''
         options[:wrapper_html][:class] += 'col-md-3' if !options[:wrapper_html][:class].include? 'col-md'
         content_tag(:div, options[:wrapper_html]) do
           content_tag(:label, for: name) do
             (required_markup + " " + label).html_safe
           end +
           content_tag(:div, class: "input-group date #{options[:class]}") do
             text_field_tag(name, value, options.merge(class: 'form-control', autocomplete: 'off')) +
             content_tag(:span, icon('fas', 'calendar'), class: 'input-group-addon')
           end
         end
       end
     
       def input(name, label = nil, value = nil, options = {})
         options = {wrapper_html: {}, input_html: {}}.merge(options)
         options[:input_html] = {class:'', autocomplete: 'off'}.merge(options[:input_html])
         options[:wrapper_html] = {class:''}.merge(options[:wrapper_html])
         label ||= name.to_s.capitalize
         if options[:helper].present?
           helper = icon('far', 'question-circle', title: options[:helper], rel: :tooltip, data: {container: :body, placement: :auto})
         end
         label = options[:label] != false ? "#{label} #{helper}" : false
         required = options.delete(:required)
         error = options.delete(:error)
         required_markup = required ? content_tag(:abbr, '*', title: 'obrigatório') : ''
         options[:wrapper_html][:class] = (options[:wrapper_html][:class].strip + " #{name} form-group string #{'required' if required} #{'has-error' if error.present?}").strip
         options[:wrapper_html][:class] += ' col-md-3' if !options[:wrapper_html][:class].include? 'col-md'
         options[:input_html][:class] = (options[:input_html][:class].strip + " #{name} form-control string #{'required' if required}").strip
         conteudo_inner = []
         conteudo_inner << content_tag(:label, for: name, class: "control-label string #{'required' if required}", for: name) do
           (required_markup + " " + label).html_safe
         end if !!label
         conteudo_inner << if options[:input_html][:rows].present?
           text_area_tag(name, value, options[:input_html])
         else
           text_field_tag(name, value, options[:input_html])
         end
         conteudo_inner << content_tag(:div, class:'help-block') do
           error.try(:join, ', ').try(:html_safe)
         end
         conteudo_inner = conteudo_inner.sum
         if options[:wrapper] != false
           content_tag(:div, conteudo_inner, options[:wrapper_html])
         else
           conteudo_inner
         end
       end
     
       #### ex: <%= input_select "planta_id", 'Planta', options_for_select([['opt1', 1], ['opt2', 2]], params[:planta_id]), opts %>
       def input_select(name, label = nil, value = nil, options = {})
         options = {wrapper_html: {}, input_html: {}}.merge(options)
         options[:input_html] = {class:'', autocomplete: 'off'}.merge(options[:input_html])
         options[:wrapper_html] = {class:''}.merge(options[:wrapper_html])
         label ||= name.to_s.capitalize
         if options[:helper].present?
           helper = icon('far', 'question-circle', title: options[:helper], rel: :tooltip, data: {container: :body, placement: :auto})
         end
         label = "#{label} #{helper}"
         error = options.delete(:error)
         required = options.delete(:required)
         required_markup = required ? content_tag(:abbr, '*', title: 'obrigatório') : ''
         options[:wrapper_html][:class] = (options[:wrapper_html][:class].strip + " #{name} form-group string #{'required' if required} #{'has-error' if error.present?}").strip
         options[:wrapper_html][:class] += ' col-md-3' if !options[:wrapper_html][:class].include? 'col-md'
         options[:input_html][:class] = (options[:input_html][:class].strip + " #{name} form-control string #{'required' if required}").strip
         content_tag(:div, options[:wrapper_html]) do
           content_tag(:label, for: name, class: "control-label string #{'required' if required}", for: name) do
             (required_markup + " " + label).html_safe
           end +
           select_tag(name, value, options[:input_html]) +
           content_tag(:div, class:'help-block') do
             error.try(:join, ', ').try(:html_safe)
           end
         end
       end
     
       def input_checkbox(name, label = nil, value = nil, options = {})
         options = {wrapper_html: {}, input_html: {}, always_send: true}.merge(options)
         options[:input_html] = {class:'', autocomplete: 'off'}.merge(options[:input_html])
         options[:wrapper_html] = {class:''}.merge(options[:wrapper_html])
         if !label.nil?
           label ||= name.to_s.capitalize
           if options[:helper].present?
             helper = icon('far', 'question-circle', title: options[:helper], rel: :tooltip, data: {container: :body, placement: :auto})
           end
         end
         label = "#{label} #{helper}"
         required = options.delete(:required)
         required_markup = required ? content_tag(:abbr, '*', title: 'obrigatório') : ''
         options[:wrapper_html][:class] = (options[:wrapper_html][:class].strip + ' form-check').strip
         options[:wrapper_html][:class] += ' col-md-3' if !options[:wrapper_html][:class].include? 'col-md'
         options[:input_html][:class] = (options[:input_html][:class].strip + ' form-check-input').strip
         content_tag(:div, options[:wrapper_html]) do
           if options[:always_send]
             check_box(name, nil, options[:input_html]) # Checkbox que sempre envia um valor (1 pra marcado e 0 pra não marcado)
           else
             check_box_tag(name, value, options[:input_html][:checked], options[:input_html]) # Checkbox que só envia o parametro se o checkbox esriver marcado.
           end +
           content_tag(:label, for: name, class: 'form-check-label') do
             (required_markup + " " + label).html_safe
           end
         end
       end
     
       def input_with_addon(name, label = nil, value = nil, addon = nil, options = {})
         options = {wrapper_html: {}, input_html: {}}.merge(options)
         options[:input_html] = {class:'', autocomplete: 'off'}.merge(options[:input_html])
         options[:wrapper_html] = {class:''}.merge(options[:wrapper_html])
         if options[:helper].present?
           helper = icon('far', 'question-circle', title: options[:helper], rel: :tooltip, data: {container: :body, placement: :auto})
         end
         label = "#{label} #{helper}" if label.present?
         required = options.delete(:required)
         required_markup = required ? content_tag(:abbr, '*', title: 'obrigatório') : ''
         options[:wrapper_html][:class] = (options[:wrapper_html][:class].strip + " form-group string #{'required' if required}").strip
         options[:wrapper_html][:class] += ' col-md-3' if !options[:wrapper_html][:class].include? 'col-md'
         options[:input_html][:class] = (options[:input_html][:class].strip + " form-control string #{'required' if required}").strip
     
         conteudo = []
         conteudo << content_tag(:label, for: name, class: "control-label string #{'required' if required}") do
           (required_markup + " " + label).html_safe
         end if label.present?
         conteudo << content_tag(:div, class:"input-group") do
           text_field_tag(name, value, options[:input_html]) +
           content_tag(:span, addon, class:"input-group-addon")
         end
         conteudo.join.html_safe
     
         return conteudo.join.html_safe if options[:wrapper] === false
         content_tag(:div, options[:wrapper_html]) do
           conteudo.join.html_safe
         end
     
       end
     
       def input_money(name, label, value = nil, options = {})
         options[:alt] ||= "money"
         label ||= name.to_s.capitalize
         if options[:helper].present?
           helper = icon('far', 'question-circle', title: options[:helper], rel: :tooltip, data: {container: :body, placement: :auto})
         end
         label = "#{label} #{helper}"
         required = options.delete(:required)
         required_markup = required ? content_tag(:abbr, '*', title: 'obrigatório') : ''
         wrapper_class = options[:wrapper_html].try(:delete, :class) || ''
         wrapper_class += ' col-md-3' if !wrapper_class.include? 'col-md'
         wrapper_options = options.delete(:wrapper_html) || {}
         content_tag(:div, wrapper_options.merge(class: "form-group number #{'required' if required} #{wrapper_class}")) do
           content_tag(:label, for: name, class: "control-label number #{'required' if required}") do
             (required_markup + " " + label).html_safe
           end +
           content_tag(:div, class: "input-group #{options[:class]}") do
             text_field_tag(name, value, options.merge(class: "form-control number #{'required' if required}", autocomplete: 'off')) +
             content_tag(:span, 'R$', class: 'input-group-addon')
           end
         end
       end
     
       def input_datetimepicker(name, label, value = nil, options = {})
         input_datepicker(name, label, value, options.merge(alt: 'datetime', class: 'datetime'))
       end
     
       def input_monthpicker(name, label, value = nil, options = {})
         input_datepicker(name, label, value, options.merge(alt: 'month_year', class: 'month_year'))
       end
     
       def loading_job_indicator(job_id)
         content_tag(:div, class: 'job-loader', data: {job_id: job_id}) do
           content_tag(:div, class: 'center') do
             'Carregando, aguarde... '.html_safe +
             image_tag("loading.gif")
           end
         end
       end
     
       # mysql-style output for an array of ActiveRecord objects
       #
       # Usage:
       # table_report(records) # displays report with all fields
       # table_report(records, :field1, :field2, ...) # displays report with given fields
       #
       # Example:
       # >> table_report(records, :id, :amount, :created_at)
       # +------+-----------+--------------------------------+
       # | id   | amount    | created_at                     |
       # +------+-----------+--------------------------------+
       # | 8301 | $12.40    | Sat Feb 28 09:20:47 -0800 2009 |
       # | 6060 | $39.62    | Sun Feb 15 14:45:38 -0800 2009 |
       # | 6061 | $167.52   | Sun Feb 15 14:45:38 -0800 2009 |
       # | 6067 | $12.00    | Sun Feb 15 14:45:40 -0800 2009 |
       # | 6059 | $1,000.00 | Sun Feb 15 14:45:38 -0800 2009 |
       # +------+-----------+--------------------------------+
       # 5 rows in set
       #
       def table_report(items, titles, fields)
         result = ""
     
         # find max length for each field; start with the field names themselves
         fields = items.first.class.column_names unless fields.any?
         max_len = Hash[*fields.map {|f| [f, f.to_s.length]}.flatten]
         items.each do |item|
           fields.each do |field|
             len = item.send(field).to_s.length
             max_len[field] = len if len > max_len[field]
           end
         end
         border = '+-' + fields.map {|f| '-' * max_len[f] }.join('-+-') + '-+'
         title_row = '| ' + titles.map {|f| sprintf("%-#{max_len[f]}s", f.to_s) }.join(' | ') + ' |'
     
         result = border + "\n" + title_row + "\n" + border + "\n"
         items.each do |item|
           row = '| ' + fields.map {|f| sprintf("%-#{max_len[f]}s", item.send(f)) }.join(' | ') + ' |'
           result += row + "\n"
         end
     
         result += border
       end
     
       # Retorna o medidor de chapas disponíveis.
       def indicador_material(maquina)
         if maquina.try(:puncionadeira?)
           horas = 0
           saldos = GerenciadorEstoque.saldos(maquina.deposito_insumos_id)
           programas = Programa.liberados.nao_finalizados.da_maquina(maquina.id)
     
           programas.each do |prg|
             if prg.chapa_id
               qtde_chapas = saldos[prg.chapa_id].to_i
               qtde_programa = prg.chapas_restantes
     
               if qtde_chapas >= qtde_programa
                 horas += qtde_programa * prg.tempo_estimado / 3600.0
                 saldos[prg.chapa_id] -= qtde_programa
               else
                 horas += qtde_chapas * prg.tempo_estimado / 3600.0
                 saldos[prg.chapa_id] = 0
               end
             end
           end
     
           medidor(horas)
         end
       end
     
       # Cria uma div com o medidor de 0 a 8. 0 horas começa no vermelho-escuro, indicando urgencia
       def medidor(horas)
         cores = %w(
           verde-escuro verde verde-claro amarelo-escuro amarelo laranja vermelho vermelho-escuro
         )
     
         cores_display = cores.last(horas.to_i)
         cores_display.insert(0, *Array.new([0, 8 - cores_display.length].max, "branco"))
     
         content_tag(:div, class: "display-horas") do
           cores_display.map do |cor|
             "<span class=\"quadrado #{cor}\"></span>"
           end.join.html_safe
         end
       end
     
       def show_file(arquivo, options = {}, &block)
         arquivo = arquivo.try(:url) || arquivo
         return if arquivo.blank?
         label = if options[:label].present?
           options[:label]
         else
           arquivo_short = arquivo[arquivo.rindex('/')+1..-1].split('.')
           arquivo_short[0..-2].join('.')[0..17]+'.'+arquivo_short[-1]
         end
         output = ''
         content_tag(:div, class:"#{options[:wrapper_html]} show-file".strip) do
           if arquivo.downcase.ends_with? *['jpg', 'jpeg', 'gif', 'png', 'svg']
             content_tag(:a, href: root_url+arquivo[1..-1], class: 'foto pswp-item', 'pswp-group': options[:pswp_group] || :pswp_group_1, target: '_blank') do
               image_tag("#{root_url}/#{arquivo}", loading: :lazy)
             end
           elsif arquivo.downcase.ends_with? *['mp4', 'OGG', 'WEBM']
             content_tag(:video, width: '200', height: '200', controls: '') do
               content_tag(:source, '', src: arquivo, type: 'video/'+arquivo[arquivo.rindex('.')+1..-1])
             end
           else
             icon_class = 'far'
             icon = ''
             if arquivo.downcase.ends_with? *['pdf']
               icon = 'file-pdf'
             elsif arquivo.downcase.ends_with? *['rar', 'zip', 'gzip', '7z']
               icon = 'zip-archive'
             elsif arquivo.downcase.ends_with? *['ppt', 'pptx']
               icon = 'file-powerpoint'
             elsif arquivo.downcase.ends_with? *['xls', 'xlsx']
               icon = 'file-excel'
             elsif arquivo.downcase.ends_with? *['txt', 'rtfd', 'doc', 'docx']
               icon = 'file-alt'
             elsif arquivo.downcase.ends_with? *['wav', 'mp3']
               icon = 'music'
               icon_class = 'fas'
             else
               icon = 'file'
             end
             content_tag(:a, href: root_url+arquivo[1..-1], class:'file') do
               icon(icon_class, icon)
             end
           end+
           content_tag(:a, label, href: root_url+arquivo[1..-1], class:'show-file-link', target: '_blank')+
           (block.present? ? capture(&block) : '')
         end
       end
     
       def infinite_scroll(url, options = {})
         id = options[:id] || 'infinite-scroll'
         classe = options[:class] || ''
         classe = classe.strip + ' is-loader'
         content_tag(:div, id: id, class: classe.strip, data:{url: url}) {}
       end
     
       def simple_calendar_classes_for_td(day)
         start_date = (params[:start_date] || Date.today).to_date
         today = Time.zone.now.to_date
     
         td_class = ["day"]
         td_class << "wday-#{day.wday.to_s}"
         td_class << "today"         if today == day
         td_class << "past"          if today > day
         td_class << "future"        if today < day
         td_class << 'start-date'    if day.to_date == start_date.to_date
         td_class << "prev-month"    if start_date.month != day.month && day < start_date
         td_class << "next-month"    if start_date.month != day.month && day > start_date
         td_class << "current-month" if start_date.month == day.month
     
         td_class
       end

       def sign_in(user)
        session[:user_id] = user.id
      end
    
      def sign_out
        session.delete(:user_id)
      end
    
      def current_user
        @current_user ||= User.find_by(id: session[:user_id])
      end
    
      def user_signed_in?
        !current_user.nil?
      end
end

module FontAwesomeHelper
  def fa_icon(prefix, icon_name, options = {})
    content_class = "#{prefix} fa-#{icon_name}"
    content_tag(:i, nil, options.merge(class: content_class))
  end

end
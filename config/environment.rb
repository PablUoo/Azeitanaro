# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!
color_code = Rails.env.development? ? 36 : 33
puts "\e[#{color_code}m#{'INICIANDO COM O AMBIENTE ' + Rails.env}\e[0m"
color_code = nil

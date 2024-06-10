require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Azeinataro
  class Application < Rails::Application
    config.autoloader = :zeitwerk

    # Salva o schema como SQL. Necessário para guardar os triggers e as funções SQL
    config.active_record.schema_format = :sql
    config.autoload_paths += %W(
      #{config.root}/app/validators
      #{config.root}/app/charts
      #{config.root}/app/services
    )

    config.time_zone = 'Brasilia'
    config.i18n.enforce_available_locales = false
    config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**/*.{rb,yml}').to_s]
    config.i18n.default_locale = :'pt-BR'
    config.i18n.fallbacks = [:'pt-BR', { 'pt-BR': :pt }]

    config.action_controller.include_all_helpers = false
    config.action_controller.permit_all_parameters = true

    config.active_job.queue_adapter = :sidekiq

    config.action_mailer.delivery_job = "ActionMailer::MailDeliveryJob"

    config.encoding = "utf-8"

    config.assets.enabled = true

    config.lograge.enabled = true
    config.lograge.custom_options = lambda do |event|
      {
        remote_ip: event.payload[:remote_ip],
        user_id: event.payload[:user_id],
        pid: $$,
        time: Time.now,
        rss: (`ps -o rss= -p #{Process.pid}`.chomp.to_i * 1024).to_s(:human_size, precision: 3),
        params: event.payload[:params].try(:except, 'controller', 'action', 'format', 'utf8')
      }
    end

    config.exceptions_app = self.routes


    config.action_mailer.default_url_options = { host: 'localhost:3000' }

  end
end

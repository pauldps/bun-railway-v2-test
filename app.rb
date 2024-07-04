require 'sinatra'
require 'json'

set :bind, '0.0.0.0'
set :port, ENV['PORT'] || 4567

get '/' do
  content_type :json
  { status: 'SINATRA' }.to_json
end

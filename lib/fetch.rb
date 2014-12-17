class KrivoyFetch < Middleman::Extension

  # def self.debug io

  # end

  # def logger
    # KrivoyFetch
  # end

  def initialize(app, options_hash={}, &block)
    super

    @projects = []

    be_config = YAML.load_file('be.yml')

    behance = Faraday.new(:url => ' https://www.behance.net') do |faraday|
      faraday.request  :url_encoded             # form-encode POST params
      # faraday.response :logger                  # log requests to STDOUT
      faraday.adapter  Faraday.default_adapter  # make requests with Net::HTTP
    end

    collection_projects = behance.get "/v2/collections/23950617/projects?api_key=#{be_config['api_key']}&access_token=#{be_config['access_token']}"

    # logger.debug JSON.parse(collection_projects.body).to_yaml

    JSON.parse(collection_projects.body)['projects'].each do | collection_project |
      project_tmp = {}
      project_raw = behance.get "/v2/projects/#{collection_project['id']}?api_key=#{be_config['api_key']}&access_token=#{be_config['access_token']}"
      project = JSON.parse(project_raw.body)['project']
      project_tmp[:name] = project['name']
      puts "Update: #{project['name']}\n"
      project_tmp[:url] = nil
      url = /^url:(.*?)$/.match(project['tags'].last)
      project_tmp[:url] = url[1] unless url.nil?
      project_tmp[:modules] = project['modules'].reject { | m | m['type'] != 'image' }
      @projects.push(project_tmp)

    end

    # puts @projects.to_json

    app.set :projects, @projects

  end

end

::Middleman::Extensions.register(:krivoy_fetch, KrivoyFetch)

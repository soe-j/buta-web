# buta-web

# ruby
ver. 2.4.1

# setup
$ brew install yarn
$ brew install postgresql
$ brew services start postgresql

$ bundle install
$ bin/rails yarn:install

$ bin/rails db:create
$ bin/rails db:migrate
$ bin/rails db:seed

$ bin/rails server

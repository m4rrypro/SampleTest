#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
  export $(cat .env | xargs)
fi

# Debug logs
echo "Environment Variables:"
echo "POSTGRES_USER: $POSTGRES_USER"
echo "POSTGRES_PASSWORD: $POSTGRES_PASSWORD"
echo "POSTGRES_DB: $POSTGRES_DB"
echo "POSTGRES_HOST: $POSTGRES_HOST"

# Run migration and seed commands (handled in DatabaseConfig.js)
# npx knex migrate:latest
# npx knex seed:run

# Start the application
exec "$@"

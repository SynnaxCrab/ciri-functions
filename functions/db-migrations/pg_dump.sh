export $(cat .env | xargs) && pg_dump

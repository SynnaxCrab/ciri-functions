echo PGHOST=$PGHOST > ./functions/db-migrations/.env
echo PGUSER=$PGUSER >> ./functions/db-migrations/.env
echo PGPASSWORD=$PGPASSWORD >> ./functions/db-migrations/.env
echo PGDATABASE=$PGDATABASE >> ./functions/db-migrations/.env
./bin/apex deploy
echo -n '{ "action": "down", "migration": { "to": 0 } }' | ./bin/apex invoke db-migrations --logs
echo -n '{ "action": "up", "migration": {} }' | ./bin/apex invoke db-migrations --logs

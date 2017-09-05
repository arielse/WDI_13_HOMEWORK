mkdir bash_test/
cd bash_test/
touch commands.md
atom .
mkdir scoobies/ vamps/
cd scoobies/
touch buffy.txt giles.txt angel.txt
cp angel.txt ../vamps/angel.txt
cd ../
rm -r vamps/

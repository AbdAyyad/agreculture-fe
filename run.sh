docker stop agre-fe > /dev/null 2>&1
docker rm agre-fe > /dev/null 2>&1
docker build . -t agre
docker run -dp 80:80 --name agre-fe -t agre

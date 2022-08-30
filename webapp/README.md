docker build -t ventchat .
docker run --rm -it -v %cd%/src:/app/src ventchat
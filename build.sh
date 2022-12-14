rm -rf ./build
rm -rf ./packrd
npx vite build
docker build -t litemoji-builder .
docker run --rm -it -e HOME=/tmp \
  --entrypoint=/bin/bash -v "${PWD}:/go/src/" \
  -w "/go/src/" litemoji-builder -c "/usr/local/go/bin/go build -o /go/src/build/litemoji"
sudo chown -R $USER:$USER ./build

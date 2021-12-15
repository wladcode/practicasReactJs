# ---------------------------------
# FIRST BLOCK AS A BUILDER PHASE
# ---------------------------------
FROM node:16-alpine as builder
WORKDIR /usr/app
COPY client/package.json .
RUN npm install
COPY client .
RUN npm start build

# Default commando for the image, no es necesario
#CMD [ ]

# ---------------------------------
# SECOND BLOCK AS A RUN PHASE
# ---------------------------------
FROM nginx
# Exponse the port 80
EXPOSE 80 
COPY --from=builder /usr/app/build /usr/share/nginx/html

# Default commando for the image, no es necesario ya que nginx inicia automaticamente
#CMD [ ]
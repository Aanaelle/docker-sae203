# Utiliser l'image debian officielle comme image parent
FROM debian:latest

# Installer des services et des packages
RUN  apt-get update && \
    apt-get -y install  \
    nginx

# Copier les fichiers de l'hôte vers l'image
COPY ./html /var/www/html/

# Exposer le port 80
EXPOSE 80

# Lancer le service nginx au démarrage du conteneur
CMD ["nginx", "-g", "daemon off;"]

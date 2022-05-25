# Utiliser l'image debian
FROM debian:latest

# Copier le répertoire html du répertoire courant vers le répertoire de l'image /usr/.../htdocs
COPY ./html/ /var/www/html

# Rendre le port 80 accessible au monde en dehors de ce conteneur
EXPOSE 80

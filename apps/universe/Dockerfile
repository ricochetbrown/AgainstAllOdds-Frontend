FROM docker.io/nginx:stable-alpine
COPY --from=build  dist/apps/universe/* /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# APIEX (API with Express)

## Requirement

- Node JS
- NPM
- PM2 or Forever (recommended PM2 https://pm2.keymetrics.io/)
- XAMPP
- Git CLI

<a href="https://nodejs.org/en/download">
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="NodeJs" width="100" height="100"/>
</a>
<a href="https://pm2.keymetrics.io/">
<img src="https://pm2.keymetrics.io/assets/pm2-logo-1.png" alt="Pm2" width="100" height="30"/>
</a>
<a href="https://www.apachefriends.org/download.html">
<img src="https://www.apachefriends.org/images/xampp-logo-ac950edf.svg" alt="NodeJs" width="100" height="100"/>
</a>
<a href="https://git-scm.com/downloads">
<img src="https://git-scm.com/images/logos/2color-lightbg@2x.png" alt="Git" width="100"/>
</a>

## Requirement Installation

- Node Js, Download from here

  <a href="https://nodejs.org/en/download">
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="NodeJs" width="100"/>
  </a>

- NPM udah terinstall bersama dengan NodeJs
- PM2, Install dengan menjalankan ini pada CLI
  ```sh
  npm install pm2 -g
  ```
- Install Xampp seperti biasa. Kita perlu melakukan virtualisasi pada Apache Kemudian buka setting lewat `Config -> httpd.conf`. Tbc...
- Install git CLI seperti biasa

## How to start

- Pastikan requirement sudah terinstall
- Pertama git clone project ini dari github
- Kemudian lakukan instalasi dengan menjalankan
  ```sh
  npm install
  ```
- Setelah itu siapkan .env file. Untuk linux buat file .env dengan cara
  ```
  cp .env.example .env
  ```
  Pada windows
  ```
  copy .env.example .env
  ```
  Kemudian isi semua parameter yang ada pada file .env
- Jika sudah maka jalankan aplikasi dengan menggunakan pm2
  ```
  pm2 start ecosystem.config.cjs --env development --watch
  ```
- Setelah itu harus setting Apache Reverse Proxy supaya bisa masuk sesuai dengan path dari apache server  
  Pertama buka httpd.conf kemudian tambahkan line dibawah ini setelah ServerRoot
  ```
  ProxyPass /pantjq http://localhost:3000
  ProxyPassReverse /pantjq http://localhost:3000
  ```
  Setelah itu <i>uncomment</i> kedua module yang terdapat pada file yang sama
  ```
  LoadModule proxy_module modules/mod_proxy.so
  LoadModule proxy_http_module modules/mod_proxy_http.so
  ```
  Setelah itu baru aplikasi dapat diakses pada path /pantjq
  - Catatan: sebenernya setelah run pm2 aplikasi sudah bisa diakses lewat port
  - Catatan: path dapat diatur, hanya perlu mengubah `/{pathName}` pada aturan ProxyPass

## How to start (Linux)

- Install pm2 secara global
  ```
  sudo npm install -g pm2
  ```
- Buka mod proxy dan proxy_http
  ```
  sudo a2enmod proxy
  sudo a2enmod proxy_http
  ```
- Setelah itu tambahkan ProxyPass pada virtual host untuk menciptakan reverse proxy

  ```
  <VirtualHost *:80>
    ProxyPreserveHost On

    ProxyPass /api http://127.0.0.1:3000
    ProxyPassReverse /api http://127.0.0.1:3000
  </VirtualHost>
  ```

- Kemudian jalankan aplikasi menggunakan pm2
  ```
  pm2 start ecosystem.config.cjs --env development --watch
  ```
- Kemudian restart apache
  ```
  sudo systemctl restart apache2
  ```

# Express.js

## Learning Competencies

- Mampu menginstall and mengkonfigurasi express
- Mampu membuat endpoint untuk menghandle request dari client

## Summary

Secara `De Facto` Express.js telah menjadi pilihan pertama untuk membuat aplikasi menggunakan NodeJS

## Levels

### Level 0: Create your first app

Untuk memulai membuat sebuah aplikasi express, kita perlu membuat sebuah file sebagai *endpoint*, sebagai contoh `app.js`.

Langkah paling awal untuk menggunakan framework Express adalah dengan cara memanggil library express dengan sintaks `require`.

Kemudian kita juga perlu membuat sebuah app variable untuk menampung segala macam konfigurasi dan hal lain terkait aplikasi kita. dan terakhir kita tinggal memanggil method `listen` untuk menjalankan web server sehingga aplikasi kita sudah dapat menerima *request* dan memberikan *response*. Dalam hal ini port yang kita gunakan adalah port `3000`. Lihat contoh dibawah :

```javascript
"use strict";

const express = require("express");

let app = express();

app.listen(3000);
```

Dan sekarang percaya atau tidak kita sudah memiliki aplikasi web yang berjalan di port `3000` dengan menjalankan perintah `node app.js`. Bukalah web browser dan ketikkan `localhost:3000` di address bar dan aplikasi kita sudah berjalan dengan tanda sebuah error `Cannot GET /`.

Jangan khawatir, ini adalah error yang baik buat kita. Artinya express sudah berjalan dan express tidak menemukan `route` yang kita inginkan dan kita juga belum melakukan apa-apa di aplikasi express kita ya kan?

### Level 1: Get something

Untuk membuat `routes` di express kita memiliki beberapa pilihan, yang akan paling sering digunakan diantaranya: `GET`dan `POST`.

Method `GET` dapat digunakan client untuk meminta sesuatu dari server kita. Di framework express, kita dapat membuat `route` get dengan cara seperti berikut.

```javascript
"use strict";

var express = require("express");

var app = express();

app.get("/", function(req, res) {
  res.send("FOSAN ACADEMY, hey welcome :) ");
});

app.listen(3000);
```

Jangan lupa juga kita perlu memberikan *response* terhadap *request*yang masuk dari client dengan mendefinisikan fungsi callback.

Keluar dari node dengan menekan `CTRL+C` dan restart lagi server kita dengan mengetikkan `node app.js`.

### Level 2: Create you own endpoints

Buatlah sejumlah *endpoints* yang dapat digunakan untuk meminjam sebuah buku pada sebuah perpustakaan.

| Method | Route   | Keterangan                                                   |
| :----- | :------ | :----------------------------------------------------------- |
| GET    | /       | Menampilkan profil perpustakaan yang akan kamu buat seperti halaman home jika kalian masuk ke web |
| GET    | /books  | Menampilkan list buku yang ada di perpustakaan               |
| GET    | /borrow | yang menampilkan form untuk menginput data buku yang akan dipinjam beserta user yang akan meminjamnya |

Pastikan setiap route memberikan respon yang unik sebagai penanda jika kita berhasil mengakses route tersebut. Bila kamu kesulitan silakan baca dokumentasi Express.js mengenai basic routing.

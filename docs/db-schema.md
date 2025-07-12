# 🗃️ Veritabanı Şeması

Bu belge, Ar-Ge Takip ve Öneri Platformu için kullanılacak olan veritabanı yapısını ve tablo ilişkilerini tanımlar.

---

## 🏗️ Temel Tablolar

### 1. `users`

| Alan           | Tip       | Açıklama                     |
| -------------- | --------- | ---------------------------- |
| id             | UUID      | Kullanıcı benzersiz ID       |
| name           | TEXT      | Ad soyad                     |
| email          | TEXT      | Giriş için e-posta adresi    |
| password\_hash | TEXT      | Şifrelenmiş parola           |
| role           | TEXT      | `admin`, `researcher`, `dev` |
| created\_at    | TIMESTAMP | Kayıt tarihi                 |

---

### 2. `projects`

| Alan        | Tip       | Açıklama                      |
| ----------- | --------- | ----------------------------- |
| id          | UUID      | Proje ID                      |
| name        | TEXT      | Proje adı                     |
| description | TEXT      | Genel açıklama                |
| created\_by | UUID (FK) | Başlatan kullanıcı (users.id) |
| created\_at | TIMESTAMP | Oluşturma tarihi              |

---

### 3. `features`

| Alan        | Tip       | Açıklama                                 |
| ----------- | --------- | ---------------------------------------- |
| id          | UUID      | Feature ID                               |
| project\_id | UUID (FK) | Hangi projeye ait?                       |
| title       | TEXT      | Başlık                                   |
| description | TEXT      | Açıklama                                 |
| status      | TEXT      | `taslak`, `aktif`, `tamamlandı`, `iptal` |
| opened\_by  | UUID (FK) | Oluşturan kullanıcı                      |
| created\_at | TIMESTAMP | Oluşturma tarihi                         |

---

### 4. `commits`

| Alan          | Tip       | Açıklama                  |
| ------------- | --------- | ------------------------- |
| id            | UUID      | Commit ID                 |
| feature\_id   | UUID (FK) | Hangi feature ile ilgili? |
| user\_id      | UUID (FK) | Hangi geliştirici?        |
| message       | TEXT      | Commit mesajı             |
| commit\_hash  | TEXT      | Git hash                  |
| committed\_at | TIMESTAMP | Commit tarihi             |

---

### 5. `ai_evaluations`

| Alan          | Tip       | Açıklama                              |
| ------------- | --------- | ------------------------------------- |
| id            | UUID      | Değerlendirme ID                      |
| feature\_id   | UUID (FK) | Hangi özelliğe ait?                   |
| result\_json  | JSONB     | AI tarafından dönen tam analiz verisi |
| evaluated\_at | TIMESTAMP | Değerlendirme tarihi                  |

---

### 6. `documents`

| Alan          | Tip       | Açıklama                   |
| ------------- | --------- | -------------------------- |
| id            | UUID      | Doküman ID                 |
| feature\_id   | UUID (FK) | Hangi feature'a ait?       |
| version       | TEXT      | "v1.0", "v1.1" gibi        |
| content\_md   | TEXT      | Markdown formatında içerik |
| generated\_at | TIMESTAMP | Oluşturma tarihi           |

---

## 🔗 Tablo İlişkileri (ER Özeti)

```plaintext
users ─┬─< projects
       └─< features ─< commits
                     └─< documents
                     └─< ai_evaluations
```

Bu yapı gelecekte özelleştirilebilir; çoklu proje sahipliği, yorum sistemi veya dosya yükleme desteği eklenebilir.

# Feature Geliştirme İş Akışı

Bu doküman, Ar‑Ge Takip ve Öneri Platformu’nda bir **feature** (özellik) geliştirmenin yaşam döngüsünü adım adım açıklar.

---

## 🧱 1. Feature Oluşturma

### 🖥️ Kullanıcı Arayüzü Üzerinden

Kullanıcı “Yeni Feature” ekranında aşağıdaki alanları doldurur:

* **Başlık**
* **Açıklama**
* **Hedef / Ar‑Ge Gerekçesi**
* **Tahmini Başlangıç & Bitiş Tarihleri**
* **Etiketler** (ör. `sensör`, `ısı‑analizi`, `malzeme‑test`)

### ⚙️ Otomatik Sistem Aksiyonları

1. Sistem benzersiz bir **Feature ID** üretir (örn. `RG‑2025‑0014`).
2. Özelliğe ait **analiz dokümanı şablonu** v1.0 olarak oluşturulur.
3. (İsteğe bağlı) Yapay zeka özelliği analiz ederek *uygunluk* değerlendirmesi üretir.

---

## 🧠 2. Yapay Zeka ile Entegrasyon

### 🎯 A) Mine Storming — AI Feature Önerisi

Kullanıcı “AI’den Öneri Al” düğmesine tıkladığında:

1. AI geçmiş veriler, commit’ler, dokümanlar ve literatürü inceler.
2. Bir veya birden çok yeni feature önerisi oluşturur.
3. Kullanıcı öneriyi kabul ederse doğrudan feature olarak kaydedilir.

### 🔍 B) Uygunluk Analizi

* Her yeni veya güncellenen feature için AI üç olası sonuç döndürür:

  * **Uygun**
  * **Sınırlı Uygun** (koşullu)
  * **Uygun Değil**
* Sonuç yanında gerekçeler, olası riskler ve iyileştirme önerileri listelenir.

---

## 🔄 3. Commit ile İlişkilendirme

Geliştirici kodu aşağıdaki formatla commit ederek feature ID’yi ilişkilendirir:

```bash
git commit -m "RG-2025-0014: normalize fonksiyonu eklendi"
```

Backend API bu commit’i loglar ve **analiz dokümanına** aşağıdaki bilgileri ekler:

* Commit ID
* Geliştirici adı
* Tarih‑saat
* Commit mesajı

---

## 📄 4. Analiz Dokümanının Güncellenmesi

* Tüm commit’ler ve AI çıktıları feature’a ait analiz dokümanına otomatik eklenir.
* Doküman versiyonlanır (v1.0, v1.1, …).
* Markdown formatı korunur; istenirse PDF çıktısı alınabilir.

---

## ⏱️ 5. Feature Durumları

| Durum        | Açıklama                                    |
| ------------ | ------------------------------------------- |
| `taslak`     | Henüz geliştirme başlamamış fikir           |
| `aktif`      | Geliştirme süreci devam ediyor              |
| `tamamlandı` | Geliştirme ve testler başarıyla sonuçlandı  |
| `iptal`      | Gereksiz veya tekrarlı bulunduğu için iptal |

---

## 🧾 6. Sonuçlandırma ve Raporlama

1. **Tamamlanan** feature’lar arşivlenir.
2. AI, genel başarı, risk ve etki analizini özetler.
3. Kullanıcı çıktıları Markdown veya PDF olarak dışa aktarabilir.

---

## 📋 Özet Akış Şeması

```plaintext
[NİYET/FİKİR] → [YENİ FEATURE] → [AI ÖNERİ & UYGUNLUK] → [COMMIT LOGLAMA] → [DOKÜMAN GÜNCELLEME] → [DURUM TAKİBİ] → [RAPORLAMA]
```

> Bu süreç, araştırma ve yazılım geliştirme disiplinini birleştirerek verimliliği ve kurumsal Ar‑Ge kalitesini artırır.

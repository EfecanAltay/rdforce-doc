---
title: Sistem Genel Yapısı
description: Bu belge, Ar-Ge Takip ve Öneri Platformu’nun temel bileşenlerini ve bu bileşenlerin birbiriyle nasıl etkileşim kurduğunu özetler.
hide_table_of_contents: true
tags:
  - System
  - RDForce
  - Info
---

# Sistem Genel Yapısı

Bu belge, Ar-Ge Takip ve Öneri Platformu’nun temel bileşenlerini ve bu bileşenlerin birbiriyle nasıl etkileşim kurduğunu özetler.


## 🧩 Sistem Bileşenleri

### 1. **Frontend**
- Kullanıcı arayüzü (React / Ankeon)
- Feature oluşturma, commit listeleme, AI öneri görüntüleme
- Analiz dokümanlarını düzenleyip önizleme
- AI ile etkileşim için chat/öneri paneli

### 2. **Backend API**
- Kullanıcı kimlik doğrulama (JWT)
- Feature ve commit CRUD işlemleri
- Analiz dokümanı üretimi ve versiyonlama
- Yapay zeka servisleriyle haberleşme katmanı (proxy/fetch)

### 3. **Veritabanı**
- Kullanıcılar
- Projeler
- Feature’lar
- Commit’ler
- AI analiz kayıtları
- Doküman versiyonları

### 4. **Yapay Zeka Modülü**
- **Feature Generator**: Mine storming ile yeni fikirler önerir
- **Suitability Checker**: Geliştirilen özelliğin Ar-Ge’ye uygunluğunu değerlendirir
- Prompt şablonları ve çıktı yapılarını içerir
- Dış servis (OpenAI) veya kendi LLM altyapısı üzerinden çalışır

---

## 🔄 Modüller Arası Veri Akışı

```plaintext
Kullanıcı → Frontend → Backend API → Veritabanı
                          ↓
                    Yapay Zeka API
                          ↓
                    AI Analiz Sonucu
                          ↓
                    Analiz Dokümanına Yazılır
```

## 👥 Kullanıcı Rolleri ve Etkileşimler
| Rol                    | Erişim Yetkisi                                                       |
| ---------------------- | -------------------------------------------------------------------- |
| Admin                  | Kullanıcı yönetimi, tüm feature'lara erişim, döküman düzenleme       |
| Araştırmacı            | Yeni feature açma, AI ile fikir üretme ve değerlendirme              |
| Geliştirici            | Commit ilişkilendirme, teknik doküman düzenleme, ilerleme güncelleme |
| Okuyucu (isteğe bağlı) | Sadece görüntüleme yapabilir, yorum veya düzenleme yetkisi yok       |

## 🧠 Sistem Vizyonu 

[Kısa Vadeli Hedefler]
- Proje planının detaylandırılması
- Proje MVP çalışması Yapılması
- Veritabanı ve servislerin oluşturulması
- Client uygulamanın geliştirilmesi

[Uzun Vadeli Hedefler]
- UI üzerinden sürükle-bırak ile feature akış takibi
- AI öneri motorunun entegre edilmesi (feature öneri + uygunluk kontrolü)
- Markdown analiz dokümanlarının PDF olarak dışa aktarılması
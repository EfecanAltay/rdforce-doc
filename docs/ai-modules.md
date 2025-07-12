# 🧠 AI Modülleri - Ar-Ge Uygulaması

Bu belge, uygulamada kullanılan yapay zeka modüllerinin görevlerini, çalışma mantıklarını ve entegrasyon biçimlerini detaylı olarak açıklar.

---

## 🔍 Genel Bakış

Uygulamada iki temel AI modülü bulunur:

1. **Feature Generator (Mine Storming)**: Yeni Ar-Ge özellik fikirleri önerir.
2. **Suitability Checker**: Geliştirilen bir özelliğin Ar-Ge amacına uygun olup olmadığını analiz eder.

---

## 🎯 1. Feature Generator (Mine Storming)

### Amaç:

Önceki feature verileri, commit logları, AI embed edilen dökümanlar ve varsa literatür verilerini kullanarak yeni fikirler önerir.

### Çıktı Örneği:

```json
{
  "title": "Katman Sıcaklık Farkına Dayalı Bozulma Analizi",
  "summary": "Isı farklılıklarının yapı malzemesi üzerinde neden olduğu mikroskobik bozulmaları tespit etmeyi amaçlayan bir özellik."
}
```

### Kullanım:

* Kullanıcı "AI'den öneri al" butonuna tıklandığında çalışır.
* Dönen öneriler kullanıcı tarafından onaylanarak feature olarak kaydedilebilir.

---

## ✅ 2. Suitability Checker

### Amaç:

Yeni açılan veya düzenlenen feature'ın Ar-Ge'ye uygunluğunu analiz eder ve gerekçeleriyle birlikte puanlama yapar.

### Çıktı Örneği:

```json
{
  "status": "suitable",
  "confidence": 0.92,
  "reasons": [
    "Feature daha önce kullanılan sensör kalibrasyonlarına paralel geliştirilmektedir.",
    "Literatürde benzer çalışmalar mevcuttur."
  ],
  "risks": [
    "Yüksek çözünürlükte veri işleme süresi artabilir."
  ]
}
```

### Kullanım:

* Feature formu kaydedildiğinde otomatik çalışır.
* Dönen sonuç analiz dokümanına otomatik olarak eklenir.

---

## ⚙️ Entegrasyon

### AI Servisi:

* İlk aşamada **OpenAI GPT-4** kullanılabilir.
* Uzun vadede **lokal LLM** ve **RAG mimarisi** ile entegre edilebilir.

### Veri Kaynakları:

* Feature ve commit verileri
* Markdown analiz dokümanları (geçmiş)
* Literatür veri havuzu (isteğe bağlı)

---

## 📁 Dosya Yapısı (Öneri)

```
ai/
├── feature_suggester.ts
├── suitability_checker.ts
├── prompt_templates/
│   ├── suggest-feature.txt
│   └── check-suitability.txt
```

---

## 📌 Notlar

* Tüm AI cevapları JSON formatında döner.
* Promtlar güncellenebilir ve versiyonlanabilir olmalıdır.
* Kullanıcı yanıtları, sistemin gelecek öğrenmesine katılabilir (isteğe bağlı).

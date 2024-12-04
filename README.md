Task Yönetim Uygulaması Arayüz Projesi:
Bu proje, kullanıcıların görev oluşturup düzenleyebileceği ve görevlerini listeleyebileceği bir Task Yönetim Uygulamasıdır. React.js kullanılarak geliştirilmiş bu uygulama, basit bir görev yönetimi çözümü sunar.

Özellikler
Kullanıcı girişi (SignIn)
Kullanıcı kayıtı (SignUp)
Yeni görev oluşturma(CreateTask)
Mevcut görevleri düzenleme(EditTask)
Görevlerin listelenmesi(TaskList)
Sayfalar arası yönlendirme (AppRoute)

Gereksinimler
Bu projeyi çalıştırmadan önce aşağıdaki yazılımların bilgisayarınızda kurulu olduğundan emin olun:

Node.js (v16 veya üzeri)
npm veya yarn

Kurulum
Bu depoyu bilgisayarınıza klonlayın:
git clone https://github.com/kullaniciadi/task-manager.git

npm install
npm start
http://localhost:3000

Kullanım
SigUp sayfasını kullanarak kayıt olun.
Sign In sayfasını kullanarak giriş yapın.
Görev Listesi sayfasında mevcut görevlerinizi görüntüleyin.
Yeni Görev Oluşturmak için create görev sayfasında ki yeni görev oluştur butonuyla yeni bir görev ekleyin.
Bir görevi düzenlemek için liste üzerindeki "Düzenle" butonuna tıklayın.


Task Yönetim Uygulaması - Backend
Bu proje, Task Yönetim Uygulamasının backend tarafını oluşturur. Kullanıcı kaydı ve giriş işlemleri için temel API metodları sağlar. Repository pattern kullanılarak ölçeklenebilir ve temiz bir 
kod yapısı hedeflenmiştir. Veritabanı, Entity Framework Core ile Code First yaklaşımı kullanılarak oluşturulmuştur.

Özellikler
Kullanıcı kaydı (Register)
Kullanıcı girişi (Login)
Repository Pattern yapısı ile katmanlı mimari
Veritabanı yönetimi için Entity Framework Core

Katmanlar
Proje aşağıdaki dört farklı katmandan oluşmaktadır:

Entity: Veritabanı tablolarını temsil eden sınıflar.
Data Access: Veritabanı işlemleri için repository'lerin tanımlandığı katman.
Business: İş kurallarının ve servislerin bulunduğu katman.
Web API: API isteklerinin işlendiği katman.

Gereksinimler
Projenin çalışabilmesi için aşağıdaki yazılımların yüklü olması gerekmektedir:

.NET 6 SDK veya üzeri
SQL Server (veya desteklenen başka bir veritabanı)


Kurulum
Bu depoyu bilgisayarınıza klonlayın:
git clone https://github.com/kullaniciadi/task-manager-backend.git

Proje dizinine gidin:
cd task-manager-backend

Bağımlılıkları yükleyin:
dotnet restore

Veritabanını Oluşturma

Veritabanını oluşturmak için aşağıdaki komutu çalıştırın:
dotnet ef database update

Uygulamayı çalıştırmak için şu komutu kullanın:
dotnet run --project WebAPI

Tarayıcıda veya Postman gibi araçlarda şu adrese giderek API'yi test edebilirsiniz:
https://localhost:7231/swagger

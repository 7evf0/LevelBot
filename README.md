# LevelBot
Prototype of a default level bot


----- DATABASE DOSYALARI TEMEL BİLGİLENDİRME -----

  databaseFeatures klasörünün altında 4 adet dosya bulunuyor.

  bu dosyaların 3ünde (dbAddUser, dbDeleteUser, dbUpdateUser) "mongoClient" adlı bir parametre yer alıyor. Bu parametre, veritabanı ile uygulama
  arasında bağlanto kurulurken döndürülen bir parametre. Bu parametre sayesinde veritabanında değişikler, eklemeler ve çıkarmalar yapılabiliyor.

	1) dbAddUser:
		
		Bu dosyanın içinde addData(mongoClient, schema) metodu bulunuyor.	

			- mongoClient: veritabanı ile bağlantı kurulduğunda döndürülen parametre. Bu değişken, index.js dosyasında yer alan "main"
			fonksiyonunun içinde yer alıyor. Onu alıp kullanmak yeterli olacaktır.

			- schema: bu parametre, eklemek istediğimiz verinin özelliklerini yazdığımız parametre. Veritabanına yeni bir kullanıcı eklemek
			istediğimizde 3 özellik girilmesi gerekiyor: "userID", "XP", "Level". Bu üç özelliği JSON formatında "schema" parametresine
			aktarmak gerekiyor. Örnek:

			{
				"userID": 123456,
				"XP": 0,
				"Level": 1
			}

	2) dbUpdateUser:
		
		Bu dosyanın içinde updateData(mongoClient, filterSchema, newSchema) metodu bulunuyor.	

			- mongoClient: veritabanı ile bağlantı kurulduğunda döndürülen parametre. Bu değişken, index.js dosyasında yer alan "main"
			fonksiyonunun içinde yer alıyor. Onu alıp kullanmak yeterli olacaktır.

			- filterSchema: bu parametre, üstünde değişiklik yapmak istediğimiz kullanıcının bilgilerini JSON formatında girdiğimiz parametre.
			Örneğin, 1456 numaralı userID'sine sahip bir kullanıcıda değişiklik yapmak istiyorsak, filterSchema parametresine şu girilmelidir:

			{
				"userID": 1456
			}

			- newSchema: bu parametre, değiştirmek istediğimiz verileri JSON formatında girdiğimiz parametre. Örneğin, 
			kullanıcının XP'sini 200 yapmak istiyoruz. O zaman newSchema parametresine şu girilmelidir:

			{
				"XP": 200
			}

	3) dbDeleteUser:
		
		Bu dosyanın içinde deleteData(mongoClient, filterSchema) metodu bulunuyor.	

			- mongoClient: veritabanı ile bağlantı kurulduğunda döndürülen parametre. Bu değişken, index.js dosyasında yer alan "main"
			fonksiyonunun içinde yer alıyor. Onu alıp kullanmak yeterli olacaktır.

			- filterSchema: bu parametre, silmek yapmak istediğimiz kullanıcının bilgilerini JSON formatında girdiğimiz parametre.
			Örneğin, 1456 numaralı userID'sine sahip bir kullanıcıyı silmek istiyorsak, filterSchema parametresine şu girilmelidir:

			{
				"userID": 1456
			}


	4) dbConnect:
		
		Bu dosya sayesinde uygulama ile veritabanı arasında bağlantı kuruluyor. index.js dosyasının "main" fonksiyonunda bu dosya
		kullanılmaktadır. Lakin başka bir yerde de kullanılması gerekilirse kullanılabilir.

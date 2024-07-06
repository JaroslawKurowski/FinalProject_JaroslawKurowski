# FinalProject_JaroslawKurowski
Projekt końcowy .NET Developer mBank

Feedback system

# Cel Projektu

Projekt ma na celu stworzenie platformy umożliwiającej użytkownikom zgłaszanie nowych pomysłów i problemów technicznych, które mogą przyczynić się do poprawy usług świadczonych przez bank. Dodatkowo, projekt ma na celu motywowanie użytkowników do aktywnego udziału w procesie innowacyjnym poprzez system punktów innowacyjności, które można wymieniać na promocyjne usługi.

# Główne Funkcjonalności

1.	Zgłaszanie nowości i problemów:
- Użytkownicy mogą zgłaszać nowe pomysły oraz problemy techniczne.
- Każde zgłoszenie ma swój status, który może być zarządzany przez administratora.
- Statusy zgłoszeń: 'Pending', 'InProgress', 'Resolved', 'Closed', 'Rejected'.
2.	Zarządzanie Zgłoszeniami przez Administratora:
- Administratorzy mogą przeglądać zgłoszenia, odpowiadać na nie, zmieniać ich status oraz przyznawać punkty innowacyjności za cenne pomysły.
- Działania administratora są rejestrowane w systemie: 'View', 'Respond', 'ChangeStatus', 'AssignPoints', 'Close'.
3.	System Punktów Innowacyjności:
- Użytkownicy otrzymują punkty innowacyjności za zgłoszone pomysły.
- Punkty te mogą być później wymieniane na promocyjne usługi z katalogu banku.
4.	Promocyjne Usługi:
- Administratorzy mogą zarządzać promocyjnymi usługami dostępnymi do wymiany za punkty.
- Użytkownicy mogą przeglądać dostępne promocje i wymieniać swoje punkty na wybrane usługi.

# Dla kogo jest przeznaczony

Projekt jest przeznaczony dla:

1. Klientów banku: Użytkowników, którzy chcą aktywnie uczestniczyć w procesie innowacyjnym, zgłaszając pomysły i problemy oraz zdobywać punkty, które mogą wymieniać na promocyjne usługi.
2. Administratorów banku: Pracowników, którzy będą zarządzać zgłoszeniami, odpowiadać na nie, zmieniać ich status oraz przyznawać punkty innowacyjności. Administratorzy będą również zarządzać promocyjnymi usługami dostępnymi dla użytkowników.

Projekt ma na celu zwiększenie zaangażowania klientów w procesy innowacyjne oraz poprawę jakości usług świadczonych przez bank, poprzez bezpośrednie uwzględnianie opinii i pomysłów użytkowników.


## MUST HAVE

1. Baza danych.

W repozytorium znajduje sie skrypt FeedbackSystem.sql do utworzenia bazy danych.

Opis Skryptu:

-Tworzenie bazy danych: Skrypt rozpoczyna się od utworzenia bazy danych mBankInnovationHub i ustawienia jej jako aktywnej.

-Tabela Users: Zawiera informacje o użytkownikach, takie jak ID użytkownika, nazwa użytkownika, email, rola (0 dla zwykłego użytkownika, 1 dla administratora), data utworzenia, zahashowane hasło i data ostatniej zmiany hasła.

-Tabela Reports: Zawiera zgłoszenia z polami ID zgłoszenia, tytuł, opis, status, daty utworzenia i modyfikacji oraz ID użytkownika tworzącego i modyfikującego.

-Tabela AdminActions: Zawiera akcje administratora związane ze zgłoszeniami z polami ID akcji, ID zgłoszenia, ID administratora, typ akcji i data akcji.

-Tabela InnovationPoints: Zawiera punkty innowacyjności przypisane do użytkowników, z polami ID punktu, ID użytkownika i liczba punktów.

-Tabela Promotions: Zawiera promocyjne usługi z polami ID promocji, nazwa promocji, opis i liczba wymaganych punktów.

-Tabela UserPromotions: Zawiera realizacje promocji przez użytkowników z polami ID realizacji, ID użytkownika, ID promocji i data realizacji.

-Dodanie przykładowych danych: Skrypt dodaje przykładowych użytkowników i promocje do odpowiednich tabel.

2. Repozytorium na GitHub.

3. Projekt `Domain` z warstwą logiki biznesowej.

Utworzenie projektu typu biblioteka z warstwą logiki biznesowej.

Biblioteka klas Domain dostarcza podstawowe modele danych i enumeracje dla projektu. Zawiera klasy reprezentujące użytkowników, raporty, działania administracyjne, punkty innowacyjności i promocje.

MODELE

Interfejs IUser

Definiuje podstawowe właściwości dla użytkownika, takie jak identyfikator użytkownika, nazwa użytkownika, email oraz rola użytkownika.

Klasa User

Reprezentuje podstawowego użytkownika w systemie, zawierając takie informacje jak identyfikator, nazwa, email oraz rola użytkownika (zwykły użytkownik lub administrator).

Klasa UserAccount

Reprezentuje konto użytkownika z dodatkowymi szczegółami, takimi jak hasło, data utworzenia konta oraz data ostatniej zmiany hasła.

Klasa Report

Reprezentuje raport zgłoszony przez użytkownika. Zawiera takie informacje jak identyfikator raportu, tytuł, opis, status raportu, daty rozpoczęcia i zakończenia, identyfikator użytkownika, który utworzył raport, oraz daty stworzenia i modyfikacji raportu.

Klasa AdminAction

Reprezentuje działanie podjęte przez administratora na raporcie. Zawiera informacje o identyfikatorze działania, identyfikatorze raportu, identyfikatorze administratora, typie działania oraz dacie podjęcia działania.

Klasa InnovationPoint

Reprezentuje punkty innowacyjności zdobyte przez użytkownika. Zawiera informacje o identyfikatorze punktu, identyfikatorze użytkownika oraz liczbie zdobytych punktów.

Klasa Promotion

Reprezentuje promocję, którą można wymienić za punkty innowacyjności. Zawiera informacje o identyfikatorze promocji, nazwie promocji, opisie oraz liczbie wymaganych punktów.

Klasa UserPromotion

Reprezentuje promocję zrealizowaną przez użytkownika. Zawiera informacje o identyfikatorze promocji użytkownika, identyfikatorze użytkownika, identyfikatorze promocji oraz dacie realizacji promocji.

Enumeracje

ReportStatus

Definiuje możliwe statusy raportu: Oczekujący, W trakcie, Rozwiązany, Zamknięty, Odrzucony.

UserRole

Definiuje możliwe role użytkownika: Użytkownik, Administrator.

AdminActionType

Definiuje możliwe działania, które może podjąć administrator na raporcie: Podgląd, Odpowiedź, Zmiana statusu, Przyznanie punktów, Zamknięcie.

Użycie

Ta biblioteka jest zaprojektowana do użycia w połączeniu z warstwą dostępu do danych oraz warstwą usług, aby zapewnić pełne rozwiązanie do zarządzania zgłoszeniami użytkowników, działaniami administracyjnymi oraz nagrodami użytkowników.

We właściwościach celowo użyto odpowiednich akcesorów dostępu get/set:
-jeżeli jest sam get to właściwość należy ustawić wyłącznie w konstruktorze po odczycie danych z bazy danych i nie można jej modyfikować,
-jeżeli jest get z prywatnym set to właściwość należy ustawić w konstruktorze po odczycie danych z bazy danych i można ją modyfikować przy pomocy odpowiednich metod dodanych do modelu biznesowego.

4. Projekt `Persistence` z Dapperem

Utworzenie projektu typu biblioteka dla warstwy dostępu do danych. 

Projekt ten jest odpowiedzialny za zarządzanie połączeniami z bazą danych oraz operacjami CRUD (tworzenie, odczyt, aktualizacja, usuwanie) na różnych encjach. Biblioteka zawiera interfejsy i klasy kontekstu do obsługi połączeń z bazą danych oraz generyczne repozytoria do operacji CRUD.

Instalacja paczki NuGet z Dapperem.

Utworzenie folderu Context z:
a)	interfejsem IDapperContext z metodą IDbConnection CreateConnection() - odpowiedzialną za połączenie z bazą danych,
b)	implementacją DapperContext z kontruktorem, który przyjmuje IConfiguration i używa connection string DefaultConnection - odpowiedzialne za konfigurację połączenia z bazą danych przy użyciu ustawień konfiguracyjnych.

Utworzenie folderu Repositories z publicznym interfejsem generycznym IGenericRepository<TModel>, który będziemy potem implementować jako konkretny publiczny interfejs dla modelu wraz z implementacją w klasie.

5.  Projekt `Application`

Utowrzenie projektu typu biblioteka dla warstwy aplikacji.

Biblioteka klas Application dostarcza warstwę usług, która pełni rolę fasady nad repozytoriami danych w projekcie. Usługi w tej warstwie są odpowiedzialne za obsługę logiki biznesowej i komunikację z warstwą dostępu do danych (repozytoria). Każdy serwis jest reprezentowany przez interfejs, który definiuje metody związane z poszczególnymi dziedzinami aplikacji, takimi jak użytkownicy, raporty czy promocje.
Każdy interfejs serwisu definiuje metody związane z daną dziedziną aplikacji. Będą one rozbudowywane w miarę dodawania logiki biznesowej do aplikacji.

Interfejsy pozwalają komunikować się z odpowiednimi repozytoriami w celu wykonywania operacji na danych. Dzięki temu warstwa aplikacji jest oddzielona od warstwy dostępu do danych, co ułatwia zarządzanie kodem i testowanie.

6.  Projekt `WebApi`

Utworzenie projektu ASP.NET Core WebAPI.

Konfiguracja obsługi Swaggera.

Konfiguracja projektu tak, aby mógł się łączyć z bazą danych:
a)	konfigurację appsettings.json z connection stringiem,
b)	rejestracja IDapperContext w Dependency Injection.

Utworzenie folderu Auth z:
a)	klasą LoggedUser, która implementuje interfejs IUser (będzie wykorzystywana w kontrolerach do pobrania aktualnie zalogowanego użytkownika),
b)	rejestracja klasy LoggedUser w Dependency Injection 

7.  Uwierzytelnianie użytkownika w systemie

•	Utworzenie kontrolera AuthController z metodą HttpPost: IActionResult Login([FromBody] LoginModel model) do logowania użytkownika.

Jest on odpowiedzialny za obsługę logowania użytkowników oraz autoryzację za pomocą tokenów JWT.

•	Utworzenie folderu DTOs z modelem LoginModel z nazwą użytkownika oraz hash-em hasła.

•	Rozszerzenie interfejsu serwisu IUserService i jego implementacji UserService o metodę User Authenticate(username, password), która weryfikuje poprawność danych komunikując się z repozytorium użytkowników.
Repozytorium IUserRepository definiuje metodę Authenticate, która sprawdza poprawność danych logowania w bazie danych. Implementacja UserRepository realizuje tę metodę, używając Dappera do komunikacji z bazą danych.

•	Użycie JWT do uwierzytelniania i przechowywania uprawnień/ról:
   o	Instalacja paczki NuGet Microsoft.AspNetCore.Authentication.JwtBearer.
   o	Konfiguracja JWT w projekcie WebAPI wraz z użyciem middleware. Konfiguracja JWT odbywa się w pliku Program.cs, gdzie dodawane są usługi uwierzytelniania i autoryzacji. Tokeny są konfigurowane za pomocą klucza symetrycznego i zawierają informacje o wydawcy, odbiorcy oraz czasie ważności.
   o	Utworzenie serwisu JwtTokenService do generowania tokenów JWT dla zalogowanego użytkownika.
   
•	Użycie atrybutu [Authorize] na kontrolerach, dzięki czemu wszystkie punkty API są zabezpieczone, a dostęp do nich wymaga wcześniejszego zalogowania.


8. CRUD dla zgłoszeń.
9.	CRUD dla promocji.
10.	Akcje administratora dotyczące zgłoszenia.
11.	Modyfikacja statusu zgłoszenia. SHOULD HAVE
12.	Nadawanie punktów innowacyjności.
13.	Zliczanie punktów innowacyjności.
14.	Logowanie zdarzeń w systemie z Serilog. SHOULD HAVE
15.	Aplikacja WWW w React do obsługi zgłoszeń (logowanie?; dla Usera dodanie zgłoszenia i prezentacja promocji na podstawie zliczonych punktów).

   

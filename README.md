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


#### MUST HAVE

1. Baza danych.

   •	W repozytorium znajduje sie skrypt FeedbackSystem.sql do utworzenia bazy danych.

2. Repozytorium na GitHub.

3. Projekt `Domain` z warstwą logiki biznesowej.

   •	Utworzenie projektu typu biblioteka z warstwą logiki biznesowej.

4. Projekt `Persistence` z Dapperem

   •	Utworzenie projektu typu biblioteka dla warstwy dostępu do danych. 
   
   •	Projekt ten jest odpowiedzialny za zarządzanie połączeniami z bazą danych oraz operacjami CRUD (tworzenie, odczyt, aktualizacja, usuwanie) na różnych encjach. Biblioteka zawiera interfejsy i klasy kontekstu do obsługi połączeń z bazą danych oraz generyczne repozytoria do operacji CRUD.
   
   •	Konieczne - instalacja paczki NuGet z Dapperem.

5.  Projekt `Application`

   •	Utworzenie projektu typu biblioteka dla warstwy aplikacji.
   
   •	Interfejsy pozwalają komunikować się z odpowiednimi repozytoriami w celu wykonywania operacji na danych. Dzięki temu warstwa aplikacji jest oddzielona od warstwy dostępu do danych, co ułatwia zarządzanie kodem i testowanie.

6.  Projekt `WebApi`

   •	Utworzenie projektu ASP.NET Core WebAPI.
   
   •	Konfiguracja obsługi Swaggera.

7.  Uwierzytelnianie użytkownika w systemie

   •	Obsługa logowania użytkowników oraz autoryzacja za pomocą tokenów JWT.

   •	Konieczne - instalacja paczki NuGet Microsoft.AspNetCore.Authentication.JwtBearer.

8.  Obsługa zgłoszeń - pełny CRUD.

9.  Obsługa promocji - pełny CRUD.

10.  Aplikacja WWW w React.

#### MUST HAVE TO DO

1.	 Akcje administratora dotyczące zgłoszenia. (8h)
2.	 Nadawanie punktów innowacyjności. (8h)
3.	 Zliczanie punktów innowacyjności. (8h)
4.	 Wdrożenie powyższych na frontend. (8h)

#### SHOULD HAVE

1.	Logowanie zdarzeń w systemie z Serilog.
2.	Testy jednostkowe i integracyjne.


   

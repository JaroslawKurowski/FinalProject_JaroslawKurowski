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

4. 

5. 
   

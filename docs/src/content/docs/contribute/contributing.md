---
title: ✨ Kako pomoći ✨
---

## Imaš ideju za nove podatke koje bi trebali uključiti?

Ako misliš da trebamo dodati neke nove podatke ili bilo što drugo, dodaj novi **Issue** na našem repozitoriju da nam to daš do znanja.

> **Tech gluposti:** Issue je način kako možeš doprinjeti određenom projektu na Githubu. Issue je u pravilu problem ili prijedlog koji imaš u vezi tog projekta, a koji želiš dati developerima kako bi ga mogli unaprijediti.

1. Klikni na **Issues**.

[![Issues](/images/contribute/01_issues.png)](/images/contribute/01_issues.png)

2. Dodaj novi **Issue**

[![Add issue](/images/contribute/02_new-issue.png)](/images/contribute/02_new-issue.png)

3. Odaberi **Feature request** opciju i klikni **Get started**

[![Feature request](/images/contribute/03_feature-request.png)](/images/contribute/03_feature-request.png)

4. Nadopuni zahtjev.

Dodaj smisleni naslov, npr. **"Dodaj nove podatke - lokalni telefonski brojevi"**. Opiši kratko svoj zahtjev u polju ispod, i idealno dodaj ako već negdje postoje ti podaci, ili još bolje same podatke, da jednostavnije možemo dodati. Finalno, klikni na **Submit new issue**

[![Submit feature](/images/contribute/04_submit-issue.png)](/images/contribute/04_submit-issue.png)

5. U **Issues** bi se trebao pojaviti tvoj novi zahtjev

[![Submit feature](/images/contribute/05_issue-added.png)](/images/contribute/05_issue-added.png)

Čim je zahtjev dodan, pokušat ćemo odgovoriti u što kraćem roku!

## Imaš gotove podatke koje bi želio dodati?

Ovaj proces ima nešto više koraka. Ako želiš dodati podatke a neda ti se zajebavati s time, prati [prvu opciju](#imaš-ideju-za-nove-podatke-koje-bi-trebali-uključiti) i prepusti nama da dodamo.

Ako pak želiš isprobati možeš to i sam/a :)

1. Potreban ti je Github account, stoga ako ga nemaš kreiraj ga [Github registracija](https://github.com/signup?source=login)
2. Prijavi se u svoj račun
3. Sada trebaš prekopirati odnosno **forkati** repozitorij na svoj račun, kako bi ga mogao mijenjati. To se radi klikom na gumb **fork**

> **Tech gluposti**: Fork stvara kopiju repozitorija na tvoj računu ali i dalje ostaje "povezan" sa originalnim repozitorijem. Ovo je bitno za kasnije.

[![Submit feature](/images/contribute/06_fork.png)](/images/contribute/06_fork.png)

U novom prozoru trebaš odabrati kako će se **forkani** repozitorij zvati na tvom računu. Kada si zadovoljan/na imenom, klikni na **Create fork**.

[![Submit feature](/images/contribute/07_fork.png)](/images/contribute/07_fork.png)

Jednom **forkani** repozitorij trebao bi se odmah otvoriti na tvom računu. (vidi se po oznaci **ime-računa / ime-repozitorija** u naslovu)

[![Submit feature](/images/contribute/08_fork-complete.png)](/images/contribute/08_fork-complete.png)

Svojim repozitorijima/projektima možeš u svakom trenutku pristupiti putem izbornika kod svog profila.

[![Submit feature](/images/contribute/09_my-repositories.png)](/images/contribute/09_my-repositories.png)

4. Napravi promjene koje želiš.

Recimo da želimo dodati nove podatke o broju stanovika po županijama. JSON file mogao bi izgledati ovako:

```json
NAZIV: zupanije_stanovnici_HR.json

[
  {
    "naziv": "Krapinsko-zagorska",
    "brojStanovika": 100000
  },
  {
    "naziv": "Varaždinska",
    "brojStanovika": 300000
  }
]
```

**BITNO!** Sve datoteke dodaju se u mapu **/data** tako da se nalaze u svojoj mapi. U ovom našem primjeru to bi bilo **/data/zupanije_stanovnici/zupanije_stanovnici_HR.json**. Datoteke ne smiju imati razmake u nazivu i moraju pratiti ovu strukturu **ime_jezik.json**

5. Kako bi dodali datoteku, kliknimo na mapu **data**

[![Submit feature](/images/contribute/10_add-data.png)](/images/contribute/10_add-data.png)

6. Jednom kada si unutar mape **data**, klikni na **Add file** i potom na **Create new file**

[![Submit feature](/images/contribute/11_add-data.png)](/images/contribute/11_add-data.png)

Možemo primjetiti kako nemamo mogućnost izravnog dodavanja mape, zato ćemo prvo u polje za ime datoteke dodati **zupanije-stanovnici/** što će kreirati novu mapu.

[![Submit feature](/images/contribute/12_add-data.png)](/images/contribute/12_add-data.png)

Kreirana mapa pokazati će se kao novi dio putanje označen plavom bojom.

[![Submit feature](/images/contribute/13_add-data.png)](/images/contribute/13_add-data.png)

Sada možemo dodati ime datoteke **zupanije-stanovnici_HR.json** (ne zaboraviti vrstu datoteke, .json) i same podatke. Nakon čega samo klineš na **Commit changes...**.

[![Submit feature](/images/contribute/14_add-data.png)](/images/contribute/14_add-data.png)

U novom prozoru koji se pojavi potrebno je označiti **Commit directly to main branch** i opcionalno dodati poruku (commit message) što se napravilo tom promjenom. Na kraju se treba kliknuti **Commit changes**

[![Submit feature](/images/contribute/15_add-data.png)](/images/contribute/15_add-data.png)

Jednom kada je to dodano trebalo bi te prebaciti odmah do te nove datoteke.

[![Submit feature](/images/contribute/16_added-data.png)](/images/contribute/16_added-data.png)

7. Sada je potrebno otvoriti **Pull request** ilitiga Zahtjev za promjenu.

> **Tech gluposti:** Pull request uspoređuje tvoj repozitorij sa onim od kojeg je forkan. Na taj način možeš jednostavno raditi promjene za sebe koje neće utjecati na drugi kod i kasnije jednostavno spojiti sve u jedno. Kako smo rekli, pull request je **ZAHTJEV**, stoga mora biti odobren od strane Autora originalnog repozitorija prije no što bude spojen.

Za ovo imaš 2 opcije. Prvo možeš direktno odakle si dodao novu datoteku.

[![Submit feature](/images/contribute/17_pull-request.png)](/images/contribute/17_pull-request.png)

Ili tako da odeš na **originalni repozitorij** i klikneš na **Pull requests** i potom na **New pull request**

[![Submit feature](/images/contribute/18_pull-request.png)](/images/contribute/18_pull-request.png)

Ako vidiš ovu opciju na sljedećoj slici, trebaš ju kliknuti kako bi mogao/la spojiti svoj repozitorij.

[![Submit feature](/images/contribute/19_pull-request.png)](/images/contribute/19_pull-request.png)

Trebale bi biti vidljive ove 4 mogućnosti kao što su označene na sljedećoj slici.

[![Submit feature](/images/contribute/20_pull-request.png)](/images/contribute/20_pull-request.png)

Ako si krenuo/la direktno iz mjesta gdje si kreirao/la svoj novi file onda će ti ovo biti automatski popunjeno. Ali ako nije, klikni na 3. izbornik i **odaberi svoj repozitorij** u kojem si radio/la promjene.

[![Submit feature](/images/contribute/21_pull-request.png)](/images/contribute/21_pull-request.png)

Sada će ti se prikazati mogućnost za kreiranje Pull request-a. Ispod su sve promjene itd. ali to sada nije toliko bitno, samo treba kliknuti na gumb **Create pull request**

[![Submit feature](/images/contribute/22_pull-request.png)](/images/contribute/22_pull-request.png)

Nova forma koja se otvorila sadrži podatke o Pull request-u koji će biti vidljivi na glavom repozitoriju. Dodaj smislen naslov i poruku za tvoju promjenu i **označi Allow edits by maintainers** te klikni na **Create pull request**.

[![Submit feature](/images/contribute/23_pull-request.png)](/images/contribute/23_pull-request.png)

Sada bi ti se trebao otvoriti taj Pull request na originalnom repozitoriju.

[![Submit feature](/images/contribute/24_pull-request.png)](/images/contribute/24_pull-request.png)

Također, ako na originalnom repozitoriju ideš na **Pull requests** i tamo bi trebao biti vidljiv tvoj zahtjev.

[![Submit feature](/images/contribute/25_pull-request.png)](/images/contribute/25_pull-request.png)

Odlično! Sve je gotovo i uspješno si dodao nove podatke. Daj nam sada malo vremena da provjerimo tvoje promjene i evenutalno ih doradimo. Tada ćemo prihvatiti (**Acceptat**) tvoj pull request.

O promjenama statusa svog Pull requesta biti ćeš obavješten/a putem maila od strane Githuba.

## Imaš neke pritužbe ili prijedloge?

Isprati [prvu opciju](#imaš-ideju-za-nove-podatke-koje-bi-trebali-uključiti) ali umjesto **Feature request** odaberi **Bug request**. Tako ćemo lakše pratiti što trebamo ispraviti a što nadodati. :)

## Želiš promijeniti neke druge stvari, npr. izgled stranice dokumentacije ili već gotove podatke?

Isprati [drugu opciju](#imaš-gotove-podatke-koje-bi-želio-dodati) ali umjesto da dodaješ novu datoteku (podatke), izmijeni nešto i napravi **Pull request** 👍

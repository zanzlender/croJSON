---
title: Naselja
---

Sva Hrvatska naselja sa pripadnim ID-jem, poštanskim brojem, poštom i županijom.

> Minified datoteke su optimizirane (nema razmaka i sl.) stoga je manja veličina same datoteke

## Hrvatska verzija

### Hrvatski JSON

- [naselja_HR.json](https://github.com/zanzlender/croJSON/blob/main/data/naselja/naselja_HR.json)
- [naselja_HR_minified.json](https://github.com/zanzlender/croJSON/blob/main/data/naselja/naselja_HR_minified.json)

**Shema**

```js
{
    id: number,
    naselje: string,
    postanskiBroj: number,
    posta: string,
    zupanija: string
}
```

**Pregled**

```json
[
  {
    "id": "1",
    "naselje": "Ada",
    "postanskiBroj": "31214",
    "posta": "Laslovo (Szentlászló)",
    "zupanija": "Osječko-baranjska"
  },
  ...
]
```

### Hrvatski CSV

- [naselja_HR.csv](https://github.com/zanzlender/croJSON/blob/main/data/naselja/naselja_HR.csv)

**Shema**

```csv
"id","city","zipcode","post","county"
```

**Pregled**

```csv
"id","city","zipcode","post","county"
"1","Ada","31214","Laslovo (Szentlászló)","Osječko-baranjska"
"2","Adamovec","10363","Belovar","Grad zagreb"
"3","Adžamovci","35422","Zapolje","Brodsko-posavska"
"4","Alaginci","34000","Požega","Požeško-slavonska"
...
```

## Engleska verzija

### Engleski JSON

- [naselja_EN.json](https://github.com/zanzlender/croJSON/blob/main/data/naselja/naselja_EN.json)
- [naselja_EN_minified.json](https://github.com/zanzlender/croJSON/blob/main/data/naselja/naselja_HR_minified.json)

```js
{
    id: number,
    city: string,
    zipcode: number,
    post: string,
    county: string
}
```

**Pregled**

```json
[
  {
    "id": "1",
    "city": "Ada",
    "zipcode": "31214",
    "municipality": "Laslovo (Szentlászló)",
    "county": "Osječko-baranjska"
  },
  ...
]
```

### Engleski CSV

- [naselja_EN.csv](https://github.com/zanzlender/croJSON/blob/main/data/naselja/naselja_EN.csv)

**Shema**

```csv
"id","city","zipcode","post","county"
```

**Pregled**

```csv
"id","city","zipcode","post","county"
"1","Ada","31214","Laslovo (Szentlászló)","Osječko-baranjska"
"2","Adamovec","10363","Belovar","Grad zagreb"
"3","Adžamovci","35422","Zapolje","Brodsko-posavska"
"4","Alaginci","34000","Požega","Požeško-slavonska"
...
```

---
title: 'Plural forms'
sidebar_position: 2
---

It is no secret, that there are a lot of differences between the world’s languages. One of these differences is the use of plural forms that can cause huge difficulties when it comes to localization issue.

That is why we strongly recommend you to properly read this article to learn more about plural forms and how they are being used in AdGuard translations.

## What do plural forms mean?

Nouns in different languages can have several plural word forms. Their usage depends on the specific number that goes before the word to indicate the number of items expressed by the word.

For instance, English words have two word forms when speaking about something in different numbers, like *'one star'* or *'two stars'*. It doesn’t matter if you say five, twenty-six or even five hundred thirty-two stars – the ending 's' will remain the same. And it happens because the English nouns have only two plural forms – for the singular number and for the plural one.

But some languages can contain only one or, conversely, many more plural forms.

In contrast to English, the Polish language has three plural forms of nouns. One of them is used when speaking about something in the Singular, another form is used in the Plural but with numbers ending in 2-4, excluding 12-14, and the third form – for words with other numbers in front of them.

Let’s have a look at this picture. Here you can see the groups of numerals which determine a word form when standing in front of it.

![Polish plural forms](https://cdn.adguard.com/public/Adguard/kb/en/plurals/Polish.png)
> Find other examples [here](https://developer.mozilla.org.cach3.com/en/Localization_and_Plurals). Let’s draw a small parallel between English and Polish for better understanding: The English version:                                                 The Polish equivalents:

      1. form - It takes one hour.                                     1. form - Zajmuje to godzinę. 
      2. form - It takes two hours.                                    2. form - Zajmuje to dwie godziny. 
      2. form - It takes five hours.                                   3. form - Zajmuje to pięć godzin.

Now it is clear that the Polish *'godzinę'* (hour) has three different forms, whereas the English word changes its form with given numbers only twice.

Except for Polish, there are a lot of other languages that have three plural forms and more, such as Russian, Serbian, Slovak, Czech etc. But not all of them obey the same rule. That's why it is so important to know how many plural forms your language contains and how you can apply them.

## Where can you learn about the number of plural forms?

When you are faced with a translation that requires the use of plurals, you may not be able to realize right away how many word forms one or another language provides. Fortunately, there are a lot of sources of information and some of them are listed below.

First of all, we would like to advise you to refer to the information of Mozilla’s [Localizations and Plurals](https://developer.mozilla.org.cach3.com/en/Localization_and_Plurals) article. There you will find different plural form rules and the languages that obey these rules.

But despite this article is (or at least supposed to be) quite informative and comprehensible, it doesn’t contain the entire list of world’s languages. That’s why we also advise you to turn to the [Localization Guide](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html), where the wider list of languages is represented, but in another manner. The number of plural forms for different languages is shown this way: 'nplurals=2', 'nplurals=4' and so on. The numeral after the Equals sign '='  means the number of plural forms of the respective language. Besides, here you can see different formulas which can help you identify what form to use in each particular case.

Also, you can get information about plural forms in the [Unicode Common Locale Data Repository](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#rules)(CLDR). The CLDR Plural Rules indicate an additional word form for decimal numbers (1.5; 2.3; 100.1…) but we don’t use them in AdGuard DNS translations.

## Plurals in AdGuard DNS translations

First of all, you need to understand, that not every AdGuard DNS translation requires the use of plural forms.

Currently, we have 4 types of strings on Crowdin that involve the use of plurals.

Let's take a closer look at them.

#### 1. **Phrases with string keys ending in `.singular`, `.dual`, `.plural`**

![An example of a phrase with a specific string key ending](https://cdn.adguard.com/public/Adguard/kb/en/plurals/dual_it.png)

Most of them consist of only one or two words:

- `days;`
- `extensions;`
- `hours`

Please pay attention to the string keys when you meet such phrases on Crowdin and to the "context" field where you can see some important notes about plurals.

#### 2. **Strings with singular and plural nouns separated by commas**

Please look at the example:

![Strings with singular and plural nouns separated by commas](https://cdn.adguard.com/public/Adguard/kb/en/plurals/android_fr.png)

If there are 3 plural forms of nouns in your language (like in Polish), please write all plural forms separated by commas.

`hour, hours --> godzinę, godziny, godzin`

In case a noun has only 2 forms, there is no need to write the same form twice (*typically only for this type of strings with plurals!*). However, it won't be a mistake if you repeat the form twice.

#### 3. **Strings that use the Crowdin-developed pattern**

This is the most user-friendly scheme of translating strings with plurals.

Crowdin suggests to users that they translate the certain amount of phrases with different plural forms.

If your language provides only one plural form, then you will see only one phrase to translate. If you have three forms, Crowdin will provide you with the string divided into other two or three strings to translate.

For example:

![Strings that use the Crowdin-developed pattern](https://cdn.adguard.com/public/Adguard/kb/en/plurals/crowdin_scheme.png)

Please be attentive when translating these strings and approving them. If you have no idea what the "Other" field means, then just paste the same form as it is in the "Many" field. The "Many" and "Other" fields' contents can be the same.

#### 4. **Строки с шаблонами, разделёнными вертикальной чертой**

Это самый сложный тип строк AdGuard, который в основном используется в проекте `AdGuard Websites` (а именно `в папке adguard-dns.io`).

Обратите внимание на знак вертикальной черты между предложениями и плейсхолдер **%count%** в оригинальных фразах — это поможет вам определить фразы, в которых перевод требует использования форм множественного числа.

![Строки с шаблонами, разделённые вертикальной чертой](https://cdn.adguard.com/public/Adguard/kb/en/plurals/plurals_site.png)

Теперь представим, что вы столкнулись с такой фразой: *"Standard license for %count% computer|Standard license for %count% computers"*.

Что нужно знать, чтобы перевести её правильно?

Назовём предложения, разделённые вертикальной чертой,***«шаблонами»***, поскольку фактически они служат шаблонами для фраз с разными числами.

Возвращаясь к примеру, поскольку в английском языке есть только две плюральные формы, то и шаблонов должно быть соответственно два:

`**Standard license for *%count%* computer|Standard license for *%count%* computers**`

где **шаблон 1** – Standard license for *%count%* computer,

и **шаблон 2** – Standard license for *%count%* computers.

Ещё одна важная вещь, на которую следует обратить внимание, это плейсхолдеры **%count%**, которые обычно располагаются перед словами, которые они определяют. Вместо **%count%** в итоге будут отображаться разные числа в зависимости от того, какие шаблоны выбираются.

In a situation with another language that has, let’s say, three plural forms, there should be three templates with two vertical bar signs between them.

For example, we would like to translate the above mentioned phrase into Slovak, that according to the rule of [Localizations and Plurals](https://developer.mozilla.org.cach3.com/en/Localization_and_Plurals) article has three plural forms of words to use with following numbers:

![Slovak plural forms](https://cdn.adguard.com/public/Adguard/kb/en/plurals/Slovak.png)

Then the translation from English into Slovak should be:

`**Štandartná licencia pre *%count%* počítač|Štandartná licencia pre *%count%* počítače|Štandartná licencia pre *%count%* počítačov**`

In this case, we see three templates which contain three plural forms of the word *"počítač"* (computer) in Slovak.

**If we ignore one of the forms and use only two templates for Slovak instead of three, the system won’t be able to take an appropriate template for certain numbers** and, as a result, we will have grammar mistakes in sentences, like in English: *Standard license for 5 computer*.

But in some languages there can be words (let’s call them exclusions) that have fewer plural forms than the language itself. And that can cause some confusion.

The Serbian word *'računar'* (computer), for example, has only two forms: *'računar'* - for 1, 21, 31 (and other numbers ending in 1, excluding 11) computers and *'računara'* - for other numbers of computers. But in spite of this fact, there should be three templates in AdGuard DNS translations according to the general rule (which states that there are three plural forms of words in Serbian):

![Serbian plural forms](https://cdn.adguard.com/public/Adguard/kb/en/plurals/Serbian.png)

Thus, the translation from English into Serbian should be:

`**Standardna licenca za *%count%* računar|Standardna licenca za *%count%* računara|Standardna licenca za *%count%* računara**`

Although it is obvious that the last two templates have no differences, it is very important to keep the rule: ***The number of templates should reflect the number of plural forms of the respective language!*** (typically for this type of strings with plurals).

## Short summary

When translating AdGuard projects pay your close attention to phrases which require the use of plural forms.

While first three types of such strings are more or less easy to perform, the fourth type demands more vigilance.

And again: if you come across an original phrase with two important elements: **the vertical bar sign** and **%count%** placeholders, please do the following:

+ Refer to the plural rule of a language you translate into;

+ Keep the exact number of templates;
> The number of your templates should be consistent with the number of plural forms your language includes, even in cases some words have fewer forms themselves. Two plural forms – two templates in translations; five plural forms – five templates, etc.
+ Do not forget to use a vertical bar sign between templates without any space before and after it (exceptions: strings with spaces in original phrases);
+ Do not translate, fill in or delete **%count%** placeholders.

By following these simple rules you will help AdGuard DNS developers avoid a lot of unnecessary complications during the localization process. Thank you!
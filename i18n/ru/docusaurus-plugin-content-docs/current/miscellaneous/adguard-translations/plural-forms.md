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

![Формы множественного числа в польском языке](https://cdn.adguard.com/public/Adguard/kb/en/plurals/Polish.png)
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

![Пример фразы с определённым окончанием строкового ключа](https://cdn.adguard.com/public/Adguard/kb/en/plurals/dual_it.png)

Most of them consist of only one or two words:

- `days;`
- `extensions;`
- `hours`

Please pay attention to the string keys when you meet such phrases on Crowdin and to the "context" field where you can see some important notes about plurals.

#### 2. **Strings with singular and plural nouns separated by commas**

Please look at the example:

![Строки с существительными в единственном и множественном числе, разделённые запятыми](https://cdn.adguard.com/public/Adguard/kb/en/plurals/android_fr.png)

If there are 3 plural forms of nouns in your language (like in Polish), please write all plural forms separated by commas.

`hour, hours --> godzinę, godziny, godzin`

In case a noun has only 2 forms, there is no need to write the same form twice (*typically only for this type of strings with plurals!*). However, it won't be a mistake if you repeat the form twice.

#### 3. **Строки, в которых используется паттерн, разработанный Crowdin**

Это наиболее удобная схема перевода строк с множественным числом.

Crowdin предлагает пользователям перевести определенное количество фраз с различными формами множественного числа.

Если в вашем языке существует только одна форма множественного числа, то вы увидите только одну фразу для перевода. Если существуют три плюральные формы, Crowdin предоставит вам строку, разделённую на две или три строки для перевода.

Например:

![Строки, в которых используется паттерн, разработанный Crowdin](https://cdn.adguard.com/public/Adguard/kb/en/plurals/crowdin_scheme.png)

Пожалуйста, будьте внимательны при переводе этих строк и их утверждении. Если вы не понимаете, что означает поле Other, то просто вставьте ту же форму, что и в поле Many. Содержание полей Many и Other может быть одинаковым.

#### 4. **Строки с шаблонами, разделенными вертикальной чертой**

Это самый сложный тип строк AdGuard, который в основном используется в проекте `AdGuard Websites` (а именно `в папке adguard-dns.io`).

Обратите внимание на знак вертикальной черты между предложениями и плейсхолдер **%count%** в оригинальных фразах – это поможет вам определить фразы, в которых перевод требует использования форм множественного числа.

![Строки с шаблонами, разделенные вертикальной чертой](https://cdn.adguard.com/public/Adguard/kb/en/plurals/plurals_site.png)

Теперь представим, что вы столкнулись с такой фразой: *"Standard license for %count% computer|Standard license for %count% computers"*.

Что нужно знать, чтобы перевести её правильно?

Назовем предложения, разделённые вертикальной чертой,***«шаблонами»***, поскольку фактически они служат шаблонами для фраз с разными числами.

Возвращаясь к примеру, поскольку в английском языке есть только две плюральные формы, то и шаблонов должно быть соответственно два:

`**Standard license for *%count%* computer|Standard license for *%count%* computers**`

где **шаблон 1** – Standard license for *%count%* computer,

и **шаблон 2** – Standard license for *%count%* computers.

Ещё одна важная вещь, на которую вам следует обратить внимание, это плейсхолдерыв **%count%**, которые обычно располагаются перед словами, которые они определяют. Вместо **%count%** в итоге будут отображаться разные числа в зависимости от того, какие шаблоны выбираются.

В ситуации с другим языком, в котором есть, скажем, три формы множественного числа, должно быть три шаблона с двумя вертикальными линиями между ними.

Например, мы хотим перевести приведённую выше фразу на словацкий язык. Согласно правилу статьи [Localizations and Plurals](https://developer.mozilla.org.cach3.com/en/Localization_and_Plurals) он имеет три формы множественного числа, которые можно использовать со следующими цифрами:

![Формы множественного числа словацкого языка](https://cdn.adguard.com/public/Adguard/kb/en/plurals/Slovak.png)

Тогда перевод с английского на словацкий должен быть таким:

`**Štandartná licencia pre *%count%* počítač|Štandartná licencia pre *%count%* počítače|Štandartná licencia pre *%count%* počítačov**`

В данном случае мы видим три шаблона, которые содержат три формы множественного числа слова *"počítač"* (компьютер) на словацком языке.

**Если мы проигнорируем одну из форм и будем использовать только два шаблона для словацкого языка вместо трёх, система не сможет взять соответствующий шаблон для определённых чисел**, и в результате появятся грамматические ошибки такого рода: *Standard license for 5 computer*.

Но в некоторых языках могут быть слова (назовём их исключениями), которые имеют меньшее количество форм множественного числа, чем установлено в языке. И это может привести к некоторой путанице.

У сербского слова *'računar'* (компьютер), например, есть только две плюральные формы: *'računar'* – для 1, 21, 31 (и других цифр, заканчивающихся на 1, включая 11) и *'računara'* – для остальных чисел. Но, несмотря на это, в переводах AdGuard DNS должно быть три шаблона в соответствии с общим правилом (которое гласит, что в сербском языке существует три формы множественного числа слов):

![Формы множественного числа в сербском языке](https://cdn.adguard.com/public/Adguard/kb/en/plurals/Serbian.png)

Таким образом, перевод с английского на сербский должен быть таким:

`**Standardna licenca za *%count%* računar|Standardna licenca za *%count%* računara|Standardna licenca za *%count%* računara**`

Хотя очевидно, что последние два шаблона абсолютно одинаковые, очень важно соблюдать правило: ***количество шаблонов должно отражать количество форм множественного числа соответствующего языка!*** (обычного для этого типа строк с множественным числом).

## В заключение

При переводе проектов AdGuard обращайте особое внимание на фразы, требующие использования форм множественного числа.

Если первые три типа таких строк более или менее просты в исполнении, то четвертый тип требует большей аккуратности.

И ещё раз: если вы встретите оригинальную фразу с двумя важными элементами: **вертикальной чертой** и плейсхолдером **%count%**, пожалуйста, сделайте следующее:

+ Обратитесь к правилам употребления множественного числа в языке, на который вы переводите;

+ Укажите необходимое количество шаблонов;
> Количество шаблонов должно соответствовать количеству форм множественного числа в вашем языке, даже в тех случаях, когда некоторые слова имеют меньшее количество форм. Две формы множественного числа – два шаблона в переводе; пять форм множественного числа – пять шаблонов и т. д.
+ Не забывайте использовать между шаблонами знак вертикальной черты без пробела до и после него (исключения: строки с пробелами в исходных фразах);
+ Не переводите, не заполняйте и не удаляйте такие плейсхолдеры **%count%**.

Следуя этим простым правилам, вы поможете разработчикам AdGuard DNS избежать множества ненужных осложнений в процессе локализации. Спасибо!
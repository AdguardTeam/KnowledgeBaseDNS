---
title: Contrôle Parental
sidebar_position: 5
---

Le _Contrôle parental_ est un ensemble de paramètres qui vous donne la flexibilité de personnaliser l'accès à certains sites Web avec un contenu sensible. Vous pouvez utiliser cette fonctionnalité pour restreindre l'accès de vos enfants aux sites pour adultes, personnaliser les requêtes de recherche, bloquer l'utilisation de services populaires, et plus encore.

## Mise en place

Vous pouvez configurer de manière flexible toutes les fonctionnalités sur vos serveurs, y compris la fonctionnalité de contrôle parental. [Dans l'article correspondant](private-dns/server-and-settings/server-and-settings.md), vous pouvez vous familiariser avec ce qu'est un serveur dans AdGuard DNS et apprendre à créer de différents serveurs avec de différents ensembles de paramètres.

Ensuite, accédez aux paramètres du serveur sélectionné et activez les configurations requises.

### Bloquer les sites à contenu adulte

Bloque les sites Web ayant des contenus inappropriés et pour adultes.

![Site Web bloqué \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/adult_blocked.png)

### Recherche sécurisée

Supprime les résultats inappropriés de Google, Bing, DuckDuckGo, Yandex, Pixabay, Brave, et Ecosia.

### Mode limité YouTube

Supprime l'option de visionner et de publier des commentaires sous les vidéos et d'interagir avec du contenu 18+ sur YouTube.

### Services et sites Web bloqués

Restreint l'accès aux services populaires en un clic. Ceci est utile si vous ne voulez pas que les appareils connectés accèdent à certaines plateformes, telles qu'Instagram et YouTube.

![Services bloqués \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/blocked_services.png)

### Bloquez les sites Web par catégorie

AdGuard DNS bloque l'accès aux services populaires en un clic. Par exemple, si vous bloquez les sites contenant des informations sur l'alcool, le tabac ou les drogues, l'appareil sélectionné ne pourra plus ouvrir les pages appartenant à ces catégories.

![Blocage par catégorie \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/v2-18/category_en.png)

### L'horaire des pauses

Cette fonction vous permet de restreindre l'accès à des catégories spécifiques de sites web en choisissant parmi plus de 20 catégories, dont _Contenu pour adultes_, _Jeux_, _Services bancaires_ et _Communication_. Vous pouvez ajouter un ou plusieurs intervalles de pauses pour chaque jour.

Par exemple, vous pouvez suspendre les restrictions en semaine à partir de 7h00 à 8h00 avant l'école et de 18h00 à 20h00 le soir. En dehors de ces intervalles, le _Contrôle parental_ s'applique comme d'habitude.

Pour programmer une pause :

1. Allez dans _Serveurs_ → sélectionnez un serveur → _Contrôle parental_ → _Horaire des pauses_.
2. Cliquez sur le bouton **+** à côté du jour souhaité et configurez l'intervalle dans la boîte de dialogue _Ajouter une pause_.
3. Répétez l'opération pour ajouter plusieurs intervalles la même journée.
4. Pour modifier un intervalle existant, cliquez sur _Modifier_.

Vous pouvez configurer plusieurs intervalles pour le même jour. Les intervalles d'une même journée ne peuvent pas se chevaucher : si vous essayez de créer des intervalles qui se chevauchent, un avertissement s'affichera et vous ne pourrez pas enregistrer la programmation.

![intervalles qui se chevauchent \*mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/overlapping_intervals.png)

Cocher la case _Toute la journée_ suspend les restrictions _Contrôle parental_ pour toute la journée, remplaçant ainsi les intervalles que vous avez définis.

Les intervalles de pause peuvent également s'étendre au-delà de minuit. Par exemple, si vous définissez une pause à partir de 22h le lundi jusqu'à 7h le mardi, le tableau de bord affichera deux intervalles : Lundi, 22h00 - 00h00, et mardi, 00h00 - 07h00.

![Horaire des pauses \*mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/Pause_schedule.png)

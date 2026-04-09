## Proces & aanpak

SALVE is ontstaan vanuit een onderzoeksgerichte aanpak, zoals ik die tijdens mijn opleiding Communication & Multimedia Design heb ontwikkeld. Binnen deze methode staat het centraal om ontwerpkeuzes continu te onderbouwen. Daarom heb ik in dit project bewust veel aandacht besteed aan het scherp definiëren van het probleem, het begrijpen van de doelgroep en het valideren van aannames voordat ik begon met ontwerpen en bouwen.

Ik ben gestart met uitgebreid deskresearch naar onboarding, retentie en Generatie Z. Hieruit bleek dat onboarding een grote invloed heeft op betrokkenheid en vroegtijdig vertrek, en dat vooral structuur, sociale verbinding en persoonlijke begeleiding vaak ontbreken. Deze inzichten heb ik verdiept met expertinterviews uit het werkveld, waaruit naar voren kwam dat onboarding in de praktijk vaak versnipperd is, afhankelijk van individuen en moeilijk schaalbaar. Daarnaast heb ik mijn eigen aannames getoetst en gewerkt met persona’s en stakeholder mapping om de context en gebruikers scherp te krijgen.

Op basis van deze inzichten heb ik het concept SALVE ontwikkeld: een modulair onboardingplatform waarin onboarding wordt opgebouwd uit losse modules in plaats van één vast traject. Hierbij heb ik gebruikgemaakt van de 6C’s (Compliance, Clarification, Culture, Connection, Confidence en Checkback) als inhoudelijke structuur, zodat elk onderdeel van onboarding wordt meegenomen en er balans ontstaat tussen praktische, sociale en reflectieve aspecten. Tijdens het conceptproces heb ik iteratief gewerkt en ideation technieken zoals Crazy 8’s toegepast om snel verschillende richtingen te verkennen.

In het design heb ik gefocust op duidelijkheid en gebruiksgemak. Door onboarding visueel en gefaseerd aan te bieden, ontstaat er overzicht en wordt informatie-overload voorkomen. Tegelijkertijd heb ik bewust de keuze gemaakt om technologie ondersteunend te laten zijn, waarbij het platform het proces faciliteert, maar menselijke interactie centraal blijft.

## Technische realisatie

Voor de realisatie heb ik SALVE zelf ontwikkeld als werkend prototype met Vue/Nuxt, TypeScript en Supabase. De applicatie is opgebouwd volgens een **component-based architecture**, waarbij herbruikbare UI-componenten de basis vormen van het systeem. Dit zorgt ervoor dat onderdelen zoals modules, lijsten en interface-elementen consistent en schaalbaar blijven binnen de hele applicatie.

De state van de applicatie wordt beheerd met **Pinia**, waarmee ik een duidelijke scheiding heb aangebracht tussen data, logica en presentatie. Hierdoor kan onboardingdata, zoals modules, journeys en voortgang, centraal worden beheerd en efficiënt worden gedeeld tussen verschillende onderdelen van de applicatie. Dit maakt het systeem niet alleen overzichtelijker, maar ook beter onderhoudbaar en uitbreidbaar.

Daarnaast heb ik gewerkt met een **modulaire datastructuur** in combinatie met Supabase, waarbij onboarding is opgebouwd uit losse modules die dynamisch gekoppeld kunnen worden aan verschillende gebruikers en organisaties. Dit maakt het mogelijk om flexibel onboardingtrajecten samen te stellen zonder dat de onderliggende structuur aangepast hoeft te worden.

Ook heb ik binnen de applicatie rekening gehouden met **rolgebaseerde logica** (bijvoorbeeld HR vs. medewerker), waarbij verschillende gebruikers een andere interface en functionaliteit zien, maar wel binnen hetzelfde systeem opereren.

Door deze manier van werken, waarin research, concepting, design en development nauw op elkaar aansluiten, heb ik een oplossing ontwikkeld die niet alleen visueel en functioneel klopt, maar ook technisch schaalbaar, logisch opgebouwd en inhoudelijk sterk onderbouwd is.

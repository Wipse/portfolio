Vinyl heeft iets wat streaming niet heeft wat ik zelf erg vet vind; een fysieke aanwezigheid. Zowel de naald die door de groef beweegt als het krakkemikkige geluid wat uit de speaker komt. Resonyl is een poging om die aanwezigheid zichtbaar te maken op een display: een organische vorm die in realtime reageert op wat er op de plaat staat.

## Verbinding met platenspeler

De audio komt binnen via een Behringer UCA202 USB audio interface, aangesloten op een Crosley platenspeler. Via de Web Audio API wordt het signaal live uitgelezen en opgesplitst in drie frequentiebanden: **lage tonen** (bas, kickdrum), **middentonen** (zang, gitaar) en **hoge tonen** (hi-hats, aanslag). Elke band krijgt zijn eigen noise gate en gevoeligheidsinstelling, wat erg belangrijk is omdat een platenspeler best wel veel ruis en brom produceert.

## Development

Samen met de ondersteuning van AI is dit project gebouwd met Nuxt 4, Vue 3 Composition API en Canvas 2D. De blob is opgebouwd uit 256 punten rondom een cirkel, vervormd door meerdere sinusgolven per frequentieband. Een midpoint-bezier algoritme verbindt die punten tot een altijd gladde, gesloten curve. De rendering bestaat uit vier lagen: een achtergrondgloed, een zachte halo, de hoofdvorm en een binnenste highlight. Kleur roteert langzaam op basis van de totale energie in het signaal. Alle audio-instellingen zijn live instelbaar via een configuratiepaneel.

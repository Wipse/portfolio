Capellos is een startup projectje van een goede vriendin van mij. Haar missie is om oude beschadigde kleding -gevonden in kringloop winkeltjes- een tweede leven te geven door dit te herstellen en dit te bekladderen met kunstzinnige vormen en dergelijke.

## Development

Capellos is gebouwd als een **monorepo** met Turbo, opgesplitst in een Astro 5 frontend en een Sanity Studio voor contentbeheer. Astro genereert de pagina's statisch op basis van Sanity-data via getStaticPaths(), wat zorgt voor **snelle laadtijden** zonder onnodige serverlogica. De styling is gedaan met Tailwind CSS v4, animaties lopen via GSAP. Het winkelmandje werkt client-side op basis van localStorage en custom events; bewust lichtgewicht en daarmee zonder backend-afhankelijkheid.

Samen met de ondersteuning van AI moeten de betalingen nog afgehandeld worden via Stripe Checkout. Noa beheert dan haar eigen producten volledig via Sanity Studio, zonder technische kennis nodig.

## In Ontwikkeling

Dit product is nog in ontwikkeling en is ongeveer halverwege afgerond.

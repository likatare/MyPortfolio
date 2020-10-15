# Setup Notes
1. npm install in both frontend and backend directories.
2. NOTE!!! Beaware that after cloning this repo, you need to delete the upload folder and its contents in the strapi backend.
3. In the backend run npm run develop.
4. In your backend recreate the folder upload under extensions, then in the upload folder create the config folder, in the config folder create settings.json file with the following structure.
5. { "provider": "cloudinary", "providerOptions": { "cloud_name": "xxxx", "api_key": "xxxxxx", "api_secret": "xxx" } } Replace the content of cloud_name, api_key and api_secret with your own credentials from Cloudnairy.
6. NOTE!!! In your frontend, change settings for MyPortfolio/Portfolio-frontend/src/pages/contact.js, the settings for form action must be specifically be yours that you recieved from fromspree.      
7. In the frontend run gatsby develop.

För vg uppgift:

Se samband och värdera alternativa lösningar vid val av programmeringsteknik vid utveckling av dynamiska webbplatser

Programmeringstekniker vi har jobbat med i utbildningen är C# samt Javascript som jag anser fungerar bra till dynamiska hemsidor.
Jag skulle personligen välja javascript till en dynamisk hemsida för att det är väl använt och beprövat.
källhänvisning: https://csharpskolan.se/fordelar-och-nackdelar-med-att-anvanda-javascript-i-matematikundervisningen/

Jag anser att Strapi fungerar bättre för statiska webbplatser.
Man kan enkelt lägga till, ändra och ta bort dokument i ett CMS baserat system. 
Man kan enkelt ställa in roller och behörigheter vad man får och inte får göra. 
Lätt att optimera en webbplats för sökmotorer. 
Källhänvisning: https://strapi.io/ 

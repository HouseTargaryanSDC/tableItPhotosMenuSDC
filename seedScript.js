const fs = require('fs');

const restNames1 = ["Abacus","Amber","Aqua","Arctic","Aroma","Autumn","Baking","Bamboo","Beach","Bengal","Big","Big City","Bitter","Boiling","Bright","Saffron","Brimstone","Bronze","Caramel","Caribbean","Caviar","Central","Champagne","Charming","Chili","Chocolate","Chopping","Cinnamon","City","Clear","Coastal","Cocoa","Coffee","Comet","Cool","Cool Cat","Copper","Coriander","Corner","Court","Crimson","Crystal","Curry","Dairy","Dapper","Delhi","Dwarf","Eastern","Electric","Emerald","Enigma","Fable","Fantasy","Fiery","Fire","First","Forest","French","Fresh","Friendly","Gallery","Glass","Golden","Grand","Greek","Harborview","Harlequin","Harmonic","Holy","Honey","Honor","Hot","Hungry","Imperial","Incredible","Indian","Island","Italian","Jade","Jamming","Japanese","Jazz","Jungle","Juniper","Karma","King's","Lakeside","Lavender","Light","Little","Lunar","Mad","Magical","Malt","Mammoth","Meadow","Mellow","Minty","Modern","Moroccan","Mountain","Mountainview","Narrow","New","Nifty","Noodle","Northern","Old","Olive","Orange","Original","Oval","Painted","Palm","Paradise","Pearl","Pepper","Pink","Polar","Private","Proud","Queen's","Rare","River","Royal","Ruby","Sailing","Salty","Sapphire","Savory","Seaside","Shining","Silent","Silk","Silver","Solar","Sour","Southern","Spaghetti","Spiced","Spicy","Spring","Square","Streetwise","Sugar","Summer","Sumo","Sushi","Sweet","Tandoori","Thai","Tropical","Underwater","Urban","Vanilla","Village","Vintage","Violet","Warm","Waterfront","Waterway","Western","Whiskey","Wild","Winter"];
const restNames2 = ["After Dark","Afternoon","Ambience","Angel","Apple","Archive","Avenue","Badger","Balcony","Barbecue","Bass","Bay","Bear","Beehive","Bistro","Bite","Bites","Blanket","Blend","Block","Blossom","Boar","Bond","Boulevard","Brewery","Brothers","Canteen","Castle","Catch","Chamber","Chef","Chicken","Chimney","Clam","Cloud","Clove","Club","Commander","Cottage","Court","Courtyard","Cow","Crown","Cuisine","Dairy","Deer","Demon","Devil","Diner","Docks","Dome","Door","Dragon","Dream","Drum","Duke","Eats","Elephant","Emperor","Empress","Exchange","Exhibit","Fable","Factory","Faire","Farmer","Fence","Fiddler","Fish","Flavour","Flower","Fox","Fridge","Front","Fusion","Garden","Gate","Genie","Goat","God","Goddess","Grill","Grove","Harvest","Heart","Heaven","Hog","Hook","Horse","Hound","House","Jewel","Junction","Kitchen","Knight","Laguna","Lane","Lantern","Leaf","Lighthouse","Lily","Lion","Lobster","Lounge","Maple","Market","Merchant","Mirror","Mission","Mockingbird","Moment","Moments","Monkey","Monument","Morning","Night","Nights","Oak","Orchard","Orchid","Oriental","Oyster","Palace","Panda","Pantry","Paradise","Parlour","Peasant","Persia","Petal","Pig","Pipe","Pizzeria","Place","Pond","Port","Ranch","Road","Rooftop","Room","Rose","Salmon","Saloon","Scarf","Shack","Shark","Ship","Shrimp","Sisters","Smith","Spice","Spices","Star","Stranger","Street","Street Kitchen","Table","Taste","Tiger","Tower","Tree","Trumpet","Tulip","Valley","Vaults","Victory","View","Vine","Violin","Walk","Way","Well","Whale","Wharf","Willow","Windmill","Window","Wok","Word","Yard"];
const restNames3 = ["Abacus","Acapella","Ace","After Dark","Alpha","Ambience","Amigos","Amuse","Aqua","Arch","Aroma","Atlas","Aurora","Babylon","Backstage","Bambino","Bandits","Basil","Beehive","Blossoms","Blueprint","Bonds","Bones","Bounty","Brimstone","Butlers","Buttons","Candle","Carnival","Castle","Catch","Chance","Chapter","Charm","Cinnamon","Citrus","Clarity","Cocoa","Crickets","Curiosity","Daydream","Drifters","Elementary","Elements","Embers","Enigma","Eureka","Fabled","Fantasia","Fiddler","Fire and Ice","Fluorescence","Forester","Friends","Gastrognome","Gem","Gentle","Glasshouse","Grace","Happening","Harlequin","Harmony","Harvest","Hibiscus","Incognito","Indigo","Interlude","Intermezzo","Intermission","Ivory","Ivy","Jewel","Jubilee","Karma","Kings","Kingsize","Laguna","Lavender","Lemon","Lemon Grass","Lily","Limestone","Little China","Little Italy","Little Persia","Maximus","Maze","Meadows","Medallion","Melting Pot","Midnight","Mirage","Mirrors","Modesty","Moonlight","Mumbles","Nightowl","Nirvana","Nova","Oddity","Olive Grove","Paragon","Paramount","Parlay","Pavilion","Petals","Piccolo","Podium","Potroast","Prospects","Purity","Queens","Recess","Retro","Revelations","Roadhouse","Roast","Robot","Rogue","Roots","Rye","Saffron","Salutation","Sapphire","Seawise","Serenade","Serenity","Shambles","Shazam","Simmer Down","Skyward","Solitude","Solo Mio","Solstice","Souls","Splash","Starlight","Steam","Streetwise","Sunset","The Bell Tower","The Boar","The Boutique","The Cane","The Cave","The Cellar","The Cottage","The Crown","The Depot","The Eclipse","The Emperor","The Empress","The Exhibit","The Gallery","The Garden","The Goat","The Grove","The Hat","The Hive","The Hog","The Hummingbird","The Island","The Lamb","The Lighthouse","The Lion","The Locket","The Lotus","The Maple","The Mockingbird","The Momument","The Monarch","The Nightingale","The Nomad","The Oak","The Parlour","The Peacock","The Pearl","The Rose","The Scarf","The Smile","The Square","The Tower","The Tulip","The Turban","The Vine","The Vineyard","The Wall","The Willow","Tip Top","Tranquility","Treasure","Trilogy","Trinity","Twilight","Unwind","Veil","Vertigo","Vista","Whammy","Whisperwind"];
const nm1a = ["Élégant","Émeraude","Épicé","Acide","Acidulé","Affamé","Ambré","Amer","Ancien","Antique","Arctique","Ardent","Argenté","Bengale","Bouillant","Brûlent","Brillant","Côtier","Carré","Chaleureux","Charmant","Chaud","Chic","Chouette","Clair","Cramoisi","Doré","Doux","Fier","Fou","Frais","Français","Gracieux","Grec","Harmonique","Incarnat","Incroyable","Indien","Italien","Japonais","Laitier","Lunaire","Magique","Marocain","Moderne","Moelleux","Ovale","Peint","Pimpant","Polaire","Privé","Rare","Relevé","Rose","Sacré","Salé","Sauvage","Silencieux","Solaire","Sous-Marin","Soyeux","Suave","Sucré","Sympa","Thaïlandais","Urbain","Velouté","Violet","d'Énigme","d'Été","d'Abaque","d'Ambre","d'Aqua","d'Arôme","d'Arlequin","d'Aura","d'Automne","d'Eau","d'Harmonie","d'Hiver","d'Honneur","d'Olive","d'Or","d'Orange","de Bambou","de Bord de la Mer","de Bord du Lac","de Bronze","de Cabotage","de Cacao","de Café","de Cannelle","de Caramel","de Caviar","de Champagne","de Chocolat","de Coriandre","de Couperet","de Cramoisi","de Cristal","de Cuibre","de Cuisson","de Fantaisie","de Feu","de Front de Mer","de Genévrier","de Grande Ville","de Jade","de Jazz","de Karma","de Laiterie","de Lavande","de Lumière","de Malt","de Miel","de Paradis","de Paume","de Perle","de Piments","de Plage","de Poivre","de Printemps","de Rubis","de Safran","de Saphir","de Sarriette","de Soie","de Soufre","de Sushi","de Vanille","de Verre","de Village","de Ville","de Whisky","de l'Énigme","de l'Île","de l'Est","de l'Ouest","de la Comète","de la Cour","de la Fable","de la Flamme","de la Forêt","de la Galerie","de la Jungle","de la Légende","de la Montagne","de la Nouille","de la Plage","de la Prairie","de la Reine","de la Rivière","de la Rue","de la Voie Navale","des Caraïbes","du Canal","du Coin","du Curry","du Feu","du Fleuve","du Nain","du Nord","du Pré","du Quai","du Roi","du Sucre","du Sud","du Tribunal","du Village","Tropical","Royal","Principal","Oriental","Original","Impérial","Central","Austral","Amical"];
const nm1b = ["Élégante","Émeraude","Épicée","Acide","Acidulée","Affamée","Ambrée","Amère","Ancienne","Antique","Arctique","Ardente","Argentée","Bengale","Bouillante","Brûlente","Brillante","Côtière","Carrée","Chaleureuse","Charmante","Chaude","Chic","Chouette","Claire","Cramoisie","Dorée","Douce","Fière","Folle","Fraîche","Française","Gracieuse","Grecque","Harmonique","Incarnate","Incroyable","Indienne","Italienne","Japonaise","Laitière","Lunaire","Magique","Marocaine","Moderne","Moelleuse","Ovale","Peinte","Pimpante","Polaire","Privée","Rare","Relevée","Rose","Sacrée","Salée","Sauvage","Silencieuce","Solaire","Sous-Marine","Soyeuse","Suave","Sucrée","Sympa","Thaïlandaise","Urbaine","Veloutée","Violette","d'Énigme","d'Été","d'Abaque","d'Ambre","d'Aqua","d'Arôme","d'Arlequin","d'Aura","d'Automne","d'Eau","d'Harmonie","d'Hiver","d'Honneur","d'Olive","d'Or","d'Orange","de Bambou","de Bord de la Mer","de Bord du Lac","de Bronze","de Cabotage","de Cacao","de Café","de Cannelle","de Caramel","de Caviar","de Champagne","de Chocolat","de Coriandre","de Couperet","de Cramoisi","de Cristal","de Cuibre","de Cuisson","de Fantaisie","de Feu","de Front de Mer","de Genévrier","de Grande Ville","de Jade","de Jazz","de Karma","de Laiterie","de Lavande","de Lumière","de Malt","de Miel","de Paradis","de Paume","de Perle","de Piments","de Plage","de Poivre","de Printemps","de Rubis","de Safran","de Saphir","de Sarriette","de Soie","de Soufre","de Sushi","de Vanille","de Verre","de Village","de Ville","de Whisky","de l'Énigme","de l'Île","de l'Est","de l'Ouest","de la Comète","de la Cour","de la Fable","de la Flamme","de la Forêt","de la Galerie","de la Jungle","de la Légende","de la Montagne","de la Nouille","de la Plage","de la Prairie","de la Reine","de la Rivière","de la Rue","de la Voie Navale","des Caraïbes","du Canal","du Coin","du Curry","du Feu","du Fleuve","du Nain","du Nord","du Pré","du Quai","du Roi","du Sucre","du Sud","du Tribunal","du Village","Tropicale","Royale","Principale","Orientale","Originale","Impériale","Centrale","Australe","Amicale"];
const nm2 = ["l'Écharpe","l'Épice","l'Étoile","l'Ambiance","l'Archive","l'Atmosphère","la Baie","la Balade","la Baleine","la Basse","la Biche","la Brasserie","la Cabane","la Cantine","la Capture","la Chèvre","la Chambre","la Cheminée","la Cocotte","la Cour","la Couronne","la Couverture","la Crevette","la Cuisine","la Déesse","la Duchesse","l'Exposition","la Façon","la Fable","la Fenêtre","la Ferme","la Feuille","la Fleur","la Floraison","la Fusion","l'Huître","l'Idole","l'Impératrice","la Légende","la Lagune","la Lanterne","la Liaison","la Libellule","la Maison","la Mare","la Matinée","la Merveille","la Mission","la Morsure","la Nappe","la Nuit","l'Orchidée","la Paloudre","la Parole","la Perle","la Pizzeria","la Pomme","la Porte","la Poule","la Promenade","la Récolte","la Rose","la Route","la Ruche","la Rue","la Salle","la Saveur","la Soirée","la Source","la Table","la Tour","la Tulipe","l'Usine","la Vache","la Vallée","la Victoire","la Vigne","la Voûte","la Voie","la Vue","l'Échange","l'Éléphant","l'Érable","l'Étalage","l'Ange","l'Après-Midi","l'Arbre","le Balcon","le Bassin","le Bateau","le Bijou","le Bistro","le Blaireau","le Bloc","le Bosquet","le Boulevard","le Cœur","le Carrefour","le Cavalier","le Cerf","le Château","le Chêne","le Champ","le Chef","le Chemin","le Cheval","le Chevalier","le Ciel","le Club","le Coin","le Colibri","le Commandant","le Cottage","le Démon","le Dîner","le Dîneur","le Dôme","le Diable","le Dieu","le Dragon","le Duc","l'Empereur","l'Endroit","le Fleur","le Forgeron","le Foulard","le Foyer","le Frigo","le Génie","le Goût","le Gril","le Hall","le Homard","l'Instant","le Jardin","le Lien","le Lieu","le Lion","le Lis","le Loup","le Mélange","le Manoir","le Marché","le Matin","le Miroir","le Moisson","le Moment","le Monument","le Morceau","le Mot","le Moulin","le Navire","le Nuage","l'Ours","le Pétale","le Palais","le Panda","le Paradis","le Parc","le Parfum","le Parloir","le Paysan","le Perchoir","le Phare","le Piment","le Poisson","le Port","le Quai","le Rêve","le Ranch","le Renard","le Requin","le Salon","le Sanglier","le Saule","le Saumon","le Singe","le Sommet","le Tableau","le Tambour","le Théâtre","le Tigre","le Toit","le Trèfle","le Triomphe","le Vaisseau","le Verger","le Violon","le Violoneux","le Yard"];
const nm3 = ["Élémentaire","Acapella","Agrume","Alpha","Ambiance","Aqua","Atlas","Babylone","Bambino","Basilic","Boutons","Cacao","Citronnelle","Clair de Lune","Clarté","Coquin","Coucher du Soleil","Curiosité","Eau","Eureka","Feu et Glace","Fleurs","Floraisons","Fluorescence","Géant","Gentil","Grâce","Harmonie","Incognito","Indigo","Légendaire","Lavande","Lueuer des Étoiles","Maximus","Merveille","Minuit","Miroirs","Modestie","Nirvana","Nova","Oiseau de Nuit","Pétales","Petite Chine","Petite Italie","Petite Perse","Piccolo","Primordial","Pureté","Récréation","Rétro","Révélations","Rêveries","Reines","Royal","Séduction","Sérénité","Safran","Seigle","Shazam","Solitude","Tranquillité","Vagabonds","Vers le Ciel","Violoneux","des Os","l'Éclipse","l'Énigme","l'Érable","l'Étalage","l'Événement","l'Île","l'Abaque","l'Accord","l'Ace","l'Agneau","l'Amusement","l'Arôme","l'Arche","l'Arlequin","l'Atmosphère","l'Aura","l'Aurore","l'Empereur","l'Entracte","l'Exposition","l'Hibiscus","l'Impératrice","l'Interlude","l'Intermezzo","l'Intermission","l'Interruption","l'Ivoire","l'Occasion","l'Oiseau Moqueur","l'Oliveraie","l'Origine","la Base","la Bougie","la Boutique","la Braise","la Branche","la Brume","la Canne","la Cannelle","la Capture","la Cave","la Caverne","la Chèvre","la Chance","la Chandelle","la Cime","la Couronne","la Curiosité","la Fable","la Fantaisie","la Fusion","la Galerie","la Gemme","la Goutte","la Grotte","la Joliesse","la Légende","la Lagune","la Liaison","la Lumière des Étoiles","la Muraille","la Niche","la Nuit","la Nuit Tombée","la Pénombre","la Pagaille","la Pause","la Perle","la Perspective","la Petite Maison","la Prairie","la Prime","la Récolte","la Rêverie","la Rose","la Ruche","la Sérénade","la Salutation","la Sensation","la Serre","la Singularité","la Tour","la Tribune","la Trilogie","la Trinité","la Tulipe","la Verrerie","la Vieillesse","la Vigne","la Voûte","la Vue","le Bosquet","le Calcaire","le Calme","le Carnaval","le Château","le Chapeau","le Chapitre","le Charme","le Clocher","le Colibri","le Cottage","le Couloir","le Crâne","le Crépuscule","le Creuset","le Dépôt","le Forestier","le GastroGnome","le Gastronome","le Grillage","le Jardin","le Jubilé","le Karma","le Labyrinthe","le Lien","le Lierre","le Lion","le Lis","le Lotus","le Médaillon","le Marmonnement","le Mirage","le Monarque","le Monument","le Mur","le Nomade","le Paon","le Parangon","le Parloir","le Pavillon","le Plan","le Podium","le Pré","le Projet","le Rôti","le Recoin","le Relais","le Robot","le Rossignol","le Sanglier","le Saphir","le Saule","le Solstice","le Sommet","le Sortilège","le Soufre","le Sourire","le Sous-Sol","le Trésor","le Turban","le Vignoble","le Voile","les Âmes","les Éléments","les Amis","les Bandits","les Grillons","les Prairies","les Rois"];

function restNameGen(type){
	
	for(i = 0; i < 10; i++){
		if(type){
			if(i < 5){
				rnd = Math.random() * nm1a.length | 0;
				rnd2 = Math.random() * nm2.length | 0;
				if(rnd2 < 80){
					restName = nm2[rnd2] + " " + nm1b[rnd];
				}else{
					restName = nm2[rnd2] + " " + nm1a[rnd];
				}
			}else{
				rnd = Math.random() * nm3.length | 0;
				restName = nm3[rnd];
			}
		}else{
			if(i < 5){
				rnd = Math.random() * names1.length | 0;
				rnd2 = Math.random() * names2.length | 0;
				restName = "The " + names1[rnd] + " " + names2[rnd2];
			}else{
				rnd = Math.random() * names3.length | 0;
				restName = names3[rnd];
			}
		}
  }
  return restName;
}

const names1 = ['Baked', 'Barbecued', 'Basted', 'Blanched', 'Braised', 'Breaded', 'Brined', 'Broasted', 'Cooked', 'Cured', 'Deep-Fried', 'Dried', 'Dry-Roasted', 'Engine-Cooked', 'Fire-Grilled', 'Fire-Roasted', 'Fried', 'Gentle-Fried', 'Grilled', 'Infused', 'Marinated', 'Oven-Baked', 'Oven-Grilled', 'Pan-Fried', 'Pickled', 'Poached', 'Pressure-Cooked', 'Pressure-Fried', 'Roasted', 'Sautéed', 'Seared', 'Shallow-Fried', 'Simmered', 'Slow-Cooked', 'Smoked', 'Steamed', 'Stewed', 'Stir-Fried', 'Stuffed', 'Tea-Smoked', 'Tenderized', 'Thermal-Cooked'];
const names2 = ['Almonds & Avocado', 'Apple & Lavender', 'Apples & Mustard', 'Apples & Walnut', 'Apricot & Basil', 'Apricots & Honey', 'Asparagus', 'Basil & Cinnamon', 'Basil & Clove', 'Basil & Lime', 'Basil & Mint', 'Beets & Lemon', 'Beets & Orange', 'Bittersweet', 'Black Pepper', 'Blackberry & Ginger', 'Blueberry', 'Blueberry & Mushroom', 'Butter', 'Carrot & Coriander', 'Carrot & Violet', 'Potatoes &', 'Rice &', 'Pasta & ', 'Carrots & Ginger', 'Casserole of', 'Cheese &', 'Chestnuts &', 'Chili', 'Cinnamon', 'Cinnamon & Thyme', 'Cocoa & Mushroom', 'Coconut', 'Coconut & Ginger', 'Confit of', 'Coriander & Lemon', 'Cranberry', 'Creamy', 'Cucumber &', 'Cucumber & Lime', 'Curry of', 'Dark Ale', 'Dark Beer', 'Easter-Style', 'Egg & Beans', 'Egg & Beet', 'Egg & Coconut', 'Fennel', 'Fennel & Garlic', 'Fennel & Lemon', 'Fennel & Lime', 'Fennel & Orange', 'Figs & Olive', 'Forest', 'Garlic', 'Garlic & Ginger', 'Garlic & Lime', 'Garlic & Onion', 'Garlic & Rosemary', 'Garlic & Tomato', 'Ginger', 'Ginger & Honey', 'Hazelnut', 'Herbs &', 'Honey', 'Honey & Almond', 'Honey & Nuts', 'Honey & Thyme', 'Honey-Coated', 'Hot & Spicy', 'Hot & Sweet', 'Jasmine', 'Juniper', 'Lemon', 'Lemongrass', 'Light Ale', 'Light Beer', 'Lime', 'Lime & Ginger', 'Lime-Coated', 'Mango & Pine', 'Mint', 'Mint & Berry', 'Mint & Mustard', 'Mint & Orange', 'Mountain', 'Mushroom', 'Mushroom & Apricot', 'Mushroom & Garlic', 'Mushroom & Rosemary', 'Mustard', 'Mustard & Garlic', 'Mustard & Rosemary', 'Mustard & Thyme', 'Northern-Style', 'Nuts &', 'Olive', 'Olives & Mustard', 'Onions & Cream', 'Onions & Tomato', 'Orange', 'Orange & Mustard', 'Orange & Olive', 'Oregano', 'Paprika', 'Parmesan', 'Parsnip & Pear', 'Peach & Vinegar', 'Peanuts &', 'Peas & Mushroom', 'Pepper', 'Pepper & Garlic', 'Pepper & Lime', 'Pepper & Mango', 'Peppermint', 'Pine', 'Pineapple', 'Raspberry & Peanut', 'Red Whine', 'Rhubarb', 'Rosemary', 'Rosemary & Onion', 'Saffron', 'Saffron & Shallot', 'Salt & Pepper', 'Salt & Savory', 'Salted', 'Salty & Sour', 'Savory', 'Sour', 'Sour & Cream', 'Souther-Style', 'Soy', 'Stew of', 'Sugar', 'Sweet & Fresh', 'Sweet & Savory', 'Sweet & Spicy', 'Sweet \'n Sour', 'Thyme & Parsley', 'Tomatoes &', 'Truffles &', 'Vanilla', 'Vanilla & Mint', 'Vegetables &', 'Vinegar', 'Walnuts &', 'Wasabi', 'Watercress', 'Western-Style', 'White Wine', 'Yogurt'];
const names3 = ['Bear', 'Beef', 'Boar', 'Chicken', 'Duck', 'Horse', 'Lamb', 'Mammoth', 'Mutton', 'Ostrich', 'Pheasant', 'Pigeon', 'Pork', 'Quail', 'Rabbit', 'Turkey', 'Venison', 'Yak'];
const names4 = ['Clams', 'Cockles', 'Cod', 'Crab', 'Crocodile', 'Alligator', 'Fish', 'Frog', 'Herring', 'Lobster', 'Mussels', 'Oysters', 'Prawns', 'Salmon', 'Scallops', 'Shrimps', 'Snapper', 'Trout', 'Tuna'];
const names5 = ['Bake', 'Bread', 'Bruschetta', 'Buns', 'Calzone', 'Chestnuts', 'Chutney', 'Flatbread', 'Forest Mushrooms', 'Gratin', 'Kebabs', 'Lasagna', 'Linguine', 'Moussaka', 'Minestrone', 'Stracciatella', 'Goulash', 'Bisque', 'Nut Mix', 'Omelet', 'Pasta', 'Pie', 'Pizza', 'Potato Wedges', 'Potatoes', 'Rice', 'Risotto', 'Roll', 'Salad', 'Sandwich', 'Scrambled Egg', 'Soup', 'Spring Greens', 'Spring Vegetables', 'Stuffed Bread', 'Taco', 'Tart', 'Tofu', 'Tortilla', 'Vegetable Mix', 'Vegetables', 'Walnuts', 'Winter Greens', 'Winter Vegetables'];
const names6 = ['Almond', 'Apple', 'Avocado', 'Banana', 'Blueberry', 'Caramel', 'Cardamom', 'Cashew', 'Cherry', 'Chestnut', 'Chocolate', 'Cinnamon', 'Cocoa', 'Coconut', 'Coffee', 'Cranberry', 'Dark Chocolate', 'Date', 'Elderberry', 'Ginger', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava', 'Hazelnut', 'Honey', 'Kiwi', 'Lemon', 'Licorice', 'Lime', 'Mandarin', 'Mango', 'Melon', 'Milk Chocolate', 'Mint', 'Nutmeg', 'Orange', 'Papaya', 'Passion Fruit', 'Peach', 'Peanut', 'Pecan', 'Pineapple', 'Pistachio', 'Plum', 'Praline', 'Raspberry', 'Red Wine', 'Rum', 'Saffron', 'Strawberry', 'Vanilla', 'Walnut', 'White Chocolate', 'White Wine'];
const names7 = ['Bombe', 'Bonbons', 'Bread', 'Buns', 'Cake', 'Candy', 'Cheesecake', 'Cobbler', 'Cone', 'Cookies', 'Crispies', 'Crumble', 'Custard', 'Delight', 'Doughnut', 'Fruit Salad', 'Fruitcake', 'Fudge', 'Genoise', 'Gingerbread', 'Ice Cream', 'Ice Lollies', 'Jam', 'Jelly', 'Milk', 'Molten Cake', 'Mooncake', 'Pancakes', 'Pastry', 'Pavlova', 'Pie', 'Pound Cake', 'Pud', 'Pudding', 'Roll', 'Snacks', 'Sorbet', 'Soufflé', 'Split', 'Steamed Pudding', 'Strudel', 'Sundae', 'Surprise', 'Tart', 'Tarte Tatin', 'Toast', 'Toffee', 'Trifle', 'Wafer', 'Waffles', 'Whip', 'Yogurt'];

function foodNameGen() {
  for (i = 0; i < 10; i++) {
    if (i < 6) {
      rnd = Math.floor(Math.random() * names1.length);
      rnd2 = Math.floor(Math.random() * names2.length);
      if (i < 2) {
        rnd3 = Math.floor(Math.random() * names3.length);
        foodName = names1[rnd] + ' ' + names2[rnd2] + ' ' + names3[rnd3];
      } else if (i < 4) {
        rnd3 = Math.floor(Math.random() * names4.length);
        foodName = names1[rnd] + ' ' + names2[rnd2] + ' ' + names4[rnd3];
      } else {
        rnd3 = Math.floor(Math.random() * names5.length);
        foodName = names1[rnd] + ' ' + names2[rnd2] + ' ' + names5[rnd3];
      }
    } else {
      rnd = Math.floor(Math.random() * names6.length);
      rnd2 = Math.floor(Math.random() * names7.length);
      if (i < 8) {
        rnd3 = Math.floor(Math.random() * names6.length);
        while (rnd3 === rnd) {
          rnd3 = Math.floor(Math.random() * names6.length);
        }
        foodName = names6[rnd] + ' and ' + names6[rnd3] + ' ' + names7[rnd2];
      } else {
        foodName = names6[rnd] + ' ' + names7[rnd2];
      }
    }
  }
  return foodName;
}

// CREATE TABLE menus (
//   id serial primary key,
//   rest_id int,
//   rest_name varchar(50),
//   menu_type_num smallint,
//   menu_type_name varchar(50),
//   menu_section_num smallint,
//   menu_section_name varchar(50),
//   menu_item_name varchar(50),
//   menu_item_description text,
//   menu_item_price numeric
// );

const start = Date.now();
const writeStream = fs.createWriteStream('./CSV/bigboi.csv');

// // write some data with a base64 encoding
// writeStream.write(`rest_id,rest_name,menu_type_num,menu_type_name,menu_section_num,menu_section_name,menu_item_price\n`);

const menuTypeName = ['Breakfast', 'Lunch', 'Dinner'];
const menuSectionName = ['Appetizer', 'Mains', 'Desserts'];
const restNames = {};


writeStuff = (writer, callback) => {
  let i = 10000000;
  write = () => {
    let ok = true;
    do {
      const rest_id = (i < 999999) ? Math.floor(Math.random() * 100000 + 400000) : Math.floor(Math.random() * 400000 + 1);
      const menu_type_num = Math.floor(Math.random() * 3);
      const menu_section_num = Math.floor(Math.random() * 3);
      const price = Math.floor(Math.random() * (2000 - 100) + 100) / 100;
      const randRestName = restNameGen(Math.floor(Math.random() * 2));
      const randDescrip = () => {
        let descrip = '';
        const randNum = menu_type_num + menu_section_num;
        for (let i = 0; i < randNum; i += 1) {
          descrip += foodNameGen();
        }
        return descrip;
      }
      restNames[rest_id] = restNames[rest_id] ? restNames[rest_id]: randRestName;


      const data = `${rest_id},${restNames[rest_id]},${menu_type_num},${menuTypeName[menu_type_num]},${menu_section_num},${menuSectionName[menu_section_num]},${foodNameGen()},${randDescrip()},${price}\n`;
      
      i -= 1;
      if (!i) {
        writer.write(data, 'UTF-8', callback);
      } else {
        ok = writer.write(data, 'UTF-8');
      }   
    } while (i > 0 && ok);
    writer.once('drain', write);
  }
  write();
}

writeStuff(writeStream, () => {
  writeStream.end();
  console.log(Date.now() - start);
});


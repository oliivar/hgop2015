###What does this technology do?


######Vagrant: 	       
	       Þetta er software sem notað er til að setja upp sýndarvélar 	        	og heldur utan um stillingar fyrir vélarnar sem búnar eru til.
	
######VirtualBox: 
               Til að keyra sýndarvélar sem búnar eru til er notað virtualbox
	       sem heldur utan um vélarnar og keyrir upp stýrikerfi í þeim.

######Grunt: 
               Er svokallað task runner sem gerir þér kleyft að minnka þína vinnu               eins og t.d live reload sem er í grunt einmitt gerir. 

######npm: 
               Eins og segir inni á síðunni npmjs.com þá auðveldar þetta 	
	       JavaScript notendum til að share-a og endurnýta kóða og gerir það 		auðveldara að uppfæra kóða sem þú ert að share-a.

######nodejs: 
               Er event-driven keyrsluumhverfi fyrir javascript. Það byggir á 
               V8 javascript vélinni í Chrome.

######bower: 
               Heldur utan um pakkana sem þú þarft fyrir verkefnið og sér til 
               þess að þeir séu up to date eða stilltir á version sem þú þarft 
               að hafa.


####Dagur 2: Deployment path so far

	Er að vinna með tvær virtual vélar eina test vél og aðra sem er dev vél.
	deployment scriptan mín keyrir á dev vélinni sem tengist test vélinni og 
	pushar docker image inná dockerhub.

####Scriptur úr Jenkins

	export DISPLAY=:0
	firefox
	export ACCEPTANCE_URL=http://localhost:9090
	export PATH=/usr/local/bin:$PATH
	npm install
	grunt mochaTest:acceptance


	Var aðeins búinn með um hálfan dag 7 þegar ég varð að játa mig sigraðan
	tók mig því miður of langan tíma að gera hvert verkefni. Var bara ekki 
	nægilega vel að mér í þessu fræðum en held að ég hafi samt lært margt og 	 
	gagnlegt í þessu námskeiði.

####Niðurstöður:
		Vil ég þakka fyrir gagnlegt og skemmtilegt námskeið, þetta var 
		var mjög svo fróðlegt og kom mér aðeins inn í þetta efni sem 
		var einmitt ætlunin þegar ég valdi þetta námskeið. Mun ég halda
		áfram að lesa mér til um þetta efni og kem sterkari til leiks út
		á vinnumarkaðinn.

####Takk fyrir mig.

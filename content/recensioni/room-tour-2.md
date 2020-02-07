---
title: "Ryzen 9 3900X, Radeon XT 5700 e Linux"
date: "2020-02-07T10:30:06+02:00"
recensioni: current-menu-item
slug: "ryzen-linux-pc-setup"
immagine_testa: "https://res.cloudinary.com/rim7/image/upload/w_auto,c_scale,q_auto,f_auto/v1581013519/RoomTour2/amd-ryzen-workstation.jpg"
description: "Seconda parte del Room Tour 2020 di Riccardo Palombo. La workstation AMD Ryzen e la configurazione Dual Boot Windows e Linux."
categoria: "1"
rating: "5"
brand: "Riccardo Palombo"
jquery: "1"
layout: room-tour-2020-1
video: https://www.youtube.com/embed/IvPkHi2fOPA
sommario: "Ho rinnovato il PC con"
typed1: "^3000 la CPU Ryzen 3900X."
typed2: "una Radeon 5700 XT."
typed3: "una nuovo distro Linux."
typed4: "una migliore versione di me."
---

Riprendiamo il discorso e diciamola tutta: a me il vecchio Ryzen 7 2700X e la vecchia GeForce GTX-1070 bastavano pure; tanto per avere un timeline fluida su Premiere Pro o sei in Full HD o usi i proxy, e per tutto il resto contano più RAM e SSD dei core, dei turbo e dei tdp. Però una cosa non mi stava bene: il gracchiare, scostante ma certo, del MasterLiquid Pro 240, un incubo che mi son tenuto dentro per due anni prima di decidere che era tutta colpa della sua pompa se non riuscivo a sentire silenzio neanche all'alba. Così quando l'agenzia di AMD mi ha proposto il Ryzen 9 3900X mi son cappottato dalla Cinius; e quando mi ha detto che potevo abbinare anche una AMD Radeon RX 5700 ho pensato alle sincronicità di Jung. Ho inviato una email, ho accettato, ma stavo già cercando il modo più semplice per togliere l'innominabile liquido AiO ed avere un PC silenzioso. Anzi: avere un PC silenzioso nel 90% del tempo e poi sticavoli se nel rendering piglia il volo.

La soluzione a questo dubbio è stata tanto banale quanto semplice: usare le ventole! Un Noctua U12S per la CPU, un Arctic Accelero Xtreme IV per la GPU, due Arctic P14 PWM per il case, in aggiunta alla MasterFan Pro 14 già montata nel case (che in realtà ne aveva un totale di tre, ma due si sono meritate la pensione). E una regolazione molto conservativa nel BIOS della ROG Crosshair Hero VIII Wi-Fi, del tipo che tiene le ventole al minimo possibile fino ai 60-70°C, per poi schizzare sopra gli 80°C.

LA MIA CONFIGURAZIONE

ProcessoreAMD Ryzen 9 3900X 12-core Scheda madreAsus Rog Crosshair Hero VIII (Wi-Fi) Scheda videoAMD Radeon RX 5700 Memorie RAMMicron Ballistix DDR4-3200 / 2x 16GB ArchiviazioneSamsung 960 Pro 500 GB / Intel Optane 800P 118 GB / Crucial BX300 480 GB Dissipatore CPUNoctua NH-U12S AM4 Dissipatore GPUArctic Accelero Xtreme IV Telaio e ventoleCooler Master MasterCase Maker 5 / 2x Arctic P14 PWM Alimentatore e UPSMasterWatt V1200 Platinum / APC-S 650VA
Arctic Accelero Xtreme IV
FIG. 1. Clicca per ingrandire.

Arctic Accelero Xtreme IV ha silenziato la Radeon RX 5700.

Messo così, sento le ventole soltanto durante l'esportazione dei video, o durante la creazione dei proxy, o quando faccio impicci con il blur di compton e tutto va in panne (ne parleremo dopo). A dire il vero ho provato a montare una MasterFan Pro da 12 mm nella parte alta del telaio, poco sopra la CPU, per collegarla a CPU_OPT e non dipendere interamente dal Noctua; ma in un setup così discreto veniva fuori quel leggero ronzio del cuscinetto CoolerMaster, e con lui lo spettro dell'incubo innominabile.

Sto ancora ragionando sulla necessità di quella ventola superiore: adesso scrivo da Linux ed ho venti tab su Firefox, Telegram Desktop, VSCode, due Gnome Terminal, Nautilus, un webserver locale con Hugo attivo, su monitor 4K e 1440P, e leggo le ventole a 376, 314 e 362 RPM lato CPU, e 660 RPM lato GPU, con temperature di 49°C e 42°C rispettivamente. È un contesto di lavoro usuale per me, e credo che siano dei buoni risultati. Windows gira su livelli simili o migliori perché la gestione energetica con i profili di Ryzen Master e Radeon Adrenalin 2020 è nativa, ad eccezione di quando faccio montaggio video dove la temperatura supera gli 80°C e le ventole salgono di conseguenza. Capita che le senta partire per qualche secondo; dopotutto stiamo parlando di Premiere Pro CC; dopotutto sappiamo benissimo quanto sia bizzoso e incerto con 4K 10-bit, con i Lumetri, eccetera eccetera. Ma ci sta. Non mi rovina l'umore. Anzi mi fa capire che devo impegnarmi di più per fare meno montaggio. Devo fare riprese "già montate". Devo lavorare nella regia, non aggiungere altri core.

Analisi della GPU Radeon RX 5700.
FIG. 2. Le temperature della Radeon RX 5700 durante il rendering del video "Scuola di recensioni: Roberto Pezzali" su Adobe Premiere Pro CC 2020 sono ottime.

Analisi della CPU Ryzen 9 3900X durante un rendering video.
FIG. 3. Frequenze di clock dei 12 core del Ryzen 9 3900X durante il rendering del video "Scuola di recensioni: Roberto Pezzali" su Adobe Premiere Pro CC 2020.

Ora, a chi tra voi ha letto fin qui senza guardare il video di apertura, racconto in due righe come sono riuscito ad usare il Ryzen 9 3900X nonostante sia arrivato* con un pin mancante e con diversi pin piegati

. In breve, l'ho portato da Davide e lui ha saldato un pin nuovo ed ha raddrizzato il resto. Fine della storia. Davide fa questo ed altro (clickate sull'immagine poco sotto), ed è quel genere di professionista che ogni smanettone come me sogna di avere vicino. Una certezza. Lo conosco da saranno due anni e mi ha risolto problemi su problemi, oltre che soddisfatto nerdaggini tipo cambiare gli schermi ai portatili, riportare in vita telefoni, riportare in vita schede video fuse dal MacPro, darmi un parere tecnico sulle possibilità di riparazione di ogni cavolata rotta che compro ai mercatini. E da oggi anche il farmi girare con un 12-core rimesso in piedi con pezzi di un altro processore. Il suo negozio si chiama HD8 System
Riparazione del Ryzen 9 3900X.

FIG. 4. Fotogramma dal filmato della riparazione del Ryzen 9 3900X.

*: è una storia a parte, breve anche lei, che trovate nel video.
Linux & Windows

Sono ancora vincolato a Windows perché monto con Premiere Pro. Mi prometto da mesi di passare a DaVinci Resolve su Linux ma non riesco mai a farlo. Non è tanto un problema del fisso, più una noia sui vari portatili che devo di volta in volta configurare in Dual Boot. Il PixelBook i7/16/512 che ho importato dagli USA, per dire, è bello quanto volete ma non mi dà prestazioni decenti per il montaggio su Windows quindi dovrò rivenderlo e tornare al ThinkPad X1. Mi consolo pensando che il mio interesse a Windows si limita a questo, tanto che finite le installazioni finali disabilito la Ethernet e non aggiorno nulla fino a quando non sento parlare di novità importanti nei driver della GPU, di un BIOS, o cose così. Non ho nemmeno montato l'antenna Wi-Fi 6 sulla mobo, per dire. È anche per essere più produttivo: quando sono su Windows, monto e basta.

Il resto del tempo e tutte le mie risorse sono su Linux. Su Endeavour OS in questo momento. Nel passato recente su Elementary OS, o su Manjaro, o su Ubuntu, o su Slackware, o su Gentoo quando usavo un iMac G3 con Openbox e vivevo ancora in Toscana. Ricordo che parliamo del fisso, non di un portatile perché lì è tutta un altra storia e un altro ambiente di lavoro. Su un fisso tanto potente voglio il massimo delle prestazioni, della comodità, delle novità, delle personalizzazioni. E in questo periodo lo ottengo con i3-gaps e Gnome 3.3X. Si può usare l'uno e l'altro seguendo le istruzioni del progetto i3-gnome. Uso un kernel-ck variante zen2 perché mi sembra più reattivo dello standard.
Una schermata del mio Linux.

FIG. 5. Tre terminali con i dots di i3, polybar e compton. Rofi al centro. S-tui sotto.

La gestione energetica dei Ryzen 3000 su Linux non è ancora a puntino, soprattutto perché ci ho abbinato la complessità della Radeon RX 5700 (uso i driver open amdgpu) anche lei un po' ostica. Gnome gira benone ed è reattivo e bello come ti aspetti che sia. i3 + Gnome ha qualche bruttezza da mandar giù o da correggere con quelle ore di finezze che non ho. Come spiego nel video, mi fa comodo tenere Gnome per regolare tutto il sistema dal suo Control Center. Apprezzo il minimalismo di un ambiente "tiled puro" sul notebook, non qui. Qui ho le risorse per pretendere il meglio senza ottimizzare quel genere di cose. Magari, se proprio devo, punto a Sway + Gnome su Wayland.

Quindi la mia barra è una comune Polybar, e il compositor per le ombre, le finestre smussate, le trasparenze e altri effetti è il solito Compton/Picom (anzi, il fork compton-rounded-corners). Niente di strano. Sono software banali per chi conosce il settore ma hanno il pregio di essere intuitivi da configurare e facili da replicare quando cambi PC. E sono anche tanto belli e divertenti. Ho inserito solo quel che mi serve e come mi serve tra le voci di Polybar, ho lo spazio che voglio tra le finestre, ho una scorciatoia per aprire i programmi nei desktop che preferisco e nella disposizione che decido io. Accendo il PC, schiaccio due tasti, e mi sento a casa. Non uso software per gestire i file di configurazione; solo il brutto script sh per copiare quel che mi interessa, di tanto in tanto, nella cartella locale repository GitHub. Tra un attimo vi spiegherò come recuperare i dots.

Una schermata del mio Linux.
FIG. 6. Un esempio di organizzazione delle finestre con i3 e Gnome. A fine articolo trovi informazioni su come scaricare i miei dots.

Sono molto più veloce e rilassato perché non devo usare il cursore per spostare le finestre, e non perdo tempo ogni giorno ad metterle qua e là magari per scoprirne una o tentare di affiancarne due in una maniera non dico armoniosa ma almeno comoda. Ci sono i tiling windows manager come i3 per questo (i più diffusi sono una decina; fate un salto su r/Unixporn) quindi perché non sfruttarli?

I miei dotfiles

Ora: questo testo non è e non sarà un tutorial, ma ho pensato di condividere i file dots di questa workstation su Patreon. Nei prossimi giorni arriveranno quelli dei notebook Pixelbook e ThinkPad X1. Poi ci saranno degli screencast commentati. E piano piano aggiornerò il tutto col cambiare del mio gusto estetico e con l'arrivo dei nuovi prodotti. Sono dei file personali, adatti a me e forse non adatti a voi, ma sono un bel punto di partenza. Ed anche un altro modo per ringraziare i ragazzi che hanno deciso di sostenere i miei lavori con un tot al mese. Potete scaricare l'archivio dalla pagina patreon.com/riccardopalombo. Prima di lasciarvi ad altro, ecco qualche link. 
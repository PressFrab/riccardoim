---
title: "Intel NUC 10 Performance"
date: "2020-02-21T11:50:06+02:00"
recensioni: current-menu-item
slug: "intel-nuc-10"
immagine_testa: "https://res.cloudinary.com/rim7/image/upload/w_auto,c_scale,q_auto,f_auto/v1581013519/RoomTour2/amd-ryzen-workstation.jpg"
description: "Ho provato Intel NUC 10 con processore Core i7 di 10° generazione. Benchmark, analisi tecnica, aggiornamento hardware e test Linux."
categoria: "1"
rating: "4"
brand: "Intel Corporation"
jquery: "1"
layout: intel-nuc10
video: https://www.youtube.com/embed/uQq7I48WE7Y
sommario: "Ho rinnovato il PC con"
typed1: "^3000 la CPU Ryzen 3900X."
typed2: "una Radeon 5700 XT."
typed3: "una nuovo distro Linux."
typed4: "una migliore versione di me."
---

Vispa rende bene l'idea: non è rumorosa ma è frequente anche dopo una messa a punto pignola nel BIOS. Io ho sempre girato con impostazione Quiet ma l'ho anche sempre sentita partire, ogni tot minuti, come per dirmi "guarda che qua c'è un PC vero, mica un giocattolo". E d'altronde su questo non avrei nulla da dire. Intel NUC10 Performance si chiama così non solo per marketing, ma perché arriva a montare configurazioni che passano da quelle di un PC per l'ufficio o per il multimedia avanzato casalingo, alla postazione per fare montaggio video, fotoritocco impegnato, virtualizzazione eccetera eccetera.

SCHEDA TECNICA

ProcessoreIntel Core-U i3, i5, i7 fino a 6-core / 10th Gen Scheda grafica Intel UHD 620 Memoria2x DDR4-2666 1.2V (max. 64 GB) ArchiviazioneSSD M.2 PCI-E x4 22x42/80 / SATA 2.5 pollici ReteWi-Fi 6 ax / Bluetooth 5 / Ethernet 1000 ConnettivitàThunderbolt 3 / 3x USB-A 3.1 Gen2 / USB-C 3.1 Gen2 / Jack audio 3.5 mm / HDMI 2.0 / SDXC Alimentatore120 watt (Core i7) o 60 watt 19V 6.32A Telaio117 x 112 x 38 mm o 51 mm / 700 grammi AltroSensore IR / 4 microfoni far-field / VESA 100

Scheda tecnica Intel NUC 10 Performance

Esistono due varianti ufficiali, da 38 o 51 mm. La seconda permette di installare un disco da 2.5 pollici SATA.

Hardware

          L'edizione 2020 usa i processori Intel Comet Lake-U (10° generazione, variante a 14 nm) fino al Core i7-10710U 6-core e ai suoi 4.7 GHz di picco su un TDP che parte da 25 watt e può spingersi fino al doppio cambiando il PL1 da BIOS. E affianca a questo una Thunderbolt 3 a 40 GB/s per l'uscita video 4K, per il trasferimento dati, per HUB e dock, per collegare una eGPU e, a quel punto, spendere sì una fortuna ma entrare nel mercato dei Mac Mini, per dire. Quindi non più PC per l'ufficio o per casa ma qualcosa che, volendo, va più su - so di averlo già scritto ma qui chiude bene il discorso. Guardate le specifiche. Dovete far caso a: la Wi-Fi 6 ax (chip Intel), la SSD NVMe 4x, i 64 GB di RAM in Dual Channel, l'alimentatore da 120 watt della configurazione più potente, il sensore IR per comandarlo con un telecomando, i quattro microfoni frontali, la SDXC con supporto UFS-II. È un PC dal senso diverso rispetto a prima.

Purtroppo Intel non lo regala: la SKU NUC10i7FNH con 16 GB di RAM, SSD NVMe da 256 GB e HDD da 1 TB su Windows 10 Home costa circa 1000 euro, e servono 600 euro per la stessa base hardware priva dei componenti. Quando il formato non è una discriminante, sono tanti soldi. Meglio abbassare le pretese, rinunciare ai 6 core per scendere ai 4 del Core i5-10210U e spendere sui 300 euro (barebone) nei negozi online europei, oppure raddoppiare la spesa per un NUC10 già configurato e pronto. Sono prezzi indicativi perché mentre scrivo non vedo tanta disponibilità in Italia, quindi controllate voi. Tutte le informazioni ufficiali sulle varianti sono in questa pagina del sito Intel.

Comprare un modello vuoto e poi aggiornare RAM, disco e, volendo, migliorare il telaio con modifiche più o meno creative, più o meno costose, è una buona idea perché smontare NUC10 è rimasta una cosa semplice. Questo è uno dei vantaggi dell'usare lo stesso telaio da anni. Nel video parlo dell'installazione di un dissipatore Arctic Alpine AM4 Passive sopra la scheda madre di un NUC smontato, forato in prossimità dei fori che la tengono al telaio e ancorato esattamente lì. È una cosa che avrei voluto provare e che mi son promesso di mettere in piedi al prossimo test. Trovate un paio di spunti su r/intelnuc.

Intel NUC 10 Performance: aggiornamento hardware.

FIG. 5. Gli interni di Intel NUC10 Performance. Ventola e dissipazione sono sul lato opposto della scheda.

Il BIOS di questo modello permette di cambiare faccia alla CPU; resta una spreco depotenziarla visto quel che costa, ma è solo un esercizio di stile per dimostrare la sua flessibilità. Ne parleremo tra un attimo.

Prestazioni

          Il processore Core i7-10710U, 1.1 - 4.7 GHz, 12 MB di cache e 12 thread, così come i fratelli meno pregiati, arriva con una impostazione PL1 regolata a 30 watt. Power Limit 1 è il limite massimo, da regolare come TDP, che può gestire l'impianto di smaltimento e di ventilazione. PL1 è long-term state quindi non può attivare la frequenza Turbo della CPU. Da BIOS si può cambiare questo numero fino a 45 watt, intervenendo anche sulla durata della spinta. C'è un filmato, poco sotto, con dentro tutte le opzioni.

Per mettere alla prova queste possibilità, e per capire quanto modificavano la temperatura, la silenziosità e le prestazioni reali, ho fatto stress test di venti minuti con Prime95, ho fatto girare benchmarks prima e dopo, ho fatto rendering con Adobe Premiere Pro CC, ed ho memorizzato tutto per un'analisi successiva. Ecco da dove arrivano la tabella e i grafici a seguire.

	Standard
PL1 30 watt	Top
PL1 45 watt
Cinebench R20	CPU: 2289 pts
CPU Single: 472 pts	CPU: 2779 pts
CPU Single: 486 pts
PCMark 10	4388	4423
3DMark Time Spy	512
CPU: 4766	512
CPU: 5484
Temperatura CPU
Prime95 15 min	Max: 84°C	Max: 98°C
Temperatura Retro
Prime95 15 min	47°C	51°C
Consumo CPU
Prime95 15 min	Max: 49 watt	Max: 54 watt
Consumo su presa	Max: 61 watt	Max: 88 watt

TAB. 1. Prestazioni a confronto.

Test eseguiti in modalità energetica "Prestazioni" e con l'ultima versione di Windows 10 disponibile.

Le variazioni da commentare non sono quelle del processore, tanto migliori nella modalità 45 watt come è normale che sia soprattutto in Multi Core (Cinebench R20 dà un impressionante +500 punti), ma quelle (assenti) della GPU, del consumo su presa (+27 watt, tantissimo, ed ecco a cosa serve l'alimentatore da 120 watt), e della temperatura su CPU (+14°C, non poco ma tollerabile perché siamo in una situazione estrema). Avrei dovuto inserire anche i dati della ventolina ma non sono riuscito a monitorare questo parametro e non ho insistito perché si è trattato di sentirla più frequente, non più veloce. E va bene così perché quando la CPU si avvicina ai 100°C è bene che il sistema, là sotto, si adatti e si sbrighi.

Dirò altro ma prima guardate i grafici. Fate caso, nella seconda immagine, al consumo in standby di NUC10; è basso, vicino ai 6 watt, per la maggior parte dovuti al sensore IR frontale che ve lo fa accendere, volendo, con un telecomando programmabile.
Uso pratico

          Quindi conviene o no portarlo a 45 watt? Dipende dal vostro fine. Se non è settoriale, se non fate solo montaggio video, solo rendering CAD o calcoli con software che non conosco, io resterei nella modalità di fabbrica così da avere un NUC10 più silenzioso e più freddo. Nelle configurazioni con Core i5 Quad Core e Core i7 Hexa Core, le prestazioni bastano e avanzano alla produttività casalinga e aziendale, e intendo quella impegnata, non cose da Chromebook. Per dire, senza modificare nulla, ho fatto girare due macchine virtuali Oracle VMWare con ArchLabs e OpenSUSE mentre sotto avevo una sessione di Adobe Audition, Firefox con dei tab, e altre cosette sparse. In questi contesti non dà segni di affanno. Considerando che si può ottimizzare tutto, dal software di virtualizzazione alla velocità del disco NVMe (la Kingston RBUSNS815 della mia configurazione non è affatto la più veloce - sotto trovate i numeri), posso scrivere senza giri di parole che NUC10 va benone.

Ho parlato di macchine virtuali ma è lo stesso per il multimedia. Devo ricordare che queste CPU supportano la decofifica VP9 fino a 4K 10-bit e quindi riproducono video su browser con il minimo impatto sul processore? Che potete attaccare tre monitor? Non credo. Da anni, gli Intel NUC sono media center avanzati e sono buoni server Plex. Posso anzi considerare sprecate queste ultime versioni per contesti del genere; meglio prendere un NUC7 o un NUC8, anche con CPU Pentium o Celeron, e risparmiare.

Intel NUC 10 Performance: VMWare su Windows 10.

FIG. 8. ArchLabs Linux e OpenSUSE in emulazione VMWare su Windows 10.
Intel NUC 10 Performance: ArchLabs Linux con Openbox nativo.

FIG. 9. ArchLabs Linux con Openbox e lo stress test S-Tui.

SUPPORTO LINUX

Su Linux nativo non ho avuto noie; l'hardware viene riconosciuto, il BIOS asseconda ogni necessità di avvio (anzi, una cosa bizzosa mi è capitata: la porta USB frontale è schizzinosa; non vede certe pendrive in fase di boot, pennette che poi vengono lette e avviate senza problemi dalle USB posteriori. Non sono riuscito a capire il come e il perché e questo lo ha reso tanto più noioso.), e Clear Linux vola. Ma su questo, sulla distro Intel, torneremo.

ALTRI NUMERI

iPerf3 Wi-Fi acSend: 437 Mbits/sec
Receiver: 437 Mbits/sec iPerf3 EthernetSend: 942 Mbits/sec
Receiver: 942 Mbits/sec CrystalDisk Mark SSDRead: 1588 MB/sec
Write: 898 MB/sec CrystalDisk Mark HDDRead: 134 MB/sec
Write: 130 MB/sec

Conclusioni

          Abbiamo visto che le prestazioni sostenute non sono un problema. Abbiamo visto che il sistema termico regge ed è regolabile. Che il supporto operativo non manca. Che si può aggiornare e adattare al proprio ambiente, sia nella forma sia nella sostanza. Tutto sta nel capire se vi occorre o meno un NUC. Quando il formato è una discriminante, non vedo di meglio sul mercato. Niente è così moderno e niente arriva, volendo, già pronto per l'ufficio, per il negozio, per la postazione casalinga che deve fare anche del lavoro serio, non solo di supporto allo smartphone. Ma quando vi serve un PC per casa o per lo studio, e quando non vi importa di vedere un telaio grande sotto la scrivania (che poi ne esistono anche di carini, non bisogna per forza identificare il fisso come il rettangolo beige di 20 anni fa), trovate di meglio spendendo meno. È una costante dell'elettronica di consumo; uno dei pochi.

NUC di 10° generazione è un portento perché questi processori a "14nm++" sono tirati al massimo (dico davvero: 6 core, 4.7 GHz, picchi di 60 watt su CPU Ultra Low Voltage), ma non è economico. Nella spesa va inserito anche il tempo risparmiato a ricercare, assemblare, installare, provare e domandarsi il senso della vita, ma in certe fasi questa può essere una vocazione (o, almeno, un divertimento istruttivo). In sintesi: non lo so. Il giudizio sul prodotto è positivo eccetera eccetera ma quel che volete farne, poi, spetta a voi.
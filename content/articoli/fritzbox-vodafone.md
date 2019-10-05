---
title: "Installare FRITZ!Box su linea Vodafone | VOIP e ADSL"
title_interno: "FRITZ!Box e Vodafone: una guida semplice"
articoli: current-menu-item
slug: "avm-fritzbox-vodafone-voip-adsl"
immagine_testa: appunti-riccardo-palombo.png
description: "L'ultimo capitolo di Lezioni di Letteratura di Nabokov è dedicato all'arte della letteratura e al senso comune."
categoria: "2"
date: 2019-10-05T14:13:28+02:00
---

![Installare Fritz!Box 7590 su linea Vodafone](../../img/articoli/fritzbox-vodafone.jpg "Il FRITZ!Box 7590 di AVM")

Ieri ho sostituito la Vodafone Station Revolution con un **FRITZ!Box 7590** e un **FRITZ!Repeater 1750**. Ho preso il primo perché volevo più controllo sui servizi della mia rete domestica (server di stampa via USB, NAS, telefonia VOIP; soprattutto programmazione degli orari di utilizzo, QoS per i gadget smart che ho, filtri e contatori di vario genere anche sulla suoneria), e il secondo per arrivare meglio nelle stanze più lontane di casa con l'extra della porta LAN da collegare al decoder MySKY (o alla Apple TV, appena scadrà l'abbonamento). In questo momento, mentre scrivo, ho diciotto dispositivi attivi, più altri sei (due ebook reader, la Nintendo Switch, l'iMac G4 con AirPort, vecchi laptop, la TV Smart) che accendo ogni tanto.

Preciso di non essere uno fissato con queste cose, almeno a casa; nasco come sistemista di rete quindi nel mio setup ideale ci sarebbero sempre router, switch, content filtering, proxy, server email, regole di nat e un **vecchio thin client** con Endian Firewall, o PFSense, o FreeNas, o M0n0Wall oppure uno XenServer (anche se adesso non esiste più) con sopra il mondo eccetera eccetera. Ma non abito più da solo e non mi va di incastrarmi ancora una volta con queste cose. Magari in vecchiaia, quando non dovrò più essere lucido per contratto (verbale, chiaro).

Fatto sta che ieri ho staccato la **Vodafone Station** e ho montato i nuovi FRITZ!. Ho un abbonamento VDSL2 "Fino a 100 Mbps" con servizio voce associato; di solito non supera i 30 Mbps in download e i 7 Mbps in upload ma proprio per questo sono riuscito ad avere un abbonamento scontato quindi lo tengo così. Per configurare la rete Internet ed il VOIP sul FRITZ!Box 7590 ho seguito i passaggi a seguire.

#### Per Internet

<figure>
                    <a
                        href="https://res.cloudinary.com/rim3/image/upload/q_75,w_1000/v1570276258/Articoli/vodafone-fritzbox-configurazione.png"
                        data-alt="Configurazione FritzBox linea ADSL Vodafone" target="_blank" data-title="Configurazione FritzBox linea ADSL Vodafone." title="Configurazione FritzBox su linea ADSL Vodafone">
                        <img
                            data-src="https://res.cloudinary.com/rim3/image/upload/w_auto,c_scale,q_75,f_auto/v1570276258/Articoli/vodafone-fritzbox-configurazione.png" alt="Configurazione FritzBox linea ADSL Vodafone" class="cld-responsive lazyload">
                    </a>
                    <figcaption>
                        <span class="description-title" style="padding-left:0">
                            <span>FIG. 1.</span> Configurazione FritzBox per linea ADSL Vodafone.
                        </span>
                    </figcaption>
</figure>

1. Telefonare al 190 e arrivare al supporto tecnico (per guasti o configurazioni). Chiedere **username, password e server proxy** della propria connessione VOIP. È gente competente e sa di cosa state parlando. Vi manderanno un SMS con questi parametri al numero associato al vostro contratto. Questa è la prima operazione da fare perché avete ancora la Vodafone Station collegata e, quindi, anche la chiamata gratuita; fatta dopo, dallo smartphone, vi costerebbe qualcosa.
2. Installare il FRITZ!Box al posto della Vodafone Station. Probabilmente vi servirà solo uno dei cavi LAN presenti nella confezione: quello da RJ-11 a RJ-45, ovvero dalla porta "telefonica" al muro all'ingresso DSL del modem AVM.
3. Collegare un PC ad una delle LAN del FRITZ!Box (si fa anche in Wi-Fi, ovvio) e puntare il browser su fritz.box. La password di accesso è stampata sul retro della scatola e nella Guida Rapida interna.
4. Seguire la configurazione guidata selezionando "Vodafone" o "Altro Provider Internet" se Vodafone non è presente (dipende dal firmware installato; se è vecchio, non c'è) e inserite _vodafoneadsl_ nei campi "Nome Utente" e "Password". Il resto va bene com'è, compreso l'incapsulamento PPPoE. Confermare la configurazione.
5. Al termine, Internet non funzionerà. Entrare nella sezione "Internet" > "Dati di accesso" > "Impostazioni della connessione" e inserire "1036" nel campo "Utilizzare VLAN per l'accesso a Internet". Applicare.

Adesso la linea Internet dovrebbe essere attiva. Potete cliccare su "Sistema" > "Aggiornamento" ed installare l'ultimo firmware. Per aggiornamenti sui parametri citati sopra fate riferimento alla sezione dedicata sul sito Vodafone (link a fine pagina).

#### Per la voce

<figure>
                    <a
                        href="https://res.cloudinary.com/rim3/image/upload/q_75,w_1000/v1570276258/Articoli/vodafone-fritzbox-configurazione-fonia.png" target="_blank" 
                        data-alt="Configurazione FritzBox linea voce Vodafone" data-title="Configurazione FritzBox linea voce Vodafone." title="Configurazione FritzBox su linea voce Vodafone">
                        <img
                            data-src="https://res.cloudinary.com/rim3/image/upload/w_auto,c_scale,q_75,f_auto/v1570276258/Articoli/vodafone-fritzbox-configurazione-fonia.png" alt="Configurazione FritzBox linea voce Vodafone" class="cld-responsive lazyload">
                    </a>
                    <figcaption>
                        <span class="description-title" style="padding-left:0">
                            <span>FIG. 2.</span> Configurazione FritzBox per linea voce Vodafone.
                        </span>
                    </figcaption>
</figure>

1. Attivare la **modalità "Avanzata"** dal menù accessibile dall'icona dei tre puntini verticali in alto a destra, accanto alla scritta "MyFritz!".
2. Nella sezione "Telefonia" c'è "Propri numeri". Cliccare su "Registrare un numero di telefono", scegliere "Altro provider" e inserire in "Numero per la registrazione" il vostro numero preceduto da +39, e in "Numero interno del FRITZ!Box" il vostro numero senza +39 (esempio: 0611223344).
3. Inserire nella sezione "Dati di accesso" nome utente (con l'aggiunta di @ims.vodafone.it; ad esempio: +3906112233@ims.vodafone.it), password e server proxy forniti dal 190 al punto 1 dell'elenco sopra. Registrar è "ims.vodafone.it". 
4. Attivare la voce "Registrazione sempre tramite una connessione Internet" e applicare la configurazione.

Il pallino verde accanto a "Stato" dovrebbe confermare l'attivazione della fonia. Provate a fare una chiamata verso casa. Se non funziona, entrate nella configurazione del numero (icona matita) e assicuratevi che i campi "Utilizzare numero per la registrazione", "Trasmettere le chiamate di emergenza senza prefissi" e "Trasmettere i numeri a pagamento senza prefissi" siano attivi. Il resto può restare com'è. 

![Fritz!Repeater 1750E su linea Vodafone](../../img/articoli/fritzrepeater-vodafone.jpg "Il FRITZ!Repeater 1750E di AVM")

La sezione "Telefonia" di FRITZ!Box ha parecchie opzioni e tanti servizi che possono essere utili oltre che personalizzati nel dettaglio; lo stesso vale per "Internet" e "Rete domestica". Regolate il tutto secondo le vostre necessità.

Io ho collegato una stampante HP multi-funzione alla **porta USB del FRITZ!Box** per usarla come stampante di rete su Windows, macOS e Linux. Per **Linux**, nel mio caso, ho scelto "AppSocket/HP JetDirect" nella UI di ElementaryOS (ma vale per qualsiasi distro) con IP del FRITZ!Box nel campo "Host" (o, se non avete cambiato DNS, fritz.box) e con 9100 in quello "Porta". Poi ho scelto il driver dalla lista e ciò è bastato a farla funzionare senza problemi. Così come mi è bastato premere il tasto WPS sul router e attaccare alla presa di corrente il **FRITZ!Repeater 1750** per farlo riconoscere e configurare. È andato tutto liscio, attivazione **Mesh** compresa.

#### Link utili

- I parametri aggiornati su <a href="https://www.vodafone.it/portal/Privati/Supporto/Assistenza-dispositivi/Installare-e-configurare/Modem-Alternativo" title="Vodafone Modem Libero" rel="nofollow" target="_blank">voda.it/modemlibero</a>.
- L'assistenza AVM per le <a href="https://it.avm.de/assistenza/libera-scelta-del-router/vodafone/" title="AVM e Vodafone" rel="nofollow" target="_blank">configurazioni Vodafone</a>.
- Le altre discussioni nella <a href="https://community.vodafone.it/" title="Vodafone Community" rel="nofollow" target="_blank">community ufficiale Vodafone</a>.

##### Le novità AVM da IFA 2019

<iframe width="100%" height="400" src="https://www.youtube.com/embed/bp1r09kZ3sg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
---
title_interno: "Pixelbook: Dual Boot Windows e Linux"
title: "Pixelbook: Windows 10 + Linux in Dual Boot"
date: 2020-02-12T11:40:40+02:00
articoli: current-menu-item
slug: "pixelbook-windows-linux"
immagine_testa: appunti-riccardo-palombo.png
description: "Come installare Windows 10 e Linux in Dual Boot su Google Pixelbook. La guida completa di dotfiles, video e schermate."
categoria: "3"
---

<div class="videoWrapper embed-responsive embed-responsive-4by3">
    <iframe src="https://www.youtube.com/embed/nXqUSpD-t3Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Seguono alcuni appunti sull'installazione di Windows 10 e Linux (Ubuntu, perché il kernel già patchato è quello di GalliumOS, una distro specifica per Chromebook basata su Ubuntu) su Google Pixelbook. Il portatile di Google vive una buona fase perché costa poco (il prezzo consigliato è <a href="http://rover.ebay.com/rover/1/724-53478-19255-0/1?ff3=4&pub=5574905075&toolid=10001&campid=5338615928&customid=&mpre=https%3A%2F%2Fwww.ebay.it%2Fsch%2Fi.html%3F_from%3DR40%26_trksid%3Dm570.l1313%26_nkw%3Dpixelbook%26_sacat%3D0" target="_blank" rel="nofollow noopener" title="Pixelbook su ebay">300-450 euro sui mercatini</a>) in rapporto ad una costruzione da top di gamma abbinata ad un hardware di qualità: lo schermo supera i 450 nits, c'è il digitalizzatore per Windows Ink, ha una tastiera stabile e retroilluminata, un modulo NVMe Samsung, un design fanless. Su Chrome OS, vola. L'unico vincolo è la batteria da 41 Wh per un'autonomia compresa tra le 4 e le 6 ore; ma di contro c'è la ricarica rapida via USB-C e nessun consumo in standby. Lo ripeto: lui, su Chrome OS, vola. Sono un utente Chrome OS di prima era e vi consiglio di rivalutarlo se lo avete abbandonato anni fa. Ma anche con altri sistemi operativi non se la cava male.

Suggerisco di guardare il video per farsi un'idea del risultato finale prima di proseguire con la lettura. Ricordo che i file .dots del setup che vedrete, così come quelli della [workstation Ryzen](/recensioni/ryzen-linux-pc-setup/ "Come lavoro, parte 2") con Arch + Gnome-i3, sono disponibili in esclusiva su Patreon. E grazie ancora per il vostro supporto!

<a
                        href="https://www.patreon.com/riccardopalombo"
                        target="_blank" rel="nofollow noopener" title="Vai alla mia pagina Patreon">
<figure><img
                            src="/img/patreon-riccardopalombo.png" alt="Become a Patreon" class="lazyload">
                            </figure>
                            </a>  

#### 1. Cambiare firmware

Pixelbook può far girare sia Windows 10 sia Linux in maniera nativa ma bisogna installare un firmware UEFI al posto di quello Google. Ci sono due modi per togliere la protezione e farlo: smontare il portatile e staccare il connettore della batteria, oppure usare un cavo di debug apposito e dare una serie di comandi. Io ho ordinato il cavetto dagli USA (si chiama <a href="https://www.sparkfun.com/products/14746" target="_blank" rel="nofollow noopener" title="SuzyQable">SuzyQable</a>; la sua disponibilità va e viene; ogni tanto si trova anche su ebay) perché aprire il fondo del telaio rovina la protezione in gomma e non vale di certo i 20 euro risparmiati.

<figure>
                        <img
                            src="/img/articoli/chromeos-debug.jpg" alt="Cavo SuzyQable">
                    <figcaption>
                        <span class="description-title" style="padding-left:0">
                            <span>FIG. 1.</span> Il cavo SuzyQable prodotto e venduto su Sparkfun.
                        </span>
                    </figcaption>
</figure>

Tutta la procedura è descritta passo passo nella prima parte della guida pubblicata sul repository Github <a href="https://github.com/flantel/pixelbook-linux" target="_blank" rel="nofollow noopener" title="Pixelbook Linux repository">flantel/pixelbook-linux</a>. Non è il repo originale, è un fork di quello che trovate con una ricerca su Google, ma è il più aggiornato. La guida è semplice e lineare, va solo (e letta) punto per punto. Attenzione - è scritto nella guida ma lo ripeto anche io: si può installare il firmware su un Pixelbook ancora bloccato (senza usare i metodi visti sopra) ma non sarà possibile avere Windows 10 perchè resterà un boot Legacy (con diverse noie in fase di avvio, schermate, suoni e il rischio di resettare tutto appena va in standby - fidatevi: non è cosa).

Il firmware di <a href="https://mrchromebox.tech/" target="_blank" rel="nofollow noopener" title="MrChromebox">MrChromebox</a> (un enorme grazie da parte mia per tutto il lavoro di questi anni) non serve solo a far installare nuovi sistemi operativi, ma anche a cambiare dei parametri che fanno funzionare meglio certe parti. Durante la procedura, a chi vuole installare Windows 10, viene proposto il downgrade dei driver del touchpad così da renderlo più fluido. Inoltre tutta la gestione energetica relativa alla retroilluminazione dello schermo, al suo controllo e all'impianto audio, viene abilitata proprio durante questo processo. Ecco perché possono arrivare degli aggiornamenti risolutivi e migliorativi. Ed ecco perché di tanto in tanto conviene controllare le nuove uscite.

#### 2. Installare Windows 10

<figure>
                    <a
                        href="/img/articoli/windows-10-pixelbook.jpg" target="_blank" title="Windows 10 Pixelbook.">
                        <img
                            src="/img/articoli/windows-10-pixelbook.jpg" alt="Windows 10 Pixelbook"></a>
                    <figcaption>
                        <span class="description-title" style="padding-left:0">
                            <span>FIG. 2.</span> Tutto l'hardware viene riconosciuto da Windows 10.
                        </span>
                    </figcaption>
</figure>

Pixelbook con il nuovo firmware si avvicina a tutti gli effetti ad un laptop comune, e quindi valgono le solite procedure per l'installazione dei sistemi operativi. Ma non è un laptop comune: alcuni componenti hardware richiedono driver particolari. Su Windows 10, per dire, bisogna forzare un po' di volte la ricerca dei driver da Windows Update. La scheda audio potrebbe non essere riconosciuta, ed in quel caso vi consiglio di cancellarla dal Gestore Dispositivi di Windows, fare un refresh e riprovare a forzare un aggiornamento driver. Io ho dovuto cancellarla due o tre volte prima di vederla riconosciuta da Windows Update.

Mentre scrivo, il firmware di MrChrombox non permette di regolare la luminosità dello schermo dai tasti funzione della tastiera, ma su Reddit vedo dei software per risolvere. Vi consiglio di seguire e fare ricerche nei subreddit <a href="https://www.reddit.com/r/chrultrabook/" target="_blank" rel="nofollow noopener" title="Pixelbook su Reddit">r/chrultrabook</a> e <a href="https://www.reddit.com/r/pixelbook/" target="_blank" rel="nofollow noopener" title="Pixelbook su Reddit">r/pixelbook</a>.

#### 3. Installare Linux

<figure>
                    <a
                        href="/img/articoli/pixelbook.png" target="_blank" title="Gnome-i3 con Polybar e Compton su Pixelbook.">
                        <img
                            src="/img/articoli/pixelbook.png" alt="Gnome-i3 con Polybar e Compton su Pixelbook">
                    </a>
                    <figcaption>
                        <span class="description-title" style="padding-left:0">
                            <span>FIG. 3.</span> Ti piace? Replicalo! Trovi i dots su patreon.com/riccardopalombo.
                        </span>
                    </figcaption>
</figure>

Qui basta riprendere la guida su GitHub usata per il firmware. Quindi installare Ubuntu (se la 19.10 vi dà problemi con la rotazione dello schermo, usate le vecchie ISO e poi aggiornate) e poi scaricare ed eseguire lo script di ottimizzazione. Qui serve un po' d'occhio per capire se qualcosa è andato storto, ma basta leggere la guida per non avere sorprese. Nel repo di flantel c'è una sezione più tecnica per chi vuole capire cosa fa lo script Ansible e, magari, replicare quelle procedure su altre distro. Il problema più noioso è quello del kernel. Online trovate guide sull'installazione di Arch Linux su kernel ricompilati con le patch necessarie alla retroilluminazione dello schermo (il problema principale è quello) ma sono sicuro che gli utenti interessati a questo sanno come e dove muoversi. Per configurare i tasti funzione della tastiera di Chrome OS potete seguire queste <a href="https://www.reddit.com/r/chrultrabook/" target="_blank" rel="nofollow noopener" title="Pixelbook controlli tastiera">r/chrultrabook</a> e <a href="https://github.com/yusefnapora/pixelbook-linux/issues/30" target="_blank" rel="nofollow noopener" title="Pixelbook su Reddit">direttive per udev</a>. 

In questi mesi di test ho usato <mark>Ubuntu 19.10 con Gnome-i3, Polybar, Rofi e Compton</mark>. È il sistema che vedete in video. Tutto gira come previsto ma si ha sempre la sensazione, e qui mi rivolgo a chi tra voi ha passato anni su queste cose, di un sistema incerto; sarà la complessità di Ubuntu rapportata alla pulizia di Arch o Void, ma ho sempre l'idea di non sapere cosa sta succedendo - e questo va contro ogni ideologia linuxiana che si rispetti. Quando i suoi driver verranno inclusi nel kernel Linux principale allora non ci sarà più bisogno di patch. Si potrà passare al ramo 5.5 e cambiare distro senza sacrificare il nostro tempo. Potrebbe succedere presto, ma è difficile dire di più.

In sintesi Pixelbook è stato un acquisto sbagliato per i miei fini (fare montaggio video minimale su Windows, ed avere Linux per tutto il resto) perché un ThinkPad X1 Carbon, anche un modello di cinque anni fa come [il mio](/podcast/il-mordente-1/ "Intro, Firenze e il mio ThinkPad X1"), dà più soddisfazioni ed è una scuola migliore. Resta consigliato a chi vuole tenere Chrome OS (senza Windows 10, si può fare un Dual Boot Chrome OS + Linux), soprattutto se comprato ad un prezzo come quello suggerito ad inizio articolo.


<aside class="yt-iscriviti">
                    <span class="atail-multitext-text">TI È STATO UTILE? SUPPORTAMI.</span>
<figure>
                    <a
                        href="/supporter/"                        target="_blank" title="Diventa supporter di Riccardo Palombo">
                        <img
                            src="/img/articoli/patreon-riccardo-palombo.jpg" alt="Sostieni Riccardo" class="lazyload">
                    </a>
</figure>
                </aside>
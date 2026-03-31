// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="ux-design-by-zabellemotte.html"><strong aria-hidden="true">1.</strong> UX Design by zabellemotte</a></li><li class="chapter-item expanded "><a href="introduction.html"><strong aria-hidden="true">2.</strong> Introduction</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="decouvrir-les-concepts-ux.html"><strong aria-hidden="true">2.1.</strong> Découvir les concepts liés à l&#39;UX</a></li><li class="chapter-item expanded "><a href="decouvrir-les-modeles-ux.html"><strong aria-hidden="true">2.2.</strong> Découvrir les modèles pour analyser l&#39;UX</a></li><li class="chapter-item expanded "><a href="cerner-design-et-innovation.html"><strong aria-hidden="true">2.3.</strong> Cerner les concepts de design et d&#39;innovation</a></li></ol></li><li class="chapter-item expanded "><a href="1-planification.html"><strong aria-hidden="true">3.</strong> 1. Planification</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="identifier-les-acteurs-avec-la-matrice-pouvoir-interet.html"><strong aria-hidden="true">3.1.</strong> Identifier les parties prenantes avec la matrice pouvoir et intérêt</a></li><li class="chapter-item expanded "><a href="cartographier-les-acteurs-avec-la-matrice-rasci.html"><strong aria-hidden="true">3.2.</strong> Cartographier les parties prenantes avec la matrice RACI ou RASCI</a></li><li class="chapter-item expanded "><a href="etudier-les-risques-avec-l-analyse-swot.html"><strong aria-hidden="true">3.3.</strong> Etudier les risques avec l&#39;analyse SWOT</a></li><li class="chapter-item expanded "><a href="prioriser-les-risques-avec-la-matrice-des-probabilites-et-impacts.html"><strong aria-hidden="true">3.4.</strong> Prioriser les risques avec la matrice des probabilités et impacts</a></li><li class="chapter-item expanded "><a href="questionner-les-enjeux-ethiques-des-le-depart.html"><strong aria-hidden="true">3.5.</strong> Questionner les enjeux éthiques dès le départ</a></li><li class="chapter-item expanded "><a href="rediger-une-fiche-projet-pour-cadrer-la-demande.html"><strong aria-hidden="true">3.6.</strong> Rédiger une fiche projet pour cadrer la demande</a></li><li class="chapter-item expanded "><a href="cartographier-les-methodologies-ux-pour-faire-le-bon-choix.html"><strong aria-hidden="true">3.7.</strong> Cartographier les méthodologies UX pour faire le bon choix</a></li></ol></li><li class="chapter-item expanded "><a href="2-exploration.html"><strong aria-hidden="true">4.</strong> 2. Exploration</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="faire-une-revue-de-la-litterature-scientifique-sur-une-question-ux.html"><strong aria-hidden="true">4.1.</strong> Faire une revue de la littérature scientifique sur une question UX</a></li><li class="chapter-item expanded "><a href="faire-une-analyse-concurrentielle-sur-une-question-ux.html"><strong aria-hidden="true">4.2.</strong> Faire une analyse concurrentielle sur une question UX</a></li><li class="chapter-item expanded "><a href="accompagner-le-changement-avec-le-modele-transitionnel-de-bridges.html"><strong aria-hidden="true">4.3.</strong> Accompagner le changement avec le modèle transitionnel de Bridges</a></li><li class="chapter-item expanded "><a href="comprendre-la-resistance-au-changement-avec-weick.html"><strong aria-hidden="true">4.4.</strong> Comprendre la résistance au changement avec Weick</a></li><li class="chapter-item expanded "><a href="mener-une-observation-passive-avec-la-grille-d-observation-de-spradley.html"><strong aria-hidden="true">4.5.</strong> Mener une observation passive avec la grille d&#39;observation de Spradley</a></li><li class="chapter-item expanded "><a href="pratiquer-l-empathie-immersive-pour-vivre-l-experience-utilisateur.html"><strong aria-hidden="true">4.6.</strong> Pratiquer l&#39;empathie immersive pour vivre l&#39;expérience de l&#39;utilisateur</a></li><li class="chapter-item expanded "><a href="mener-des-interviews-pour-explorer-en-profondeur-les-pratiques.html"><strong aria-hidden="true">4.7.</strong> Mener des interviews pour explorer en profondeur les pratiques</a></li><li class="chapter-item expanded "><a href="exploiter-les-analytics-pour-etudier-les-usages-et-leur-evolution.html"><strong aria-hidden="true">4.8.</strong> Exploiter les analytics pour étudier les usages et leur évolution</a></li><li class="chapter-item expanded "><a href="realiser-une-enquete-pour-consolider-ses-hypotheses.html"><strong aria-hidden="true">4.9.</strong> Réaliser une enquête pour consolider ses hypothèses</a></li></ol></li><li class="chapter-item expanded "><a href="3-ideation.html"><strong aria-hidden="true">5.</strong> 3. Idéation</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="compiler-les-donnees-sous-forme-d-insights-utilisateurs-avec-les-modeles-mentaux.html"><strong aria-hidden="true">5.1.</strong> Compiler les données sous forme d&#39;insights utilisateurs avec les modèles mentaux</a></li><li class="chapter-item expanded "><a href="synthetiser-l-experience-utilisateur-avec-les-personas-et-les-cartes-d-experience-chronologiques.html"><strong aria-hidden="true">5.2.</strong> Synthétiser l&#39;expérience utilisateur avec les personas et les cartes d&#39;expérience chronologiques</a></li><li class="chapter-item expanded "><a href="generer-des-idees-avec-le-brainstorming.html"><strong aria-hidden="true">5.3.</strong> Générer des idées avec le brainstorming</a></li><li class="chapter-item expanded "><a href="generer-des-idees-avec-le-design-studio.html"><strong aria-hidden="true">5.4.</strong> Générer des idées avec le design studio</a></li><li class="chapter-item expanded "><a href="analyser-les-besoins-avec-la-methode-errc.html"><strong aria-hidden="true">5.5.</strong> Analyser les besoins avec la méthode ERRC</a></li><li class="chapter-item expanded "><a href="prioriser-les-besoins-avec-la-methode-moscow.html"><strong aria-hidden="true">5.6.</strong> Prioriser les besoins avec la méthode MoSCoW</a></li><li class="chapter-item expanded "><a href="prioriser-les-preferences-avec-le-vote-pondere.html"><strong aria-hidden="true">5.7.</strong> Prioriser les préférences avec le vote pondéré</a></li></ol></li><li class="chapter-item expanded "><a href="4-generation.html"><strong aria-hidden="true">6.</strong> 4. Génération</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="structurer-l-information-avec-le-tri-de-cartes.html"><strong aria-hidden="true">6.1.</strong> Structurer l&#39;information avec le tri de cartes</a></li><li class="chapter-item expanded "><a href="s-inspirer-des-principes-de-design-pour-la-conception.html"><strong aria-hidden="true">6.2.</strong> S&#39;inspirer des principes de design pour la conception</a></li><li class="chapter-item expanded "><a href="construire-un-prototype-pour-eprouver-la-conception.html"><strong aria-hidden="true">6.3.</strong> Construire un prototype pour éprouver la conception</a></li><li class="chapter-item expanded "><a href="planifier-l-implementation-avec-le-diagramme-de-gantt-et-la-methode-du-chemin-critique.html"><strong aria-hidden="true">6.4.</strong> Planifier l&#39;implémentation avec le diagramme de Gantt et la méthode du chemin critique</a></li><li class="chapter-item expanded "><a href="prioriser-les-actions-avec-la-matrice-urgent-et-important.html"><strong aria-hidden="true">6.5.</strong> Prioriser les actions avec la matrice urgent et important</a></li></ol></li><li class="chapter-item expanded "><a href="5-evaluation.html"><strong aria-hidden="true">7.</strong> 5. Evaluation</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="evaluer-l-ux-a-l-aide-de-grilles-d-evaluation-expertes.html"><strong aria-hidden="true">7.1.</strong> Evaluer l&#39;UX à l&#39;aide de grilles d&#39;évaluation expertes</a></li></ol></li><li class="chapter-item expanded "><a href="references.html"><strong aria-hidden="true">8.</strong> Références</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);

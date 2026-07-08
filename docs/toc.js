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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="ux-design-by-zabellemotte.html">UX Design by zabellemotte</a></li><li class="chapter-item expanded "><a href="introduction.html">Introduction</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="decouvrir-les-concepts-ux.html">Découvir les concepts liés à l&#39;UX</a></li><li class="chapter-item "><a href="decouvrir-les-modeles-ux.html">Découvrir les modèles pour analyser l&#39;UX</a></li><li class="chapter-item "><a href="cerner-design-et-innovation.html">Cerner les concepts de design et d&#39;innovation</a></li></ol></li><li class="chapter-item expanded "><a href="1-planification.html">1. Planification</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="identifier-les-acteurs-avec-la-matrice-pouvoir-interet.html">Identifier les parties prenantes avec la matrice pouvoir et intérêt</a></li><li class="chapter-item "><a href="cartographier-les-acteurs-avec-la-matrice-rasci.html">Cartographier les parties prenantes avec la matrice RACI ou RASCI</a></li><li class="chapter-item "><a href="etudier-les-risques-avec-l-analyse-swot.html">Etudier les risques avec l&#39;analyse SWOT</a></li><li class="chapter-item "><a href="prioriser-les-risques-avec-la-matrice-des-probabilites-et-impacts.html">Prioriser les risques avec la matrice des probabilités et impacts</a></li><li class="chapter-item "><a href="questionner-les-enjeux-ethiques-des-le-depart.html">Questionner les enjeux éthiques dès le départ</a></li><li class="chapter-item "><a href="rediger-une-fiche-projet-pour-cadrer-la-demande.html">Rédiger une fiche projet pour cadrer la demande</a></li><li class="chapter-item "><a href="cartographier-les-methodologies-ux-pour-faire-le-bon-choix.html">Cartographier les méthodologies UX pour faire le bon choix</a></li></ol></li><li class="chapter-item expanded "><a href="2-exploration.html">2. Exploration</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="faire-une-revue-de-la-litterature-scientifique-sur-une-question-ux.html">Faire une revue de la littérature scientifique sur une question UX</a></li><li class="chapter-item "><a href="faire-une-analyse-concurrentielle-sur-une-question-ux.html">Faire une analyse concurrentielle sur une question UX</a></li><li class="chapter-item "><a href="accompagner-le-changement-avec-le-modele-transitionnel-de-bridges.html">Accompagner le changement avec le modèle transitionnel de Bridges</a></li><li class="chapter-item "><a href="comprendre-la-resistance-au-changement-avec-weick.html">Comprendre la résistance au changement avec Weick</a></li><li class="chapter-item "><a href="mener-une-observation-passive-avec-la-grille-d-observation-de-spradley.html">Mener une observation passive avec la grille d&#39;observation de Spradley</a></li><li class="chapter-item "><a href="pratiquer-l-empathie-immersive-pour-vivre-l-experience-utilisateur.html">Pratiquer l&#39;empathie immersive pour vivre l&#39;expérience de l&#39;utilisateur</a></li><li class="chapter-item "><a href="mener-des-interviews-pour-explorer-en-profondeur-les-pratiques.html">Mener des interviews pour explorer en profondeur les pratiques</a></li><li class="chapter-item "><a href="exploiter-les-analytics-pour-etudier-les-usages-et-leur-evolution.html">Exploiter les analytics pour étudier les usages et leur évolution</a></li><li class="chapter-item "><a href="realiser-une-enquete-pour-consolider-ses-hypotheses.html">Réaliser une enquête pour consolider ses hypothèses</a></li></ol></li><li class="chapter-item expanded "><a href="3-ideation.html">3. Idéation</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="compiler-les-donnees-sous-forme-d-insights-utilisateurs-avec-les-modeles-mentaux.html">Compiler les données sous forme d&#39;insights utilisateurs avec les modèles mentaux</a></li><li class="chapter-item "><a href="synthetiser-l-experience-utilisateur-avec-les-personas-et-les-cartes-d-experience-chronologiques.html">Synthétiser l&#39;expérience utilisateur avec les personas et les cartes d&#39;expérience chronologiques</a></li><li class="chapter-item "><a href="generer-des-idees-avec-le-brainstorming.html">Générer des idées avec le brainstorming</a></li><li class="chapter-item "><a href="generer-des-idees-avec-le-design-studio.html">Générer des idées avec le design studio</a></li><li class="chapter-item "><a href="envisager-l-evolution-d-un-systeme-avec-la-methode-errc.html">Envisager l&#39;évolution d&#39;un système avec la méthode ERRC</a></li><li class="chapter-item "><a href="prioriser-les-besoins-avec-la-methode-moscow.html">Prioriser les besoins avec la méthode MoSCoW</a></li><li class="chapter-item "><a href="prioriser-les-preferences-avec-le-vote-pondere.html">Prioriser les préférences avec le vote pondéré</a></li></ol></li><li class="chapter-item expanded "><a href="4-generation.html">4. Génération</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="structurer-l-information-avec-le-tri-de-cartes.html">Structurer l&#39;information avec le tri de cartes</a></li><li class="chapter-item "><a href="s-inspirer-des-principes-de-design-pour-la-conception.html">S&#39;inspirer des principes de design pour la conception</a></li><li class="chapter-item "><a href="construire-un-prototype-pour-eprouver-la-conception.html">Construire un prototype pour éprouver la conception</a></li><li class="chapter-item "><a href="planifier-l-implementation-avec-le-diagramme-de-gantt-et-la-methode-du-chemin-critique.html">Planifier l&#39;implémentation avec le diagramme de Gantt et la méthode du chemin critique</a></li><li class="chapter-item "><a href="prioriser-les-actions-avec-la-matrice-urgent-et-important.html">Prioriser les actions avec la matrice urgent et important</a></li></ol></li><li class="chapter-item expanded "><a href="5-evaluation.html">5. Evaluation</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="evaluer-l-ux-a-l-aide-de-grilles-d-evaluation-expertes.html">Evaluer l&#39;UX à l&#39;aide de grilles d&#39;évaluation expertes</a></li><li class="chapter-item "><a href="organiser-un-test-utilisateur.html">Organiser un test utilisateur, l&#39;approche la plus puissante pour améliorer l&#39;UX</a></li><li class="chapter-item "><a href="exploiter-les-echelles-d-evaluation-de-l-ux.html">Exploiter les échelles d&#39;évaluation de l&#39;UX</a></li></ol></li><li class="chapter-item expanded "><a href="references.html">Références</a></li></ol>';
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

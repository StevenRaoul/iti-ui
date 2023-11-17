import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.56wMDXOc.js";const y=JSON.parse('{"title":"Installation","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"installation.md","filePath":"installation.md"}'),l={name:"installation.md"},p=n(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><h2 id="prerequis" tabindex="-1">Prérequis <a class="header-anchor" href="#prerequis" aria-label="Permalink to &quot;Prérequis&quot;">​</a></h2><p>Assurez-vous d&#39;avoir la dernière version LTS de Nodejs installée. Vous pouvez télécharger et installer Nodejs <a href="https://nodejs.org/fr/download" target="_blank" rel="noreferrer">ici</a>.</p><p>Pour vérifier votre version de Nodejs, ouvrez un terminal et tapez <code>node -v</code>.</p><p>Installez les extensions VS Code <a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" title="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noreferrer">Volar</a> et  <a href="https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin" title="https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin" target="_blank" rel="noreferrer">TypeScript Vue Plugin (Volar)</a> pour améliorer votre expérience de développement avec Vuejs.</p><h2 id="setup-du-projet" tabindex="-1">Setup du projet <a class="header-anchor" href="#setup-du-projet" aria-label="Permalink to &quot;Setup du projet&quot;">​</a></h2><p>Dans votre dossier de travail, faire un <em>checkout</em> du <em>repository</em> <a href="./.html">iti-ui-kit</a>.</p><p>Ouvrez le dossier avec VSCode. Dans le terminal, exécutez la commande <code>npm install</code> pour installer toutes les dépendances du projet.</p><h2 id="lancer-le-projet" tabindex="-1">Lancer le projet <a class="header-anchor" href="#lancer-le-projet" aria-label="Permalink to &quot;Lancer le projet&quot;">​</a></h2><p>Utilisez la commande <code>npm run dev</code> pour lancer le projet. Cliquez ensuite sur le lien généré qui apparaîtra dans votre console.</p><h2 id="structure-du-projet" tabindex="-1">Structure du projet <a class="header-anchor" href="#structure-du-projet" aria-label="Permalink to &quot;Structure du projet&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">|   .eslintrc.cjs</span></span>
<span class="line"><span style="color:#e1e4e8;">|   .gitignore</span></span>
<span class="line"><span style="color:#e1e4e8;">|   .prettierrc.json</span></span>
<span class="line"><span style="color:#e1e4e8;">|   env.d.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">|   index.html</span></span>
<span class="line"><span style="color:#e1e4e8;">|   package-lock.json</span></span>
<span class="line"><span style="color:#e1e4e8;">|   package.json</span></span>
<span class="line"><span style="color:#e1e4e8;">|   README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">|   tsconfig.app.json</span></span>
<span class="line"><span style="color:#e1e4e8;">|   tsconfig.json</span></span>
<span class="line"><span style="color:#e1e4e8;">|   tsconfig.node.json</span></span>
<span class="line"><span style="color:#e1e4e8;">|   tsconfig.vitest.json</span></span>
<span class="line"><span style="color:#e1e4e8;">|   vite.config.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">|   vitest.config.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">|   </span></span>
<span class="line"><span style="color:#e1e4e8;">+---.vscode</span></span>
<span class="line"><span style="color:#e1e4e8;">|       </span></span>
<span class="line"><span style="color:#e1e4e8;">|                      </span></span>
<span class="line"><span style="color:#e1e4e8;">+---public</span></span>
<span class="line"><span style="color:#e1e4e8;">|       favicon.ico</span></span>
<span class="line"><span style="color:#e1e4e8;">|       README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">|       </span></span>
<span class="line"><span style="color:#e1e4e8;">|---src</span></span>
<span class="line"><span style="color:#e1e4e8;">    |   App.vue</span></span>
<span class="line"><span style="color:#e1e4e8;">    |   main.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">    |   README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">    |   </span></span>
<span class="line"><span style="color:#e1e4e8;">    +---assets</span></span>
<span class="line"><span style="color:#e1e4e8;">    |               </span></span>
<span class="line"><span style="color:#e1e4e8;">    |---components</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">|   .eslintrc.cjs</span></span>
<span class="line"><span style="color:#24292e;">|   .gitignore</span></span>
<span class="line"><span style="color:#24292e;">|   .prettierrc.json</span></span>
<span class="line"><span style="color:#24292e;">|   env.d.ts</span></span>
<span class="line"><span style="color:#24292e;">|   index.html</span></span>
<span class="line"><span style="color:#24292e;">|   package-lock.json</span></span>
<span class="line"><span style="color:#24292e;">|   package.json</span></span>
<span class="line"><span style="color:#24292e;">|   README.md</span></span>
<span class="line"><span style="color:#24292e;">|   tsconfig.app.json</span></span>
<span class="line"><span style="color:#24292e;">|   tsconfig.json</span></span>
<span class="line"><span style="color:#24292e;">|   tsconfig.node.json</span></span>
<span class="line"><span style="color:#24292e;">|   tsconfig.vitest.json</span></span>
<span class="line"><span style="color:#24292e;">|   vite.config.ts</span></span>
<span class="line"><span style="color:#24292e;">|   vitest.config.ts</span></span>
<span class="line"><span style="color:#24292e;">|   </span></span>
<span class="line"><span style="color:#24292e;">+---.vscode</span></span>
<span class="line"><span style="color:#24292e;">|       </span></span>
<span class="line"><span style="color:#24292e;">|                      </span></span>
<span class="line"><span style="color:#24292e;">+---public</span></span>
<span class="line"><span style="color:#24292e;">|       favicon.ico</span></span>
<span class="line"><span style="color:#24292e;">|       README.md</span></span>
<span class="line"><span style="color:#24292e;">|       </span></span>
<span class="line"><span style="color:#24292e;">|---src</span></span>
<span class="line"><span style="color:#24292e;">    |   App.vue</span></span>
<span class="line"><span style="color:#24292e;">    |   main.ts</span></span>
<span class="line"><span style="color:#24292e;">    |   README.md</span></span>
<span class="line"><span style="color:#24292e;">    |   </span></span>
<span class="line"><span style="color:#24292e;">    +---assets</span></span>
<span class="line"><span style="color:#24292e;">    |               </span></span>
<span class="line"><span style="color:#24292e;">    |---components</span></span></code></pre></div><h2 id="contenu-du-projet" tabindex="-1">Contenu du projet <a class="header-anchor" href="#contenu-du-projet" aria-label="Permalink to &quot;Contenu du projet&quot;">​</a></h2><h3 id="src" tabindex="-1">src <a class="header-anchor" href="#src" aria-label="Permalink to &quot;src&quot;">​</a></h3><p>Dossier principal dans lequel vous allez travailler. Il contient :</p><ul><li>le fichier <code>main.ts</code> qui sert à l&#39;initialisation de VueJS</li><li>le composant root <code>App.vue</code></li><li>un dossier <code>components</code> dans lequel vous allez créer vos composants.</li></ul><h3 id="public" tabindex="-1">public <a class="header-anchor" href="#public" aria-label="Permalink to &quot;public&quot;">​</a></h3><p>Dossier contenant des ressources statiques directement accessibles par le navigateur. On y retrouve exclusivement le favicon.ico, le fichier robots.txt et autres fichiers accessibles depuis la racine de l&#39;URL de votre application.</p><h3 id="index-html" tabindex="-1">index.html <a class="header-anchor" href="#index-html" aria-label="Permalink to &quot;index.html&quot;">​</a></h3><p>Page HTML de démarrage pour la SPA.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Les autres fichiers présents à la racine du projets sont divers fichiers de configuration.</p></div>`,21),o=[p];function t(c,r,i,d,u,h){return e(),a("div",null,o)}const v=s(l,[["render",t]]);export{y as __pageData,v as default};

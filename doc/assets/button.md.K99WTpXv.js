import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.56wMDXOc.js";const l="/assets/buttons.GGQb7sAn.png",b=JSON.parse('{"title":"Créer un bouton","description":"","frontmatter":{},"headers":[],"relativePath":"button.md","filePath":"button.md"}'),p={name:"button.md"},e=o('<h1 id="creer-un-bouton" tabindex="-1">Créer un bouton <a class="header-anchor" href="#creer-un-bouton" aria-label="Permalink to &quot;Créer un bouton&quot;">​</a></h1><h2 id="objectif" tabindex="-1">Objectif <a class="header-anchor" href="#objectif" aria-label="Permalink to &quot;Objectif&quot;">​</a></h2><p>Créer votre propre composant bouton <code>ItiButton.vue</code>.</p><p><img src="'+l+`" alt="buttons"></p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">iti-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;">&gt;Primary&lt;/</span><span style="color:#85E89D;">iti-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">iti-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;secondary&quot;</span><span style="color:#E1E4E8;">&gt;Secondary&lt;/</span><span style="color:#85E89D;">iti-button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">iti-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;">&gt;Primary&lt;/</span><span style="color:#22863A;">iti-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">iti-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;secondary&quot;</span><span style="color:#24292E;">&gt;Secondary&lt;/</span><span style="color:#22863A;">iti-button</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><ul><li><p><code>color</code> Permet d&#39;indiquer la couleur de fond du bouton :</p><ul><li><code>primary</code> pour la couleur <code>--color-primary</code></li><li><code>secondary</code> pour la couleur <code>--color-secondary</code></li><li><code>default</code> pour la couleur <code>--color-light</code></li></ul></li><li><p><code>shape</code> Permet de configurer la forme du bouton :</p><ul><li><code>square</code> bouton à bords non arrondies =&gt; valeur par défaut</li><li><code>rounded</code> bouton à bords arrondies</li></ul></li></ul><h3 id="color" tabindex="-1">Color <a class="header-anchor" href="#color" aria-label="Permalink to &quot;Color&quot;">​</a></h3><p>Pour changer la couleur, il faut impacter le style du composant en fonction du contenu de la prop <code>color</code>.</p><p>Utiliser une <em>computed</em> pour retourner le nom d&#39;une classe qui change en fonction de la valeur contenu dans <code>props.color</code> :</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { computed } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">buttonClasses</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">\`button-color-\${</span><span style="color:#E1E4E8;">props</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">myProp</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { computed } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">buttonClasses</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">computed</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">\`button-color-\${</span><span style="color:#24292E;">props</span><span style="color:#032F62;">.</span><span style="color:#24292E;">myProp</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span></code></pre></div><p>Vous pouvez ainsi faire muter le style du composant en faisant du <em>binding</em> sur l&#39;attribut <code>class</code> de votre bouton avec la syntaxe <code>:class=&quot;buttonClasses&quot;</code> :</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">&lt;!-- sybtaxe du data-binding --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;...&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">&lt;!-- sybtaxe du data-binding --&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>Utilisez une fonction de validation pour pouvoir valider le contenu de la prop <code>color</code>.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">props</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineProps</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">	color: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">		default: </span><span style="color:#9ECBFF;">&quot;...&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		validator: (</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">props</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineProps</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">	color: {</span></span>
<span class="line"><span style="color:#24292E;">		type: String,</span></span>
<span class="line"><span style="color:#24292E;">		default: </span><span style="color:#032F62;">&quot;...&quot;</span></span>
<span class="line"><span style="color:#24292E;">		validator: (</span><span style="color:#E36209;">value</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>La fonction prend en paramètre la valeur passée dans la prop et doit retourner true si la valeur fait bien partie des valeurs autorisées.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Pour s&#39;assurer que la valeur soit bien parmi la liste des valeurs autorisée, vous pouvez vous aider la méthode <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" target="_blank" rel="noreferrer"><code>includes</code></a> d&#39;un tableau :</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">arr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;apple&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;cherry&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;orange&quot;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">containsCherry</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> arr.includes[</span><span style="color:#9ECBFF;">&quot;cherry&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">arr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;apple&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;cherry&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;orange&quot;</span><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">containsCherry</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arr.includes[</span><span style="color:#032F62;">&quot;cherry&quot;</span><span style="color:#24292E;">] </span><span style="color:#6A737D;">// true</span></span></code></pre></div></div><h3 id="shape" tabindex="-1">shape <a class="header-anchor" href="#shape" aria-label="Permalink to &quot;shape&quot;">​</a></h3><p>Même principe que pour <code>color</code> mais avec <code>props.shape</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Vous pouvez utiliser la même <em>computed</em> <code>buttonClasses</code> puisqu&#39;il s&#39;agit d&#39;un tableau pouvant prendre plusieurs classes.</p></div><h2 id="template" tabindex="-1">Template <a class="header-anchor" href="#template" aria-label="Permalink to &quot;Template&quot;">​</a></h2><p>Le template du bouton est un simple élément HTML <em>button</em>.</p><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><p>Le composant doit disposer d&#39;un slot par défaut pour pouvoir restituer le contenu saisi entre les deux balises ouvrante et fermante.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- Usage du slot par defaut au sein d&#39;un template --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- Usage du slot par defaut au sein d&#39;un template --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">slot</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">slot</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="style" tabindex="-1">Style <a class="header-anchor" href="#style" aria-label="Permalink to &quot;Style&quot;">​</a></h2><p>En utilisant un bouton dans votre template, vous héritez du style par défaut de l&#39;élément. Son style vari en fonction des navigateurs.</p><p>Prenez le temps de mettre votre propre <code>padding</code> et votre <code>border</code>.</p><p>La couleur de fond du bouton doit varier en fonction de la prop <code>color</code>.</p><p>Vous devez donc avoir dans votre feuille de style une classe par couleur :</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.button-color-primary</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.button-color-secondary</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.button-color-default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.button-color-primary</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.button-color-secondary</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.button-color-default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Le projet est configuré avec plusieurs variables que vous trouverez dans le dossier <code>/src/assets/variables.css</code>.</p><p>Utilisez la bonne variable dans votre CSS grâce au mot clé <code>var</code> :</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--color-primary</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">div</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--color-primary</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,35),t=[e];function c(r,i,y,E,d,u){return a(),n("div",null,t)}const g=s(p,[["render",c]]);export{b as __pageData,g as default};

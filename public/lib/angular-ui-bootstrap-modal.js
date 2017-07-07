
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width">
  <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1" media="(device-height: 568px)">
  <meta name="selected-link" value="repo_source">

      <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="2F9A:7CA7:36B39D0:52667CD:595C2805" name="octolytics-dimension-request_id" /><meta content="iad" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="29767106" name="octolytics-actor-id" /><meta content="klikstore" name="octolytics-actor-login" /><meta content="a463232224240e89b32b98f7536e8a65a024f2b216702ba1a56c58cb8c4e593d" name="octolytics-actor-hash" />
<meta content="mobile" name="octolytics-dimension-device" />
<meta content="20468" name="octolytics-dimension-user_id" /><meta content="fdietz" name="octolytics-dimension-user_login" /><meta content="7889906" name="octolytics-dimension-repository_id" /><meta content="fdietz/recipes-with-angular-js-examples" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="7889906" name="octolytics-dimension-repository_network_root_id" /><meta content="fdietz/recipes-with-angular-js-examples" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />

<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta class="js-ga-set" name="dimension3" content="mobile">


  

  <title>recipes-with-angular-js-examples/angular-ui-bootstrap-modal.js at master · fdietz/recipes-with-angular-js-examples</title>

  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/mobile-4c4aca23efe877cdb99c4b766b2e39592f35d08fce9bcf062192a84d1f722e88.css" media="all" rel="stylesheet" />


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  </head>

  <body>
    

  <header class="nav-bar">
    <div class="nav-bar-inner ">
      <button type="button" class="header-button header-nav-button touchable js-show-global-nav" data-ga-click="Mobile, tap, location:header; text:Hamburger">
        <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
      </button>

      <div class="nav-bar-title-text">
            <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <strong><a class="text-white" href="/fdietz">fdietz</a></strong>
  /
  <strong><a class="text-white" href="/fdietz/recipes-with-angular-js-examples">recipes-with-angular-js-examples</a></strong>

      </div>

      

    </div>


    <nav class="nav-bar-tabs ">
      <ul>
            <li>
              <a href="/" data-ga-click="Mobile, tap, location:header; text:Dashboard">
                <svg aria-hidden="true" class="octicon octicon-dashboard" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M9 5H8V4h1v1zm4 3h-1v1h1V8zM6 5H5v1h1V5zM5 8H4v1h1V8zm11-5.5l-.5-.5L9 7c-.06-.02-1 0-1 0-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-.92l6-5.58zm-1.59 4.09c.19.61.3 1.25.3 1.91 0 3.42-2.78 6.2-6.2 6.2-3.42 0-6.21-2.78-6.21-6.2 0-3.42 2.78-6.2 6.2-6.2 1.2 0 2.31.34 3.27.94l.94-.94A7.459 7.459 0 0 0 8.51 1C4.36 1 1 4.36 1 8.5 1 12.64 4.36 16 8.5 16c4.14 0 7.5-3.36 7.5-7.5 0-1.03-.2-2.02-.59-2.91l-1 1z"/></svg>
                Dashboard
              </a>
            </li>
              <li>
                <a href="/marketplace" class="" data-ga-click="Mobile, tap, location:header; text:Marketplace">
                <svg aria-hidden="true" class="octicon octicon-globe" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7c.48 0 .94-.05 1.38-.14-.17-.08-.2-.73-.02-1.09.19-.41.81-1.45.2-1.8-.61-.35-.44-.5-.81-.91-.37-.41-.22-.47-.25-.58-.08-.34.36-.89.39-.94.02-.06.02-.27 0-.33 0-.08-.27-.22-.34-.23-.06 0-.11.11-.2.13-.09.02-.5-.25-.59-.33-.09-.08-.14-.23-.27-.34-.13-.13-.14-.03-.33-.11s-.8-.31-1.28-.48c-.48-.19-.52-.47-.52-.66-.02-.2-.3-.47-.42-.67-.14-.2-.16-.47-.2-.41-.04.06.25.78.2.81-.05.02-.16-.2-.3-.38-.14-.19.14-.09-.3-.95s.14-1.3.17-1.75c.03-.45.38.17.19-.13-.19-.3 0-.89-.14-1.11-.13-.22-.88.25-.88.25.02-.22.69-.58 1.16-.92.47-.34.78-.06 1.16.05.39.13.41.09.28-.05-.13-.13.06-.17.36-.13.28.05.38.41.83.36.47-.03.05.09.11.22s-.06.11-.38.3c-.3.2.02.22.55.61s.38-.25.31-.55c-.07-.3.39-.06.39-.06.33.22.27.02.5.08.23.06.91.64.91.64-.83.44-.31.48-.17.59.14.11-.28.3-.28.3-.17-.17-.19.02-.3.08-.11.06-.02.22-.02.22-.56.09-.44.69-.42.83 0 .14-.38.36-.47.58-.09.2.25.64.06.66-.19.03-.34-.66-1.31-.41-.3.08-.94.41-.59 1.08.36.69.92-.19 1.11-.09.19.1-.06.53-.02.55.04.02.53.02.56.61.03.59.77.53.92.55.17 0 .7-.44.77-.45.06-.03.38-.28 1.03.09.66.36.98.31 1.2.47.22.16.08.47.28.58.2.11 1.06-.03 1.28.31.22.34-.88 2.09-1.22 2.28-.34.19-.48.64-.84.92s-.81.64-1.27.91c-.41.23-.47.66-.66.8 3.14-.7 5.48-3.5 5.48-6.84 0-3.86-3.14-7-7-7L7 1zm1.64 6.56c-.09.03-.28.22-.78-.08-.48-.3-.81-.23-.86-.28 0 0-.05-.11.17-.14.44-.05.98.41 1.11.41.13 0 .19-.13.41-.05.22.08.05.13-.05.14zM6.34 1.7c-.05-.03.03-.08.09-.14.03-.03.02-.11.05-.14.11-.11.61-.25.52.03-.11.27-.58.3-.66.25zm1.23.89c-.19-.02-.58-.05-.52-.14.3-.28-.09-.38-.34-.38-.25-.02-.34-.16-.22-.19.12-.03.61.02.7.08.08.06.52.25.55.38.02.13 0 .25-.17.25zm1.47-.05c-.14.09-.83-.41-.95-.52-.56-.48-.89-.31-1-.41-.11-.1-.08-.19.11-.34.19-.15.69.06 1 .09.3.03.66.27.66.55.02.25.33.5.19.63h-.01z"/></svg>
                  Marketplace
</a>              </li>
          <li>
            <a href="/explore" data-ga-click="Mobile, tap, location:header; text:Explore">
              <svg aria-hidden="true" class="octicon octicon-telescope" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M8 9l3 6h-1l-2-4v5H7v-6l-2 5H4l2-5 2-1zM7 0H6v1h1V0zM5 3H4v1h1V3zM2 1H1v1h1V1zM.63 9a.52.52 0 0 0-.16.67l.55.92c.13.23.41.31.64.2l1.39-.66-1.16-2-1.27.86.01.01zm7.89-5.39l-5.8 3.95L3.95 9.7l6.33-3.03-1.77-3.06h.01zm4.22 1.28l-1.47-2.52a.51.51 0 0 0-.72-.17l-1.2.83 1.84 3.2 1.33-.64c.27-.13.36-.44.22-.7z"/></svg>
              Explore
            </a>
          </li>
            <li>
              <a href="/klikstore" data-ga-click="Mobile, tap, location:header; text:User avatar">
                <img alt="@klikstore" class="avatar" height="16" src="https://avatars0.githubusercontent.com/u/29767106?v=3&amp;s=32" width="16" />
                Profile
              </a>
            </li>
        <li>
            <a href="/logout" data-ga-click="Mobile, tap, location:header; text:Sign out">
              <svg aria-hidden="true" class="octicon octicon-sign-out" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M12 9V7H8V5h4V3l4 3-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z"/></svg>
              Sign out
            </a>
        </li>
        
      </ul>
    </nav>
  </header>

    



    




<div class="reponav-wrapper">
  <nav class="reponav js-reponav"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/fdietz/recipes-with-angular-js-examples" class="js-selected-navigation-item selected reponav-item" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /fdietz/recipes-with-angular-js-examples" itemprop="url">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a href="/fdietz/recipes-with-angular-js-examples/issues" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /fdietz/recipes-with-angular-js-examples/issues" itemprop="url">
          <span itemprop="name">Issues</span>
          <span class="Counter">10</span>
          <meta itemprop="position" content="2">
</a>      </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/fdietz/recipes-with-angular-js-examples/pulls" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls /fdietz/recipes-with-angular-js-examples/pulls" itemprop="url">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">6</span>
        <meta itemprop="position" content="3">
</a>    </span>

    <a href="/fdietz/recipes-with-angular-js-examples/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /fdietz/recipes-with-angular-js-examples/pulse">
      Pulse
</a>
  </nav>
</div>

<div id="js-flash-container">
</div>




<div class="breadcrumb blob-breadcrumb">
  <label for="blob-history-checkbox" class="blob-history-label">
    <svg aria-hidden="true" class="octicon octicon-history" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M8 13H6V6h5v2H8v5zM7 1C4.81 1 2.87 2.02 1.59 3.59L0 2v4h4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7z"/></svg>
  </label>
  <span class="filetype-icon"><svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg></span>
  <span class="js-path-segment"><a href="/fdietz/recipes-with-angular-js-examples/tree/master/chapter8"><span>chapter8</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/fdietz/recipes-with-angular-js-examples/tree/master/chapter8/recipe7"><span>recipe7</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/fdietz/recipes-with-angular-js-examples/tree/master/chapter8/recipe7/js"><span>js</span></a></span><span class="separator">/</span><strong class="final-path">angular-ui-bootstrap-modal.js</strong>
</div>

<input id="blob-history-checkbox"
       class="js-blob-history-checkbox blob-history-checkbox"
       type="checkbox"
       data-url="/fdietz/recipes-with-angular-js-examples/latest_commit/master/chapter8/recipe7/js/angular-ui-bootstrap-modal.js">

<div class="blob-history">
  <a href="/fdietz/recipes-with-angular-js-examples/commits/master/chapter8/recipe7/js/angular-ui-bootstrap-modal.js" class="js-blob-history-link">
    Loading latest commit…
</a></div>

  <div class="blob-file-content js-file-line-container">
    <div class="highlighted-blob tab-size" data-tab-size="8"><div class="code-body highlight"><pre><div class='line js-file-line' id='LC1'><span class="pl-smi">angular</span>.<span class="pl-en">module</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ui.bootstrap.modal<span class="pl-pds">&#39;</span></span>, [])</div><div class='line js-file-line' id='LC2'>.<span class="pl-en">constant</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>modalConfig<span class="pl-pds">&#39;</span></span>, {</div><div class='line js-file-line' id='LC3'>&nbsp;&nbsp;backdrop<span class="pl-k">:</span> <span class="pl-c1">true</span>,</div><div class='line js-file-line' id='LC4'>&nbsp;&nbsp;escape<span class="pl-k">:</span> <span class="pl-c1">true</span></div><div class='line js-file-line' id='LC5'>})</div><div class='line js-file-line' id='LC6'>.<span class="pl-en">directive</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>modal<span class="pl-pds">&#39;</span></span>, [<span class="pl-s"><span class="pl-pds">&#39;</span>$parse<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>modalConfig<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">$parse</span>, <span class="pl-smi">modalConfig</span>) {</div><div class='line js-file-line' id='LC7'>&nbsp;&nbsp;<span class="pl-k">var</span> backdropEl;</div><div class='line js-file-line' id='LC8'>&nbsp;&nbsp;<span class="pl-k">var</span> body <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-en">element</span>(<span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>]);</div><div class='line js-file-line' id='LC9'>&nbsp;&nbsp;<span class="pl-k">return</span> {</div><div class='line js-file-line' id='LC10'>&nbsp;&nbsp;&nbsp;&nbsp;restrict<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>EA<span class="pl-pds">&#39;</span></span>,</div><div class='line js-file-line' id='LC11'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">link</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">scope</span>, <span class="pl-smi">elm</span>, <span class="pl-smi">attrs</span>) {</div><div class='line js-file-line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">var</span> opts <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-en">extend</span>({}, modalConfig, <span class="pl-smi">scope</span>.<span class="pl-en">$eval</span>(<span class="pl-smi">attrs</span>.<span class="pl-smi">uiOptions</span> <span class="pl-k">||</span> <span class="pl-smi">attrs</span>.<span class="pl-smi">bsOptions</span> <span class="pl-k">||</span> <span class="pl-smi">attrs</span>.<span class="pl-c1">options</span>));</div><div class='line js-file-line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">var</span> shownExpr <span class="pl-k">=</span> <span class="pl-smi">attrs</span>.<span class="pl-smi">modal</span> <span class="pl-k">||</span> <span class="pl-smi">attrs</span>.<span class="pl-smi">show</span>;</div><div class='line js-file-line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">var</span> setClosed;</div><div class='line js-file-line' id='LC15'><br></div><div class='line js-file-line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">if</span> (<span class="pl-smi">attrs</span>.<span class="pl-smi">close</span>) {</div><div class='line js-file-line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">setClosed</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</div><div class='line js-file-line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">scope</span>.<span class="pl-en">$apply</span>(<span class="pl-smi">attrs</span>.<span class="pl-smi">close</span>);</div><div class='line js-file-line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};</div><div class='line js-file-line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <span class="pl-k">else</span> {</div><div class='line js-file-line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">setClosed</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</div><div class='line js-file-line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">scope</span>.<span class="pl-en">$apply</span>(<span class="pl-k">function</span>() {</div><div class='line js-file-line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">$parse</span>(shownExpr).<span class="pl-en">assign</span>(scope, <span class="pl-c1">false</span>);</div><div class='line js-file-line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</div><div class='line js-file-line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};</div><div class='line js-file-line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">elm</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>modal<span class="pl-pds">&#39;</span></span>);</div><div class='line js-file-line' id='LC28'><br></div><div class='line js-file-line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">if</span> (<span class="pl-smi">opts</span>.<span class="pl-smi">backdrop</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>backdropEl) {</div><div class='line js-file-line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backdropEl <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-en">element</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;modal-backdrop&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</div><div class='line js-file-line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">backdropEl</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>display<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>);</div><div class='line js-file-line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">body</span>.<span class="pl-c1">append</span>(backdropEl);</div><div class='line js-file-line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC34'><br></div><div class='line js-file-line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">function</span> <span class="pl-en">setShown</span>(<span class="pl-smi">shown</span>) {</div><div class='line js-file-line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">scope</span>.<span class="pl-en">$apply</span>(<span class="pl-k">function</span>() {</div><div class='line js-file-line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">model</span>.<span class="pl-en">assign</span>(scope, shown);</div><div class='line js-file-line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</div><div class='line js-file-line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC40'><br></div><div class='line js-file-line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">function</span> <span class="pl-en">escapeClose</span>(<span class="pl-smi">evt</span>) {</div><div class='line js-file-line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">if</span> (<span class="pl-smi">evt</span>.<span class="pl-smi">which</span> <span class="pl-k">===</span> <span class="pl-c1">27</span>) { <span class="pl-en">setClosed</span>(); }</div><div class='line js-file-line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">function</span> <span class="pl-en">clickClose</span>() {</div><div class='line js-file-line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">setClosed</span>();</div><div class='line js-file-line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC47'><br></div><div class='line js-file-line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">function</span> <span class="pl-en">close</span>() {</div><div class='line js-file-line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">if</span> (<span class="pl-smi">opts</span>.<span class="pl-smi">escape</span>) { <span class="pl-smi">body</span>.<span class="pl-en">unbind</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>keyup<span class="pl-pds">&#39;</span></span>, escapeClose); }</div><div class='line js-file-line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">if</span> (<span class="pl-smi">opts</span>.<span class="pl-smi">backdrop</span>) {</div><div class='line js-file-line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">backdropEl</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>display<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>);</div><div class='line js-file-line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">backdropEl</span>.<span class="pl-en">unbind</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, clickClose);</div><div class='line js-file-line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">elm</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>display<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>);</div><div class='line js-file-line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">body</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>modal-open<span class="pl-pds">&#39;</span></span>);</div><div class='line js-file-line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">function</span> <span class="pl-en">open</span>() {</div><div class='line js-file-line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">if</span> (<span class="pl-smi">opts</span>.<span class="pl-smi">escape</span>) { <span class="pl-smi">body</span>.<span class="pl-en">bind</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>keyup<span class="pl-pds">&#39;</span></span>, escapeClose); }</div><div class='line js-file-line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">if</span> (<span class="pl-smi">opts</span>.<span class="pl-smi">backdrop</span>) {</div><div class='line js-file-line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">backdropEl</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>display<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>block<span class="pl-pds">&#39;</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>);</div><div class='line js-file-line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">if</span>(<span class="pl-smi">opts</span>.<span class="pl-smi">backdrop</span> <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>static<span class="pl-pds">&quot;</span></span>) {</div><div class='line js-file-line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">backdropEl</span>.<span class="pl-en">bind</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, clickClose);</div><div class='line js-file-line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">elm</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>display<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>block<span class="pl-pds">&#39;</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>);</div><div class='line js-file-line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">body</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>modal-open<span class="pl-pds">&#39;</span></span>);</div><div class='line js-file-line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC68'><br></div><div class='line js-file-line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">scope</span>.<span class="pl-en">$watch</span>(shownExpr, <span class="pl-k">function</span>(<span class="pl-smi">isShown</span>, <span class="pl-smi">oldShown</span>) {</div><div class='line js-file-line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">if</span> (isShown) {</div><div class='line js-file-line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">open</span>();</div><div class='line js-file-line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <span class="pl-k">else</span> {</div><div class='line js-file-line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">close</span>();</div><div class='line js-file-line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</div><div class='line js-file-line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC77'>&nbsp;&nbsp;};</div><div class='line js-file-line' id='LC78'>}]);</div></pre></div></div>
  </div>


  <footer class="clearfix">
    <div class="container">
      <a href="#"><svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></a>

      <ul class="clearfix">
        <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/site/mobile_preference" class="js-mobile-preference-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="OpoGCfkfr+T9/TOrqryI31q0zY7Cr416QOrTmYucrb6Q01A1qDgBK112DFRTGtPunls4YHtvvjPnB6WJYNCtsQ==" /></div>
            <input type="hidden" name="mobile" value="false">
            <input type="hidden" name="anchor" class="js-mobile-preference-anchor-field">

            <button type="submit" class="switch-to-desktop" data-ga-click="Mobile, switch to desktop, switch button">
              Desktop version
            </button>
</form>        </li>

      </ul>
    </div>
  </footer>
  
  <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/mobile-c4d3cb3cc3839b29ce76322d3d4528e028fd099a79e743c497f5e32210d06cd4.js"></script>

  </body>
</html>

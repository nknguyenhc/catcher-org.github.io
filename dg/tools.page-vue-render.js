
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/images/catcher_logo.png","width":"40"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/index.html"}},[_v("HOME")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/ug/index.html"}},[_v(" USER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/dg/index.html"}},[_v(" DEVELOPER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/about-us.html"}},[_v(" ABOUT US ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/CATcher-org/CATcher","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"font-weight-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_c('span',[_c('strong',[_c('strong',[_v("DEVELOPER GUIDE")])])])])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('div',[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/index.html"}},[_v("DG Home")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/user-workflow.html"}},[_v("User workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/tools.html"}},[_v("Tools")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/setting-up.html"}},[_v("Setting up")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/design.html"}},[_v("Design")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/dev-workflow.html"}},[_v("Dev workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/testing.html"}},[_v("Testing")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/project-management.html"}},[_v("Project management")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/future-directions.html"}},[_v("Future directions")])])])])],1)],1)])]),_v(" "),_m(0)],1),_v(" "),_m(1)],1)}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h1',{attrs:{"id":"tools"}},[_c('span',{staticClass:"anchor",attrs:{"id":"tools"}}),_v("Tools"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tools","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("This page introduces you to some important tools/frameworks used by CATcher.")]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"type-script"}},[_c('span',{staticClass:"anchor",attrs:{"id":"type-script"}}),_v("Type Script"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#type-script","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Type Script is the main programming language used.")]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"angular"}},[_c('span',{staticClass:"anchor",attrs:{"id":"angular"}}),_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("Angular is a TypeScript-based web application framework.")]),_v(" CATcher is built using Angular and hence our codebase is in Typescript. It is recommended that you familiarise yourself with Typescript as well as Angular before you attempt to work on CATcher.")]),_v(" "),_c('p',[_c('strong',[_v("An Angular application is largely made up of Components, Services, and the corresponding HTML and CSS files for each Component.")]),_v(" A Component is a direct representation of visible aspects of an application, while a Service provides useful functionalities to Components where needed. The separation of components and services increases modularity and reusability, as through dependency injection (DI), the service class can provide services to different parts of the application. For more details on the structure of Angular, visit the Angular Guide via the links below. It is also recommended for new developers to do a brief walkthrough of the Angular tutorial (link below) before attempting any fixes on CATcher.")]),_v(" "),_c('p',[_c('strong',[_v("The RxJS (Reactive Extensions for Javascript) Library")]),_v(" is part of Angular that supports reactive programming for Javascript. This means that it enables the application to respond to changes in data readily, by allowing instant propagation of changes throughout the application. RxJS library provides support for asynchronous programming through "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Observables")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Observers")]),_v(" as well as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Promises")]),_v(". "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Observers")]),_v(" are able to receive updates on changes to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Observables")]),_v(" they are observing, which allows instant updates throughout the application through the use of these objects.")]),_v(" "),_c('p',[_c('strong',[_c('em',[_v("Pipes")]),_v(" are also frequently used in CATcher")]),_v(" to reduce clutter and improve readability of our codebase. It strings together operators in a sequence such that the operators can be applied to the given value in order.")]),_v(" "),_c('p',[_v("Example of custom operators using pipes in CATcher:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("export function assertSessionDataIntegrity() {\n")]),_c('span',[_v("   return pipe(\n")]),_c('span',[_v("     throwIfFalse(sessionData => sessionData !== undefined,\n")]),_c('span',[_v("       () => new Error('Session Data Unavailable')),\n")]),_c('span',[_v("     throwIfFalse(isSessionDataCorrectlyDefined,\n")]),_c('span',[_v("       () => new Error('Session Data is Incorrectly Defined')),\n")]),_c('span',[_v("     throwIfFalse(hasOpenPhases,\n")]),_c('span',[_v("       () => new Error('There are no accessible phases.')));\n")]),_c('span',[_v(" }\n")])])]),_c('p',[_c('strong',[_c('strong',[_v("Resources:")])])]),_v(" "),_c('ol',[_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/architecture"}},[_v("Angular Guide")]),_v(" : Official Angular developer guide and introduction to basic Angular topics")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://rxjs-dev.firebaseapp.com/guide/observable"}},[_v("RxJS Guide")]),_v(" : Official RxJS guide on Observables, Observers, Operators, Subscription, etc.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/dependency-injection-navtree"}},[_v("Angular Guide on Navigation of Component Tree")]),_v(" : Guide on how to navigate the component tree with Dependency Injection")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://angular.io/tutorial"}},[_v("Angular Tutorial")]),_v(" : Official Angular tutorials")])]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"electron"}},[_c('span',{staticClass:"anchor",attrs:{"id":"electron"}}),_v("Electron"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#electron","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Electron is a tool that allows developers to build cross-platform desktop applications with Javascript, HTML, and CSS. It basically allows us to \"convert\" the web version of CATcher into a desktop application through the APIs provided by Electron.")]),_v(" "),_c('p',[_v("The Electron framework launches a main process and a renderer process.\nThe CATcher app runs within the renderer process, while the main process handles system events that occur during the app's lifecycle. Electron provides a message-passing API to facilitate inter-process communication.")]),_v(" "),_c('p',[_v("A snippet from our app's main process code:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("ipcMain.on('github-oauth', (event, repoPermissionLevel) => {\n")]),_c('span',[_v("  Logger.info('Starting authentication');\n")]),_c('span',[_v("  getAccessToken(win, repoPermissionLevel).then((data) => {\n")]),_c('span',[_v("    Logger.info('Obtained access token from Github');\n")]),_c('span',[_v("    event.sender.send('github-oauth-reply', {token: data.token});\n")]),_c('span',[_v("  }).catch(error => {\n")]),_c('span',[_v("    event.sender.send('github-oauth-reply', {\n")]),_c('span',[_v("      error: error.message,\n")]),_c('span',[_v("      isWindowClosed: error.message === 'WINDOW_CLOSED'});\n")]),_c('span',[_v("  });\n")]),_c('span',[_v("});\n")])])]),_c('p',[_c('strong',[_c('strong',[_v("Resources:")])])]),_v(" "),_c('ol',[_c('li',[_c('a',{attrs:{"href":"https://www.electronjs.org/docs/tutorial"}},[_v("Official Electron Guide")]),_v(" : This is the official Electron documentation")])]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"graphql"}},[_c('span',{staticClass:"anchor",attrs:{"id":"graphql"}}),_v("GraphQL"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#graphql","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("GraphQL is a query language for APIs.")]),_v(" "),_c('p',[_v("In CATcher, it is to communicate with the Github backend. It allows us to define a schema for the data that we receive from github, and also performs validation for the data we reqeust for, such that the data we receive from Github is exactly what we need, nothing more, nothing less. The extra layer of GraphQL is one that makes the process of data retrieval in CATcher more streamlined.")]),_v(" "),_c('p',[_v("The GraphQL queries used by CATcher are defined under the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("graphql")]),_v(" folder in the codebase.")]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"oauth-2-0"}},[_c('span',{staticClass:"anchor",attrs:{"id":"oauth-2-0"}}),_v("OAuth 2.0"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#oauth-2-0","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("CATcher uses the OAuth 2.0 protocol to authenticate users. Below is a summary of the authentication process:")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("A user launches CATcher, and is prompted to log into GitHub. This is a direct interaction between the user and GitHub. Once the user has logged in, GitHub provides CATcher with an authorization code meant for this user.")])]),_v(" "),_c('li',[_c('p',[_v("CATcher sends this authorization code and its own client secret to GitHub's authorization server - in exchange for an access token.")])]),_v(" "),_c('li',[_c('p',[_v("Authentication is complete, and CATcher can now use the access token when it uses the GitHub API for its logic (e.g. submitting new issues, editing existing issues)")])])]),_v(" "),_c('p',[_v("The authentication process is kicked off in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AuthComponent")]),_v(", but the code that co-ordinates steps 1 and 2 can be found in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("oauth.ts")]),_v(" (For Electron) or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AuthService")]),_v(" (For Web). Step 2 requires a client secret granted to CATcher. To protect this, we run a web service, "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/gatekeeper"}},[_v("gatekeeper")]),_v(" that executes step 2 on behalf of the client CATcher app. More details on Github's OAuth implementation can be found "),_c('a',{attrs:{"href":"https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps"}},[_v("here")])]),_v(" "),_c('p',[_v("The sequence diagram below shows the OAuth flow for the CATcher web app. (The flow is similar for the CATcher desktop app, except some parts of the OAuth process are handled in the Electron main process, instead of the renderer process that runs the CATcher application).\n"),_c('br'),_c('br'),_c('br'),_v(" "),_c('a',{attrs:{"href":"/images/oauth-sequence-diagram.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/images/oauth-sequence-diagram.png","alt":""}})])]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"testing-tools"}},[_c('span',{staticClass:"anchor",attrs:{"id":"testing-tools"}}),_v("Testing tools"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#testing-tools","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Described in the "),_c('a',{attrs:{"href":"/dg/testing.html"}},[_v("Testing")]),_v(" page.")]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.0.2")]),_v(", generated on Wed, 11 Jan 2023, 3:37:31 UTC]")])])])}
}];
  
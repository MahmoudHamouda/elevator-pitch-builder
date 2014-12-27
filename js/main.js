/*! elevator-pitch-builder 2014-12-27 */
this.Handlebars=this.Handlebars||{},this.Handlebars.Templates=this.Handlebars.Templates||{},Handlebars.registerPartial("editable-review-tpl",this.Handlebars.Templates["editable-review-tpl"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a){var b,c=this.lambda,d=this.escapeExpression;return'<span contenteditable="true" class="pitch-component pitch-who" data-name="who">'+d(c(null!=(b=null!=a?a.pitch:a)?b.who:b,a))+'</span>\n<span contenteditable="true" class="pitch-component pitch-what" data-name="what">'+d(c(null!=(b=null!=a?a.pitch:a)?b.what:b,a))+'</span>\n<span contenteditable="true" class="pitch-component pitch-why" data-name="why">'+d(c(null!=(b=null!=a?a.pitch:a)?b.why:b,a))+'</span>\n<span contenteditable="true" class="pitch-component pitch-goal" data-name="goal">'+d(c(null!=(b=null!=a?a.pitch:a)?b.goal:b,a))+"</span>"},useData:!0})),Handlebars.registerPartial("pitch-analysis-tpl",this.Handlebars.Templates["pitch-analysis-tpl"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a){var b,c=this.lambda,d=this.escapeExpression;return'    <div class="word-count-stat stat-wrapper">\n      <span class="stat-label">Word Count:</span>\n      <span class="stat work-count">'+d(c(null!=(b=null!=a?a.analysis:a)?b.wordcount:b,a))+' Words</span>\n    </div><!--\n\n --><div class="est-seconds-stat stat-wrapper">\n      <span class="stat-label">Estimated Seconds:</span>\n      <span class="stat est-seconds">'+d(c(null!=(b=null!=a?a.analysis:a)?b.estseconds:b,a))+" Sec.</span>\n    </div>"},useData:!0})),Handlebars.registerPartial("pitch-mailto-tpl",this.Handlebars.Templates["pitch-mailto-tpl"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a){var b,c=this.lambda,d=this.escapeExpression;return'<a class="pitch-email-link" href="mailto:?subject=Elevator Pitch&body='+d(c(null!=(b=null!=a?a.pitch:a)?b.who:b,a))+" "+d(c(null!=(b=null!=a?a.pitch:a)?b.what:b,a))+" "+d(c(null!=(b=null!=a?a.pitch:a)?b.why:b,a))+" "+d(c(null!=(b=null!=a?a.pitch:a)?b.goal:b,a))+'">Email my pitch</a>\n'},useData:!0})),this.Handlebars.Templates["component-tpl"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f=this.lambda,g=this.escapeExpression;return'<a href="#'+g(f(null!=(e=null!=a?a.component:a)?e.name:e,a))+'"><h1 class="name">'+g(f(null!=(e=null!=a?a.component:a)?e.name:e,a))+'</h1></a>\n\n<div class="content">\n  <h2 class="label">'+g(f(null!=(e=null!=a?a.component:a)?e.label:e,a))+'</h2>\n\n  <div class="component-text-wrapper">\n    <textarea name="'+g(f(null!=(e=null!=a?a.component:a)?e.name:e,a))+'-text" class="component-text">'+g(b.lookup.call(a,null!=a?a.pitch:a,null!=(e=null!=a?a.component:a)?e.name:e,{name:"lookup",hash:{},data:d}))+'</textarea>\n  </div>\n\n  <p class="help animated expanded">\n    <span class="help-text">'+g(f(null!=(e=null!=a?a.component:a)?e.help:e,a))+'</span>\n    <span class="help-text help-text-close">Got it...</span>\n  </p>\n</div>'},useData:!0}),this.Handlebars.Templates["intro-tpl"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<h1>The Art of Pitchcraft</h1>\n\n<p>Whether you are trying to raise capital, promote your company, or promote yourself, it\'s essential to have an elevator pitch. You need to communicate your main message quickly, clearly, and distinctly to someone who doesn\'t even know you. A good pitch takes planning and practice to deliver it quickly, on the spot, and under pressure.</p>\n\n<p>You have <em>one minute</em> to say it all.</p>\n\n<a class="pitch-start-btn" href="#who">Start crafting your pitch</a>\n'},useData:!0}),this.Handlebars.Templates["review-tpl"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f='<a href="#review"><h1 class="name">Review your pitch</h1></a>\n\n<div class="review content">\n  <h2 class="label">Your Created Pitch</h2>\n\n  <p class="pitch-review">\n';return e=this.invokePartial(c["editable-review-tpl"],"    ","editable-review-tpl",a,void 0,b,c,d),null!=e&&(f+=e),f+='  </p>\n\n  <p class="pitch-review-help">Be passionate. Listeners may be impressed by your business logic but your excitement will create an even stronger impact. ... Be careful not to turn it into a memorized monologue. You shouldn\'t sound like you are reciting a word-for-word speech. Otherwise your audience won\'t feel special. You are having a conversation (albeit a targeted one), not delivering a sermon.</p>\n\n  <div class="pitch-email">\n',e=this.invokePartial(c["pitch-mailto-tpl"],"    ","pitch-mailto-tpl",a,void 0,b,c,d),null!=e&&(f+=e),f+='  </div>\n\n  <div class="pitch-analysis">\n',e=this.invokePartial(c["pitch-analysis-tpl"],"    ","pitch-analysis-tpl",a,void 0,b,c,d),null!=e&&(f+=e),f+"  </div>\n</div>\n"},usePartial:!0,useData:!0});var Pitch=Pitch||{};!function(){Pitch.Router=Backbone.Router.extend({routes:{"":"introRoute",review:"pitchReviewRoute",":component":"pitchComponentRoute"}})}();var Pitch=Pitch||{};!function(){"use strict";Pitch.localStorageSupport=function(){return"undefined"!=typeof Storage},Pitch.PitchModel=Backbone.Model.extend({set:function(a,b,c){Backbone.Model.prototype.set.call(this,a,b,c),this.storeLocally()},storeLocally:_.debounce(function(){Pitch.localStorageSupport()&&localStorage.setItem("pitch",JSON.stringify(this.toJSON()))},300)})}();var Pitch=Pitch||{};!function(){"use strict";Pitch.TemplateView=Backbone.View.extend({initialize:function(a){a=a||{},this.setTemplate(a.template)},setTemplate:function(a){this.template=this.resolveTemplate(a)},resolveTemplate:function(a){if(_.isString(a))return Handlebars.Templates[a];if(_.isFunction(a))return a;throw"template must be a template name or a function."},getTemplateData:function(){var a={};return a},renderTemplate:function(a){var b,c;return a=this.resolveTemplate(a),b=this.getTemplateData(),c=a(b)},render:function(){var a=this.renderTemplate(this.template);return this.$el.html(a),this}})}();var Pitch=Pitch||{};!function(){"use strict";Pitch.PitchComponentView=Pitch.TemplateView.extend({initialize:function(a){a=a||{},this.componentName=a.component.name,this.pitchcomponentdata=a.component,this.setTemplate(a.template),this.$el.on("click",".help",_.bind(this.handleHelpClick,this)),this.$el.on("swiperight",".help",_.bind(this.handleHelpSwipeRight,this)),this.$el.on("swipeleft",".help",_.bind(this.handleHelpSwipeLeft,this)),this.$el.on("focus",".component-text",_.bind(this.handleTextFocus,this)),this.$el.on("input",".component-text",_.bind(this.handleTextInput,this)),this.$el.on("blur",".component-text",_.bind(this.handleTextBlur,this)),this.model.on("change:"+this.componentName,_.bind(this.handleModelChange,this))},getTemplateData:function(){var a={};return a.pitch=this.model.toJSON(),a.component=this.pitchcomponentdata,a},updateText:function(){var a;this.isFocussed||(a=this.model.get(this.componentName),this.$(".component-text").val(a))},handleHelpClick:function(){this.$(".help").toggleClass("expanded collapsed"),this.$(".help").hasClass("collapsed")&&_.delay(_.bind(function(){this.$(".component-text").focus()},this),400)},handleHelpSwipeRight:function(){this.$(".help").addClass("collapsed").removeClass("expanded")},handleHelpSwipeLeft:function(){this.$(".help").removeClass("collapsed").addClass("expanded")},handleTextInput:function(){var a=this.$(".component-text").val();this.model.set(this.componentName,a)},handleModelChange:function(){this.updateText()},handleTextFocus:function(){this.isFocussed=!0},handleTextBlur:function(){this.isFocussed=!1}})}();var Pitch=Pitch||{};!function(){"use strict";Pitch.PitchReviewView=Pitch.TemplateView.extend({initialize:function(a){a=a||{},this.setTemplate(a.template),this.$el.on("focus",".pitch-component",_.bind(this.handleTextFocus,this)),this.$el.on("input",".pitch-component",_.bind(this.handleTextInput,this)),this.$el.on("blur",".pitch-component",_.bind(this.handleTextBlur,this)),this.model.on("change",_.bind(this.handleModelChange,this)),this.focusCount=0},wordCount:function(a){return a?a.split(" ").length:0},getTemplateData:function(){if(this.templateData&&!this.modelChanged)return this.templateData;this.modelChanged=!1;var a={},b=this.wordCount(this.model.get("who"))+this.wordCount(this.model.get("what"))+this.wordCount(this.model.get("why"))+this.wordCount(this.model.get("goal")),c=Math.round(b/4);return a.pitch=this.model.toJSON(),a.component=this.pitchcomponentdata,a.analysis={wordcount:b,estseconds:c},this.templateData=a,a},handleModelChange:function(){var a,b,c;this.modelChanged=!0,0===this.focusCount&&(a=this.renderTemplate("editable-review-tpl"),this.$(".pitch-review").html(a)),b=this.renderTemplate("pitch-analysis-tpl"),this.$(".pitch-analysis").html(b),c=this.renderTemplate("pitch-mailto-tpl"),this.$(".pitch-email").html(c)},handleTextFocus:function(){++this.focusCount},handleTextInput:function(a){var b=$(a.currentTarget),c=b.attr("data-name");this.model.set(c,b.text())},handleTextBlur:function(){--this.focusCount}})}();var Pitch=Pitch||{};!function(){"use strict";Pitch.App=function(a){this.$baseEl=$(a),this.router=new Pitch.Router,this.router.on("route:introRoute",_.bind(this.handleIntroRoute,this)),this.router.on("route:pitchComponentRoute",_.bind(this.handleComponentRoute,this)),this.router.on("route:pitchReviewRoute",_.bind(this.handleReviewRoute,this)),this.router.on("route",_.bind(this.handleRoute,this)),this.$(".intro-section").html(Handlebars.Templates["intro-tpl"]()),this.pitch=this.initializePitchModel(),this.whoView=this.buildPitchComponentView("who").render(),this.whatView=this.buildPitchComponentView("what").render(),this.whyView=this.buildPitchComponentView("why").render(),this.goalView=this.buildPitchComponentView("goal").render(),this.reviewView=this.buildPitchReviewView().render()},Pitch.App.prototype={$:function(a){return this.$baseEl.find(a)},initializeSectionAnimations:function(){this.$("section").addClass("animated"),this.animationsInitialized=!0},initializePitchModel:function(){var a;if(Pitch.localStorageSupport())try{a=JSON.parse(localStorage.getItem("pitch")||"{}")}catch(b){a={}}else a={};return new Pitch.PitchModel(a)},buildPitchComponentView:function(a){var b,c;return c=$("."+a+"-section"),b=new Pitch.PitchComponentView({el:c,model:this.pitch,template:Handlebars.Templates[a+"-tpl"]||Handlebars.Templates["component-tpl"],component:{name:c.attr("data-name"),label:c.attr("data-label"),help:c.attr("data-help")}})},buildPitchReviewView:function(){var a,b;return b=$(".review-section"),a=new Pitch.PitchReviewView({el:b,model:this.pitch,template:Handlebars.Templates["review-tpl"]})},showIntroSection:function(){this.$(".intro-section").removeClass("offscreen").addClass("onscreen")},hideIntroSection:function(){this.$(".intro-section").removeClass("onscreen").addClass("offscreen")},hideAllPitchSections:function(){this.$(".pitch-container section").removeClass("expanded").addClass("collapsed")},showPitchSection:function(a){this.$("."+a+"-section").removeClass("collapsed").addClass("expanded")},handleRoute:function(){this.animationsInitialized||_.delay(_.bind(this.initializeSectionAnimations,this),300)},handleIntroRoute:function(){this.showIntroSection()},handleComponentRoute:function(a){this.hideIntroSection(),this.hideAllPitchSections(),this.showPitchSection(a)},handleReviewRoute:function(){this.hideIntroSection(),this.hideAllPitchSections(),this.showPitchSection("review")}}}();
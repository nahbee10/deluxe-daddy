(this["webpackJsonpdeluxe-daddy"]=this["webpackJsonpdeluxe-daddy"]||[]).push([[0],{37:function(e,t,a){e.exports=a(55)},42:function(e,t,a){},43:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n,r,i,s,o=a(1),l=a.n(o),c=a(12),u=a.n(c),m=(a(42),a(6)),d=a(60),p=a(61),h=a(62),f=(a(43),a(32)),v=a.n(f),g=a(2),x=a(5),b=a(8),y=a(3),E=a(4),w=a(0),M=(a(22),a(30),a(31),a(18)),S=a(26),A=(a(23),a(24),a(15)),F=a(13),_={height:5400},T="HDR",O=0,G=0,k=1,j=!0,I=!0,L=!1,z=(o.Component,a(56),a(45),a(57),{height:5400}),N=(o.Component,a(27)),C=a(28),D=a(29);a(46),a(47);function P(e,t,a){e[t]?Object.assign(e[t],a):e[t]=a}function U(){var e=w.ib.prototype.toJSON.call(this,void 0,this._serializationManager.serialize.bind(this._serializationManager));return this._serializationManager.afterSerialize.call(this._serializationManager,e),e}function R(e,t,a,n,r,i,s){var o=Math.cos(r),l=Math.sin(r);this.set(a*o,a*l,-a*(o*i+l*s)+i+e,-n*l,n*o,-n*(-l*i+o*s)+s+t,0,0,0)}["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","\tvec4 texelSpecular = texture2D( specularMap, vUv );","\ttexelSpecular = sRGBToLinear( texelSpecular );","\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","\tspecularFactor *= texelSpecular.rgb;","#endif"].join("\n"),["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );","\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","\tglossinessFactor *= texelGlossiness.a;","#endif"].join("\n"),["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb;","material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );","material.specularColor = specularFactor.rgb;"].join("\n");var B=["alphaMap","specularMap","map","emissiveMap","metalnessMap","roughnessMap","glossinessMap"],W={alphaMap:"alphamap_fragment",specularMap:"specularmap_fragment",map:"map_fragment",emissiveMap:"emissivemap_fragment",metalnessMap:"metalnessmap_fragment",roughnessMap:"roughnessmap_fragment",glossinessMap:"metalnessmap_fragment",specularMapGloss:"roughnessmap_fragment"},Y=/texture2D\( (.*Map|map), vUv \)/gm;function H(e){return"texture2D( $1, ( ".concat(X(e)," * vec3( vUv, 1. ) ).xy )")}function X(e){return"u_".concat(e,"Transform")}function J(e,t){var a=t;e["".concat(t,"Repeat")]=new w.qc(1,1),e["".concat(t,"Offset")]=new w.qc,e["".concat(t,"Center")]=new w.qc,e["".concat(t,"Rotation")]=0,e["".concat(t,"UpdateMatrix")]=function(){this.shaderUniforms[X(a)].value.setUvTransform(this["".concat(a,"Offset")].x,this["".concat(a,"Offset")].y,this["".concat(a,"Repeat")].x,this["".concat(a,"Repeat")].y,this["".concat(a,"Rotation")],this["".concat(a,"Center")].x,this["".concat(a,"Center")].y)}.bind(e)}function q(e,t){if(e.isPerMapTransformExtended)return e;e.isPerMapTransformExtended=!0,t=t||B;for(var a={},n={},r=[],i=0;i<t.length;i++){var s=t[i];if(void 0!==e[s]){J(e,s);var o={value:new w.kb,type:"mat3",stage:"fragment"};o.value.setUvTransform=R.bind(o.value),a[X(s)]=o;var l=s;e.isSpecGlossExtended&&"specularMap"===s&&(l="specularMapGloss"),r.push(s);var c=W[l],u=e.shaderIncludes&&e.shaderIncludes[c]||w.ac[c];u=u.replace(Y,H(s)),n[c]=u}}return P(e,"shaderUniforms",a),P(e,"shaderIncludes",n),e._serializationManager||(e._serializationManager=new Z),e._serializationManager.addFunction(function(t,a){return t.metadata.extensions||(t.metadata.extensions={}),t.metadata.extensions.isPerMapTransformExtended=!0,r.forEach((function(a){t["".concat(a,"Repeat")]=e["".concat(a,"Repeat")].toArray(),t["".concat(a,"Offset")]=e["".concat(a,"Offset")].toArray(),t["".concat(a,"Center")]=e["".concat(a,"Center")].toArray(),t["".concat(a,"Rotation")]=e["".concat(a,"Rotation")]})),t}.bind(e)),e._serializationManager.addAfterFunction((function(e){delete e.roughnessMap,delete e.roughness,delete e.metalnessMap,delete e.metalness})),e.toJSON=U.bind(e),e}function Z(){this.processFunctions=[],this.afterFunctions=[]}function V(e,t,a){e[t]?Object.assign(e[t],a):e[t]=a}function $(){var e=w.ib.prototype.toJSON.call(this,void 0,this._serializationManager.serialize.bind(this._serializationManager));return this._serializationManager.afterSerialize.call(this._serializationManager,e),e}Z.prototype={addFunction:function(e){this.processFunctions.push(e)},serialize:function(e,t){return this.processFunctions.forEach((function(t){return t(e)})),e},afterSerialize:function(e){this.afterFunctions.forEach((function(t){return t(e)}))},addAfterFunction:function(e){this.afterFunctions.push(e)}};var K={roughnessmap_fragment:["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","\tvec4 texelSpecular = texture2D( specularMap, vUv );","\ttexelSpecular = sRGBToLinear( texelSpecular );","\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","\tspecularFactor *= texelSpecular.rgb;","#endif"].join("\n"),metalnessmap_fragment:["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );","\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","\tglossinessFactor *= texelGlossiness.a;","#endif"].join("\n"),lights_physical_fragment:["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb;","material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );","material.specularColor = specularFactor.rgb;"].join("\n")};function Q(e){if(console.log("gloss"),e.isSpecGlossExtended)return e;e.isSpecGlossExtended=!0;var t={specular:{value:(new w.n).setHex(16777215),type:"vec3",stage:"fragment"},glossiness:{value:1,type:"float",stage:"fragment"},glossinessMap:{value:null,type:"sampler2D",stage:"fragment"},specularMap:{value:null,type:"sampler2D",stage:"fragment"}},a=Object.assign({},K);V(e,"shaderUniforms",t),V(e,"shaderIncludes",a),V(e,"defines",{USE_GLOSSINESSMAP:""}),delete e.metalnessMap,delete e.roughnessMap;var n=function(a){Object.defineProperty(e,a,{get:function(){return t[a].value},set:function(e){return t[a].value=e}})};for(var r in t)n(r);e._serializationManager||(e._serializationManager=new ee);var i=function(e,t){e.metadata.extensions||(e.metadata.extensions={}),e.metadata.extensions.isSpecGlossExtended=!0,e.glossiness=this.glossiness,e.specular=this.specular.getHex(),this.glossinessMap&&this.glossinessMap.isTexture&&(e.glossinessMap=this.glossinessMap.toJSON(t).uuid)}.bind(e);return e._serializationManager.addFunction(i),e.toJSON=$.bind(e),e}function ee(){this.processFunctions=[],this.afterFunctions=[]}function te(e,t,a){e[t]?Object.assign(e[t],a):e[t]=a}function ae(){var e=w.ib.prototype.toJSON.call(this,void 0,this._serializationManager.serialize.bind(this._serializationManager));return this._serializationManager.afterSerialize.call(this._serializationManager,e),e}ee.prototype={addFunction:function(e){this.processFunctions.push(e)},serialize:function(e,t){return this.processFunctions.forEach((function(t){return t(e)})),e},afterSerialize:function(e){this.afterFunctions.forEach((function(t){return t(e)}))},addAfterFunction:function(e){this.afterFunctions.push(e)}};["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","\tvec4 texelSpecular = texture2D( specularMap, vUv );","\ttexelSpecular = sRGBToLinear( texelSpecular );","\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","\tspecularFactor *= texelSpecular.rgb;","#endif"].join("\n"),["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );","\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","\tglossinessFactor *= texelGlossiness.a;","#endif"].join("\n"),["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb;","material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );","material.specularColor = specularFactor.rgb;"].join("\n");function ne(){this.processFunctions=[],this.afterFunctions=[]}function re(e,t,a){e[t]?Object.assign(e[t],a):e[t]=a}function ie(){var e=w.ib.prototype.toJSON.call(this,void 0,this._serializationManager.serialize.bind(this._serializationManager));return this._serializationManager.afterSerialize.call(this._serializationManager,e),e}ne.prototype={addFunction:function(e){this.processFunctions.push(e)},serialize:function(e,t){return this.processFunctions.forEach((function(t){return t(e)})),e},afterSerialize:function(e){this.afterFunctions.forEach((function(t){return t(e)}))},addAfterFunction:function(e){this.afterFunctions.push(e)}};["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","\tvec4 texelSpecular = texture2D( specularMap, vUv );","\ttexelSpecular = sRGBToLinear( texelSpecular );","\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","\tspecularFactor *= texelSpecular.rgb;","#endif"].join("\n"),["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );","\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","\tglossinessFactor *= texelGlossiness.a;","#endif"].join("\n"),["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb;","material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );","material.specularColor = specularFactor.rgb;"].join("\n");function se(){this.processFunctions=[],this.afterFunctions=[]}se.prototype={addFunction:function(e){this.processFunctions.push(e)},serialize:function(e,t){return this.processFunctions.forEach((function(t){return t(e)})),e},afterSerialize:function(e){this.afterFunctions.forEach((function(t){return t(e)}))},addAfterFunction:function(e){this.afterFunctions.push(e)}};var oe=a(36),le=a(33),ce=a(34),ue=a(17),me=a(25),de=a.n(me),pe="IDLE",he="LOADING",fe="SUCCESS",ve="ERROR";function ge(e){var t=l.a.useState(pe),a=Object(ue.a)(t,2),n=a[0],r=a[1],i=l.a.useState(null),s=Object(ue.a)(i,2),o=s[0],c=s[1],u=l.a.useState(null),m=Object(ue.a)(u,2),d=m[0],p=m[1];return{subscribe:l.a.useCallback((function(t){var a=function(e){return Object.keys(e).map((function(t){return t+"="+e[t]})).join("&")}(t),n=e.replace("/post?","/post-json?")+"&"+a;c(null),r(he),de()(n,{param:"c"},(function(e,t){console.log(e),console.log(t.msg),e?(r(ve),c(e)):"success"!==t.result?(r(ve),c(t.msg)):(r(fe),p(t.msg))}))})),status:n,error:o,value:d}}var xe=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(e){return Object(g.a)(this,a),t.call(this,e)}return Object(x.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null)}}]),a}(l.a.Component),be=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(e){var n;Object(g.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(b.a)(n));var r="none",i="none",s="none",o="none";return console.log(n.props.name),"default"==n.props.name?r="inherit":"already"==n.props.name||"noat"==n.props.name?i="inherit":"domain"==n.props.name?s="inherit":"empty"==n.props.name?o="inherit":r="inherit",n.state={display:"inherit",displayForm:"none",defaultErrorMsg:r,noatErrorMsg:"none",alreadyErrorMsg:i,domainErrorMsg:s,emptyErrorMsg:o},n}return Object(x.a)(a,[{key:"componentDidMount",value:function(){}},{key:"handleSubmit",value:function(e){this.setState({display:"none",displayForm:"inherit"})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(Ee,null,(function(t){return l.a.createElement("div",{className:"forForm",style:{display:e.state.displayForm}},t)})),l.a.createElement("div",{className:"error",style:{display:this.state.display}},l.a.createElement("div",{className:"errorMsg",style:{display:this.state.defaultErrorMsg}},l.a.createElement("span",{className:"errorTitle"},"Error!"),l.a.createElement("br",null),l.a.createElement("br",null),"\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",l.a.createElement("br",null),"\ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",l.a.createElement("br",null),l.a.createElement("button",{className:"inputButton",onClick:this.handleSubmit},"ok")),l.a.createElement("div",{className:"errorMsg",style:{display:this.state.noatErrorMsg}},l.a.createElement("span",{className:"errorTitle"},"Error!"),l.a.createElement("br",null),l.a.createElement("br",null),"\uc720\ud6a8\ud55c \uc774\uba54\uc77c \uc8fc\uc18c\uac00 \uc544\ub2d9\ub2c8\ub2e4.",l.a.createElement("br",null),"\ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",l.a.createElement("br",null),l.a.createElement("button",{className:"inputButton",onClick:this.handleSubmit},"ok")),l.a.createElement("div",{className:"errorMsg",style:{display:this.state.alreadyErrorMsg}},l.a.createElement("span",{className:"errorTitle"},"Error!"),l.a.createElement("br",null),l.a.createElement("br",null),"\uc774\ubbf8 \ub4f1\ub85d\ub41c \uc8fc\uc18c\uc785\ub2c8\ub2e4.",l.a.createElement("br",null),l.a.createElement("button",{className:"inputButton",onClick:this.handleSubmit},"ok")),l.a.createElement("div",{className:"errorMsg",style:{display:this.state.domainErrorMsg}},l.a.createElement("span",{className:"errorTitle"},"Error!"),l.a.createElement("br",null),l.a.createElement("br",null),"\uc720\ud6a8\ud55c \uc774\uba54\uc77c \uc8fc\uc18c\uac00 \uc544\ub2d9\ub2c8\ub2e4.",l.a.createElement("br",null),"\ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",l.a.createElement("br",null),l.a.createElement("button",{className:"inputButton",onClick:this.handleSubmit},"ok")),l.a.createElement("div",{className:"errorMsg",style:{display:this.state.emptyErrorMsg}},l.a.createElement("span",{className:"errorTitle"},"Error!"),l.a.createElement("br",null),l.a.createElement("br",null),"\uc774\ub984\uacfc \uc774\uba54\uc77c \uc8fc\uc18c\ub97c \ubaa8\ub450 \uc785\ub825\ud574\uc8fc\uc138\uc694.",l.a.createElement("br",null),l.a.createElement("button",{className:"inputButton",onClick:this.handleSubmit},"ok"))))}}]),a}(l.a.Component),ye=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(b.a)(n)),n.state={display:"inherit"},n}return Object(x.a)(a,[{key:"componentDidMount",value:function(){}},{key:"handleSubmit",value:function(e){this.setState({display:"none"})}},{key:"render",value:function(){return l.a.createElement("div",{className:"error",style:{display:this.state.display}},l.a.createElement("div",{className:"errorMsg"},l.a.createElement("span",{className:"errorTitle"},"Success"),l.a.createElement("br",null),l.a.createElement("br",null),"\uc218\uac15\uc2e0\uccad\uc774 \uc644\ub8cc \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",l.a.createElement("br",null),"2021\ub144 1\uc6d4\ubd80\ud130 \uc2dc\uc791\ub420 \ub300\ub514 \ub9c8\uc2a4\ud130 \ud074\ub798\uc2a4\uc758 \uc18c\uc2dd\uc744 \uae30\ub2e4\ub824\uc8fc\uc138\uc694.",l.a.createElement("br",null),l.a.createElement("button",{className:"inputButton",onClick:this.handleSubmit},"ok")))}}]),a}(l.a.Component);var Ee=function(e){return(0,e.children)(function(){var e=l.a.useState({firstName:"",email:""}),t=Object(ue.a)(e,2),a=t[0],n=t[1],r=ge("https://gmail.us7.list-manage.com/subscribe/post?u=7247676ecb0306e26c5320a78&amp;id=2a8a1ad9a4"),i=r.subscribe,s=r.status,o=r.error,c=r.value,u=function(e){var t=e.target,a=t.name,r=t.value;n((function(e){return Object(ce.a)({},e,Object(m.a)({},a,r))}))};if("LOADING"===s)return l.a.createElement(xe,null);if("ERROR"===s){if(void 0!=o)return o.includes("An email address must contain")?(console.log("heheh"),l.a.createElement(be,{name:"noat"})):o.includes("The domain portion of the email address is invalid")?(console.log("heheh2"),l.a.createElement(be,{name:"domain"})):o.includes("already subscribed")?(console.log("heheh3",c),l.a.createElement(be,{name:"already"})):(console.log("wherer"),l.a.createElement(be,{name:"default"}));console.log("wherer2")}return"SUCCESS"===s?l.a.createElement(ye,null):l.a.createElement("div",null,l.a.createElement("form",{className:"form",style:{display:"inherit"},onSubmit:function(e){e.preventDefault()},autocomplete:"off"},l.a.createElement("input",{id:"firstName",name:"firstName",placeholder:"name",onChange:u,className:"input"}),l.a.createElement("br",null),l.a.createElement("input",{className:"input",id:"email",name:"email",placeholder:"email",onChange:u}),l.a.createElement("br",null),l.a.createElement("button",{className:"inputButton",onClick:function(){""!==a.firstName&&""!==a.email&&i({FNAME:a.firstName,EMAIL:a.email})}},"Subscribe")))}())},we=128,Me=1500,Se={},Ae=["spermtank","naheerun","ospapax","oogenesis","what","cybersecurity","naheerunH"],Fe=["would u b my sperm tank?","nahee.app run daddy.app","ospapax","oo-genesis","what is daddy residency?","cybersecurity4uterus","nahee.app run daddy.app"],_e=["https://www.youtube.com/embed/IDKXWiDn3ZU","https://www.youtube.com/embed/3aWj_jF-htA","https://www.youtube.com/embed/L2EGFM_asxo","https://www.youtube.com/embed/IJ23D1M_Hp8","https://www.youtube.com/embed/efzO_lpcyY4","https://www.youtube.com/embed/-d-agXX5Z1I","https://www.youtube.com/embed/3aWj_jF-htA"],Te=!1,Oe=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).sceneSetup=function(){var e=window.innerWidth,t=window.innerHeight;(Te=!(e>=t))?(we=64,Me=1e3):(we=128,Me=1500),n.scene=new w.Zb,n.intersectsScene=new w.Zb,n.mouseX=0,n.mouseY=0,n.targetX=0,n.targetY=0,n.clock=new w.m,n.camera=new w.Db(27,window.innerWidth/window.innerHeight,1,1e4),n.camera.position.z=1200;var a=new w.z(16777215,4);a.position.set(100,260,160),n.scene.add(a);var r=new w.c(2236962);n.scene.add(r),n.renderer=new w.vc,n.renderer.physicallyCorrectLights=!0,n.renderer.outputEncoding=w.wc,n.renderer.setPixelRatio(window.devicePixelRatio),n.renderer.setSize(window.innerWidth,window.innerHeight),n.interaction=new le.a(n.renderer,n.intersectsScene,n.camera),n.stats=new F.a,n.offsetAttArr=[],n.scaleAttArr=[];var i=4*we;n.matrixArray=[new Float32Array(i),new Float32Array(i),new Float32Array(i),new Float32Array(i)],n.matrixAttributeArray=[],n.matrixArray2=[new Float32Array(i),new Float32Array(i),new Float32Array(i),new Float32Array(i)],n.matrixAttributeArray2=[],n.matrixArray3=[new Float32Array(i),new Float32Array(i),new Float32Array(i),new Float32Array(i)],n.matrixAttributeArray3=[],n.matrixArray4=[new Float32Array(i),new Float32Array(i),new Float32Array(i),new Float32Array(i)],n.matrixAttributeArray4=[],n.matrixArray5=[new Float32Array(i),new Float32Array(i),new Float32Array(i),new Float32Array(i)],n.matrixAttributeArray5=[],Te?(n.initInstanceAttributesExtended(400,200,200,200,n.matrixArray,n.matrixAttributeArray,n.mesh,1),n.initInstanceAttributesExtended(400,120,200,50,n.matrixArray2,n.matrixAttributeArray2,n.mesh2,2),n.initInstanceAttributesExtended(300,100,320,100,n.matrixArray3,n.matrixAttributeArray3,n.mesh3,3),n.initInstanceAttributesExtended(400,120,50,120,n.matrixArray4,n.matrixAttributeArray4,n.mesh4,4)):(n.initInstanceAttributesExtended(300,150,150,150,n.matrixArray,n.matrixAttributeArray,n.mesh,1),n.initInstanceAttributesExtended(500,100,300,300,n.matrixArray2,n.matrixAttributeArray2,n.mesh2,2),n.initInstanceAttributesExtended(600,200,200,200,n.matrixArray3,n.matrixAttributeArray3,n.mesh3,3),n.initInstanceAttributesExtended(500,0,250,150,n.matrixArray4,n.matrixAttributeArray4,n.mesh4,4)),n.initTexture(),n.initBall(),n.loadGLTF(),n.loadGLTF2(),n.startAnimationLoop(),n.el.appendChild(n.renderer.domElement),document.addEventListener("mousemove",n.onDocumentMouseMove,!1)},n.loadGLTF=function(){var e=Object(b.a)(n);n.loader=new N.a;var t=new D.a;t.setDecoderPath("three/examples/js/libs/draco/gltf/"),n.loader.setDRACOLoader(t);var a=new C.a;n.loader.setDDSLoader(a);var r=performance.now();n.loader.load("textures/papa.gltf",(function(t){e.gltf=t;var a=e.gltf.scene;console.info("Load time: "+(performance.now()-r).toFixed(2)+" ms."),a.traverse((function(t){t.material&&(t.material.isMeshStandardMaterial||t.material.isShaderMaterial&&void 0!==t.material.envMap)&&(t.material.envMap=e.envMap,t.material.needsUpdate=!0)})),a.traverse((function(e){})),a.rotation.y-=Math.PI,e.scene.add(a);var n=Me;e.meshGLTF=a.children[0],e.meshGLTF.frustumCulled=!1,e.meshGLTF.geometry.scale(n,n,n),e.materialGLTF=e.meshGLTF.material,q(e.materialGLTF),e.applyInstancingToMeshExtended(e.meshGLTF,2),e.meshArr[5]=e.meshGLTF}),void 0,(function(e){console.error(e)}))},n.loadGLTF2=function(){var e=Object(b.a)(n);n.loader=new N.a;var t=new D.a;t.setDecoderPath("three/examples/js/libs/draco/gltf/"),n.loader.setDRACOLoader(t);var a=new C.a;n.loader.setDDSLoader(a);var r=performance.now();n.loader.load("textures/hey/papa.gltf",(function(t){e.gltf2=t;var a=e.gltf2.scene;console.info("Load time: "+(performance.now()-r).toFixed(2)+" ms."),a.traverse((function(t){t.material&&(t.material.isMeshStandardMaterial||t.material.isShaderMaterial&&void 0!==t.material.envMap)&&(t.material.envMap=e.envMap,t.material.needsUpdate=!0)})),a.traverse((function(e){})),a.rotation.y-=Math.PI,e.scene.add(a);var n=Me;e.meshGLTF2=a.children[0],e.meshGLTF2.frustumCulled=!1,e.meshGLTF2.geometry.scale(n,n,n),e.meshArr[6]=e.meshGLTF2,e.materialGLTF2=e.meshGLTF2.material,q(e.materialGLTF2),e.applyInstancingToMeshExtended(e.meshGLTF2,4)}),void 0,(function(e){console.error(e)}))},n.initTexture=function(){var e=Object(b.a)(n);n.texture=(new w.kc).load("textures/mat/naheerun_mat.png"),n.texture.wrapS=n.texture.wrapT=w.Yb,n.texture.name="texture",n.texture3=(new w.kc).load("textures/mat/ospapax_mat.png"),n.texture3.wrapS=n.texture3.wrapT=w.Yb,n.texture3.name="texture3",n.texture4=(new w.kc).load("textures/mat/oogenesis_mat.png"),n.texture4.wrapS=n.texture4.wrapT=w.Yb,n.texture4.name="texture4",n.texture5=(new w.kc).load("textures/mat/what_mat.png"),n.texture5.wrapS=n.texture5.wrapT=w.Yb,n.texture5.name="texture5",n.texture6=(new w.kc).load("textures/mat/spermtank_mat.png"),n.texture6.wrapS=n.texture6.wrapT=w.Yb,n.texture6.name="texture6",n.envMap=(new w.kc).load("textures/pp_new_2.jpg",(function(t){t.mapping=w.B,t.encoding=w.wc,e.mesh&&(e.material.needsUpdate=!0),e.meshGLTF&&(e.materialGLTF.needsUpdate=!0),e.meshGLTF2&&(e.materialGLTF2.needsUpdate=!0)})),n.envMap.name="envMap"},n.initBall=function(){n.material=Q(new w.sb({envMap:n.envMap,map:n.texture6})),n.material2=Q(new w.sb({envMap:n.envMap,map:n.texture})),n.material3=Q(new w.sb({envMap:n.envMap,map:n.texture3})),n.material4=Q(new w.sb({envMap:n.envMap,map:n.texture4})),n.material5=Q(new w.sb({envMap:n.envMap,map:n.texture5})),q(n.material),n.mesh=new w.mb(new w.fc(8),n.material),n.mesh2=new w.mb(new w.fc(8),n.material2),n.mesh3=new w.mb(new w.fc(8),n.material3),n.mesh4=new w.mb(new w.fc(8),n.material4),n.mesh5=new w.mb(new w.fc(8),n.material5),n.meshArr=[n.mesh,n.mesh2,n.mesh3,n.mesh4,n.mesh5],n.mesh.material.needsUpdate=!0,n.mesh2.material.needsUpdate=!0,n.mesh3.material.needsUpdate=!0,n.mesh4.material.needsUpdate=!0,n.mesh5.material.needsUpdate=!0,n.scene.add(n.mesh),n.scene.add(n.mesh2),n.scene.add(n.mesh3),n.scene.add(n.mesh4),n.mesh5.rotation.y-=Math.PI,n.scene.add(n.mesh5),n.material.glossinessMap=n.texture,n.applyInstancingToMeshExtended(n.mesh,1),n.applyInstancingToMeshExtended(n.mesh2,2),n.applyInstancingToMeshExtended(n.mesh3,3),n.applyInstancingToMeshExtended(n.mesh4,4),n.applyInstancingToMeshExtended(n.mesh5,3)},n.initInstanceAttributesExtended=function(e,t,a,r,i,s,o,l){for(var c=[],u=[],m=0;m<=3;m++)u.push(0);for(var d=0;d<10;d++){c.push(new w.sc(Math.random()*e-t,Math.random()*e-a,Math.random()*e-r,-100));var p=(d+1)/7;u.push(w.jb.clamp(p,0,1))}for(var h=new oe.a(3,u,c).getSpacedPoints(we),f=new Float32Array(3*we),v=new Float32Array(1*we),g=Object(b.a)(n),x=[],y=[],E=[],M=0,S=we;M<S;M++){var A,F=new w.mb(new w.fc(12));F.userData.index=M;var _=3*M;f[_]=h[M].x,f[_+1]=h[M].y,f[_+2]=h[M].z,F.position.x=h[M].x,F.position.y=h[M].y,F.position.z=h[M].z,v[M]=1+.5*Math.sin(32*Math.PI*M/we),F.scale.x=v[M],F.scale.y=v[M],F.scale.z=v[M],n.intersectsScene.add(F),F.cursor="pointer",F.on("click",(function(e){g.goEventClicked(e,g.meshArr[l-1],l-1)})),F.on("mouseover",(function(e){g.goEvent(e,g.meshArr[l-1])})),F.on("mouseout",(function(e){g.goEvent2(e,g.meshArr[l-1])})),2==l&&((A=F.clone()).position.x*=-1,A.position.z*=-1,x.push(A),A.cursor="pointer",A.on("click",(function(e){g.goEventClicked(e,g.meshArr[5],5)})),A.on("mouseover",(function(e){g.goEvent(e,g.meshArr[5])})),A.on("mouseout",(function(e){g.goEvent2(e,g.meshArr[5])}))),4==l&&((A=F.clone()).position.x*=-1,A.position.z*=-1,y.push(A),A.cursor="pointer",A.on("click",(function(e){g.goEventClicked(e,g.meshArr[6],6)})),A.on("mouseover",(function(e){g.goEvent(e,g.meshArr[6])})),A.on("mouseout",(function(e){g.goEvent2(e,g.meshArr[6])}))),3==l&&((A=F.clone()).position.x*=-1,A.position.z*=-1,E.push(A),A.cursor="pointer",A.on("click",(function(e){g.goEventClicked(e,g.meshArr[4],4)})),A.on("mouseover",(function(e){g.goEvent(e,g.meshArr[4])})),A.on("mouseout",(function(e){g.goEvent2(e,g.meshArr[4])}))),F.updateMatrixWorld()}for(M=0;M<256;M++)n.intersectsScene.add(E[M]);for(M=0;M<256;M++)n.intersectsScene.add(x[M]);for(M=0;M<256;M++)n.intersectsScene.add(y[M]);n.intersectsScene.updateMatrixWorld(!0),n.instanceOffsetAttribute2=new w.O(f,3),n.instanceScaleAttribute2=new w.O(v,1),n.offsetAttArr[l-1]=n.instanceOffsetAttribute2,n.scaleAttArr[l-1]=n.instanceScaleAttribute2},n.applyInstancingToMeshExtended=function(e,t){for(var a=new Float32Array(we),r=0,i=we;r<i;r++)a[r]=r/we;e.geometry.addAttribute("aIndex",new w.O(a,1));var s={value:0,type:"float",stage:"vertex"};e.material.userData.uTime=s,Object.defineProperty(e.material,"time",{get:function(){return s.value},set:function(e){return s.value=e}});var o={value:1.5,type:"float",stage:"vertex"};e.material.userData.uScale=o,Object.defineProperty(e.material,"scale",{get:function(){return o.value},set:function(e){return o.value=e}});var l={value:!1,type:"boolean"};Object.defineProperty(e,"selected",{get:function(){return l.value},set:function(e){return l.value=e}}),function(e){if(e.isSimpleInstanceExtended)return e;e.isSimpleInstanceExtended=!0;var t={begin_vertex:"\n\t\t\t".concat(w.ac.begin_vertex,"\n\t\t\t").concat("\n\ttransformed *= instanceScale; //the value present in transformed is in model space, \n\ttransformed = transformed + instanceOffset;\n","\n\t\t")};e.onBeforeCompile=function(t){t.uniforms.uTime=e.userData.uTime,t.uniforms.uScale=e.userData.uScale,t.vertexShader="\n\t\tattribute vec3 instanceOffset;\n\t\t\tattribute float instanceScale;\n\n\t\t#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n// instanced\nattribute float aIndex;\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nuniform float uTime;\nuniform float uScale;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t// instanced\n\t\t\t\tfloat _ind = aIndex + uTime;\n\t\t\ttransformed *= uScale + .5 * sin(24.0 * 3.14 * _ind )+ cos(2. * 3.14 * _ind );\n\t\t\t//transformed *= instanceScale;\n\t\t\t\ttransformed = transformed + instanceOffset;\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n\t\t"},re(e,"shaderIncludes",t),e._serializationManager||(e._serializationManager=new se),e._serializationManager.addFunction((function(e){e.metadata.extensions||(e.metadata.extensions={}),e.metadata.extensions.isSimpleInstanceExtended=!0})),e.toJSON=ie.bind(e)}(e.material),e.customDepthMaterial=function(e){if(e.isSimpleInstanceExtended)return e;e.isSimpleInstanceExtended=!0;var t={begin_vertex:"\n\t\t\t".concat(w.ac.begin_vertex,"\n\t\t\t").concat("\n\ttransformed *= instanceScale; //the value present in transformed is in model space, \n\ttransformed = transformed + instanceOffset;\n","\n\t\t")};return e.onBeforeCompile=function(t){t.uniforms.uTime=e.userData.uTime,t.vertexShader="\n\t\tattribute vec3 instanceOffset;\n\t\t\tattribute float instanceScale;\n\t\t\t#include <common>\n\t\t\t#include <uv_pars_vertex>\n\t\t\tattribute float aIndex;\n\t\t\t#include <displacementmap_pars_vertex>\n\t\t\t#include <morphtarget_pars_vertex>\n\t\t\t#include <skinning_pars_vertex>\n\t\t\t#include <logdepthbuf_pars_vertex>\n\t\t\t#include <clipping_planes_pars_vertex>\n\t\t\tvarying vec2 vHighPrecisionZW;\n\t\t\tuniform float uTime;\n\t\t\tvoid main() {\n\t\t\t\t#include <uv_vertex>\n\t\t\t\t#include <skinbase_vertex>\n\t\t\t\t#ifdef USE_DISPLACEMENTMAP\n\t\t\t\t\t#include <beginnormal_vertex>\n\t\t\t\t\t#include <morphnormal_vertex>\n\t\t\t\t\t#include <skinnormal_vertex>\n\t\t\t\t#endif\n\t\t\t\t#include <begin_vertex>\n\t\t\t\t// instanced\n\t\t\t\tfloat _ind = aIndex + uTime;\n\t\t\t\ttransformed *= 1. + 0.5 * sin(24.0 * 3.14 * _ind );\n\t\t\t\ttransformed = transformed + instanceOffset;\n\t\t\t\t#include <morphtarget_vertex>\n\t\t\t\t#include <skinning_vertex>\n\t\t\t\t#include <displacementmap_vertex>\n\t\t\t\t#include <project_vertex>\n\t\t\t\t#include <logdepthbuf_vertex>\n\t\t\t\t#include <clipping_planes_vertex>\n\t\t\t\tvHighPrecisionZW = gl_Position.zw;\n\t\t\t}\n\t\t"},te(e,"shaderIncludes",t),e._serializationManager||(e._serializationManager=new ne),e._serializationManager.addFunction((function(e){e.metadata.extensions||(e.metadata.extensions={}),e.metadata.extensions.isSimpleInstanceExtended=!0})),e.toJSON=ae.bind(e),e}(new w.ob({depthPacking:w.Lb})),e.material.needsUpdate=!0,e.geometry=(new w.P).copy(e.geometry),e.geometry.instanceCount=we,e.geometry.setAttribute("instanceOffset",n.offsetAttArr[t-1]),e.geometry.setAttribute("instanceScale",n.scaleAttArr[t-1]),e.customDepthMaterial.userData={uTime:e.material.userData.uTime}},n.onDocumentMouseMove=function(e){var t=window.innerWidth/2,a=window.innerHeight/2,r=Object(b.a)(n);r.mouseX=(e.clientX-t)/2,r.mouseY=(e.clientY-a)/2},n.goEvent=function(e,t){},n.goEvent2=function(e,t){},n.goEventClicked=function(e,t,a){console.log("oh clicked2",Ae[a]),n.setState({display:"inherit",uterusImg:"/textures/mat/"+Ae[a]+"_mat.png",projectTitle:Fe[a],projectLink:_e[a]})},n.startAnimationLoop=function(){n.targetX=.001*n.mouseX,n.targetY=.001*n.mouseY;var e=.01*n.clock.getDelta()*1;if(n.mesh){n.mesh.rotation.y+=.05*(n.targetX-n.mesh.rotation.y),n.mesh.rotation.x+=.05*(n.targetY-n.mesh.rotation.x),n.mesh.material.time+=e,n.mesh.selected,n.mesh.material.userData.uTime.value=n.mesh.material.time,n.mesh.material.needsUpdate=!0;for(var t=0,a=we;t<a;t++){var r=n.intersectsScene.children[t],i=1.5+1*Math.sin(24*Math.PI*n.mesh.material.time);r.scale.x=i,r.scale.y=i,r.scale.z=i,r.updateMatrixWorld()}}if(n.mesh4){n.mesh4.rotation.y+=.05*(n.targetX-n.mesh4.rotation.y),n.mesh4.rotation.x+=.05*(n.targetY-n.mesh4.rotation.x),n.mesh4.material.time+=e,n.mesh4.material.userData.uTime.value=n.mesh4.material.time,n.mesh4.material.needsUpdate=!0;for(t=0,a=we;t<a;t++){r=n.intersectsScene.children[t+3*we],i=1.5+1*Math.sin(24*Math.PI*n.mesh4.material.time);r.scale.x=i,r.scale.y=i,r.scale.z=i,r.updateMatrixWorld()}}if(n.mesh5){n.mesh5.rotation.y+=.05*(n.targetX-n.mesh5.rotation.y),n.mesh5.rotation.x+=.05*(n.targetY-n.mesh5.rotation.x),n.mesh5.rotation.y=n.mesh3.rotation.y+Math.PI,n.mesh5.material.time+=e,n.mesh5.material.userData.uTime.value=n.mesh5.material.time,n.mesh5.material.needsUpdate=!0;for(t=0,a=we;t<a;t++){r=n.intersectsScene.children[t+4*we],i=1.5+1*Math.sin(24*Math.PI*n.mesh5.material.time);r.scale.x=i,r.scale.y=i,r.scale.z=i,r.updateMatrixWorld()}}if(n.mesh2){n.mesh2.rotation.y+=.05*(n.targetX-n.mesh2.rotation.y),n.mesh2.rotation.x+=.05*(n.targetY-n.mesh2.rotation.x),n.mesh2.material.time+=e,n.mesh2.material.userData.uTime.value=n.mesh2.material.time,n.mesh2.material.needsUpdate=!0;for(t=0,a=we;t<a;t++){r=n.intersectsScene.children[t+we],i=1.5+1*Math.sin(24*Math.PI*n.mesh2.material.time);r.scale.x=i,r.scale.y=i,r.scale.z=i,r.updateMatrixWorld()}}if(n.mesh3){n.mesh3.rotation.y+=.05*(n.targetX-n.mesh3.rotation.y),n.mesh3.rotation.x+=.05*(n.targetY-n.mesh3.rotation.x),n.mesh3.material.time+=e,n.mesh3.material.userData.uTime.value=n.mesh3.material.time,n.mesh3.material.needsUpdate=!0;for(t=0,a=we;t<a;t++){r=n.intersectsScene.children[t+2*we],i=1.5+1*Math.sin(24*Math.PI*n.mesh3.material.time);r.scale.x=i,r.scale.y=i,r.scale.z=i,r.updateMatrixWorld()}}if(n.meshGLTF){n.meshGLTF.rotation.y+=.05*(n.targetX-n.meshGLTF.rotation.y),n.meshGLTF.rotation.x+=.05*(n.targetY-n.meshGLTF.rotation.x),n.meshGLTF.material.time+=e;for(t=0,a=we;t<a;t++){r=n.intersectsScene.children[t+5*we],i=1.5+1.5*Math.sin(24*Math.PI*n.meshGLTF.material.time);r.scale.x=i,r.scale.y=i,r.scale.z=i,r.rotation.y-=Math.PI,r.updateMatrixWorld()}}if(n.meshGLTF2){n.meshGLTF2.rotation.y+=.05*(n.targetX-n.meshGLTF2.rotation.y),n.meshGLTF2.rotation.x+=.05*(n.targetY-n.meshGLTF2.rotation.x),n.meshGLTF2.material.time+=e;for(t=0,a=we;t<a;t++){r=n.intersectsScene.children[t+6*we],i=1.5+1.5*Math.sin(24*Math.PI*n.meshGLTF2.material.time);r.scale.x=i,r.scale.y=i,r.scale.z=i,r.updateMatrixWorld()}}n.renderer.render(n.scene,n.camera),n.stats.end(),n.requestID=window.requestAnimationFrame(n.startAnimationLoop)},n.removeModal=function(){n.setState({display:"inherit"})},n.handleWindowResize=function(){var e=n.el.clientWidth,t=n.el.clientHeight;Te?(we=64,Me=1e3):(we=128,Me=1500),n.renderer.setSize(e,t),n.camera.aspect=e/t,n.camera.updateProjectionMatrix()},n.state={display:"none",uterusImg:"/textures/mat/cybersecurity_mat.png",projectTitle:"nahee.app run daddy.app",projectLink:"https://www.youtube.com/embed/3aWj_jF-htA"},n}return Object(x.a)(a,[{key:"componentDidMount",value:function(){this.sceneSetup(),window.addEventListener("resize",this.handleWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowResize),window.cancelAnimationFrame(this.requestID)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{style:Se,ref:function(t){return e.el=t}}),l.a.createElement("div",{onClick:this.removeModal,className:"modal",style:{display:this.state.display,position:"fixed",top:"0px",left:"0px",width:window.innerWidth+"px",height:window.innerHeight+"px",background:"rgba(49,0,119,0.3)"}},l.a.createElement("div",{className:"thumbnail",style:{backgroundImage:"url("+this.state.uterusImg+")"}},"\xa0"),l.a.createElement("div",{className:"excerpt1",style:{backgroundImage:"url("+this.state.uterusImg+")"}},"\xa0"),l.a.createElement("div",{className:"thumbnail3",style:{backgroundImage:"url("+this.state.uterusImg+")"}},"\xa0"),l.a.createElement("div",{className:"thumbnail4",style:{backgroundImage:"url("+this.state.uterusImg+")"}},"\xa0"),l.a.createElement("div",{className:"thumbnail5",style:{backgroundImage:"url("+this.state.uterusImg+")"}},"\xa0"),l.a.createElement("div",{className:"thumbnail6",style:{backgroundImage:"url("+this.state.uterusImg+")"}},"\xa0"),l.a.createElement("div",{className:"thumbnail8",style:{backgroundImage:"url("+this.state.uterusImg+")"}},"\xa0"),l.a.createElement("div",{className:"thumbnail2",style:{backgroundImage:"url("+this.state.uterusImg+")"}},"\xa0"),l.a.createElement("div",{id:"container"},l.a.createElement("div",{id:"circle"},l.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"180px",height:"320px",viewBox:"0 0 360 640",enableBackground:"new 0 0 360 640",xmlSpace:"preserve"},l.a.createElement("defs",null,l.a.createElement("path",{id:"criclePath",d:"M60,320a120,240 0 1,1 240,0a120,240 0 1,1 -240,0"})),l.a.createElement("ellipse",{cx:"180",cy:"320",rx:"180",ry:"320",fill:"none"}),l.a.createElement("g",null,l.a.createElement("use",{xlinkHref:"#criclePath",fill:"none"}),l.a.createElement("text",{fill:"#fff"},l.a.createElement("textPath",{xlinkHref:"#criclePath"},this.state.projectTitle)))))),l.a.createElement("div",{className:"video"},l.a.createElement("iframe",{className:"innerVideo",width:.6*window.innerWidth,height:.36*window.innerHeight,src:this.state.projectLink,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; ",allowfullscreen:!0})),l.a.createElement("div",{className:"text"},l.a.createElement("span",{className:"innerP"},"nahee.app run daddy.app")),l.a.createElement("div",{className:"frame"},"\xa0"),l.a.createElement(Ee,null,(function(e){return l.a.createElement("div",{className:"forForm"},e)}))))}}]),a}(o.Component),Ge=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).handleEmailChange=n.handleEmailChange.bind(Object(b.a)(n)),n.handlePasswordChange=n.handlePasswordChange.bind(Object(b.a)(n)),n.state={email:"",password:""},n}return Object(x.a)(a,[{key:"componentDidMount",value:function(){}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"signIn",value:function(){this.props.onLogin(this.state.email,this.state.password)}},{key:"render",value:function(){return l.a.createElement(Ee,null,(function(e){return l.a.createElement("div",{className:"forForm"},e)}))}}]),a}(l.a.Component),ke=v()({render:function(){var e,t;return l.a.createElement(d.a,null,l.a.createElement("div",{id:"app",className:"App",style:{margin:"0px auto",height:"905px"}},l.a.createElement(o.Fragment,null,l.a.createElement(p.a,null,l.a.createElement(h.a,(e={exact:!0,path:"/"},Object(m.a)(e,"exact",!0),Object(m.a)(e,"render",(function(){return l.a.createElement(Oe,null)})),e)),l.a.createElement(h.a,(t={exact:!0,path:"/test"},Object(m.a)(t,"exact",!0),Object(m.a)(t,"render",(function(){return l.a.createElement(Ge,null)})),t))))))}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.7d41c180.chunk.js.map
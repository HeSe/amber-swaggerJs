define("amber-amberswaggerjs/Swagger-Support-Spec", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Collections", "amber_core/Kernel-Infrastructure"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Swagger-Support-Spec');
$core.packages["Swagger-Support-Spec"].innerEval = function (expr) { return eval(expr); };
$core.packages["Swagger-Support-Spec"].transport = {"type":"amd","amdNamespace":"amber-amberswaggerjs"};

$core.addClass('SwaggerApi', $globals.Object, [], 'Swagger-Support-Spec');

$globals.SwaggerApi.klass.iVarNames = ['swaggerApi'];
$core.addMethod(
$core.method({
selector: "apiDocUrl",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._subclassResponsibillity();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"apiDocUrl",{},$globals.SwaggerApi.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "apiDocUrl\x0a\x0a\x09^self subclassResponsibillity",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibillity"]
}),
$globals.SwaggerApi.klass);

$core.addMethod(
$core.method({
selector: "build",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._swaggerApi())._build();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"build",{},$globals.SwaggerApi.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "build\x0a\x0a\x09^ self swaggerApi build",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["build", "swaggerApi"]
}),
$globals.SwaggerApi.klass);

$core.addMethod(
$core.method({
selector: "initializeSwaggerInterfaceFor:",
protocol: 'not yet classified',
fn: function (anUI){
"use strict";

var self=this;
function $NativeFunction(){return $globals.NativeFunction||(typeof NativeFunction=="undefined"?nil:NativeFunction)}
function $SwaggerApi(){return $globals.SwaggerApi||(typeof SwaggerApi=="undefined"?nil:SwaggerApi)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@swaggerApi"]=$recv($NativeFunction())._constructor_value_($SwaggerApi(),$globals.HashedCollection._newFromPairs_(["url",self._apiDocUrl(),"useJQuery",true,"success",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(self._ready()).__eq(true);
if($core.assert($1)){
return $recv(anUI)._initUIAfterApi();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeSwaggerInterfaceFor:",{anUI:anUI},$globals.SwaggerApi.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anUI"],
source: "initializeSwaggerInterfaceFor: anUI\x0a\x0a  swaggerApi := NativeFunction constructor: SwaggerApi value: #{\x0a    'url' -> self apiDocUrl.\x0a\x09'useJQuery' -> true.\x0a    'success' -> [\x0a        (self ready = true) ifTrue:[ anUI initUIAfterApi ] \x0a    ]}.",
referencedClasses: ["NativeFunction", "SwaggerApi"],
//>>excludeEnd("ide");
messageSends: ["constructor:value:", "apiDocUrl", "ifTrue:", "=", "ready", "initUIAfterApi"]
}),
$globals.SwaggerApi.klass);

$core.addMethod(
$core.method({
selector: "ready",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._swaggerApi())._at_("ready");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ready",{},$globals.SwaggerApi.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ready\x0a\x0a\x09^ self swaggerApi at: 'ready'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "swaggerApi"]
}),
$globals.SwaggerApi.klass);

$core.addMethod(
$core.method({
selector: "response",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._swaggerApi())._at_("response");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"response",{},$globals.SwaggerApi.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "response\x0a\x0a\x09^ self swaggerApi at: 'response'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "swaggerApi"]
}),
$globals.SwaggerApi.klass);

$core.addMethod(
$core.method({
selector: "swaggerApi",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
var $1;
$1=self["@swaggerApi"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "swaggerApi \x0a\x0a\x09 ^swaggerApi",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SwaggerApi.klass);


$core.addClass('SwaggerApiSpecData', $globals.Object, ['data'], 'Swagger-Support-Spec');
$core.addMethod(
$core.method({
selector: "data",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
var $1;
$1=self["@data"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "data\x0a\x09\x0a \x09^data",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SwaggerApiSpecData);

$core.addMethod(
$core.method({
selector: "data:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
self["@data"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "data: anObject\x0a\x09\x0a \x09data := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SwaggerApiSpecData);

$core.addMethod(
$core.method({
selector: "emptyData",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return {};;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"emptyData",{},$globals.SwaggerApiSpecData)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "emptyData\x0a\x09\x0a\x09<return {};>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SwaggerApiSpecData);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
self["@data"]=$globals.HashedCollection._newFromPairs_([]);
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x0a \x09data :=  #{}.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SwaggerApiSpecData);


$core.addMethod(
$core.method({
selector: "emptyContent",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return {};;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"emptyContent",{},$globals.SwaggerApiSpecData.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "emptyContent\x0a\x0a\x09<return {};>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SwaggerApiSpecData.klass);

$core.addMethod(
$core.method({
selector: "onParsedJson:",
protocol: 'not yet classified',
fn: function (aJSObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._newDefault())._initializeOnParsedJson_(aJSObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onParsedJson:",{aJSObject:aJSObject},$globals.SwaggerApiSpecData.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "onParsedJson: aJSObject\x0a\x0a\x09^ self newDefault initializeOnParsedJson: aJSObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeOnParsedJson:", "newDefault"]
}),
$globals.SwaggerApiSpecData.klass);


$core.addClass('SwaggerAPISpecificationItem', $globals.SwaggerApiSpecData, [], 'Swagger-Support-Spec');
$core.addMethod(
$core.method({
selector: "initializeOnParsedJson:",
protocol: 'not yet classified',
fn: function (aJSObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._subclassResponsibility();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeOnParsedJson:",{aJSObject:aJSObject},$globals.SwaggerAPISpecificationItem)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "initializeOnParsedJson: aJSObject\x0a\x0a\x09^self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SwaggerAPISpecificationItem);

$core.addMethod(
$core.method({
selector: "nothing",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$6,$5;
self["@data"]=self._emptyData();
$1=self["@data"];
$3=".name input"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._val();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["val"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("username",$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$4=self["@data"];
$6=".email input"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._val();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["val"]=2;
//>>excludeEnd("ctx");
$recv($4)._at_put_("email",$5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv(self["@data"])._at_put_("password",$recv(".password input"._asJQuery())._val());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nothing",{},$globals.SwaggerAPISpecificationItem)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nothing\x0a\x09\x0a\x09data := self emptyData.\x0a\x09data at: 'username' put: ('.name input') asJQuery val.\x0a\x09data at: 'email' put: ('.email input') asJQuery val.\x0a\x09data at: 'password' put: ('.password input') asJQuery val.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["emptyData", "at:put:", "val", "asJQuery"]
}),
$globals.SwaggerAPISpecificationItem);


$core.addMethod(
$core.method({
selector: "jQueryFromValues:",
protocol: 'not yet classified',
fn: function (anArray){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $.map(anArray, function(el){ return new self(el);});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jQueryFromValues:",{anArray:anArray},$globals.SwaggerAPISpecificationItem.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "jQueryFromValues: anArray\x0a\x0a\x09<return $.map(anArray, function(el){ return new self(el);})>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SwaggerAPISpecificationItem.klass);

$core.addMethod(
$core.method({
selector: "newDefault",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newDefault",{},$globals.SwaggerAPISpecificationItem.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newDefault\x0a\x0a\x09^self new",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.SwaggerAPISpecificationItem.klass);


$core.addClass('SwaggerSpecApi', $globals.SwaggerAPISpecificationItem, [], 'Swagger-Support-Spec');
$core.addMethod(
$core.method({
selector: "description",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("description",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"description",{},$globals.SwaggerSpecApi)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "description   \x0a        \x0a\x09^self data at: 'description'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecApi);

$core.addMethod(
$core.method({
selector: "description:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("description",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"description:",{anObject:anObject},$globals.SwaggerSpecApi)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "description: anObject   \x0a        \x0a\x09self data at: 'description' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecApi);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SwaggerSpecApi.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self._data())._at_put_("operations",$recv($Array())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SwaggerSpecApi)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09self data at: 'operations' put: Array new.",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["initialize", "at:put:", "data", "new"]
}),
$globals.SwaggerSpecApi);

$core.addMethod(
$core.method({
selector: "initializeOnParsedJson:",
protocol: 'not yet classified',
fn: function (aJSObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._path_($recv(aJSObject)._path());
$1=$recv(aJSObject)._hasOwnProperty_("description");
if($core.assert($1)){
self._description_($recv(aJSObject)._description());
};
self._setOperations_($recv(aJSObject)._operations());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeOnParsedJson:",{aJSObject:aJSObject},$globals.SwaggerSpecApi)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "initializeOnParsedJson: aJSObject\x0a\x0a\x09self path: aJSObject path.\x0a\x09\x0a\x09(aJSObject hasOwnProperty: 'description')\x0a\x09\x09ifTrue:[ self description: aJSObject description ].\x0a\x09\x0a\x09self setOperations: aJSObject operations.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["path:", "path", "ifTrue:", "hasOwnProperty:", "description:", "description", "setOperations:", "operations"]
}),
$globals.SwaggerSpecApi);

$core.addMethod(
$core.method({
selector: "operations",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("operations",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Array())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"operations",{},$globals.SwaggerSpecApi)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "operations   \x0a        \x0a\x09^self data at: 'operations' ifAbsent:[Array new].",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data", "new"]
}),
$globals.SwaggerSpecApi);

$core.addMethod(
$core.method({
selector: "operations:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("operations",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"operations:",{anObject:anObject},$globals.SwaggerSpecApi)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "operations: anObject   \x0a        \x0a\x09self data at: 'operations' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecApi);

$core.addMethod(
$core.method({
selector: "path",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("path",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"path",{},$globals.SwaggerSpecApi)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "path   \x0a        \x0a\x09^self data at: 'path'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecApi);

$core.addMethod(
$core.method({
selector: "path:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("path",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"path:",{anObject:anObject},$globals.SwaggerSpecApi)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "path: anObject   \x0a        \x0a\x09self data at: 'path' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecApi);

$core.addMethod(
$core.method({
selector: "setOperations:",
protocol: 'not yet classified',
fn: function (anArray){
"use strict";

var self=this;
function $SwaggerSpecOperation(){return $globals.SwaggerSpecOperation||(typeof SwaggerSpecOperation=="undefined"?nil:SwaggerSpecOperation)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anArray)._addAsSwaggerClass_toArray_($SwaggerSpecOperation(),self._operations());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setOperations:",{anArray:anArray},$globals.SwaggerSpecApi)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "setOperations: anArray\x0a\x0a\x09anArray addAsSwaggerClass: SwaggerSpecOperation toArray: self operations",
referencedClasses: ["SwaggerSpecOperation"],
//>>excludeEnd("ide");
messageSends: ["addAsSwaggerClass:toArray:", "operations"]
}),
$globals.SwaggerSpecApi);


$core.addMethod(
$core.method({
selector: "fromJson:",
protocol: 'not yet classified',
fn: function (aJSON){
"use strict";

var self=this;
function $JSON(){return $globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._initializeOnParsedJson_($recv($JSON())._parse_(aJSON));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{aJSON:aJSON},$globals.SwaggerSpecApi.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSON"],
source: "fromJson: aJSON \x0a\x0a\x09^self new initializeOnParsedJson: ( JSON parse: aJSON ).",
referencedClasses: ["JSON"],
//>>excludeEnd("ide");
messageSends: ["initializeOnParsedJson:", "new", "parse:"]
}),
$globals.SwaggerSpecApi.klass);


$core.addClass('SwaggerSpecDefinition', $globals.SwaggerAPISpecificationItem, [], 'Swagger-Support-Spec');
$core.addMethod(
$core.method({
selector: "apiVersion",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("apiVersion",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"apiVersion",{},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "apiVersion \x0a\x0a\x09^self data at: 'apiVersion'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "apiVersion:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("apiVersion",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"apiVersion:",{anObject:anObject},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "apiVersion: anObject   \x0a        \x0a\x09self data at: 'apiVersion' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "apis",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("apis",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"apis",{},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "apis \x0a\x0a\x09^self data at: 'apis'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "apis:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("apis",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"apis:",{anObject:anObject},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "apis: anObject   \x0a        \x0a\x09self data at: 'apis' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "basePath",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("basePath",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basePath",{},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basePath \x0a\x0a\x09^self data at: 'basePath'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "basePath:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("basePath",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basePath:",{anObject:anObject},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "basePath: anObject   \x0a        \x0a\x09self data at: 'basePath' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "consumes",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("consumes",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"consumes",{},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "consumes \x0a\x0a\x09^self data at: 'consumes'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "consumes:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("consumes",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"consumes:",{anObject:anObject},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "consumes: anObject   \x0a        \x0a\x09self data at: 'consumes' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SwaggerSpecDefinition.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self._data();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["data"]=1;
//>>excludeEnd("ctx");
$2=$recv($Array())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("models",$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("apis",$recv($Array())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09self data at: 'models' put: Array new.\x0a\x09self data at: 'apis' put: Array new.",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["initialize", "at:put:", "data", "new"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "initializeOnParsedJson:",
protocol: 'not yet classified',
fn: function (aJSObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
self._apiVersion_($recv(aJSObject)._apiVersion());
self._swaggerVersion_($recv(aJSObject)._swaggerVersion());
self._basePath_($recv(aJSObject)._basePath());
self._resourcePath_($recv(aJSObject)._resourcePath());
self._produces_($recv(aJSObject)._produces());
$1=$recv(aJSObject)._hasOwnProperty_("name");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasOwnProperty:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
self._name_($recv(aJSObject)._name());
};
$2=$recv(aJSObject)._hasOwnProperty_("apis");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasOwnProperty:"]=2;
//>>excludeEnd("ctx");
if($core.assert($2)){
self._setApis_($recv(aJSObject)._apis());
};
$3=$recv(aJSObject)._hasOwnProperty_("models");
if($core.assert($3)){
self._setModels_($recv(aJSObject)._models());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeOnParsedJson:",{aJSObject:aJSObject},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "initializeOnParsedJson: aJSObject\x0a\x09\x22\x22\x0a\x09self apiVersion: aJSObject apiVersion.\x0a\x09self swaggerVersion: aJSObject swaggerVersion.\x0a\x09self basePath: aJSObject basePath.\x0a\x09self resourcePath: aJSObject resourcePath.\x0a\x09self produces: aJSObject produces.\x0a\x09\x0a\x09(aJSObject hasOwnProperty: 'name')\x0a\x09\x09ifTrue:[ self name: aJSObject name ].\x0a\x09\x0a\x09(aJSObject hasOwnProperty: 'apis')\x0a\x09\x09ifTrue:[ self setApis: aJSObject apis ].\x0a\x09\x09\x0a\x09(aJSObject hasOwnProperty: 'models')\x0a\x09\x09ifTrue:[ self setModels:  aJSObject models ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["apiVersion:", "apiVersion", "swaggerVersion:", "swaggerVersion", "basePath:", "basePath", "resourcePath:", "resourcePath", "produces:", "produces", "ifTrue:", "hasOwnProperty:", "name:", "name", "setApis:", "apis", "setModels:", "models"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "models",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("models",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"models",{},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "models  \x0a        \x0a\x09^self data at: 'models'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "models:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("models",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"models:",{anObject:anObject},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "models: anObject   \x0a        \x0a\x09self data at: 'models' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "name",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("name",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name",{},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09^self data at: 'name' ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "name:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("name",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name:",{anObject:anObject},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "name: anObject   \x0a        \x0a\x09self data at: 'name' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "produces",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("produces",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"produces",{},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "produces  \x0a        \x0a\x09^self data at: 'produces'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "produces:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("produces",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"produces:",{anObject:anObject},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "produces: anObject   \x0a        \x0a\x09self data at: 'produces' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "resourcePath",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("resourcePath",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resourcePath",{},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resourcePath \x0a\x0a\x09^self data at: 'resourcePath'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "resourcePath:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("resourcePath",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resourcePath:",{anObject:anObject},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "resourcePath: anObject   \x0a        \x0a\x09self data at: 'resourcePath' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "setApis:",
protocol: 'not yet classified',
fn: function (anArray){
"use strict";

var self=this;
function $SwaggerSpecApi(){return $globals.SwaggerSpecApi||(typeof SwaggerSpecApi=="undefined"?nil:SwaggerSpecApi)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anArray)._addAsSwaggerClass_toArray_($SwaggerSpecApi(),self._apis());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setApis:",{anArray:anArray},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "setApis: anArray\x0a    \x0a\x09anArray addAsSwaggerClass: SwaggerSpecApi toArray: self apis.",
referencedClasses: ["SwaggerSpecApi"],
//>>excludeEnd("ide");
messageSends: ["addAsSwaggerClass:toArray:", "apis"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "setModels:",
protocol: 'not yet classified',
fn: function (anArray){
"use strict";

var self=this;
function $SwaggerSpecModel(){return $globals.SwaggerSpecModel||(typeof SwaggerSpecModel=="undefined"?nil:SwaggerSpecModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anArray)._addAsSwaggerClass_toArray_($SwaggerSpecModel(),self._models());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setModels:",{anArray:anArray},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "setModels: anArray\x0a\x0a\x09anArray addAsSwaggerClass: SwaggerSpecModel toArray: self models.",
referencedClasses: ["SwaggerSpecModel"],
//>>excludeEnd("ide");
messageSends: ["addAsSwaggerClass:toArray:", "models"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "swaggerVersion",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("swaggerVersion",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"swaggerVersion",{},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "swaggerVersion \x0a\x0a\x09^self data at: 'swaggerVersion'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecDefinition);

$core.addMethod(
$core.method({
selector: "swaggerVersion:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("swaggerVersion",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"swaggerVersion:",{anObject:anObject},$globals.SwaggerSpecDefinition)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "swaggerVersion: anObject   \x0a        \x0a\x09self data at: 'swaggerVersion' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecDefinition);


$core.addMethod(
$core.method({
selector: "default",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
function $JSON(){return $globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._fromJson_($recv($JSON())._parse_("{\x22apiVersion\x22:\x221.0.0\x22,\x22swaggerVersion\x22:\x221.2\x22,\x22basePath\x22:\x22http://petstore.swagger.wordnik.com/api\x22,\x22resourcePath\x22:\x22/pet\x22,\x22produces\x22:[\x22application/json\x22,\x22application/xml\x22,\x22text/plain\x22,\x22text/html\x22],\x22apis\x22:[{\x22path\x22:\x22/pet/{petId}\x22,\x22operations\x22:[{\x22method\x22:\x22GET\x22,\x22summary\x22:\x22Find pet by ID\x22,\x22notes\x22:\x22Returns a pet based on ID\x22,\x22type\x22:\x22Pet\x22,\x22nickname\x22:\x22getPetById\x22,\x22parameters\x22:[{\x22name\x22:\x22petId\x22,\x22description\x22:\x22ID of pet that needs to be fetched\x22,\x22required\x22:true,\x22type\x22:\x22integer\x22,\x22format\x22:\x22int64\x22,\x22paramType\x22:\x22path\x22,\x22minimum\x22:\x221.0\x22,\x22maximum\x22:\x22100000.0\x22}],\x22responseMessages\x22:[{\x22code\x22:400,\x22message\x22:\x22Invalid ID supplied\x22},{\x22code\x22:404,\x22message\x22:\x22Pet not found\x22}]}]},{\x22path\x22:\x22/pet/findByStatus\x22,\x22operations\x22:[{\x22method\x22:\x22GET\x22,\x22summary\x22:\x22Finds Pets by status\x22,\x22notes\x22:\x22Multiple status values can be provided with comma seperated strings\x22,\x22type\x22:\x22array\x22,\x22items\x22:{\x22$ref\x22:\x22Pet\x22},\x22nickname\x22:\x22findPetsByStatus\x22,\x22parameters\x22:[{\x22name\x22:\x22status\x22,\x22description\x22:\x22Status values that need to be considered for filter\x22,\x22defaultValue\x22:\x22available\x22,\x22required\x22:true,\x22type\x22:\x22string\x22,\x22paramType\x22:\x22query\x22,\x22enum\x22:[\x22available\x22,\x22pending\x22,\x22sold\x22]}],\x22responseMessages\x22:[{\x22code\x22:400,\x22message\x22:\x22Invalid status value\x22}]}]},{\x22path\x22:\x22/pet/findByTags\x22,\x22operations\x22:[{\x22method\x22:\x22GET\x22,\x22summary\x22:\x22Finds Pets by tags\x22,\x22notes\x22:\x22Muliple tags can be provided with comma seperated strings. Use tag1, tag2, tag3 for testing.\x22,\x22type\x22:\x22array\x22,\x22items\x22:{\x22$ref\x22:\x22Pet\x22},\x22nickname\x22:\x22findPetsByTags\x22,\x22parameters\x22:[{\x22name\x22:\x22tags\x22,\x22description\x22:\x22Tags to filter by\x22,\x22required\x22:true,\x22type\x22:\x22string\x22,\x22paramType\x22:\x22query\x22}],\x22responseMessages\x22:[{\x22code\x22:400,\x22message\x22:\x22Invalid tag value\x22}],\x22deprecated\x22:\x22true\x22}]}],\x22models\x22:{\x22Tag\x22:{\x22id\x22:\x22Tag\x22,\x22properties\x22:{\x22id\x22:{\x22type\x22:\x22integer\x22,\x22format\x22:\x22int64\x22,\x22description\x22:\x22Unique identifier for the tag\x22},\x22name\x22:{\x22type\x22:\x22string\x22,\x22description\x22:\x22Friendly name for the tag\x22}}},\x22Pet\x22:{\x22id\x22:\x22Pet\x22,\x22required\x22:[\x22id\x22,\x22name\x22],\x22properties\x22:{\x22id\x22:{\x22type\x22:\x22integer\x22,\x22format\x22:\x22int64\x22,\x22description\x22:\x22Unique identifier for the Pet\x22,\x22minimum\x22:\x220.0\x22,\x22maximum\x22:\x22100.0\x22},\x22category\x22:{\x22$ref\x22:\x22Category\x22,\x22description\x22:\x22Category the pet is in\x22},\x22name\x22:{\x22type\x22:\x22string\x22,\x22description\x22:\x22Friendly name of the pet\x22},\x22photoUrls\x22:{\x22type\x22:\x22array\x22,\x22description\x22:\x22Image URLs\x22,\x22items\x22:{\x22type\x22:\x22string\x22}},\x22tags\x22:{\x22type\x22:\x22array\x22,\x22description\x22:\x22Tags assigned to this pet\x22,\x22items\x22:{\x22$ref\x22:\x22Tag\x22}},\x22status\x22:{\x22type\x22:\x22string\x22,\x22description\x22:\x22pet status in the store\x22,\x22enum\x22:[\x22available\x22,\x22pending\x22,\x22sold\x22]}}},\x22Category\x22:{\x22id\x22:\x22Category\x22,\x22properties\x22:{\x22id\x22:{\x22type\x22:\x22integer\x22,\x22format\x22:\x22int64\x22,\x22description\x22:\x22Category unique identifier\x22,\x22minimum\x22:\x220.0\x22,\x22maximum\x22:\x22100.0\x22},\x22name\x22:{\x22type\x22:\x22string\x22,\x22description\x22:\x22Name of the category\x22,\x22minimum\x22:\x220.0\x22,\x22maximum\x22:\x22100.0\x22}}}}}"));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"default",{},$globals.SwaggerSpecDefinition.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "default\x0a\x09\x0a\x09^self fromJson: ( JSON parse: '{\x22apiVersion\x22:\x221.0.0\x22,\x22swaggerVersion\x22:\x221.2\x22,\x22basePath\x22:\x22http://petstore.swagger.wordnik.com/api\x22,\x22resourcePath\x22:\x22/pet\x22,\x22produces\x22:[\x22application/json\x22,\x22application/xml\x22,\x22text/plain\x22,\x22text/html\x22],\x22apis\x22:[{\x22path\x22:\x22/pet/{petId}\x22,\x22operations\x22:[{\x22method\x22:\x22GET\x22,\x22summary\x22:\x22Find pet by ID\x22,\x22notes\x22:\x22Returns a pet based on ID\x22,\x22type\x22:\x22Pet\x22,\x22nickname\x22:\x22getPetById\x22,\x22parameters\x22:[{\x22name\x22:\x22petId\x22,\x22description\x22:\x22ID of pet that needs to be fetched\x22,\x22required\x22:true,\x22type\x22:\x22integer\x22,\x22format\x22:\x22int64\x22,\x22paramType\x22:\x22path\x22,\x22minimum\x22:\x221.0\x22,\x22maximum\x22:\x22100000.0\x22}],\x22responseMessages\x22:[{\x22code\x22:400,\x22message\x22:\x22Invalid ID supplied\x22},{\x22code\x22:404,\x22message\x22:\x22Pet not found\x22}]}]},{\x22path\x22:\x22/pet/findByStatus\x22,\x22operations\x22:[{\x22method\x22:\x22GET\x22,\x22summary\x22:\x22Finds Pets by status\x22,\x22notes\x22:\x22Multiple status values can be provided with comma seperated strings\x22,\x22type\x22:\x22array\x22,\x22items\x22:{\x22$ref\x22:\x22Pet\x22},\x22nickname\x22:\x22findPetsByStatus\x22,\x22parameters\x22:[{\x22name\x22:\x22status\x22,\x22description\x22:\x22Status values that need to be considered for filter\x22,\x22defaultValue\x22:\x22available\x22,\x22required\x22:true,\x22type\x22:\x22string\x22,\x22paramType\x22:\x22query\x22,\x22enum\x22:[\x22available\x22,\x22pending\x22,\x22sold\x22]}],\x22responseMessages\x22:[{\x22code\x22:400,\x22message\x22:\x22Invalid status value\x22}]}]},{\x22path\x22:\x22/pet/findByTags\x22,\x22operations\x22:[{\x22method\x22:\x22GET\x22,\x22summary\x22:\x22Finds Pets by tags\x22,\x22notes\x22:\x22Muliple tags can be provided with comma seperated strings. Use tag1, tag2, tag3 for testing.\x22,\x22type\x22:\x22array\x22,\x22items\x22:{\x22$ref\x22:\x22Pet\x22},\x22nickname\x22:\x22findPetsByTags\x22,\x22parameters\x22:[{\x22name\x22:\x22tags\x22,\x22description\x22:\x22Tags to filter by\x22,\x22required\x22:true,\x22type\x22:\x22string\x22,\x22paramType\x22:\x22query\x22}],\x22responseMessages\x22:[{\x22code\x22:400,\x22message\x22:\x22Invalid tag value\x22}],\x22deprecated\x22:\x22true\x22}]}],\x22models\x22:{\x22Tag\x22:{\x22id\x22:\x22Tag\x22,\x22properties\x22:{\x22id\x22:{\x22type\x22:\x22integer\x22,\x22format\x22:\x22int64\x22,\x22description\x22:\x22Unique identifier for the tag\x22},\x22name\x22:{\x22type\x22:\x22string\x22,\x22description\x22:\x22Friendly name for the tag\x22}}},\x22Pet\x22:{\x22id\x22:\x22Pet\x22,\x22required\x22:[\x22id\x22,\x22name\x22],\x22properties\x22:{\x22id\x22:{\x22type\x22:\x22integer\x22,\x22format\x22:\x22int64\x22,\x22description\x22:\x22Unique identifier for the Pet\x22,\x22minimum\x22:\x220.0\x22,\x22maximum\x22:\x22100.0\x22},\x22category\x22:{\x22$ref\x22:\x22Category\x22,\x22description\x22:\x22Category the pet is in\x22},\x22name\x22:{\x22type\x22:\x22string\x22,\x22description\x22:\x22Friendly name of the pet\x22},\x22photoUrls\x22:{\x22type\x22:\x22array\x22,\x22description\x22:\x22Image URLs\x22,\x22items\x22:{\x22type\x22:\x22string\x22}},\x22tags\x22:{\x22type\x22:\x22array\x22,\x22description\x22:\x22Tags assigned to this pet\x22,\x22items\x22:{\x22$ref\x22:\x22Tag\x22}},\x22status\x22:{\x22type\x22:\x22string\x22,\x22description\x22:\x22pet status in the store\x22,\x22enum\x22:[\x22available\x22,\x22pending\x22,\x22sold\x22]}}},\x22Category\x22:{\x22id\x22:\x22Category\x22,\x22properties\x22:{\x22id\x22:{\x22type\x22:\x22integer\x22,\x22format\x22:\x22int64\x22,\x22description\x22:\x22Category unique identifier\x22,\x22minimum\x22:\x220.0\x22,\x22maximum\x22:\x22100.0\x22},\x22name\x22:{\x22type\x22:\x22string\x22,\x22description\x22:\x22Name of the category\x22,\x22minimum\x22:\x220.0\x22,\x22maximum\x22:\x22100.0\x22}}}}}' )",
referencedClasses: ["JSON"],
//>>excludeEnd("ide");
messageSends: ["fromJson:", "parse:"]
}),
$globals.SwaggerSpecDefinition.klass);

$core.addMethod(
$core.method({
selector: "newDefault",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SwaggerSpecDefinition.klass.superclass.fn.prototype._newDefault.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($2)._name_("New API");
$recv($2)._apiVersion_("0.01");
$recv($2)._swaggerVersion_("1.1");
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newDefault",{},$globals.SwaggerSpecDefinition.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newDefault\x0a\x0a\x09^super newDefault\x0a\x09\x09name: 'New API';\x0a\x09    apiVersion: '0.01';\x0a\x09\x09swaggerVersion: '1.1';\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["name:", "newDefault", "apiVersion:", "swaggerVersion:", "yourself"]
}),
$globals.SwaggerSpecDefinition.klass);

$core.addMethod(
$core.method({
selector: "specificationDefinition",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
return "{\x0a  \x22type\x22: \x22object\x22,\x0a  \x22$schema\x22: \x22http://json-schema.org/draft-04/schema\x22,\x0a  \x22required\x22: [\x0a    \x22swaggerVersion\x22,\x0a    \x22resourcePath\x22,\x0a    \x22apis\x22,\x0a    \x22basePath\x22\x0a  ],\x0a  \x22properties\x22: {\x0a    \x22apiVersion\x22: {\x0a      \x22type\x22: \x22string\x22\x0a    },\x0a    \x22basePath\x22: {\x0a      \x22type\x22: \x22string\x22\x0a    },\x0a    \x22swaggerVersion\x22: {\x0a      \x22enum\x22: [\x0a        \x221.2\x22\x0a      ]\x0a    },\x0a    \x22consumes\x22: {\x0a      \x22type\x22: \x22array\x22,\x0a      \x22items\x22: {\x0a        \x22type\x22: \x22string\x22\x0a      }\x0a    },\x0a    \x22produces\x22: {\x0a      \x22type\x22: \x22array\x22,\x0a      \x22items\x22: {\x0a        \x22type\x22: \x22string\x22\x0a      }\x0a    },\x0a    \x22resourcePath\x22: {\x0a      \x22type\x22: \x22string\x22\x0a    },\x0a    \x22apis\x22: {\x0a      \x22type\x22: \x22array\x22,\x0a      \x22items\x22: [\x0a        {\x0a          \x22type\x22: \x22object\x22,\x0a          \x22required\x22: [\x0a            \x22path\x22,\x0a            \x22operations\x22\x0a          ],\x0a          \x22properties\x22: {\x0a            \x22path\x22: {\x0a              \x22type\x22: \x22string\x22\x0a            },\x0a            \x22operations\x22: {\x0a              \x22type\x22: \x22array\x22,\x0a              \x22items\x22: [\x0a                {\x0a                  \x22type\x22: \x22object\x22,\x0a                  \x22required\x22: [\x0a                    \x22method\x22,\x0a                    \x22nickname\x22,\x0a                    \x22summary\x22,\x0a                    \x22type\x22\x0a                  ],\x0a                  \x22properties\x22: {\x0a                    \x22authorizations\x22: {\x0a                      \x22type\x22: \x22array\x22,\x0a                      \x22items\x22: {\x0a                        \x22type\x22: \x22string\x22\x0a                      }\x0a                    },\x0a                    \x22method\x22: {\x0a                      \x22type\x22: \x22string\x22,\x0a                      \x22enum\x22: [\x0a                        \x22GET\x22,\x0a                        \x22PUT\x22,\x0a                        \x22POST\x22,\x0a                        \x22DELETE\x22,\x0a                        \x22OPTIONS\x22,\x0a                        \x22PATCH\x22\x0a                      ]\x0a                    },\x0a                    \x22nickname\x22: {\x0a                      \x22type\x22: \x22string\x22\x0a                    },\x0a                    \x22summary\x22: {\x0a                      \x22type\x22: \x22string\x22\x0a                    },\x0a                    \x22notes\x22: {\x0a                      \x22type\x22: \x22string\x22\x0a                    },\x0a                    \x22type\x22: {\x0a                      \x22type\x22: \x22string\x22\x0a                    },\x0a                    \x22parameters\x22: {\x0a                      \x22type\x22: \x22array\x22,\x0a                      \x22items\x22: {\x0a                        \x22type\x22: \x22object\x22,\x0a                        \x22required\x22: [\x0a                          \x22name\x22,\x0a                          \x22paramType\x22,\x0a                          \x22required\x22,\x0a                          \x22type\x22\x0a                        ],\x0a                        \x22properties\x22: {\x0a                          \x22allowMultiple\x22: {\x0a                            \x22type\x22: \x22boolean\x22,\x0a                            \x22enum\x22: [\x0a                              true,\x0a                              false\x0a                            ]\x0a                          },\x0a                          \x22description\x22: {\x0a                            \x22type\x22: \x22string\x22\x0a                          },\x0a                          \x22name\x22: {\x0a                            \x22type\x22: \x22string\x22\x0a                          },\x0a                          \x22paramType\x22: {\x0a                            \x22type\x22: \x22string\x22,\x0a                            \x22enum\x22: [\x0a                              \x22query\x22,\x0a                              \x22path\x22,\x0a                              \x22body\x22,\x0a                              \x22header\x22\x0a                            ]\x0a                          },\x0a                          \x22required\x22: {\x0a                            \x22type\x22: \x22boolean\x22,\x0a                            \x22enum\x22: [\x0a                              true,\x0a                              false\x0a                            ]\x0a                          },\x0a                          \x22type\x22: {\x0a                            \x22type\x22: \x22string\x22\x0a                          },\x0a                          \x22items\x22: {\x0a                            \x22anyOf\x22: [\x0a                              {\x0a                                \x22$ref\x22: \x22#\x22\x0a                              },\x0a                              {\x0a                                \x22$ref\x22: \x22#/definitions/schemaArray\x22\x0a                              }\x0a                            ],\x0a                            \x22default\x22: {}\x0a                          }\x0a                        }\x0a                      }\x0a                    },\x0a                    \x22produces\x22: {\x0a                      \x22type\x22: \x22array\x22,\x0a                      \x22items\x22: {\x0a                        \x22type\x22: \x22string\x22\x0a                      }\x0a                    },\x0a                    \x22responseMessages\x22: {\x0a                      \x22type\x22: \x22array\x22,\x0a                      \x22items\x22: {\x0a                        \x22type\x22: \x22object\x22,\x0a                        \x22properties\x22: {\x0a                          \x22code\x22: {\x0a                            \x22type\x22: \x22number\x22\x0a                          },\x0a                          \x22message\x22: {\x0a                            \x22type\x22: \x22string\x22\x0a                          }\x0a                        }\x0a                      }\x0a                    }\x0a                  }\x0a                }\x0a              ]\x0a            }\x0a          }\x0a        }\x0a      ]\x0a    },\x0a    \x22models\x22: {\x0a      \x0a    }\x0a  }\x0a}";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "specificationDefinition\x0a\x0a\x09^'{\x0a  \x22type\x22: \x22object\x22,\x0a  \x22$schema\x22: \x22http://json-schema.org/draft-04/schema\x22,\x0a  \x22required\x22: [\x0a    \x22swaggerVersion\x22,\x0a    \x22resourcePath\x22,\x0a    \x22apis\x22,\x0a    \x22basePath\x22\x0a  ],\x0a  \x22properties\x22: {\x0a    \x22apiVersion\x22: {\x0a      \x22type\x22: \x22string\x22\x0a    },\x0a    \x22basePath\x22: {\x0a      \x22type\x22: \x22string\x22\x0a    },\x0a    \x22swaggerVersion\x22: {\x0a      \x22enum\x22: [\x0a        \x221.2\x22\x0a      ]\x0a    },\x0a    \x22consumes\x22: {\x0a      \x22type\x22: \x22array\x22,\x0a      \x22items\x22: {\x0a        \x22type\x22: \x22string\x22\x0a      }\x0a    },\x0a    \x22produces\x22: {\x0a      \x22type\x22: \x22array\x22,\x0a      \x22items\x22: {\x0a        \x22type\x22: \x22string\x22\x0a      }\x0a    },\x0a    \x22resourcePath\x22: {\x0a      \x22type\x22: \x22string\x22\x0a    },\x0a    \x22apis\x22: {\x0a      \x22type\x22: \x22array\x22,\x0a      \x22items\x22: [\x0a        {\x0a          \x22type\x22: \x22object\x22,\x0a          \x22required\x22: [\x0a            \x22path\x22,\x0a            \x22operations\x22\x0a          ],\x0a          \x22properties\x22: {\x0a            \x22path\x22: {\x0a              \x22type\x22: \x22string\x22\x0a            },\x0a            \x22operations\x22: {\x0a              \x22type\x22: \x22array\x22,\x0a              \x22items\x22: [\x0a                {\x0a                  \x22type\x22: \x22object\x22,\x0a                  \x22required\x22: [\x0a                    \x22method\x22,\x0a                    \x22nickname\x22,\x0a                    \x22summary\x22,\x0a                    \x22type\x22\x0a                  ],\x0a                  \x22properties\x22: {\x0a                    \x22authorizations\x22: {\x0a                      \x22type\x22: \x22array\x22,\x0a                      \x22items\x22: {\x0a                        \x22type\x22: \x22string\x22\x0a                      }\x0a                    },\x0a                    \x22method\x22: {\x0a                      \x22type\x22: \x22string\x22,\x0a                      \x22enum\x22: [\x0a                        \x22GET\x22,\x0a                        \x22PUT\x22,\x0a                        \x22POST\x22,\x0a                        \x22DELETE\x22,\x0a                        \x22OPTIONS\x22,\x0a                        \x22PATCH\x22\x0a                      ]\x0a                    },\x0a                    \x22nickname\x22: {\x0a                      \x22type\x22: \x22string\x22\x0a                    },\x0a                    \x22summary\x22: {\x0a                      \x22type\x22: \x22string\x22\x0a                    },\x0a                    \x22notes\x22: {\x0a                      \x22type\x22: \x22string\x22\x0a                    },\x0a                    \x22type\x22: {\x0a                      \x22type\x22: \x22string\x22\x0a                    },\x0a                    \x22parameters\x22: {\x0a                      \x22type\x22: \x22array\x22,\x0a                      \x22items\x22: {\x0a                        \x22type\x22: \x22object\x22,\x0a                        \x22required\x22: [\x0a                          \x22name\x22,\x0a                          \x22paramType\x22,\x0a                          \x22required\x22,\x0a                          \x22type\x22\x0a                        ],\x0a                        \x22properties\x22: {\x0a                          \x22allowMultiple\x22: {\x0a                            \x22type\x22: \x22boolean\x22,\x0a                            \x22enum\x22: [\x0a                              true,\x0a                              false\x0a                            ]\x0a                          },\x0a                          \x22description\x22: {\x0a                            \x22type\x22: \x22string\x22\x0a                          },\x0a                          \x22name\x22: {\x0a                            \x22type\x22: \x22string\x22\x0a                          },\x0a                          \x22paramType\x22: {\x0a                            \x22type\x22: \x22string\x22,\x0a                            \x22enum\x22: [\x0a                              \x22query\x22,\x0a                              \x22path\x22,\x0a                              \x22body\x22,\x0a                              \x22header\x22\x0a                            ]\x0a                          },\x0a                          \x22required\x22: {\x0a                            \x22type\x22: \x22boolean\x22,\x0a                            \x22enum\x22: [\x0a                              true,\x0a                              false\x0a                            ]\x0a                          },\x0a                          \x22type\x22: {\x0a                            \x22type\x22: \x22string\x22\x0a                          },\x0a                          \x22items\x22: {\x0a                            \x22anyOf\x22: [\x0a                              {\x0a                                \x22$ref\x22: \x22#\x22\x0a                              },\x0a                              {\x0a                                \x22$ref\x22: \x22#/definitions/schemaArray\x22\x0a                              }\x0a                            ],\x0a                            \x22default\x22: {}\x0a                          }\x0a                        }\x0a                      }\x0a                    },\x0a                    \x22produces\x22: {\x0a                      \x22type\x22: \x22array\x22,\x0a                      \x22items\x22: {\x0a                        \x22type\x22: \x22string\x22\x0a                      }\x0a                    },\x0a                    \x22responseMessages\x22: {\x0a                      \x22type\x22: \x22array\x22,\x0a                      \x22items\x22: {\x0a                        \x22type\x22: \x22object\x22,\x0a                        \x22properties\x22: {\x0a                          \x22code\x22: {\x0a                            \x22type\x22: \x22number\x22\x0a                          },\x0a                          \x22message\x22: {\x0a                            \x22type\x22: \x22string\x22\x0a                          }\x0a                        }\x0a                      }\x0a                    }\x0a                  }\x0a                }\x0a              ]\x0a            }\x0a          }\x0a        }\x0a      ]\x0a    },\x0a    \x22models\x22: {\x0a      \x0a    }\x0a  }\x0a}'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SwaggerSpecDefinition.klass);


$core.addClass('SwaggerSpecModel', $globals.SwaggerAPISpecificationItem, [], 'Swagger-Support-Spec');
$core.addMethod(
$core.method({
selector: "id",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("id",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"id",{},$globals.SwaggerSpecModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id     \x0a  \x0a\x09^self data at: 'id'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecModel);

$core.addMethod(
$core.method({
selector: "id:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("id",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"id:",{anObject:anObject},$globals.SwaggerSpecModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "id: anObject   \x0a        \x0a\x09self data at: 'id' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecModel);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SwaggerSpecModel.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self._data();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["data"]=1;
//>>excludeEnd("ctx");
$2=$recv($Dictionary())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("properties",$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("required",$recv($Array())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SwaggerSpecModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09self data at: 'properties' put: Dictionary new.\x0a\x09self data at: 'required' put: Array new.",
referencedClasses: ["Dictionary", "Array"],
//>>excludeEnd("ide");
messageSends: ["initialize", "at:put:", "data", "new"]
}),
$globals.SwaggerSpecModel);

$core.addMethod(
$core.method({
selector: "initializeOnParsedJson:",
protocol: 'not yet classified',
fn: function (aJSObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._id_($recv(aJSObject)._id());
$1=$recv(aJSObject)._hasOwnProperty_("required");
if($core.assert($1)){
self._required_($recv(aJSObject)._required());
};
self._setProperties_($recv(aJSObject)._properties());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeOnParsedJson:",{aJSObject:aJSObject},$globals.SwaggerSpecModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "initializeOnParsedJson: aJSObject\x0a\x0a\x09self id: aJSObject id.\x0a\x09\x0a\x09(aJSObject hasOwnProperty: 'required')\x0a\x09\x09ifTrue:[ self required: aJSObject required].\x0a\x09\x0a\x09self setProperties: aJSObject properties.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "id", "ifTrue:", "hasOwnProperty:", "required:", "required", "setProperties:", "properties"]
}),
$globals.SwaggerSpecModel);

$core.addMethod(
$core.method({
selector: "properties",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("properties",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Array())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"properties",{},$globals.SwaggerSpecModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "properties     \x0a  \x0a\x09^self data at: 'properties'  ifAbsent:[Array new]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data", "new"]
}),
$globals.SwaggerSpecModel);

$core.addMethod(
$core.method({
selector: "properties:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("properties",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"properties:",{anObject:anObject},$globals.SwaggerSpecModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "properties: anObject   \x0a        \x0a\x09self data at: 'properties' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecModel);

$core.addMethod(
$core.method({
selector: "required",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("required",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Array())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"required",{},$globals.SwaggerSpecModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "required     \x0a  \x0a\x09^self data at: 'required'  ifAbsent:[Array new]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data", "new"]
}),
$globals.SwaggerSpecModel);

$core.addMethod(
$core.method({
selector: "required:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("required",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"required:",{anObject:anObject},$globals.SwaggerSpecModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "required: anObject   \x0a        \x0a\x09self data at: 'required' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecModel);

$core.addMethod(
$core.method({
selector: "setProperties:",
protocol: 'not yet classified',
fn: function (anArray){
"use strict";

var self=this;
function $SwaggerSpecModelProperty(){return $globals.SwaggerSpecModelProperty||(typeof SwaggerSpecModelProperty=="undefined"?nil:SwaggerSpecModelProperty)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anArray)._addAsSwaggerClass_toDict_($SwaggerSpecModelProperty(),self._properties());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setProperties:",{anArray:anArray},$globals.SwaggerSpecModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "setProperties: anArray\x0a    \x0a\x09anArray addAsSwaggerClass: SwaggerSpecModelProperty toDict: self properties",
referencedClasses: ["SwaggerSpecModelProperty"],
//>>excludeEnd("ide");
messageSends: ["addAsSwaggerClass:toDict:", "properties"]
}),
$globals.SwaggerSpecModel);



$core.addClass('SwaggerSpecModelProperty', $globals.SwaggerAPISpecificationItem, [], 'Swagger-Support-Spec');
$core.addMethod(
$core.method({
selector: "description",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("description",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"description",{},$globals.SwaggerSpecModelProperty)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "description\x0a\x0a\x09^self data at: 'description'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecModelProperty);

$core.addMethod(
$core.method({
selector: "description:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("description",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"description:",{anObject:anObject},$globals.SwaggerSpecModelProperty)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "description: anObject   \x0a        \x0a\x09self data at: 'description' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecModelProperty);

$core.addMethod(
$core.method({
selector: "enum",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("enum",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"enum",{},$globals.SwaggerSpecModelProperty)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "enum     \x0a  \x0a\x09^self data at: 'enum'   ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecModelProperty);

$core.addMethod(
$core.method({
selector: "enum:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("enum",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"enum:",{anObject:anObject},$globals.SwaggerSpecModelProperty)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "enum: anObject   \x0a        \x0a\x09self data at: 'enum' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecModelProperty);

$core.addMethod(
$core.method({
selector: "format",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("format",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"format",{},$globals.SwaggerSpecModelProperty)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "format\x0a\x0a\x09^self data at: 'format'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecModelProperty);

$core.addMethod(
$core.method({
selector: "format:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("format",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"format:",{anObject:anObject},$globals.SwaggerSpecModelProperty)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "format: anObject   \x0a        \x0a\x09self data at: 'format' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecModelProperty);

$core.addMethod(
$core.method({
selector: "initializeOnParsedJson:",
protocol: 'not yet classified',
fn: function (aJSObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=$recv(aJSObject)._hasOwnProperty_("description");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasOwnProperty:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
self._description_($recv(aJSObject)._description());
};
$2=$recv(aJSObject)._hasOwnProperty_("enum");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasOwnProperty:"]=2;
//>>excludeEnd("ctx");
if($core.assert($2)){
self._enum_($recv(aJSObject)._enum());
};
$3=$recv(aJSObject)._hasOwnProperty_("format");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasOwnProperty:"]=3;
//>>excludeEnd("ctx");
if($core.assert($3)){
self._format_($recv(aJSObject)._format());
};
$4=$recv(aJSObject)._hasOwnProperty_("ref");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasOwnProperty:"]=4;
//>>excludeEnd("ctx");
if($core.assert($4)){
self._ref_($recv(aJSObject)._ref());
};
$5=$recv(aJSObject)._hasOwnProperty_("type");
if($core.assert($5)){
self._type_($recv(aJSObject)._type());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeOnParsedJson:",{aJSObject:aJSObject},$globals.SwaggerSpecModelProperty)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "initializeOnParsedJson: aJSObject\x0a\x0a\x09(aJSObject hasOwnProperty: 'description')\x0a\x09\x09ifTrue:[ self description: aJSObject description].\x0a\x09\x0a\x09(aJSObject hasOwnProperty: 'enum')\x0a\x09\x09ifTrue:[ self enum: aJSObject enum ].\x0a\x09\x09\x0a\x09\x09(aJSObject hasOwnProperty: 'format')\x0a\x09\x09ifTrue:[ self format: aJSObject format ].\x0a\x09\x0a\x09(aJSObject hasOwnProperty: 'ref')\x0a\x09\x09ifTrue:[ self ref: aJSObject ref].\x0a\x09\x09\x0a\x09(aJSObject hasOwnProperty: 'type')\x0a\x09\x09ifTrue:[ self type: aJSObject type ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "hasOwnProperty:", "description:", "description", "enum:", "enum", "format:", "format", "ref:", "ref", "type:", "type"]
}),
$globals.SwaggerSpecModelProperty);

$core.addMethod(
$core.method({
selector: "ref",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("ref",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ref",{},$globals.SwaggerSpecModelProperty)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ref     \x0a  \x0a\x09^self data at: 'ref'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecModelProperty);

$core.addMethod(
$core.method({
selector: "ref:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("ref",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ref:",{anObject:anObject},$globals.SwaggerSpecModelProperty)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "ref: anObject   \x0a        \x0a\x09self data at: 'ref' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecModelProperty);

$core.addMethod(
$core.method({
selector: "type",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("type",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"type",{},$globals.SwaggerSpecModelProperty)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type \x0a\x0a\x09^self data  at: 'type'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecModelProperty);

$core.addMethod(
$core.method({
selector: "type:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("type",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"type:",{anObject:anObject},$globals.SwaggerSpecModelProperty)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "type: anObject   \x0a        \x0a\x09self data at: 'type' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecModelProperty);



$core.addClass('SwaggerSpecOperation', $globals.SwaggerAPISpecificationItem, [], 'Swagger-Support-Spec');
$core.addMethod(
$core.method({
selector: "authorizations",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("authorizations",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"authorizations",{},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "authorizations \x0a\x0a\x09^self data at: 'authorizations'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "authorizations:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("authorizations",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"authorizations:",{anObject:anObject},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "authorizations: anObject   \x0a        \x0a\x09self data at: 'authorizations' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "deprecated",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("deprecated",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deprecated",{},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deprecated    \x0a\x0a\x09^self data at: 'deprecated'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "deprecated:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("deprecated",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deprecated:",{anObject:anObject},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "deprecated: anObject   \x0a        \x0a\x09self data at: 'deprecated' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SwaggerSpecOperation.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self._data();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["data"]=1;
//>>excludeEnd("ctx");
$2=$recv($Array())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("parameters",$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("responseMessages",$recv($Array())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09self data at: 'parameters' put: Array new.\x0a\x09self data at: 'responseMessages' put: Array new.",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["initialize", "at:put:", "data", "new"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "initializeOnParsedJson:",
protocol: 'not yet classified',
fn: function (aJSObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=$recv(aJSObject)._hasOwnProperty_("authorizations");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasOwnProperty:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
self._authorizations_($recv(aJSObject)._authorizations());
};
$2=$recv(aJSObject)._hasOwnProperty_("deprecated");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasOwnProperty:"]=2;
//>>excludeEnd("ctx");
if($core.assert($2)){
self._deprecated_($recv(aJSObject)._deprecated());
};
self._method_($recv(aJSObject)._method());
self._nickname_($recv(aJSObject)._nickname());
$3=$recv(aJSObject)._hasOwnProperty_("notes");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasOwnProperty:"]=3;
//>>excludeEnd("ctx");
if($core.assert($3)){
self._notes_($recv(aJSObject)._notes());
};
$4=$recv(aJSObject)._hasOwnProperty_("produces");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasOwnProperty:"]=4;
//>>excludeEnd("ctx");
if($core.assert($4)){
self._produces_($recv(aJSObject)._produces());
};
$5=$recv(aJSObject)._hasOwnProperty_("responseClass");
if($core.assert($5)){
self._responseClass_($recv(aJSObject)._responseClass());
};
self._summary_($recv(aJSObject)._summary());
self._setParameters_($recv(aJSObject)._parameters());
self._setResponseMessages_($recv(aJSObject)._responseMessages());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeOnParsedJson:",{aJSObject:aJSObject},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "initializeOnParsedJson: aJSObject\x0a\x0a\x09(aJSObject hasOwnProperty: 'authorizations')\x0a\x09\x09ifTrue:[ self authorizations: aJSObject authorizations ].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09(aJSObject hasOwnProperty: 'deprecated')\x0a\x09\x09ifTrue:[ self deprecated: aJSObject deprecated ].\x0a\x09\x09\x0a\x09self method: aJSObject method.\x0a\x09self nickname: aJSObject nickname.\x0a\x09\x0a\x09(aJSObject hasOwnProperty: 'notes')\x0a\x09\x09ifTrue:[ self notes: aJSObject notes].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09(aJSObject hasOwnProperty: 'produces')\x0a\x09\x09ifTrue:[ self produces: aJSObject produces ].\x0a\x09\x09\x0a\x09(aJSObject hasOwnProperty: 'responseClass')\x0a\x09\x09ifTrue:[ self responseClass: aJSObject responseClass ].\x0a\x09\x09\x0a\x09self summary: aJSObject summary.\x0a\x09\x0a\x09self setParameters: aJSObject parameters.\x0a\x09self setResponseMessages: aJSObject responseMessages.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "hasOwnProperty:", "authorizations:", "authorizations", "deprecated:", "deprecated", "method:", "method", "nickname:", "nickname", "notes:", "notes", "produces:", "produces", "responseClass:", "responseClass", "summary:", "summary", "setParameters:", "parameters", "setResponseMessages:", "responseMessages"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "method",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("method",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"method",{},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method \x0a\x0a\x09^self data at: 'method'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "method:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("method",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"method:",{anObject:anObject},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "method: anObject   \x0a        \x0a\x09self data at: 'method' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "nickname",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("nickname",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nickname",{},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nickname \x0a\x0a\x09^self data at: 'nickname'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "nickname:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("nickname",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nickname:",{anObject:anObject},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "nickname: anObject   \x0a        \x0a\x09self data at: 'nickname' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "notes",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("notes",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"notes",{},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "notes\x0a\x0a\x09^self data at: 'notes'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "notes:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("notes",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"notes:",{anObject:anObject},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "notes: anObject   \x0a        \x0a\x09self data at: 'notes' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "parameters",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("parameters",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Array())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parameters",{},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parameters \x0a\x0a\x09^self data at: 'parameters'  ifAbsent:[Array new]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data", "new"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "parameters:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("parameters",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parameters:",{anObject:anObject},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "parameters: anObject   \x0a        \x0a\x09self data at: 'parameters' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "produces",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("produces",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"produces",{},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "produces \x0a\x0a\x09^self data at: 'produces'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "produces:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("produces",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"produces:",{anObject:anObject},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "produces: anObject   \x0a        \x0a\x09self data at: 'produces' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "responseClass",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("responseClass",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"responseClass",{},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "responseClass \x0a\x0a\x09^self data at: 'responseClass'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "responseClass:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("responseClass",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"responseClass:",{anObject:anObject},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "responseClass: anObject   \x0a        \x0a\x09self data at: 'responseClass' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "responseMessages",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("responseMessages",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Array())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"responseMessages",{},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "responseMessages\x0a\x0a\x09^self data at: 'responseMessages'  ifAbsent:[Array new]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data", "new"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "responseMessages:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("responseMessages",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"responseMessages:",{anObject:anObject},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "responseMessages: anObject   \x0a        \x0a\x09self data at: 'responseMessages' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "setParameters:",
protocol: 'not yet classified',
fn: function (anArray){
"use strict";

var self=this;
function $SwaggerSpecOperationParam(){return $globals.SwaggerSpecOperationParam||(typeof SwaggerSpecOperationParam=="undefined"?nil:SwaggerSpecOperationParam)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anArray)._addAsSwaggerClass_toArray_($SwaggerSpecOperationParam(),self._parameters());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setParameters:",{anArray:anArray},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "setParameters: anArray\x0a\x0a\x09anArray addAsSwaggerClass: SwaggerSpecOperationParam toArray: self parameters",
referencedClasses: ["SwaggerSpecOperationParam"],
//>>excludeEnd("ide");
messageSends: ["addAsSwaggerClass:toArray:", "parameters"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "setResponseMessages:",
protocol: 'not yet classified',
fn: function (anArray){
"use strict";

var self=this;
function $SwaggerSpecOperationResponseMessage(){return $globals.SwaggerSpecOperationResponseMessage||(typeof SwaggerSpecOperationResponseMessage=="undefined"?nil:SwaggerSpecOperationResponseMessage)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anArray)._addAsSwaggerClass_toArray_($SwaggerSpecOperationResponseMessage(),self._responseMessages());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setResponseMessages:",{anArray:anArray},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "setResponseMessages: anArray\x0a\x0a\x09anArray addAsSwaggerClass: SwaggerSpecOperationResponseMessage toArray: self responseMessages",
referencedClasses: ["SwaggerSpecOperationResponseMessage"],
//>>excludeEnd("ide");
messageSends: ["addAsSwaggerClass:toArray:", "responseMessages"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "summary",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("summary",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"summary",{},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "summary \x0a\x0a\x09^self data at: 'summary'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "summary:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("summary",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"summary:",{anObject:anObject},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "summary: anObject   \x0a        \x0a\x09self data at: 'summary' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "type",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("type",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"type",{},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type    \x0a\x0a\x09^self data at: 'type'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperation);

$core.addMethod(
$core.method({
selector: "type:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("type",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"type:",{anObject:anObject},$globals.SwaggerSpecOperation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "type: anObject   \x0a        \x0a\x09self data at: 'type' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperation);



$core.addClass('SwaggerSpecOperationParam', $globals.SwaggerAPISpecificationItem, [], 'Swagger-Support-Spec');
$core.addMethod(
$core.method({
selector: "allowMultiple",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("allowMultiple",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allowMultiple",{},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allowMultiple \x0a\x0a\x09^self data at: 'allowMultiple' ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "allowMultiple:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("allowMultiple",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allowMultiple:",{anObject:anObject},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "allowMultiple: anObject   \x0a        \x0a\x09self data at: 'allowMultiple' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "allowableValues",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("allowableValues",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allowableValues",{},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allowableValues      \x0a\x0a\x09^self data at: 'allowableValues' ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "allowableValues:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("allowableValues",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allowableValues:",{anObject:anObject},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "allowableValues: anObject   \x0a        \x0a\x09self data at: 'allowableValues' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "dataType",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("dataType",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataType",{},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataType \x0a\x0a\x09^self data at: 'dataType' ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "dataType:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("dataType",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataType:",{anObject:anObject},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "dataType: anObject   \x0a        \x0a\x09self data at: 'dataType' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "defaultValue",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("defaultValue",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultValue",{},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultValue \x0a\x0a\x09^self data at: 'defaultValue' ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "defaultValue:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("defaultValue",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultValue:",{anObject:anObject},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "defaultValue: anObject   \x0a        \x0a\x09self data at: 'defaultValue' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "description",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("description",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"description",{},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "description\x0a\x0a\x09^self data at: 'description'  ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "description:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("description",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"description:",{anObject:anObject},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "description: anObject   \x0a        \x0a\x09self data at: 'description' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SwaggerSpecOperationParam.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self._data())._at_put_("items",$recv($Array())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09self data at: 'items' put: Array new.",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["initialize", "at:put:", "data", "new"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "initializeOnParsedJson:",
protocol: 'not yet classified',
fn: function (aJSObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11;
self._description_($recv(aJSObject)._description());
$1=$recv(aJSObject)._hasOwnProperty_("allowMultiple");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasOwnProperty:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
self._allowMultiple_($recv(aJSObject)._allowMultiple());
};
$2=$recv(aJSObject)._hasOwnProperty_("allowableValues");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasOwnProperty:"]=2;
//>>excludeEnd("ctx");
if($core.assert($2)){
self._allowableValues_($recv(aJSObject)._allowableValues());
};
$3=$recv(aJSObject)._hasOwnProperty_("dataType");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasOwnProperty:"]=3;
//>>excludeEnd("ctx");
if($core.assert($3)){
self._dataType_($recv(aJSObject)._dataType());
};
$4=$recv(aJSObject)._hasOwnProperty_("defaultValue");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasOwnProperty:"]=4;
//>>excludeEnd("ctx");
if($core.assert($4)){
self._defaultValue_($recv(aJSObject)._defaultValue());
};
$5=$recv(aJSObject)._hasOwnProperty_("name");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasOwnProperty:"]=5;
//>>excludeEnd("ctx");
if($core.assert($5)){
self._name_($recv(aJSObject)._name());
};
$6=$recv(aJSObject)._hasOwnProperty_("paramType");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasOwnProperty:"]=6;
//>>excludeEnd("ctx");
if($core.assert($6)){
self._paramType_($recv(aJSObject)._paramType());
};
$7=$recv(aJSObject)._hasOwnProperty_("required");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasOwnProperty:"]=7;
//>>excludeEnd("ctx");
if($core.assert($7)){
self._required_($recv(aJSObject)._required());
};
$8=$recv(aJSObject)._hasOwnProperty_("type");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasOwnProperty:"]=8;
//>>excludeEnd("ctx");
if($core.assert($8)){
self._type_($recv(aJSObject)._type());
};
$9=$recv(aJSObject)._hasOwnProperty_("minimum");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasOwnProperty:"]=9;
//>>excludeEnd("ctx");
if($core.assert($9)){
self._minimum_($recv(aJSObject)._minimum());
};
$10=$recv(aJSObject)._hasOwnProperty_("maximum");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasOwnProperty:"]=10;
//>>excludeEnd("ctx");
if($core.assert($10)){
self._maximum_($recv(aJSObject)._maximum());
};
$11=$recv(aJSObject)._hasOwnProperty_("items");
if($core.assert($11)){
self._setItems_($recv(aJSObject)._items());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeOnParsedJson:",{aJSObject:aJSObject},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "initializeOnParsedJson: aJSObject\x0a\x0a\x09self description: aJSObject description.\x0a\x0a\x09(aJSObject hasOwnProperty: 'allowMultiple')\x0a\x09\x09ifTrue:[ self allowMultiple: aJSObject allowMultiple ].\x0a\x09\x0a(aJSObject hasOwnProperty: 'allowableValues')\x0a\x09\x09ifTrue:[ self allowableValues: aJSObject allowableValues ].\x0a\x09\x0a  (aJSObject hasOwnProperty: 'dataType')\x0a\x09\x09ifTrue:[  self dataType: aJSObject dataType].\x0a\x09\x0a(aJSObject hasOwnProperty: 'defaultValue')\x0a\x09\x09ifTrue:[ self defaultValue: aJSObject defaultValue ].\x0a\x09\x0a(aJSObject hasOwnProperty: 'name')\x0a\x09\x09ifTrue:[ self name: aJSObject name ].\x0a\x09\x0a(aJSObject hasOwnProperty: 'paramType')\x0a\x09\x09ifTrue:[ self paramType: aJSObject paramType ].\x0a\x09\x0a(aJSObject hasOwnProperty: 'required')\x0a\x09\x09ifTrue:[ self required: aJSObject required ].\x0a\x09\x0a(aJSObject hasOwnProperty: 'type')\x0a\x09\x09ifTrue:[ self type: aJSObject type ].\x0a\x09\x09\x0a (aJSObject hasOwnProperty: 'minimum')\x0a\x09\x09ifTrue:[ self minimum: aJSObject minimum ].\x0a\x09\x09\x0a (aJSObject hasOwnProperty: 'maximum')\x0a\x09\x09ifTrue:[ self maximum: aJSObject maximum ].\x0a\x09\x0a\x09(aJSObject hasOwnProperty: 'items')\x0a\x09\x09ifTrue:[ self setItems: aJSObject items].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["description:", "description", "ifTrue:", "hasOwnProperty:", "allowMultiple:", "allowMultiple", "allowableValues:", "allowableValues", "dataType:", "dataType", "defaultValue:", "defaultValue", "name:", "name", "paramType:", "paramType", "required:", "required", "type:", "type", "minimum:", "minimum", "maximum:", "maximum", "setItems:", "items"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "items",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("items",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Array())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"items",{},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "items \x0a\x0a\x09^self data at: 'items' ifAbsent:[Array new]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data", "new"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "items:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("items",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"items:",{anObject:anObject},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "items: anObject   \x0a        \x0a\x09self data at: 'items' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "maximum",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("maximum",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"maximum",{},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "maximum \x0a\x0a\x09^self data at: 'maximum' ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "maximum:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("maximum",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"maximum:",{anObject:anObject},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "maximum: anObject   \x0a        \x0a\x09self data at: 'maximum' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "minimum",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("minimum",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"minimum",{},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "minimum \x0a\x0a\x09^self data at: 'minimum' ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "minimum:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("minimum",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"minimum:",{anObject:anObject},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "minimum: anObject   \x0a        \x0a\x09self data at: 'minimum' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "name",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("name",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name",{},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name \x0a\x09^self data at: 'name' ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "name:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("name",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name:",{anObject:anObject},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "name: anObject   \x0a        \x0a\x09self data at: 'name' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "paramType",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("paramType",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"paramType",{},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "paramType\x0a\x0a\x09^self data at: 'paramType' ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "paramType:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("paramType",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"paramType:",{anObject:anObject},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "paramType: anObject   \x0a        \x0a\x09self data at: 'paramType' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "required",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("required",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"required",{},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "required \x0a\x0a\x09^self data at: 'required' ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "required:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("required",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"required:",{anObject:anObject},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "required: anObject   \x0a        \x0a\x09self data at: 'required' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "setItems:",
protocol: 'not yet classified',
fn: function (anArray){
"use strict";

var self=this;
function $SwaggerSpecOperationParamItems(){return $globals.SwaggerSpecOperationParamItems||(typeof SwaggerSpecOperationParamItems=="undefined"?nil:SwaggerSpecOperationParamItems)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anArray)._addAsSwaggerClass_toArray_($SwaggerSpecOperationParamItems(),self._items());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setItems:",{anArray:anArray},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "setItems: anArray\x0a\x0a\x09anArray addAsSwaggerClass: SwaggerSpecOperationParamItems toArray: self items",
referencedClasses: ["SwaggerSpecOperationParamItems"],
//>>excludeEnd("ide");
messageSends: ["addAsSwaggerClass:toArray:", "items"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "type",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("type",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"type",{},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type      \x0a\x0a\x09^self data at: 'type' ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperationParam);

$core.addMethod(
$core.method({
selector: "type:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("type",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"type:",{anObject:anObject},$globals.SwaggerSpecOperationParam)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "type: anObject   \x0a        \x0a\x09self data at: 'type' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperationParam);



$core.addClass('SwaggerSpecOperationParamItems', $globals.SwaggerAPISpecificationItem, [], 'Swagger-Support-Spec');
$core.addMethod(
$core.method({
selector: "anyOf",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("anyOf",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"anyOf",{},$globals.SwaggerSpecOperationParamItems)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "anyOf \x0a\x0a\x09^self data at: 'anyOf' ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperationParamItems);

$core.addMethod(
$core.method({
selector: "anyOf:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("anyOf",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"anyOf:",{anObject:anObject},$globals.SwaggerSpecOperationParamItems)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "anyOf: anObject   \x0a        \x0a\x09self data at: 'anyOf' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperationParamItems);

$core.addMethod(
$core.method({
selector: "default",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("default",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"default",{},$globals.SwaggerSpecOperationParamItems)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "default \x0a\x0a\x09^self data at: 'default' ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperationParamItems);

$core.addMethod(
$core.method({
selector: "default:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("default",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"default:",{anObject:anObject},$globals.SwaggerSpecOperationParamItems)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "default: anObject   \x0a        \x0a\x09self data at: 'default' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperationParamItems);

$core.addMethod(
$core.method({
selector: "initializeOnParsedJson:",
protocol: 'not yet classified',
fn: function (aJSObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._anyOf_($recv(aJSObject)._anyOf());
self._default_($recv(aJSObject)._default());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeOnParsedJson:",{aJSObject:aJSObject},$globals.SwaggerSpecOperationParamItems)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "initializeOnParsedJson: aJSObject\x0a\x0a\x09self anyOf: aJSObject anyOf.\x0a\x09self default: aJSObject default.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["anyOf:", "anyOf", "default:", "default"]
}),
$globals.SwaggerSpecOperationParamItems);



$core.addClass('SwaggerSpecOperationResponseMessage', $globals.SwaggerAPISpecificationItem, [], 'Swagger-Support-Spec');
$core.addMethod(
$core.method({
selector: "code",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("code",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"code",{},$globals.SwaggerSpecOperationResponseMessage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "code \x0a\x0a\x09^self data at: 'code' ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperationResponseMessage);

$core.addMethod(
$core.method({
selector: "code:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("code",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"code:",{anObject:anObject},$globals.SwaggerSpecOperationResponseMessage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "code: anObject   \x0a        \x0a\x09self data at: 'code' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperationResponseMessage);

$core.addMethod(
$core.method({
selector: "initializeOnParsedJson:",
protocol: 'not yet classified',
fn: function (aJSObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._code_($recv(aJSObject)._code());
self._message_($recv(aJSObject)._message());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeOnParsedJson:",{aJSObject:aJSObject},$globals.SwaggerSpecOperationResponseMessage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "initializeOnParsedJson: aJSObject\x0a\x0a\x09self code: aJSObject code.\x0a\x09self message: aJSObject message.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["code:", "code", "message:", "message"]
}),
$globals.SwaggerSpecOperationResponseMessage);

$core.addMethod(
$core.method({
selector: "message",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_("message",(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"message",{},$globals.SwaggerSpecOperationResponseMessage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "message \x0a\x0a\x09^self data at: 'message' ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data"]
}),
$globals.SwaggerSpecOperationResponseMessage);

$core.addMethod(
$core.method({
selector: "message:",
protocol: 'not yet classified',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("message",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"message:",{anObject:anObject},$globals.SwaggerSpecOperationResponseMessage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "message: anObject   \x0a        \x0a\x09self data at: 'message' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.SwaggerSpecOperationResponseMessage);


$core.addMethod(
$core.method({
selector: "addAsSwaggerClass:toArray:",
protocol: '*Swagger-Support-Spec',
fn: function (aClass,anArray){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(anArray)._add_($recv(aClass)._onParsedJson_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addAsSwaggerClass:toArray:",{aClass:aClass,anArray:anArray},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "anArray"],
source: "addAsSwaggerClass: aClass toArray: anArray\x0a\x0a\x09self do:[:each | anArray add: ( aClass onParsedJson: each ) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "add:", "onParsedJson:"]
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "addAsSwaggerClass:toDict:",
protocol: '*Swagger-Support-Spec',
fn: function (aClass,aDict){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aDict)._at_put_(each,$recv(aClass)._onParsedJson_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addAsSwaggerClass:toDict:",{aClass:aClass,aDict:aDict},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aDict"],
source: "addAsSwaggerClass: aClass toDict: aDict\x0a\x0a\x09self do:[:each | aDict at: each put: ( aClass onParsedJson: each ) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "at:put:", "onParsedJson:"]
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "addAsSwaggerClass:toArray:",
protocol: '*Swagger-Support-Spec',
fn: function (aClass,anArray){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._objectKeys())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(anArray)._add_($recv(aClass)._onParsedJson_(self._at_(each)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addAsSwaggerClass:toArray:",{aClass:aClass,anArray:anArray},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "anArray"],
source: "addAsSwaggerClass: aClass toArray: anArray\x0a\x0a\x09self objectKeys do:[:each | anArray add: ( aClass onParsedJson: ( self at: each ) ) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "objectKeys", "add:", "onParsedJson:", "at:"]
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "addAsSwaggerClass:toDict:",
protocol: '*Swagger-Support-Spec',
fn: function (aClass,aDict){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._objectKeys())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aDict)._at_put_(each,$recv(aClass)._onParsedJson_(self._at_(each)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addAsSwaggerClass:toDict:",{aClass:aClass,aDict:aDict},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aDict"],
source: "addAsSwaggerClass: aClass toDict: aDict\x0a\x0a\x09self objectKeys do:[:each | aDict at: each put: ( aClass onParsedJson: ( self at: each ) ) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "objectKeys", "at:put:", "onParsedJson:", "at:"]
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "objectKeys",
protocol: '*Swagger-Support-Spec',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Object.keys( self['@jsObject'] );;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"objectKeys",{},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "objectKeys\x0a\x0a\x09<return Object.keys( self['@jsObject'] );>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

});

define("amber-amberswaggerjs/Swagger-PetStore-Client", ["amber/boot", "amber_core/Kernel-Objects", "amber-amberswaggerjs/Swagger-Support-Spec"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Swagger-PetStore-Client');
$core.packages["Swagger-PetStore-Client"].innerEval = function (expr) { return eval(expr); };
$core.packages["Swagger-PetStore-Client"].transport = {"type":"amd","amdNamespace":"amber-amberswaggerjs"};

$core.addClass('Category', $globals.Object, ['name', 'id'], 'Swagger-PetStore-Client');


$core.addClass('Order', $globals.Object, ['shipDate', 'status', 'name', 'quantity', 'id', 'petId'], 'Swagger-PetStore-Client');


$core.addClass('Pet', $globals.Object, ['status', 'tags', 'photoUrls', 'name', 'category', 'id', 'status'], 'Swagger-PetStore-Client');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@photoUrls"]=$recv($OrderedCollection())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@tags"]=$recv($OrderedCollection())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Pet)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09photoUrls := OrderedCollection new.\x0a\x09tags := OrderedCollection new.",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.Pet);



$core.addClass('PetStoreApiRequestContext', $globals.Object, ['petId', 'name', 'status'], 'Swagger-PetStore-Client');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@petId"]=(0);
self["@name"]=$recv($String())._new();
self["@status"]="";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.PetStoreApiRequestContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09petId  := 0.\x0a\x09name  := String new.\x0a\x09status := ''",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.PetStoreApiRequestContext);



$core.addClass('SwaggerPetStoreApi', $globals.SwaggerApi, [], 'Swagger-PetStore-Client');

$core.addMethod(
$core.method({
selector: "apiDocUrl",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
return "http://petstore.swagger.io/api/api-docs";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "apiDocUrl\x0a\x0a\x09^'http://petstore.swagger.io/api/api-docs'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SwaggerPetStoreApi.klass);


$core.addClass('Tag', $globals.Object, ['name', 'id'], 'Swagger-PetStore-Client');


$core.addClass('User', $globals.Object, ['id', 'firstName', 'username', 'lastName', 'email', 'password', 'phone', 'userStatus'], 'Swagger-PetStore-Client');

});
